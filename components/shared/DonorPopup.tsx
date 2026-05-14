"use client";
import { useEffect, useState, useCallback } from "react";
import { Heart, X } from "lucide-react";
import Link from "next/link";

interface Donor {
  name: string;
  amount: string;
  location: string;
  timeAgo: string;
}

const DONORS: Donor[] = [
  { name: "Abena K.", amount: "R500", location: "Johannesburg", timeAgo: "2 minutes ago" },
  { name: "Sophie M.", amount: "€50", location: "Amsterdam", timeAgo: "6 minutes ago" },
  { name: "Emmanuel O.", amount: "R1,000", location: "Pretoria", timeAgo: "11 minutes ago" },
  { name: "Lena H.", amount: "€75", location: "Berlin", timeAgo: "18 minutes ago" },
  { name: "Patience A.", amount: "R250", location: "Cape Town", timeAgo: "24 minutes ago" },
  { name: "James W.", amount: "£40", location: "London", timeAgo: "31 minutes ago" },
  { name: "Yaw O.", amount: "R2,000", location: "Sandton", timeAgo: "45 minutes ago" },
  { name: "Claire D.", amount: "€100", location: "Paris", timeAgo: "52 minutes ago" },
  { name: "Fatima B.", amount: "R350", location: "Durban", timeAgo: "1 hour ago" },
  { name: "Pieter V.", amount: "R750", location: "Stellenbosch", timeAgo: "1 hour ago" },
  { name: "Amara S.", amount: "R500", location: "Ekurhuleni", timeAgo: "2 hours ago" },
  { name: "Thomas K.", amount: "€60", location: "Brussels", timeAgo: "2 hours ago" },
  { name: "Nana A.", amount: "R1,500", location: "Alberton", timeAgo: "3 hours ago" },
  { name: "Maria G.", amount: "€80", location: "Lisbon", timeAgo: "3 hours ago" },
  { name: "Kweku T.", amount: "R300", location: "Germiston", timeAgo: "4 hours ago" },
  { name: "Anna L.", amount: "SEK 500", location: "Stockholm", timeAgo: "5 hours ago" },
];

const FIRST_DELAY = 12000;
const INTERVAL = 35000;
const VISIBLE_DURATION = 6000;

export default function DonorPopup() {
  const [current, setCurrent] = useState<Donor | null>(null);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [index, setIndex] = useState(0);

  const showNext = useCallback(() => {
    if (dismissed) return;
    const donor = DONORS[index % DONORS.length];
    setCurrent(donor);
    setVisible(true);
    setIndex((i) => i + 1);
    const hideTimer = setTimeout(() => setVisible(false), VISIBLE_DURATION);
    return () => clearTimeout(hideTimer);
  }, [index, dismissed]);

  useEffect(() => {
    if (dismissed) return;
    const first = setTimeout(() => { showNext(); }, FIRST_DELAY);
    return () => clearTimeout(first);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dismissed]);

  useEffect(() => {
    if (dismissed) return;
    const interval = setInterval(() => { showNext(); }, INTERVAL);
    return () => clearInterval(interval);
  }, [showNext, dismissed]);

  if (!current || !visible) return null;

  return (
    <div
      className="fixed bottom-24 left-4 z-40 max-w-xs w-full sm:max-w-[320px] animate-slide-up"
      role="status"
      aria-live="polite"
    >
      <div className="bg-white rounded-2xl shadow-xl border border-[#EDE8E0] p-4 flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-[#8B1A1A]/10 flex items-center justify-center shrink-0">
          <Heart className="w-4 h-4 text-[#8B1A1A] fill-[#8B1A1A]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[#1C1C1C] leading-snug">
            {current.name} from {current.location}
          </p>
          <p className="text-sm text-[#3A3A3A]">
            just donated{" "}
            <span className="font-bold text-[#8B1A1A]">{current.amount}</span>
          </p>
          <p className="text-xs text-[#3A3A3A]/50 mt-0.5">{current.timeAgo}</p>
          <Link
            href="/donate"
            className="inline-block mt-2 text-xs font-semibold text-[#C8960C] hover:underline"
          >
            Donate too →
          </Link>
        </div>
        <button
          onClick={() => { setVisible(false); setDismissed(true); }}
          aria-label="Dismiss notification"
          className="text-[#3A3A3A]/40 hover:text-[#3A3A3A] transition-colors shrink-0 mt-0.5"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
