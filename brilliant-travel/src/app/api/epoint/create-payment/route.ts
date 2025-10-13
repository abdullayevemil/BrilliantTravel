import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

interface EpointResponse {
  status: "success" | "error";
  redirect_url?: string;
  transaction?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, order_id } = body as { amount: number; order_id: string };

    const public_key = process.env.NEXT_PUBLIC_EPOINT_PUBLIC_KEY!;
    const private_key = process.env.EPOINT_PRIVATE_KEY!;
    const success_url = process.env.NEXT_PUBLIC_EPOINT_SUCCESS_URL!;
    const error_url = process.env.NEXT_PUBLIC_EPOINT_ERROR_URL!;
    const result_url = process.env.NEXT_PUBLIC_EPOINT_RESULT_URL!;

    // Step 1 — prepare JSON payload
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

    // Step 3 — sign with SHA1(private_key + data + private_key)
    const sha1Hash = crypto
      .createHash("sha1")
      .update(private_key + data + private_key)
      .digest();
    const signature = Buffer.from(sha1Hash).toString("base64");

    // Step 4 — send as form-urlencoded
    const formBody = new URLSearchParams({ data, signature }).toString();

    const res = await fetch("https://epoint.az/api/1/request", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody,
    });

    const text = await res.text();
    console.log("Epoint raw response:", text);

    let epointData: EpointResponse;
    try {
      epointData = JSON.parse(text);
    } catch {
      throw new Error("Epoint returned invalid JSON: " + text.slice(0, 150));
    }

    if (epointData.status === "success" && epointData.redirect_url) {
      return NextResponse.json({ redirect_url: epointData.redirect_url });
    }

    return NextResponse.json(
      { error: epointData.message || "Failed to initiate payment" },
      { status: 500 }
    );
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Unknown server error occurred";
    console.error("Payment error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
