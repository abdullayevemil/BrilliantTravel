import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { data, signature } = await req.json();
    const private_key = process.env.EPOINT_PRIVATE_KEY!;

    // Recalculate signature
    const expectedSig = Buffer.from(
      crypto.createHash("sha1").update(private_key + data + private_key).digest()
    ).toString("base64");

    if (signature !== expectedSig) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    // Decode data
    const decoded = Buffer.from(data, "base64").toString("utf-8");
    const paymentData = JSON.parse(decoded);

    // paymentData contains: order_id, status, transaction, amount, etc.
    console.log("Payment Result:", paymentData);

    // TODO: mark order as paid in your DB

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
