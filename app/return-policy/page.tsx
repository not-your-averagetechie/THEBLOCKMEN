import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return Policy | BLOCKMEN",
  description:
    "Return Policy for BLOCKMEN — digital services consultancy. All sales are final. No physical returns or exchanges.",
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
          {/* Primary declaration */}
          <div className="p-5 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <p className="text-white font-semibold text-lg">
              BLOCKMEN is a digital services consultancy. We do not sell or
              ship physical goods of any kind.
            </p>
            <p className="mt-2">
              Due to the nature of our digital services and consultancy
              engagements, we do not offer returns or exchanges.{" "}
              <strong className="text-white">All sales are final.</strong>
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              No Physical Goods
            </h2>
            <p>
              <strong className="text-white">BLOCKMEN</strong> (registered
              business name) operates exclusively as a blockchain and artificial
              intelligence integration consultancy. All engagements — including
              prediction market infrastructure, AI signal intelligence pipelines,
              and DeFi automation suites — are delivered as digital software,
              smart contracts, or professional advisory services. No physical
              products are manufactured, stocked, sold, or dispatched by
              BLOCKMEN at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              No Returns or Exchanges
            </h2>
            <p>
              Because our deliverables are intangible digital outputs (code,
              deployed contracts, reports, API integrations), they cannot be
              physically &quot;returned.&quot; Once a service has been delivered
              in accordance with the agreed scope of work, the transaction is
              considered complete and no return or exchange request can be
              processed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Cancellation of Ongoing Services
            </h2>
            <p>
              For clients on recurring or retainer-based engagements:
            </p>
            <ul className="list-disc list-outside ml-5 mt-3 space-y-2 text-sm">
              <li>
                Cancellations must be submitted in writing (email) at least{" "}
                <strong className="text-white">7 calendar days</strong> before
                the next billing cycle.
              </li>
              <li>
                Cancellations received after this window will take effect from
                the subsequent billing cycle.
              </li>
              <li>
                Fees already charged for the current billing cycle are
                non-refundable.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Service Dissatisfaction
            </h2>
            <p>
              If you believe a delivered service does not meet the agreed scope
              of work, please refer to our{" "}
              <a
                href="/refund-policy"
                className="text-purple-400 hover:text-purple-300 underline transition-colors"
              >
                Refund &amp; Cancellation Policy
              </a>
              . Eligible disputes are reviewed by our team on a case-by-case
              basis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Contact for Return / Cancellation Enquiries
            </h2>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1 text-sm">
              <p><strong className="text-white">Business Name:</strong> BLOCKMEN</p>
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:hello@blockmen.io"
                  className="text-purple-400 hover:text-purple-300 underline transition-colors"
                >
                  hello@blockmen.io
                </a>
              </p>
              <p><strong className="text-white">Support Hours:</strong> Monday – Friday, 9:00 – 18:00 IST</p>
              <p>
                <strong className="text-white">Address:</strong> A-1004, Rama
                Metro Life Maxima, Tathawade, Pune – 411033, Maharashtra, India
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}


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
                href="mailto:talent@theblockmen.com"
                className="text-purple-400 hover:text-purple-300 underline transition-colors"
              >
                talent@theblockmen.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
