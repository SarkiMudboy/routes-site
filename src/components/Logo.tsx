/**
 * Routes logo — metro-style route line with exactly 4 stops:
 * 3 teal-ringed white circles + 1 solid terracotta destination dot,
 * beside the lowercase "routes" wordmark. Do not change the stop count.
 */
export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="40"
        height="40"
        viewBox="26 26 190 190"
        role="img"
        aria-label="Routes logo: a route line with four stops"
      >
        <path
          d="M 52 188 L 52 116 L 116 52 L 190 52"
          fill="none"
          stroke="#0E6E6B"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* 3 station stops: white fill, teal ring */}
        <circle cx="52" cy="188" r="15.5" fill="#FFFFFF" stroke="#0E6E6B" strokeWidth="10.5" />
        <circle cx="52" cy="116" r="15.5" fill="#FFFFFF" stroke="#0E6E6B" strokeWidth="10.5" />
        <circle cx="116" cy="52" r="15.5" fill="#FFFFFF" stroke="#0E6E6B" strokeWidth="10.5" />
        {/* destination stop: solid terracotta */}
        <circle cx="190" cy="52" r="20.5" fill="#D2622A" />
      </svg>
      <span className="text-2xl font-bold tracking-tight text-ink font-heading">
        routes
      </span>
    </div>
  );
}
