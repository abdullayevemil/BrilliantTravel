"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "@/components/layout/header";
import { tours } from "@/db/tours";

const checkoutSchema = z.object({
  firstName: z.string().min(2, "Name must be at least 2 characters"),
  lastName: z.string().min(2, "Surname must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?\d{7,15}$/, "Invalid phone number"),
  date: z.string().min(1, "Date is required"),
  people: z.coerce.number().min(1, "Must be at least 1 person"),
  payment: z.enum(["later", "card"]),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const params = useParams();

  const searchParams = useSearchParams();

  const price = tours.filter((t) => t.id === params.title)[0].price;
  
  const defaultDate = searchParams.get("date") || "";
  
  const defaultPeople = Number(searchParams.get("travelers") || 1);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      date: defaultDate,
      people: defaultPeople,
      payment: "later",
    },
  });

  const onSubmit = async (data: CheckoutFormData) => {
    if (data.payment === "card") {
      // Epoint payment flow
      try {
        const res = await fetch("/api/epoint/create-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: price,
            order_id: `${Date.now()}`,
          }),
        });
        const json = await res.json();

        if (json.redirect_url) {
          window.location.href = json.redirect_url; // redirect user to Epoint
        } else {
          alert("Failed to initiate card payment ❌");
        }
      } catch (err) {
        console.error(err);
        alert("Error creating payment ❌");
      }
    } else {
      // Book now, pay later
      try {
        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, price }),
        });

        if (res.ok) {
          alert("Your order was sent successfully ✅");

          window.location.href = "/";
        } else {
          alert("An error occurred ❌");
        }
      } catch (err) {
        console.error(err);
        alert("Error submitting order ❌");
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* Name / Surname */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("firstName")}
                  className="border rounded-lg px-4 py-2 w-full"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Surname"
                  {...register("lastName")}
                  className="border rounded-lg px-4 py-2 w-full"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email / Phone */}
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="border rounded-lg px-4 py-2 w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone number"
                {...register("phone")}
                className="border rounded-lg px-4 py-2 w-full"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Date / People */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="date"
                  {...register("date")}
                  className="border rounded-lg px-4 py-2 w-full"
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.date.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="number"
                  min={1}
                  {...register("people")}
                  className="border rounded-lg px-4 py-2 w-full"
                />
                {errors.people && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.people.message}
                  </p>
                )}
              </div>
            </div>

            {/* Payment Method */}
            <div className="flex flex-col gap-2">
              <label className="font-medium">Payment method:</label>
              <label className="flex items-center gap-2">
                <input type="radio" value="later" {...register("payment")} />
                Book now, pay later
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" value="card" {...register("payment")} />
                Pay by card
              </label>
              {errors.payment && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.payment.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primaryBg font-semibold rounded-lg px-6 py-3 disabled:opacity-60"
            >
              {isSubmitting ? "Processing..." : "Order Now"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
