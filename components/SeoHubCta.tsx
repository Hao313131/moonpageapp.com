import { StoreButtons } from "@/components/StoreButtons";

/** Shared download CTA block used on keyword SEO hub pages. */
export function SeoHubCta({
  title,
  body,
  campaign,
}: {
  title: string;
  body: string;
  campaign: string;
}) {
  return (
    <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl bg-paper p-6 text-center sm:mt-16 sm:gap-4 sm:rounded-3xl sm:p-10">
      <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
        {title}
      </h2>
      <p className="max-w-md text-sm text-ink-muted sm:text-base">{body}</p>
      <StoreButtons campaign={campaign} className="justify-center" />
    </div>
  );
}
