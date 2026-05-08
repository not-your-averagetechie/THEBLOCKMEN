import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return Policy | BLOCKMEN",
  description: "Return Policy for BLOCKMEN — we do not support physical returns.",
};

export default function ReturnPolicyPage() {
  return (
    <main className="min-h-screen w-full pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Return Policy
        </h1>
        <p className="text-gray-400 mb-10 text-sm">Last updated: May 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <div className="p-5 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <p className="text-white font-medium text-lg">
              BLOCKMEN does not support returns.
            </p>
            <p className="mt-2 text-gray-400">
              As a digital consultancy delivering blockchain and AI integration
              services, we do not deal in physical goods and therefore do not
              accept or process any return requests.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Why No Returns?
            </h2>
            <p>
              <span className="text-purple-400 font-medium">BLOCKMEN</span>{" "}
              operates exclusively as a digital services consultancy. All
              engagements — including prediction market infrastructure,
              AI-driven signal intelligence, and DeFi automation — are delivered
              as software, smart contracts, or advisory services. There are no
              physical goods involved in any transaction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Service Dissatisfaction
            </h2>
            <p>
              If you are dissatisfied with a delivered service, please refer to
              our{" "}
              <a
                href="/refund-policy"
                className="text-purple-400 hover:text-purple-300 underline transition-colors"
              >
                Refund &amp; Cancellation Policy
              </a>
              . Eligible service disputes will be handled on a case-by-case
              basis by our team.
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
