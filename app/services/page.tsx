import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | BLOCKMEN",
  description:
    "BLOCKMEN services — Prediction Market Engine, AI Signal Intelligence, and DeFi Automation. Blockchain and AI integration consultancy.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Our Services
        </h1>
        <p className="text-gray-400 mb-10 text-sm">
          Autonomous blockchain and AI systems built for production.
        </p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          {/* Intro */}
          <p>
            BLOCKMEN is a registered blockchain and AI integration consultancy
            operating from Pune, India. We design and deploy infrastructure that
            sits at the intersection of on-chain technology and machine
            learning. All engagements are scoped, quoted, and delivered as
            professional services. Pricing is provided on request based on
            project scope.
          </p>

          {/* Service 1 */}
          <section className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-semibold text-white mb-2">
              1. Prediction Market Engine
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              On-chain infrastructure for automated, trustless prediction
              markets.
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-sm">
              <li>
                Automated market maker (AMM) design and smart contract
                deployment
              </li>
              <li>Real-time oracle feed integration (Chainlink, Pyth, etc.)</li>
              <li>AI-driven liquidity optimization and position management</li>
              <li>Front-end dashboard for market creation and resolution</li>
              <li>Audit-ready Solidity / Rust contracts</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              <span className="text-white font-medium">Pricing:</span> Custom
              quote based on chain, complexity, and delivery timeline.{" "}
              <a
                href="mailto:hello@blockmen.io"
                className="text-purple-400 hover:text-purple-300 underline transition-colors"
              >
                Contact us
              </a>{" "}
              to discuss.
            </p>
          </section>

          {/* Service 2 */}
          <section className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-semibold text-white mb-2">
              2. AI Signal Intelligence
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Machine learning pipelines that turn on-chain data into
              high-conviction signals.
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-sm">
              <li>On-chain data ingestion and feature engineering</li>
              <li>Social sentiment analysis (Twitter, Telegram, Discord)</li>
              <li>Market microstructure modelling</li>
              <li>Signal delivery via API, webhook, or Telegram bot</li>
              <li>Backtesting and performance attribution</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              <span className="text-white font-medium">Pricing:</span> Project-
              or retainer-based. Minimum engagement: 30 days.{" "}
              <a
                href="mailto:hello@blockmen.io"
                className="text-purple-400 hover:text-purple-300 underline transition-colors"
              >
                Request a quote
              </a>
              .
            </p>
          </section>

          {/* Service 3 */}
          <section className="p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-semibold text-white mb-2">
              3. DeFi Automation Suite
            </h2>
            <p className="text-gray-400 text-sm mb-4">
              Smart contract automation for cross-chain yield and risk
              management.
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 text-sm">
              <li>Cross-chain yield strategy automation (EVM + Solana)</li>
              <li>Automated position management and rebalancing bots</li>
              <li>Risk-adjusted portfolio management rules</li>
              <li>Gas optimisation and MEV protection</li>
              <li>Monitoring dashboards and alerting</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              <span className="text-white font-medium">Pricing:</span> Custom
              quote based on chain coverage and strategy complexity.{" "}
              <a
                href="mailto:hello@blockmen.io"
                className="text-purple-400 hover:text-purple-300 underline transition-colors"
              >
                Contact us
              </a>{" "}
              to get started.
            </p>
          </section>

          {/* How We Work */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              How We Work
            </h2>
            <ol className="list-decimal list-outside ml-5 space-y-3 text-sm">
              <li>
                <span className="text-white font-medium">Discovery call</span> —
                We understand your requirements and scope the engagement.
              </li>
              <li>
                <span className="text-white font-medium">Proposal &amp; quote</span>{" "}
                — You receive a written proposal with deliverables, timelines,
                and pricing.
              </li>
              <li>
                <span className="text-white font-medium">Agreement &amp; payment</span>{" "}
                — We sign a service agreement. Payment terms are agreed upfront.
              </li>
              <li>
                <span className="text-white font-medium">Build &amp; deliver</span>{" "}
                — We build and hand over the deliverables. All code and
                documentation is included.
              </li>
              <li>
                <span className="text-white font-medium">Support</span> — Post-
                delivery support period as agreed in the proposal.
              </li>
            </ol>
          </section>

          {/* CTA */}
          <section className="p-6 rounded-2xl border border-purple-500/30 bg-purple-500/5 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">
              Ready to Build?
            </h2>
            <p className="text-gray-400 mb-4 text-sm">
              Email us with your project idea and we&apos;ll get back to you
              within 1–2 business days.
            </p>
            <a
              href="mailto:hello@blockmen.io"
              className="inline-block px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors text-sm"
            >
              hello@blockmen.io
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
