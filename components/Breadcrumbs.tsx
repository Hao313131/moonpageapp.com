import Link from "next/link";
import { breadcrumbHref, breadcrumbTrail, type Crumb } from "@/lib/breadcrumbs";

/**
 * Visible breadcrumb trail. Pairs 1:1 with the BreadcrumbList JSON-LD emitted
 * from the same `crumbs` array (see lib/breadcrumbs.ts), so the markup always
 * describes a trail the visitor can actually see.
 *
 * The last step is the current page: rendered as plain text with
 * aria-current="page", never as a link.
 */
export function Breadcrumbs({
  trail,
  className = "",
}: {
  trail: Crumb[];
  className?: string;
}) {
  const crumbs = breadcrumbTrail(trail);

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-muted sm:text-base">
        {crumbs.map((crumb, i) => {
          const isCurrent = i === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-x-2">
              {i > 0 && (
                <span aria-hidden className="text-ink-muted/50">
                  /
                </span>
              )}
              {isCurrent ? (
                <span aria-current="page" className="text-ink">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={breadcrumbHref(crumb)}
                  className="text-link transition-colors hover:text-link-hover"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
