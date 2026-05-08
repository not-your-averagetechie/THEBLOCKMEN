import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | BLOCKMEN",
  description: "Refund and Cancellation Policy for BLOCKMEN services.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen w-full pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Refund &amp; Cancellation Policy
        </h1>
        <p className="text-gray-400 mb-10 text-sm">Last updated: May 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            This Refund and Cancellation Policy outlines how you can cancel or
            seek a refund for a service that you have purchased through the{" "}
            <span className="text-purple-400 font-medium">
              THEBLOCKMEN.COM
            </span>{" "}
            platform. Under this policy:
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Cancellations
            </h2>
            <p>
              Cancellations will only be considered if the request is made
              within{" "}
              <span className="text-white font-medium">7 days</span> of placing
              the order. However, cancellation requests may not be entertained
              if the services have already been initiated or communicated to our
              delivery teams.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Damaged or Defective Services
            </h2>
            <p>
              In case of receipt of a service that is defective, incomplete, or
              not as described, please report to our customer service team. The
              request would be entertained once our team has checked and
              determined the issue at its own end. This should be reported
              within{" "}
              <span className="text-white font-medium">7 days</span> of receipt
              or delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Service Not as Expected
            </h2>
            <p>
              In case you feel that the service received is not as described or
              as per your expectations, you must bring it to the notice of our
              customer service within{" "}
              <span className="text-white font-medium">7 days</span> of
              receiving the service. The customer service team, after looking
              into your complaint, will take an appropriate decision.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Refund Processing
            </h2>
            <p>
              In case of any refunds approved by{" "}
              <span className="text-purple-400 font-medium">BLOCKMEN</span>, it
              will take{" "}
              <span className="text-white font-medium">7 days</span> for the
              refund to be processed to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Non-Refundable Services
            </h2>
            <p>
              There may be a certain category of services that are exempted from
              refunds. Such categories would be identified to you at the time of
              purchase.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Contact Us
            </h2>
            <p>
              For any refund or cancellation requests, please contact us at:{" "}
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
