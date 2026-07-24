import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Support" };

export default function SupportPage() {
  const email = SITE.contactEmail;
  return (
    <LegalLayout title="Support" updated="July 19, 2026">
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
          Store, not through us directly:
        </p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            On iPhone or iPad: <strong>Settings → [your name] → Subscriptions</strong>.
          </li>
          <li>Select MoonPage Premium to cancel, change plan, or view your billing date.</li>
        </ol>
        <p>
          Deleting the app does <strong>not</strong> cancel a subscription —
          cancel from Settings first.
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
            <Link href="/privacy" className="underline">
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
