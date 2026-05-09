import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | BLOCKMEN",
  description:
    "Shipping and Delivery Policy for BLOCKMEN — digital services only. No physical goods are shipped.",
};

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen w-full pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Shipping &amp; Delivery Policy
        </h1>
        <p className="text-gray-400 mb-10 text-sm">Last updated: May 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          {/* Primary declaration */}
          <div className="p-5 rounded-xl border border-purple-500/30 bg-purple-500/5">
            <p className="text-white font-semibold text-lg">
              BLOCKMEN provides digital services only. No physical goods are
              manufactured, sold, or shipped.
            </p>
            <p className="mt-2">
              All deliverables are transmitted electronically via email, secure
              client portal, or direct repository access, as defined in the
              individual service agreement.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              No Physical Shipments
            </h2>
            <p>
              <strong className="text-white">BLOCKMEN</strong> is a registered
              blockchain and AI integration consultancy. We do not manufacture,
              stock, pack, or dispatch any physical product. There are no
              shipping charges, no courier partners, and no delivery tracking
              numbers associated with any BLOCKMEN engagement. Any attempt to
              raise a shipping-related dispute will be resolved by confirming
              the digital nature of the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Digital Delivery Method
            </h2>
            <p>All services are delivered through one or more of the following channels:</p>
            <ul className="list-disc list-outside ml-5 mt-3 space-y-2 text-sm">
              <li>Email to the registered email address provided at onboarding</li>
              <li>Shared code repository (GitHub / GitLab)</li>
              <li>Secure client portal or project management platform</li>
              <li>Blockchain deployment — contract address shared directly</li>
              <li>API credentials and documentation, delivered electronically</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Delivery Timelines
            </h2>
            <p>
              Digital delivery timelines depend on the scope of the service
              purchased:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th className="py-2 pr-4 text-white font-medium">Service</th>
                    <th className="py-2 text-white font-medium">Delivery Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-3 pr-4">Initial access / credentials</td>
                    <td className="py-3">Within 24–48 hours of payment confirmation</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">AI Signal Intelligence setup</td>
                    <td className="py-3">7–14 business days</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Prediction Market Engine</td>
                    <td className="py-3">As per agreed project timeline (typically 4–12 weeks)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">DeFi Automation Suite</td>
                    <td className="py-3">As per agreed project timeline (typically 3–8 weeks)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              All timelines are confirmed in writing in the service proposal
              prior to commencement. Delivery of services is confirmed by email
              to the address registered at onboarding.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Delays
            </h2>
            <p>
              If BLOCKMEN anticipates a delay beyond the agreed timeline, the
              client will be notified by email at least 48 hours in advance with
              a revised delivery estimate. BLOCKMEN shall not be held liable for
              delays caused by force majeure events, client-side dependencies,
              or third-party infrastructure (e.g., blockchain network
              congestion).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Contact for Delivery Enquiries
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
