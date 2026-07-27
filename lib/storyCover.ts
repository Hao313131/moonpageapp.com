import { COVER_VERSIONS } from "./cover-versions";

/** App shelf thumbnail — synced from moonpage-app on each build. */
export function storyCoverSrc(file: string): string {
  const v = COVER_VERSIONS[file];
  return v ? `/covers/${file}?v=${v}` : `/covers/${file}`;
}

/** Absolute URL for JSON-LD and Open Graph. */
export function storyCoverUrl(domain: string, file: string): string {
  return `${domain}${storyCoverSrc(file)}`;
}
