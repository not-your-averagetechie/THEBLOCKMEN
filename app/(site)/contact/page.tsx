import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | BLOCKMEN",
  description:
    "Contact BLOCKMEN — Blockchain × AI consultancy. Registered business details, address, and email.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Contact Us
        </h1>
        <p className="text-gray-400 mb-10 text-sm">
          We&apos;re here to help. Reach out for partnerships, support, or
          general enquiries.
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          {/* Business Details Card */}
          <div className="p-6 rounded-2xl border border-purple-500/30 bg-white/5 space-y-4">
            <h2 className="text-xl font-semibold text-white">
              Registered Business Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Business Name
                </p>
                <p className="text-white font-medium">BLOCKMEN</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Website
                </p>
                <a
                  href="https://www.theblockmen.com"
                  className="text-purple-400 hover:text-purple-300 underline transition-colors"
                >
                  www.theblockmen.com
                </a>
              </div>

              <div className="sm:col-span-2">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Registered Address
                </p>
                <address className="not-italic text-white">
                  A-1004, Rama Metro Life Maxima,
                  <br />
                  Tathawade, Pune – 411033,
                  <br />
                  Maharashtra, India
                </address>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Business Email
                </p>
                <a
                  href="mailto:hello@blockmen.io"
                  className="text-purple-400 hover:text-purple-300 underline transition-colors"
                >
                  hello@blockmen.io
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Support Hours
                </p>
                <p className="text-white">Monday – Friday, 9:00 – 18:00 IST</p>
              </div>
            </div>
          </div>

          {/* Get in Touch */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Get in Touch
            </h2>
            <p>
              For all business enquiries, partnership discussions, or technical
              support, email us at{" "}
              <a
                href="mailto:hello@blockmen.io"
                className="text-purple-400 hover:text-purple-300 underline transition-colors"
              >
                hello@blockmen.io
              </a>
              . We aim to respond within 1–2 business days.
            </p>
          </section>

          {/* What We Do */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              What We Do
            </h2>
            <p>
              BLOCKMEN is a blockchain and AI integration consultancy. We build
              autonomous infrastructure at the intersection of on-chain
              technology and machine learning — including prediction market
              engines, AI signal intelligence pipelines, and DeFi automation
              suites.
            </p>
            <p className="mt-3">
              See our{" "}
              <a
                href="/services"
                className="text-purple-400 hover:text-purple-300 underline transition-colors"
              >
                Services page
              </a>{" "}
              for a full breakdown of what we offer.
            </p>
          </section>

          {/* Policy Links */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Legal &amp; Policies
            </h2>
            <ul className="space-y-2">
              {[
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Refund & Cancellation Policy", href: "/refund-policy" },
                { label: "Return Policy", href: "/return-policy" },
                { label: "Shipping Policy", href: "/shipping-policy" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-purple-400 hover:text-purple-300 underline transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
