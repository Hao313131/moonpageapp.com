export function TikTokGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.9 5.6a4.6 4.6 0 0 1-1.2-3.1h-3.3v12.9a2.7 2.7 0 1 1-1.9-2.6V9.4a5.9 5.9 0 1 0 5.2 5.9V8.8a7.5 7.5 0 0 0 4.3 1.4V6.9a4.4 4.4 0 0 1-3.1-1.3z" />
    </svg>
  );
}

export function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
