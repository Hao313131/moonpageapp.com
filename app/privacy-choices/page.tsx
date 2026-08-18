import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { SITE, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/privacy-choices",
  title: "Privacy Choices",
  description:
    "How to view, export, or delete your data in MoonPage, and how to cancel a subscription on iOS or Android.",
});

/**
 * Ported from the moonpage-legal repo (privacy-choices/en.html), with the
 * "Subscriptions & purchases" section extended to cover Android/Google Play
 * (the source only documented iOS, from before Android was on the roadmap).
 */
export default function PrivacyChoicesPage() {
  const email = SITE.contactEmail;
  return (
    <LegalLayout title="Your Privacy Choices" path="/privacy-choices" updated="July 19, 2026">
      <LegalSection title="Overview">
        <p>
          MoonPage is designed for parents and guardians to use with their
          children. Most information stays <strong>on your device</strong>.
          We do not sell personal information and we do not use your data
          for third-party advertising or cross-app tracking.
        </p>
        <p>
          For full details, see our{" "}
          <a href="/privacy/" className="underline">
            Privacy Policy
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Data stored on your device">
        <p>You can remove this data anytime without contacting us:</p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            Open MoonPage → <strong>Settings</strong>.
          </li>
          <li>
            Use <strong>Clear data</strong> to remove reading progress and
            parent voice recordings.
          </li>
          <li>
            Clear the child profile (name / gender) in Settings if you no
            longer want personalization.
          </li>
          <li>
            Use <strong>Delete all app data</strong> to permanently erase
            all local data stored by the app.
          </li>
          <li>Delete the MoonPage app from your device to remove all local app data.</li>
        </ol>
      </LegalSection>

      <LegalSection title="Subscriptions & purchases">
        <p>
          Subscription and payment records are managed by Apple App Store or
          Google Play (and RevenueCat, our subscription partner). To cancel
          or manage billing:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>iPhone or iPad:</strong> Settings → [your name] →
            Subscriptions → select MoonPage Premium.
          </li>
          <li>
            <strong>Android:</strong> Play Store app → your profile →
            Payments &amp; subscriptions → select MoonPage Premium.
          </li>
        </ul>
        <p>
          Deleting the app does <strong>not</strong> cancel a subscription.
        </p>
      </LegalSection>

      <LegalSection title="Microphone">
        <p>
          The microphone is used only when a parent chooses to record
          narration. Recordings are saved locally. You can delete them in
          Settings → Clear data. MoonPage does not access the microphone in
          the background.
        </p>
      </LegalSection>

      <LegalSection title="Contact us">
        <p>
          For privacy questions or requests about information we may hold
          in support correspondence, email{" "}
          <a href={`mailto:${email}`} className="underline">
            {email}
          </a>
          . We will respond within a reasonable time.
        </p>
        <p>
          We do not knowingly collect personal information directly from
          children under 13 without parental involvement. If you believe we
          received a child&apos;s information in error, contact us and we
          will delete it from our records.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
