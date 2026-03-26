export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-[var(--bg-page)] font-mono-primary">
      {/* Header */}
      <header className="flex items-center justify-between px-16 py-5 border-b border-[var(--border)]">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[var(--accent-primary)]">&gt;</span>
          <span className="text-xl font-bold text-[var(--text-primary)]">kitkat</span>
          <span className="text-xs font-medium text-[var(--accent-primary)]">001</span>
        </div>

        <nav className="flex items-center gap-8">
          <a href="#features" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">features</a>
          <a href="#how" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">how_it_works</a>
          <a href="#pricing" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">pricing</a>
          <a href="#docs" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">docs</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-[13px] text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors">$ login</button>
          <button className="bg-[var(--accent-primary)] text-[var(--bg-page)] px-5 py-[10px] text-xs font-medium hover:opacity-90 transition-opacity">
            launch_app
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center px-[120px] py-[100px] pb-20 gap-10">
        <div className="flex items-center gap-2 px-4 py-[6px] border border-[var(--border)]">
          <div className="w-[6px] h-[6px] rounded-full bg-[var(--accent-primary)]"></div>
          <span className="text-xs text-[var(--text-secondary)]">// now live on 5 perp dexs</span>
        </div>

        <h1 className="text-[64px] font-bold text-[var(--text-primary)] leading-[1.1] text-center max-w-[900px]">
          farm airdrop volume<br />while you sleep
        </h1>

        <p className="text-lg font-mono-secondary text-[var(--text-secondary)] leading-[1.6] text-center max-w-[720px]">
          kitkat turns your tradingview signals into automated perp trades<br />
          across hyperliquid, lighter, extended, paradex & variational.
        </p>

        <div className="flex items-center gap-4">
          <button className="bg-[var(--accent-primary)] text-[var(--bg-page)] px-8 py-4 text-sm font-medium hover:opacity-90 transition-opacity">
            $ start_farming
          </button>
          <button className="border border-[var(--border)] text-[var(--text-primary)] px-8 py-4 text-sm hover:border-[var(--accent-primary)] transition-colors">
            view_docs &gt;&gt;
          </button>
        </div>

        <div className="flex items-center gap-8 pt-4">
          <span className="text-[11px] text-[var(--text-muted)]">// connected to</span>
          <span className="text-[13px] font-medium text-[var(--text-secondary)]">hyperliquid</span>
          <span className="text-[13px] font-medium text-[var(--text-secondary)]">lighter</span>
          <span className="text-[13px] font-medium text-[var(--text-secondary)]">extended</span>
          <span className="text-[13px] font-medium text-[var(--text-secondary)]">paradex</span>
          <span className="text-[13px] font-medium text-[var(--text-secondary)]">variational</span>
        </div>

        {/* Terminal Visual */}
        <div className="w-[960px] bg-[var(--bg-section)] border border-[var(--border)] mt-8">
          <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
            <div className="flex items-center gap-2">
              <div className="flex gap-[6px]">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--accent-primary)]"></div>
              </div>
            </div>
            <span className="text-[11px] text-[var(--text-secondary)]">kitkat-001 — terminal</span>
            <div className="flex items-center gap-[6px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[var(--accent-primary)]"></div>
              <span className="text-[10px] text-[var(--accent-primary)]">live</span>
            </div>
          </div>
          <div className="p-6 space-y-[6px] font-mono-secondary text-[13px]">
            <div className="text-[var(--text-primary)]">$ kitkat start --mode=live --dexs=all</div>
            <div className="text-[var(--text-secondary)]">[08:42:01] webhook received → BTC/USDT LONG</div>
            <div className="text-[var(--text-secondary)]">[08:42:01] routing to 5 dexs...</div>
            <div className="text-[var(--accent-primary)]">[08:42:02] ✓ hyperliquid  0.5 ETH  filled @ $3,420.12</div>
            <div className="text-[var(--accent-primary)]">[08:42:02] ✓ lighter      0.5 ETH  filled @ $3,420.08</div>
            <div className="text-[var(--accent-primary)]">[08:42:03] ✓ extended     0.3 ETH  filled @ $3,419.95</div>
            <div className="text-[var(--accent-primary)]">[08:42:03] ✓ paradex      0.5 ETH  filled @ $3,420.20</div>
            <div className="text-[var(--accent-primary)]">[08:42:04] ✓ variational  1.0 ETH  filled @ $3,420.05</div>
            <div className="h-[6px]"></div>
            <div className="text-[var(--text-primary)]">[08:42:04] all 5 dexs executed · total volume: $9,576.40</div>
            <div className="text-[var(--accent-primary)]">[08:42:04] daily progress: ████████████░░░░ 68% → $500k target</div>
            <div className="text-[var(--accent-primary)]">$ _</div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-[var(--border)] w-full"></div>

      {/* Stats Section */}
      <section className="flex items-center justify-between px-[120px] py-[60px]">
        <div className="flex flex-col items-center gap-1">
          <div className="text-[40px] font-bold text-[var(--text-primary)]">$12.4m</div>
          <div className="text-xs text-[var(--text-secondary)]">// total_volume_farmed</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-[40px] font-bold text-[var(--text-primary)]">847</div>
          <div className="text-xs text-[var(--text-secondary)]">// active_bots</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-[40px] font-bold text-[var(--accent-primary)]">99.7%</div>
          <div className="text-xs text-[var(--text-secondary)]">// execution_success_rate</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-[40px] font-bold text-[var(--text-primary)]">&lt;3s</div>
          <div className="text-xs text-[var(--text-secondary)]">// avg_execution_time</div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-[var(--border)] w-full"></div>

      {/* Problem Section */}
      <section className="flex gap-20 px-[120px] py-[100px]">
        <div className="flex-1 flex flex-col gap-6">
          <span className="text-xs font-medium text-[var(--accent-primary)]">// the_problem</span>
          <h2 className="text-4xl font-bold text-[var(--text-primary)] leading-[1.2]">
            airdrop farming is<br />a full-time job
          </h2>
          <p className="text-[15px] font-mono-secondary text-[var(--text-secondary)] leading-[1.7]">
            managing positions across 5 different perp dexs means 5 different interfaces, 5 sets of api keys, and endless manual monitoring. most traders burn out before hitting volume targets.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-4 border border-[var(--border)] p-6">
            <span className="text-sm font-bold text-[var(--accent-error)]">[x]</span>
            <span className="text-sm font-mono-secondary text-[var(--text-primary)]">switching between 5 dex interfaces daily</span>
          </div>
          <div className="flex items-center gap-4 border border-[var(--border)] p-6">
            <span className="text-sm font-bold text-[var(--accent-error)]">[x]</span>
            <span className="text-sm font-mono-secondary text-[var(--text-primary)]">missing signals while you sleep or work</span>
          </div>
          <div className="flex items-center gap-4 border border-[var(--border)] p-6">
            <span className="text-sm font-bold text-[var(--accent-error)]">[x]</span>
            <span className="text-sm font-mono-secondary text-[var(--text-primary)]">inconsistent position sizing across exchanges</span>
          </div>
          <div className="flex items-center gap-4 border border-[var(--border)] p-6">
            <span className="text-sm font-bold text-[var(--accent-error)]">[x]</span>
            <span className="text-sm font-mono-secondary text-[var(--text-primary)]">months away from reaching $500k volume targets</span>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="flex flex-col items-center px-[120px] py-[100px] bg-[var(--bg-section)] border-t border-b border-[var(--border)] gap-16">
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-medium text-[var(--accent-primary)]">// how_it_works</span>
          <h2 className="text-4xl font-bold text-[var(--text-primary)] text-center max-w-[800px]">
            signal to execution in under 3 seconds
          </h2>
          <p className="text-base font-mono-secondary text-[var(--text-secondary)] text-center">
            three steps. fully automated. zero manual intervention.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 w-full">
          <div className="border border-[var(--border)] p-8 flex flex-col gap-5">
            <span className="text-[28px] font-bold text-[var(--accent-primary)]">[1]</span>
            <h3 className="text-xl font-bold text-[var(--text-primary)] leading-[1.3]">
              tradingview fires<br />a webhook
            </h3>
            <p className="text-sm font-mono-secondary text-[var(--text-secondary)] leading-[1.6]">
              your pine script alert triggers and sends a json payload to your unique kitkat endpoint. supports any indicator or strategy.
            </p>
            <div className="bg-[var(--bg-page)] p-4">
              <code className="text-xs text-[var(--accent-primary)]">POST /webhook/kk-a1b2c3</code>
            </div>
          </div>

          <div className="border border-[var(--border)] p-8 flex flex-col gap-5">
            <span className="text-[28px] font-bold text-[var(--accent-primary)]">[2]</span>
            <h3 className="text-xl font-bold text-[var(--text-primary)] leading-[1.3]">
              kitkat routes to<br />all 5 dexs
            </h3>
            <p className="text-sm font-mono-secondary text-[var(--text-secondary)] leading-[1.6]">
              the signal is parsed, validated, and simultaneously dispatched to every connected dex with your configured position sizes.
            </p>
            <div className="bg-[var(--bg-page)] p-4">
              <code className="text-xs text-[var(--accent-primary)]">routing → 5/5 dexs</code>
            </div>
          </div>

          <div className="border border-[var(--border)] p-8 flex flex-col gap-5">
            <span className="text-[28px] font-bold text-[var(--accent-primary)]">[3]</span>
            <h3 className="text-xl font-bold text-[var(--text-primary)] leading-[1.3]">
              volume stacks<br />automatically
            </h3>
            <p className="text-sm font-mono-secondary text-[var(--text-secondary)] leading-[1.6]">
              every fill counts toward your airdrop volume target. track progress across all dexs from one unified dashboard in real time.
            </p>
            <div className="bg-[var(--bg-page)] p-4">
              <code className="text-xs text-[var(--accent-primary)]">++$9,576 volume today</code>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="flex flex-col items-center px-[120px] py-[100px] gap-16">
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-medium text-[var(--accent-primary)]">// features</span>
          <h2 className="text-4xl font-bold text-[var(--text-primary)] text-center max-w-[800px] leading-[1.2]">
            everything you need to<br />farm volume at scale
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6 w-full">
          <div className="border border-[var(--border)] p-8 flex flex-col gap-4">
            <span className="text-sm font-bold text-[var(--accent-primary)]">$ multi_dex</span>
            <h3 className="text-lg font-bold text-[var(--text-primary)]">5 dexs, 1 signal</h3>
            <p className="text-[13px] font-mono-secondary text-[var(--text-secondary)] leading-[1.6]">
              one tradingview alert executes across hyperliquid, lighter, extended, paradex, and variational simultaneously.
            </p>
          </div>

          <div className="border border-[var(--border)] p-8 flex flex-col gap-4">
            <span className="text-sm font-bold text-[var(--accent-primary)]">$ position_config</span>
            <h3 className="text-lg font-bold text-[var(--text-primary)]">per-dex sizing</h3>
            <p className="text-[13px] font-mono-secondary text-[var(--text-secondary)] leading-[1.6]">
              set global defaults or fine-tune position sizes per exchange. control exactly how much capital each dex receives.
            </p>
          </div>

          <div className="border border-[var(--border)] p-8 flex flex-col gap-4">
            <span className="text-sm font-bold text-[var(--accent-primary)]">$ volume_tracker</span>
            <h3 className="text-lg font-bold text-[var(--text-primary)]">progress dashboard</h3>
            <p className="text-[13px] font-mono-secondary text-[var(--text-secondary)] leading-[1.6]">
              track volume toward $500k targets per dex. visual progress bars, daily stats, and execution history at a glance.
            </p>
          </div>

          <div className="border border-[var(--border)] p-8 flex flex-col gap-4">
            <span className="text-sm font-bold text-[var(--accent-primary)]">$ operating_hours</span>
            <h3 className="text-lg font-bold text-[var(--text-primary)]">time-based control</h3>
            <p className="text-[13px] font-mono-secondary text-[var(--text-secondary)] leading-[1.6]">
              define active trading windows. signals outside hours are queued or discarded — your choice. weekday/weekend toggles included.
            </p>
          </div>

          <div className="border border-[var(--border)] p-8 flex flex-col gap-4">
            <span className="text-sm font-bold text-[var(--accent-primary)]">$ dry_run</span>
            <h3 className="text-lg font-bold text-[var(--text-primary)]">test before live</h3>
            <p className="text-[13px] font-mono-secondary text-[var(--text-secondary)] leading-[1.6]">
              run simulated $0.01 orders to verify connectivity, api keys, and permissions across all dexs before going live.
            </p>
          </div>

          <div className="border border-[var(--border)] p-8 flex flex-col gap-4">
            <span className="text-sm font-bold text-[var(--accent-primary)]">$ self_custody</span>
            <h3 className="text-lg font-bold text-[var(--text-primary)]">non-custodial</h3>
            <p className="text-[13px] font-mono-secondary text-[var(--text-secondary)] leading-[1.6]">
              your keys, your funds. kitkat only receives delegated trading permissions — we never hold or transfer your assets.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="flex flex-col items-center px-[120px] py-[100px] bg-[var(--bg-section)] border-t border-b border-[var(--border)] gap-16">
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-medium text-[var(--accent-primary)]">// pricing</span>
          <h2 className="text-4xl font-bold text-[var(--text-primary)] text-center">
            simple, transparent pricing
          </h2>
          <p className="text-base font-mono-secondary text-[var(--text-secondary)] text-center">
            no hidden fees. no per-trade charges. just flat monthly access.
          </p>
        </div>

        <div className="flex gap-6 justify-center">
          <div className="w-[380px] border border-[var(--border)] p-10 flex flex-col gap-6">
            <span className="text-sm font-medium text-[var(--text-secondary)]">starter</span>
            <div className="flex items-end gap-1">
              <span className="text-5xl font-bold text-[var(--text-primary)]">$0</span>
              <span className="text-sm text-[var(--text-secondary)]">/month</span>
            </div>
            <p className="text-[13px] font-mono-secondary text-[var(--text-secondary)] leading-[1.5]">
              perfect for testing the waters. limited to 2 dexs.
            </p>
            <div className="h-[1px] bg-[var(--border)]"></div>
            <div className="flex flex-col gap-3">
              <div className="text-[13px] text-[var(--text-primary)]">✓ 2 dex connections</div>
              <div className="text-[13px] text-[var(--text-primary)]">✓ webhook endpoint</div>
              <div className="text-[13px] text-[var(--text-primary)]">✓ basic dashboard</div>
              <div className="text-[13px] text-[var(--text-muted)]">○ per-dex sizing</div>
              <div className="text-[13px] text-[var(--text-muted)]">○ operating hours</div>
            </div>
            <button className="border border-[var(--border)] text-[var(--text-primary)] py-[14px] text-center text-[13px] font-medium hover:border-[var(--accent-primary)] transition-colors">
              $ get_started
            </button>
          </div>

          <div className="w-[380px] border-2 border-[var(--accent-primary)] p-10 flex flex-col gap-6">
            <div className="flex items-center gap-[6px] w-fit px-[10px] py-1">
              <div className="w-[6px] h-[6px] rounded-full bg-[var(--accent-primary)]"></div>
              <span className="text-[11px] font-medium text-[var(--accent-primary)]">most popular</span>
            </div>
            <span className="text-sm font-medium text-[var(--accent-primary)]">pro</span>
            <div className="flex items-end gap-1">
              <span className="text-5xl font-bold text-[var(--text-primary)]">$49</span>
              <span className="text-sm text-[var(--text-secondary)]">/month</span>
            </div>
            <p className="text-[13px] font-mono-secondary text-[var(--text-secondary)] leading-[1.5]">
              full access to all 5 dexs. built for serious farmers.
            </p>
            <div className="h-[1px] bg-[var(--border)]"></div>
            <div className="flex flex-col gap-3">
              <div className="text-[13px] text-[var(--text-primary)]">✓ all 5 dex connections</div>
              <div className="text-[13px] text-[var(--text-primary)]">✓ per-dex position sizing</div>
              <div className="text-[13px] text-[var(--text-primary)]">✓ operating hours control</div>
              <div className="text-[13px] text-[var(--text-primary)]">✓ volume progress dashboard</div>
              <div className="text-[13px] text-[var(--text-primary)]">✓ execution history & logs</div>
              <div className="text-[13px] text-[var(--text-primary)]">✓ priority webhook processing</div>
            </div>
            <button className="bg-[var(--accent-primary)] text-[var(--bg-page)] py-[14px] text-center text-[13px] font-medium hover:opacity-90 transition-opacity">
              $ start_farming
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="flex flex-col items-center px-[200px] py-[100px] gap-12">
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-medium text-[var(--accent-primary)]">// faq</span>
          <h2 className="text-4xl font-bold text-[var(--text-primary)] text-center">
            frequently asked questions
          </h2>
        </div>

        <div className="w-full flex flex-col">
          <div className="flex flex-col gap-3 py-6 border-b border-[var(--border)]">
            <h3 className="text-base font-medium text-[var(--text-primary)]">&gt; is kitkat non-custodial?</h3>
            <p className="text-sm font-mono-secondary text-[var(--text-secondary)] leading-[1.6]">
              yes. we only receive delegated trading permissions via message signatures. your private keys and funds never leave your wallet. you can revoke access at any time.
            </p>
          </div>

          <div className="flex flex-col gap-3 py-6 border-b border-[var(--border)]">
            <h3 className="text-base font-medium text-[var(--text-primary)]">&gt; which tradingview plans are supported?</h3>
            <p className="text-sm font-mono-secondary text-[var(--text-secondary)] leading-[1.6]">
              any tradingview plan that supports webhook alerts — pro, pro+, or premium. free plans do not support webhooks, which are required for kitkat to receive signals.
            </p>
          </div>

          <div className="flex flex-col gap-3 py-6 border-b border-[var(--border)]">
            <h3 className="text-base font-medium text-[var(--text-primary)]">&gt; what happens if a dex is down?</h3>
            <p className="text-sm font-mono-secondary text-[var(--text-secondary)] leading-[1.6]">
              kitkat retries failed executions automatically. if a dex remains unreachable, the trade is skipped for that exchange and logged. all other dexs continue executing normally.
            </p>
          </div>

          <div className="flex flex-col gap-3 py-6 border-b border-[var(--border)]">
            <h3 className="text-base font-medium text-[var(--text-primary)]">&gt; can i use my own trading strategy?</h3>
            <p className="text-sm font-mono-secondary text-[var(--text-secondary)] leading-[1.6]">
              absolutely. kitkat is strategy-agnostic. any pine script indicator or strategy that can fire a webhook alert will work — rsi, macd, custom scripts, or third-party signals.
            </p>
          </div>

          <div className="flex flex-col gap-3 py-6">
            <h3 className="text-base font-medium text-[var(--text-primary)]">&gt; how fast are executions?</h3>
            <p className="text-sm font-mono-secondary text-[var(--text-secondary)] leading-[1.6]">
              average execution time is under 3 seconds from webhook receipt to all 5 dexs filled. we process webhooks with priority queuing and parallel dispatch.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-[var(--border)] w-full"></div>

      {/* Final CTA */}
      <section className="flex flex-col items-center px-[120px] py-[120px] gap-8">
        <h2 className="text-[44px] font-bold text-[var(--text-primary)] text-center leading-[1.2] max-w-[800px]">
          stop manually farming.<br />let kitkat handle it.
        </h2>
        <p className="text-lg font-mono-secondary text-[var(--text-secondary)] text-center">
          set up in 5 minutes. start farming volume across 5 perp dexs today.
        </p>
        <button className="bg-[var(--accent-primary)] text-[var(--bg-page)] px-10 py-[18px] text-[15px] font-medium hover:opacity-90 transition-opacity">
          $ start_farming --free
        </button>
        <p className="text-xs text-[var(--text-muted)]">// non-custodial · no credit card required · cancel anytime</p>
      </section>

      {/* Divider */}
      <div className="h-[1px] bg-[var(--border)] w-full"></div>

      {/* Footer */}
      <footer className="px-[120px] py-[60px] flex flex-col gap-12">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[var(--accent-primary)]">&gt;</span>
              <span className="text-lg font-bold text-[var(--text-primary)]">kitkat</span>
              <span className="text-[11px] font-medium text-[var(--accent-primary)]">001</span>
            </div>
            <p className="text-[13px] font-mono-secondary text-[var(--text-secondary)]">
              automate your airdrop volume farming
            </p>
          </div>

          <div className="flex gap-20">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-medium text-[var(--text-primary)]">// product</h4>
              <a href="#features" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">features</a>
              <a href="#pricing" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">pricing</a>
              <a href="#" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">changelog</a>
              <a href="#" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">status</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-medium text-[var(--text-primary)]">// resources</h4>
              <a href="#docs" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">documentation</a>
              <a href="#" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">api_reference</a>
              <a href="#" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">guides</a>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-medium text-[var(--text-primary)]">// community</h4>
              <a href="#" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">discord</a>
              <a href="#" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">twitter</a>
              <a href="#" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">github</a>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-[var(--border)]"></div>

        <div className="flex justify-between items-center">
          <p className="text-[11px] text-[var(--text-muted)]">© 2025 kitkat labs. all rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-[11px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">privacy</a>
            <a href="#" className="text-[11px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
