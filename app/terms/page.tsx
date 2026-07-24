import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/legal/LegalLayout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use" };

/**
 * Ported verbatim from the moonpage-legal repo (terms-of-use/en.html) —
 * wording is unchanged, only the container/styling moved to match this site.
 * Source of truth for the actual legal text stays moonpage-legal; if it's
 * ever amended there, re-port the changes here too.
 */
export default function TermsOfUsePage() {
  const email = SITE.contactEmail;
  return (
    <LegalLayout title="Terms of Use" updated="July 19, 2026">
      <LegalSection title="Agreement">
        <p>
          These Terms of Use (&ldquo;Terms&rdquo;) govern your use of the
          &ldquo;MoonPage&rdquo; mobile application operated by{" "}
          {SITE.operator}. By downloading or using the app, you agree to
          these Terms. If you do not agree, do not use the app.
        </p>
      </LegalSection>

      <LegalSection title="Eligibility & Parental Use">
        <p>
          The app is designed for parents and guardians to use with their
          children. You must be at least 18 years old (or the age of
          majority where you live) to make purchases. You are responsible
          for supervising a child&apos;s use of the app and for all activity
          under your device and store account.
        </p>
      </LegalSection>

      <LegalSection title="License">
        <p>
          We grant you a personal, non-exclusive, non-transferable,
          revocable license to use MoonPage for private, non-commercial
          family use. You may not copy, redistribute, resell, publicly
          perform, or reverse engineer story content, audio, or artwork
          except as allowed by applicable law.
        </p>
      </LegalSection>

      <LegalSection title="MoonPage Premium & Purchases">
        <p>
          Free content and limited previews are available without payment.
          Full access to premium stories requires MoonPage Premium via a
          monthly or yearly auto-renewing subscription.
        </p>
        <p>
          When offered by the App Store or Google Play, an introductory free
          trial or promotional price may be available to eligible new
          subscribers. Trial length, price after the trial, and eligibility
          are shown in the app and confirmed by the store before you
          subscribe. If you are not eligible (for example, because you
          already used an introductory offer), you may be charged the
          regular subscription price immediately.
        </p>
        <p>
          Prices and local taxes are shown in the app and confirmed by Apple
          App Store or Google Play before you pay. Payment is charged to
          your store account at purchase confirmation.
        </p>
      </LegalSection>

      <LegalSection title="Subscriptions & Cancellation">
        <p>
          Subscriptions renew automatically unless canceled at least 24
          hours before the end of the current billing period. Your store
          account may be charged for renewal within 24 hours prior to period
          end. Manage or cancel anytime in your Apple or Google account
          subscription settings. Deleting the app does not cancel a
          subscription.
        </p>
      </LegalSection>

      <LegalSection title="Refund Policy">
        <p>
          For purchases made through Apple App Store or Google Play, refunds
          are handled by Apple or Google under their own policies; we cannot
          issue store refunds directly.
        </p>
        <p>
          If MoonPage Premium becomes unavailable due to a service
          discontinuation or a material reduction in features that we cause,
          and applicable law or platform policy requires or permits us to do
          so, we will offer a pro-rata or full refund of the amount paid for
          the affected period.
        </p>
        <p>
          To request a refund or report a payment issue, contact us at{" "}
          <a href={`mailto:${email}`} className="underline">
            {email}
          </a>
          . We will review your request and respond within a reasonable
          time.
        </p>
      </LegalSection>

      <LegalSection title="Restore Purchases">
        <p>
          Use &ldquo;Restore purchases&rdquo; on the paywall or in Settings
          with the same Apple ID or Google account that was used to buy
          MoonPage Premium. No separate in-app account is required.
        </p>
      </LegalSection>

      <LegalSection title="Service Termination & Data Export">
        <p>
          We may suspend or discontinue the app, or any part of it, at any
          time. If we discontinue the service before the end of your active
          subscription period, we will provide at least 60 days&apos;
          advance notice where practicable.
        </p>
        <p>
          Before discontinuation, we will use reasonable efforts to provide
          a way for you to export your locally stored data, such as reading
          progress, favorites, and parent recordings, where technically
          feasible.
        </p>
        <p>
          Content that is downloaded or available offline may continue to
          work for a limited time after discontinuation but is not
          guaranteed. We are not obligated to maintain offline functionality
          after service discontinuation.
        </p>
        <p>
          Personal information collected through support or purchase records
          will be deleted or anonymized in accordance with our Privacy
          Policy and applicable law.
        </p>
      </LegalSection>

      <LegalSection title="Content & Updates">
        <p>
          Story availability may change as we add, update, or retire titles.
          We strive to keep the library family-friendly. Features may change
          between app versions. Over-the-air updates may be delivered
          through Expo Updates.
        </p>
      </LegalSection>

      <LegalSection title="User Recordings">
        <p>
          When you record a parent narration, you represent that you have
          the right to create that recording and that it will not include
          unlawful or harmful material. Recordings are stored locally on
          your device under your control.
        </p>
      </LegalSection>

      <LegalSection title="Prohibited Conduct">
        <p>
          You agree not to misuse the app, attempt to bypass paywalls,
          interfere with security, scrape content at scale, or use the app
          in violation of applicable law.
        </p>
      </LegalSection>

      <LegalSection title="Australian Consumer Law & EU Consumer Rights">
        <p>
          Our goods and services come with guarantees that cannot be
          excluded under the Australian Consumer Law. Nothing in these Terms
          purports to exclude, restrict, or modify the application of any
          provision of the Australian Consumer Law or any other applicable
          consumer protection law.
        </p>
        <p>
          If you are located in the European Union, European Economic Area,
          or the United Kingdom, you may have additional rights under local
          consumer protection laws, including rights related to digital
          content and refunds. These rights apply alongside the platform
          rules of Apple or Google.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer">
        <p>
          MoonPage is provided &ldquo;as is&rdquo; to the fullest extent
          permitted by law. We do not guarantee uninterrupted access. To the
          extent allowed by law, we disclaim warranties of merchantability
          and fitness for a particular purpose.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          To the maximum extent permitted by law, {SITE.operator} is not
          liable for indirect, incidental, or consequential damages arising
          from your use of the app. Our total liability for any claim
          related to the app is limited to the amount you paid us in the
          twelve months before the claim, or USD $10 if you paid nothing.
        </p>
      </LegalSection>

      <LegalSection title="Apple & Google Terms">
        <p>
          On iOS, you also agree to Apple&apos;s Licensed Application End
          User License Agreement. Apple is not responsible for the app or
          its content. On Android, Google Play terms apply to purchases.
          These Terms supplement, and do not replace, store platform rules.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law & Disputes">
        <p>These Terms are governed by the laws of New South Wales, Australia.</p>
        <p>
          Any dispute arising from these Terms will first be attempted to be
          resolved through good-faith negotiation. Nothing in this section
          prevents you from lodging a complaint with a consumer protection
          agency in your jurisdiction, such as the Australian Competition
          and Consumer Commission (ACCC) or an equivalent body in your
          country.
        </p>
      </LegalSection>

      <LegalSection title="Changes & Contact">
        <p>
          We may update these Terms. Material changes will be reflected by
          updating the &ldquo;Last updated&rdquo; date. Questions:{" "}
          <a href={`mailto:${email}`} className="underline">
            {email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
