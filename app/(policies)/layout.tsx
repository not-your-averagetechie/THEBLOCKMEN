import type { PropsWithChildren } from "react";

export default function PoliciesLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-white">
      {/* Clean minimal header */}
      <header className="border-b border-gray-200 bg-white px-6 py-4 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <a
            href="/"
            className="text-lg font-bold text-gray-900 hover:text-purple-700 transition-colors"
          >
            BLOCKMEN
          </a>
          <a
            href="/"
            className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            ← Back to main site
          </a>
        </div>
      </header>

      {/* Policy content with color overrides */}
      <div className="policy-content">{children}</div>

      {/* Clean minimal footer */}
      <footer className="border-t border-gray-200 px-6 py-8 mt-4">
        <div className="max-w-3xl mx-auto space-y-1">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} BLOCKMEN. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            A-1004, Rama Metro Life Maxima, Tathawade, Pune – 411033,
            Maharashtra, India
          </p>
          <p className="text-xs text-gray-400">
            Email:{" "}
            <a
              href="mailto:hello@blockmen.io"
              className="text-purple-600 hover:underline"
            >
              hello@blockmen.io
            </a>{" "}
            &bull; Website:{" "}
            <a
              href="https://www.theblockmen.com"
              className="text-purple-600 hover:underline"
            >
              www.theblockmen.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
