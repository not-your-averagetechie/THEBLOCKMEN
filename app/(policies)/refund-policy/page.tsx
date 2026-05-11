import type { Metadata } from "next";
import PrintButton from "@/components/sub/print-button";

export const metadata: Metadata = {
  title: "Refund Policy | BLOCKMEN",
  description: "Refund and Cancellation Policy for BLOCKMEN services.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen w-full pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Refund &amp; Cancellation Policy
          </h1>
          <PrintButton />
        </div>
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
              <span className="text-white font-medium">7 calendar days</span>{" "}
              of placing the order. However, cancellation requests may not be
              entertained if the services have already been initiated or
              communicated to our delivery teams. To cancel, email{" "}
              <a
                href="mailto:talent@theblockmen.com"
                className="text-purple-400 hover:text-purple-300 underline transition-colors"
              >
                talent@theblockmen.com
              </a>{" "}
              with your order reference.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Defective or Incomplete Services
            </h2>
            <p>
              If a delivered service is defective, incomplete, or materially
              different from what was agreed in writing, you must notify our
              support team within{" "}
              <span className="text-white font-medium">7 calendar days</span>{" "}
              of delivery. Include your order reference, a description of the
              issue, and any supporting evidence. Our team will review and
              respond within 3 business days.
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
              <span className="text-purple-400 font-medium">BLOCKMEN</span>,
              the refund will be processed within{" "}
              <span className="text-white font-medium">
                5–7 business days
              </span>{" "}
              of approval. Refunds are credited back to the original payment
              method used at the time of purchase. You will receive an email
              confirmation once the refund has been initiated.
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
              Contact for Refund Enquiries
            </h2>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1 text-sm">
              <p><strong className="text-white">Business Name:</strong> BLOCKMEN</p>
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:talent@theblockmen.com"
                  className="text-purple-400 hover:text-purple-300 underline transition-colors"
                >
                  talent@theblockmen.com
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
