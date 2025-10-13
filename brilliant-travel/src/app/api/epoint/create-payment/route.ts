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

    const data = Buffer.from(json_string).toString("base64");

    const sha1Hash = crypto
      .createHash("sha1")
      .update(private_key + data + private_key)
      .digest();
    const signature = Buffer.from(sha1Hash).toString("base64");

    // ✅ Corrected request
    const formBody = new URLSearchParams();
    formBody.append("data", data);
    formBody.append("signature", signature);

    const res = await fetch("https://epoint.az/api/1/request", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody.toString(),
    });

    const text = await res.text(); // first read raw text
    try {
      const epointData = JSON.parse(text);
      if (epointData.status === "success") {
        return NextResponse.json({ redirect_url: epointData.redirect_url });
      } else {
        console.error("Epoint error:", epointData);
        return NextResponse.json(
          { error: "Failed to initiate payment" },
          { status: 500 }
        );
      }
    } catch {
      console.error("Invalid JSON from Epoint:", text);
      return NextResponse.json(
        { error: "Epoint returned invalid JSON" },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
