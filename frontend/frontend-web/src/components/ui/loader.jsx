
export default function LoaderScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      {/* Container sized similarly to a Linktree profile page */}
      <div className="w-full max-w-md">
        {/* Card-like wrapper using simple Tailwind classes—replace with shadcn Card if desired */}
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          {/* Top area: avatar + name skeleton */}
          <div className="flex flex-col items-center gap-4">
            {/* Circular avatar skeleton */}
            <div className="relative">
              <div className="h-24 w-24 rounded-full shimmer-bg" />
            </div>

            {/* Name skeleton */}
            <div className="w-3/4 h-6 rounded-full shimmer-bg" />

            {/* short bio skeleton */}
            <div className="w-5/6 h-4 rounded-full shimmer-bg" />
          </div>

          {/* Links stack — mimic Linktree links using rectangular blocks */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Repeat skeleton links; you can change the count */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-12 rounded-lg shimmer-bg" />
            ))}
          </div>

          {/* Optional footer area for small icons / meta */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full shimmer-bg" />
              <div className="h-4 w-24 rounded-full shimmer-bg" />
            </div>

            <div className="h-4 w-16 rounded-full shimmer-bg" />
          </div>
        </div>

        {/* Inline styles for shimmer animation and helper classes.
            If you already configure Tailwind to include custom keyframes & animations,
            remove this style block and use the utility classes instead.
        */}
        <style>{`
          /* shimmer background helper used by multiple elements */
          .shimmer-bg {
            position: relative;
            overflow: hidden;
            background-color: #e6e7eb; /* base skeleton color */
          }

          /* pseudo-layer to create a moving sheen */
          .shimmer-bg::after {
            content: "";
            position: absolute;
            top: 0;
            left: -150%;
            height: 100%;
            width: 250%;
            background: linear-gradient(
              90deg,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,0.6) 50%,
              rgba(255,255,255,0) 100%
            );
            transform: skewX(-25deg);
            animation: shimmer 1.4s ease-in-out infinite;
          }

          @keyframes shimmer {
            0% { left: -150%; }
            50% { left: 50%; }
            100% { left: 150%; }
          }

          /* make sure rounded corners clip the shimmer */
          .shimmer-bg { -webkit-mask-image: -webkit-radial-gradient(white, black); }
        `}</style>
      </div>
    </div>
  );
}

