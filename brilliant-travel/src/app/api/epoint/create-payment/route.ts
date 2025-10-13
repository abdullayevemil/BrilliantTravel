import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, order_id } = body;

    const public_key = process.env.NEXT_PUBLIC_EPOINT_PUBLIC_KEY!;
    const private_key = process.env.EPOINT_PRIVATE_KEY!;
    const success_url = process.env.NEXT_PUBLIC_EPOINT_SUCCESS_URL!;
    const error_url = process.env.NEXT_PUBLIC_EPOINT_ERROR_URL!;
    const result_url = process.env.NEXT_PUBLIC_EPOINT_RESULT_URL!;

    // Step 1 — prepare the JSON payload for base64 encoding
    const json_string = JSON.stringify({
      public_key,
      amount,
      currency: "AZN",
      language: "en",
      order_id,
      description: `Payment for order ${order_id}`,
      success_redirect_url: success_url,
      error_redirect_url: error_url,
      result_url,
    });

    // Step 2 — encode to base64
    const data = Buffer.from(json_string).toString("base64");

    // Step 3 — sign with private key (SHA1)
    const sha1Hash = crypto
      .createHash("sha1")
      .update(private_key + data + private_key)
      .digest();
    const signature = Buffer.from(sha1Hash).toString("base64");

    // Step 4 — send as x-www-form-urlencoded (like http_build_query)
    const formBody = new URLSearchParams({ data, signature }).toString();

    const res = await fetch("https://epoint.az/api/1/request", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody,
    });

    const text = await res.text();
    console.log("Epoint raw response:", text);

    let epointData;
    try {
      epointData = JSON.parse(text);
    } catch {
      throw new Error("Epoint returned non-JSON response: " + text.slice(0, 200));
    }

    if (epointData.status === "success") {
      return NextResponse.json({ redirect_url: epointData.redirect_url });
    } else {
      return NextResponse.json(
        { error: epointData.message || "Failed to initiate payment" },
        { status: 500 }
      );
    }
  } catch (err: any) {
    console.error("Payment error:", err);
    return NextResponse.json(
      { error: "Server error: " + err.message },
      { status: 500 }
    );
  }
}
