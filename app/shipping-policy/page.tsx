import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | BLOCKMEN",
  description: "Shipping Policy for BLOCKMEN — we do not ship physical goods.",
};

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen w-full pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Shipping Policy
        </h1>
        <p className="text-gray-400 mb-10 text-sm">Last updated: May 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <div className="p-5 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <p className="text-white font-medium text-lg">
              BLOCKMEN does not ship physical goods.
            </p>
            <p className="mt-2 text-gray-400">
              As a digital consultancy, all our services and deliverables are
              provided electronically. No physical shipment is involved in any
              engagement.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Digital Delivery
            </h2>
            <p>
              All services offered by{" "}
              <span className="text-purple-400 font-medium">BLOCKMEN</span> —
              including smart contract deployment, AI pipeline integration,
              on-chain prediction market infrastructure, and DeFi automation —
              are delivered digitally. Delivery confirmation will be sent to
              your registered email address upon completion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Delivery Timelines
            </h2>
            <p>
              Service delivery timelines are agreed upon at the time of
              engagement and confirmed in writing. Timelines vary depending on
              the scope and complexity of the service requested.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Contact Us
            </h2>
            <p>
              For any queries related to this policy, contact us at:{" "}
              <a
                href="mailto:hello@blockmen.io"
                className="text-purple-400 hover:text-purple-300 underline transition-colors"
              >
                hello@blockmen.io
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
