import { SITE, withSlash } from "./site";

/**
 * A single breadcrumb step. `path` is the site-relative path ("/guides"); the
 * "Home" step is prepended automatically, so callers only list the steps below
 * the homepage.
 */
export type Crumb = { name: string; path: string };

/**
 * Single source of truth for breadcrumbs.
 *
 * The visible trail (<Breadcrumbs>) and the BreadcrumbList JSON-LD
 * (breadcrumbJsonLd) are both derived from this one array, so the markup can
 * never drift from what a visitor actually sees — which is exactly the
 * condition Google's structured-data policy puts on breadcrumb markup.
 */
export function breadcrumbTrail(crumbs: Crumb[]): Crumb[] {
  return [{ name: "Home", path: "/" }, ...crumbs];
}

/** Site-relative href for a step, always with the trailing slash this site uses. */
export function breadcrumbHref(crumb: Crumb): string {
  return withSlash(crumb.path);
}

/** Absolute canonical URL for a step — used inside the JSON-LD `item` field. */
export function breadcrumbUrl(crumb: Crumb): string {
  return withSlash(`${SITE.domain}${crumb.path}`);
}

/**
 * BreadcrumbList for the given steps. Always built from the same array that
 * feeds the visible trail — pass the identical `crumbs` to both.
 *
 * `id` is optional; pass it when another node on the page needs to reference
 * this breadcrumb by `@id` (the collections pages do, to link their
 * CollectionPage node to the trail).
 */
export function breadcrumbJsonLd(crumbs: Crumb[], id?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(id ? { "@id": id } : {}),
    itemListElement: breadcrumbTrail(crumbs).map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: breadcrumbUrl(crumb),
    })),
  };
}
