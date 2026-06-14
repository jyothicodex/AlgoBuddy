"use client";
import PrivacyPolicyContent from "@/app/components/PrivacyPolicyContent";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link
          href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all font-semibold text-sm text-[var(--udemy-text)] dark:text-[var(--udemy-dark-text)]"
        >
          ← Back to Home
        </Link>

        <PrivacyPolicyContent />
      </div>
    </main>
  );
}