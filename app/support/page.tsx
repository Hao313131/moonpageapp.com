import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { SITE, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/support",
  // Was just "Support" — 18 characters in a slot that fits 60, and no keyword
  // a parent would actually type. A support page is one of the highest-intent
  // pages on a subscription app; "cancel" and "restore purchases" are the
  // exact phrases people search before they arrive.
  title: "MoonPage Support: Cancel, Restore & Contact Us",
  description:
    "Contact MoonPage support, cancel or manage your Premium subscription, and restore purchases on a new device.",
});

export default function SupportPage() {
  const email = SITE.contactEmail;
  return (
    <LegalLayout title="Support" path="/support" updated="July 19, 2026">
      <LegalSection title="Contact us">
        <p>
          For questions, feedback, refund requests, or account-related
          issues, email us at{" "}
          <a href={`mailto:${email}`} className="underline">
            {email}
          </a>
          . We usually respond within a few business days.
        </p>
      </LegalSection>

      <LegalSection title="Canceling or managing your subscription">
        <p>
          MoonPage subscriptions are billed and managed through the App
          Store or Google Play, not through us directly:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>iPhone or iPad:</strong> Settings → [your name] →
            Subscriptions → select MoonPage Premium.
          </li>
          <li>
            <strong>Android:</strong> Play Store app → your profile →
            Payments &amp; subscriptions → Subscriptions → select MoonPage
            Premium.
          </li>
        </ul>
        <p>
          From there you can cancel, change plan, or view your next billing
          date. Deleting the app does <strong>not</strong> cancel a
          subscription — cancel from your store account first.
        </p>
      </LegalSection>

      <LegalSection title="Restoring a purchase on a new device">
        <p>
          Open MoonPage, go to the paywall or Settings, and tap{" "}
          <strong>Restore purchases</strong> while signed in to the same
          Apple ID or Google account originally used to subscribe. No
          separate MoonPage account is required.
        </p>
      </LegalSection>

      <LegalSection title="Legal documents">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <Link href="/privacy/" className="underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/privacy-choices" className="underline">
              Privacy Choices
            </Link>
          </li>
          <li>
            <Link href="/terms" className="underline">
              Terms of Use (EULA)
            </Link>
          </li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
