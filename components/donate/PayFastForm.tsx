"use client";
import { useState } from "react";
import { Heart } from "lucide-react";

const PRESET_AMOUNTS = [100, 250, 500, 750, 1000];

const PAYFAST_URL = "https://www.payfast.co.za/eng/process";
// These are set as NEXT_PUBLIC_* env vars in Vercel — baked in at build time.
// If missing the form will be disabled below to prevent accidental test transactions.
const MERCHANT_ID  = process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID  ?? "";
const MERCHANT_KEY = process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_KEY ?? "";

export default function PayFastForm() {
  const [selected, setSelected] = useState<number | "custom">(250);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const amount =
    selected === "custom"
      ? parseFloat(custom || "0")
      : selected;

  const credentialsReady = Boolean(MERCHANT_ID && MERCHANT_KEY);
  const isValid = credentialsReady && amount >= 10 && firstName.trim() && lastName.trim() && email.includes("@");

  const itemName =
    frequency === "monthly"
      ? "Monthly Donation — Ghana Diaspora SA"
      : "Once-off Donation — Ghana Diaspora SA";

  if (!credentialsReady) {
    return (
      <div className="py-8 text-center text-[#8B1A1A] text-sm font-medium">
        Donation gateway is being configured. Please contact us directly to donate.
      </div>
    );
  }

  return (
    <form
      action={PAYFAST_URL}
      method="POST"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Hidden PayFast fields */}
      <input type="hidden" name="merchant_id" value={MERCHANT_ID} />
      <input type="hidden" name="merchant_key" value={MERCHANT_KEY} />
      <input type="hidden" name="return_url" value="https://www.ghanadiasporasa.org/donate/thank-you" />
      <input type="hidden" name="cancel_url" value="https://www.ghanadiasporasa.org/donate" />
      <input type="hidden" name="notify_url" value="https://www.ghanadiasporasa.org/api/payfast-notify" />
      <input type="hidden" name="item_name" value={itemName} />
      <input type="hidden" name="item_description" value="Supporting African migrants in South Africa through GDSA's community programmes." />
      <input type="hidden" name="amount" value={amount.toFixed(2)} />
      {frequency === "monthly" && (
        <>
          <input type="hidden" name="subscription_type" value="1" />
          <input type="hidden" name="billing_date" value={new Date().toISOString().slice(0, 10)} />
          <input type="hidden" name="recurring_amount" value={amount.toFixed(2)} />
          <input type="hidden" name="frequency" value="3" />
          <input type="hidden" name="cycles" value="0" />
        </>
      )}

      {/* Frequency toggle */}
      <div className="flex gap-3 mb-5">
        <button
          type="button"
          onClick={() => setFrequency("once")}
          className={`flex-1 py-2.5 text-sm font-semibold border-2 rounded-lg transition-colors ${
            frequency === "once"
              ? "border-[#C8960C] bg-[#C8960C] text-white"
              : "border-[#EDE8E0] text-[#3A3A3A] hover:border-[#C8960C]"
          }`}
        >
          Once-off
        </button>
        <button
          type="button"
          onClick={() => setFrequency("monthly")}
          className={`flex-1 py-2.5 text-sm font-semibold border-2 rounded-lg transition-colors ${
            frequency === "monthly"
              ? "border-[#C8960C] bg-[#C8960C] text-white"
              : "border-[#EDE8E0] text-[#3A3A3A] hover:border-[#C8960C]"
          }`}
        >
          Monthly
        </button>
      </div>

      {/* Amount selector */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {PRESET_AMOUNTS.map((amt) => (
          <button
            key={amt}
            type="button"
            onClick={() => setSelected(amt)}
            className={`py-3 text-sm font-semibold border-2 rounded-lg transition-all ${
              selected === amt
                ? "bg-[#8B1A1A] border-[#8B1A1A] text-white"
                : "border-[#8B1A1A]/20 text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white hover:border-[#8B1A1A]"
            }`}
          >
            R{amt.toLocaleString()}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setSelected("custom")}
          className={`py-3 text-sm font-semibold border-2 rounded-lg transition-all ${
            selected === "custom"
              ? "bg-[#8B1A1A] border-[#8B1A1A] text-white"
              : "border-[#8B1A1A]/20 text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white hover:border-[#8B1A1A]"
          }`}
        >
          Custom
        </button>
      </div>

      {selected === "custom" && (
        <div className="mb-5">
          <label className="block text-xs font-semibold text-[#3A3A3A] mb-1.5">
            Enter amount (ZAR, min R10)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3A3A3A]/60 font-semibold text-sm">
              R
            </span>
            <input
              type="number"
              min="10"
              step="10"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              placeholder="0"
              className="w-full pl-7 pr-4 py-3 border-2 border-[#EDE8E0] rounded-lg text-sm focus:outline-none focus:border-[#8B1A1A] transition-colors"
            />
          </div>
        </div>
      )}

      {/* Donor details */}
      <div className="space-y-3 mb-5">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-[#3A3A3A] mb-1.5">First name</label>
            <input
              type="text"
              name="name_first"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="Kwame"
              className="w-full px-3 py-2.5 border-2 border-[#EDE8E0] rounded-lg text-sm focus:outline-none focus:border-[#8B1A1A] transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#3A3A3A] mb-1.5">Last name</label>
            <input
              type="text"
              name="name_last"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Mensah"
              className="w-full px-3 py-2.5 border-2 border-[#EDE8E0] rounded-lg text-sm focus:outline-none focus:border-[#8B1A1A] transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#3A3A3A] mb-1.5">Email address</label>
          <input
            type="email"
            name="email_address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="kwame@example.com"
            className="w-full px-3 py-2.5 border-2 border-[#EDE8E0] rounded-lg text-sm focus:outline-none focus:border-[#8B1A1A] transition-colors"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#8B1A1A] text-white font-semibold rounded-lg hover:bg-[#5C0000] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Heart className="w-4 h-4" />
        {frequency === "monthly"
          ? `Donate R${amount > 0 ? amount.toLocaleString() : "..."}/month`
          : `Donate R${amount > 0 ? amount.toLocaleString() : "..."}`}
      </button>

      <p className="text-center text-xs text-[#3A3A3A]/50 mt-3">
        You will be redirected to PayFast to complete your payment securely.
      </p>
    </form>
  );
}
