---
title: "Glamsterdam: Ethereum's Biggest Bet on L1 Since The Merge"
description: Glamsterdam ships in June 2026 with parallel processing, 78% lower
  gas, and 10,000 TPS targeted on L1. Ethereum is finally betting on itself
  instead of letting L2s win.
publishDate: 2026-04-26
author: raptor
category: ethereum
tags:
  - ethereum
  - glamsterdam
  - upgrade
  - vitalik
  - l1-scaling
  - epbs
image: /uploads/_76aa2ff9-273a-42f7-ac78-43b9be337bfb-1-.jpg
featured: false
draft: false
---
For most of the past three years, Ethereum's development priorities have been pointed at Layer 2 networks. The Dencun upgrade in March 2024 introduced blob space specifically to lower L2 settlement costs. Pectra and Fusaka in 2025 continued the L2-centric pattern. The roadmap was clear: Ethereum mainnet would become a settlement and security layer, while applications and users moved to cheaper L2s like Arbitrum, Optimism, and Base.

In the first half of 2026, that strategy is being directly challenged by Ethereum's own next upgrade.

Glamsterdam, scheduled to ship around June 2026, is the most aggressive Layer 1-focused upgrade Ethereum has attempted since The Merge. It targets parallel transaction processing, a 78.6% reduction in gas fees, throughput up to 10,000 transactions per second on the base layer, and a fundamental restructuring of how blocks are built and validated.

The implicit thesis is uncomfortable for everyone holding L2 token bags: Ethereum mainnet is going to compete directly with its own scaling layer.

For ETH holders trying to make sense of why the token sits at approximately $1,920 — down over 45% from October 2025 highs — Glamsterdam is the technical event that could either revive Ethereum's value proposition or confirm the L1 cannibalization problem is permanent.

## What Glamsterdam actually does

Glamsterdam centers on three structural changes that, together, fundamentally alter Ethereum's L1 economics.

The first is **parallel execution**. Ethereum currently processes transactions one at a time, in strict sequence. This has been a significant scalability bottleneck — even when transactions touch entirely unrelated parts of the state, the network can't process them simultaneously. EIP-7928, called Block-Level Access Lists (BALs), changes this by requiring transactions to declare in advance which storage slots they will read or write. With this declaration available, the network can identify which transactions are independent and process them in parallel.

The result, when fully implemented, could push Ethereum L1 throughput from approximately 1,000 TPS today to roughly 10,000 TPS — a tenfold increase. The gas limit per block will rise from 60 million to an initial 100 million and eventually 200 million.

The second is **gas repricing**. EIP-7904 realigns gas costs with the actual computational resources each operation consumes on modern hardware. Many current gas prices were set years ago and reflect outdated assumptions about execution costs. The recalibration is projected to reduce fees by approximately 78.6% for both simple ETH transfers and complex smart contract interactions.

In practical terms: a Uniswap trade that costs $3-8 in gas today could drop below $1 after Glamsterdam. A complex DeFi operation involving multiple contract calls would see proportionally larger savings. The economics of using Ethereum L1 directly become substantially more attractive.

The third is **Enshrined Proposer-Builder Separation (ePBS)** via EIP-7732. This is more technical, but the practical implication is significant. Currently, Ethereum's block-building market relies on trusted third-party intermediaries called relays. Validators effectively trust these relays not to manipulate or reveal block contents. Under ePBS, the proposer-builder relationship moves into the protocol itself: builders cryptographically seal their blocks and commit to a bid, validators select the highest bid without seeing transaction contents, and the block is only revealed after the commitment is locked in.

The result is a block-building market that operates under consensus rules rather than off-protocol trust. This is significant for institutional adoption — many institutional players have been cautious about Ethereum's MEV (maximum extractable value) infrastructure precisely because of its reliance on trusted relays. ePBS makes the entire process auditable and rule-bound.

## The L1-vs-L2 question

Glamsterdam directly raises a question that the Ethereum community has been quietly debating for over a year: what happens to L2 networks when L1 becomes substantially faster and cheaper?

The honest answer is that nobody knows yet. Three scenarios are possible.

**Scenario 1: L1 reclaims activity from L2s.** If Ethereum mainnet can process 10,000 TPS at sub-dollar fees, many users may simply move back to L1. The friction of bridging to L2s, dealing with separate liquidity pools, and managing multi-chain wallet states could become unnecessary for most use cases. L2 networks would still serve specialized roles (high-frequency trading, gaming, application-specific rollups) but would lose the bulk of general-purpose activity.

**Scenario 2: L1 and L2 coexist with new specialization.** The cheaper L1 makes Ethereum more attractive for use cases that need security and finality, while L2s continue to dominate use cases that need extreme low cost or high throughput. Each layer captures a different market segment without major reshuffling.

**Scenario 3: L1 improvements primarily benefit L2s.** Cheaper L1 settlement fees mean L2s can pass even lower costs to their users. The L2 economic model improves, and L1 still doesn't capture meaningful retail activity. The fee revenue cannibalization problem persists.

The data from prior upgrades favors scenario 2 or 3. Dencun in March 2024 dramatically lowered L2 costs, but it did not redirect activity back to L1. Most users prefer the L2 experience once they're set up there. Switching costs are real even for technical users.

But Glamsterdam is materially more aggressive than Dencun. The 78% fee reduction is substantially larger than Dencun's blob-space savings. The 10x throughput increase changes the calculus for many applications. If any upgrade is going to shift activity back to L1, this is the one.

## The ETH price thesis

The most interesting investor question is whether Glamsterdam catalyzes a meaningful re-rating of ETH itself.

Historical precedent is mixed. The Merge in September 2022 saw ETH rally over 100% in the months before activation, then drop roughly 15% post-fork. Shapella in April 2023 defied that pattern entirely and rallied after the upgrade. Dencun in Q1 2024 produced approximately a 60% pre-fork gain. No two upgrades have produced identical price action.

The pre-Glamsterdam setup looks structurally different from previous cycles. Approximately 37 million ETH (30.6% of circulating supply) is locked in staking, with over 3 million more in the validator entry queue. Spot Ethereum ETFs have begun showing positive inflows after several months of net outflows. BlackRock's existing Ethereum ETF holds roughly $11 billion in ETH, and the firm has filed for a staked ETH ETF that would distribute yield to shareholders, with a final SEC decision expected by late March 2026.

The bullish case: Glamsterdam directly addresses Ethereum's core valuation problem (L2 cannibalization), the staking ratio creates structural supply scarcity, ETF inflows are reaccelerating, and rate cuts in H2 2026 could provide a macro tailwind.

The bearish case: Glamsterdam may be priced in (the upgrade has been telegraphed for over a year), L2 stickiness may prevent meaningful L1 reactivation, and ETH's structural problems (declining burn rate, dilution from L2 economics, Solana/alt-L1 competition) won't be solved by a single upgrade.

Polymarket-style prediction markets are pricing the probability of Ethereum trading above $3,000 before Glamsterdam at roughly 40%, suggesting a market that expects positive movement but isn't fully convinced.

## What's queued behind Glamsterdam

Glamsterdam is the first move in a coordinated four-fork performance strategy extending through 2027.

After Glamsterdam, Hegota is scheduled for the second half of 2026. Its headline feature is Verkle Trees — a fundamentally different data structure that could reduce node storage requirements by approximately 90% and enable stateless clients for the first time in Ethereum's history. This would dramatically lower the hardware barrier to running a node, potentially reversing the slow centralization of validation infrastructure around well-capitalized operators.

Hegota is also expected to include the first migration steps toward post-quantum cryptography, addressing the longer-term threat covered in our previous analysis. Several proposals related to FOCIL (Fork-choice Enforced Inclusion Lists) — which would give validators the power to force the inclusion of transactions builders might ignore — are slated for either Glamsterdam or Hegota.

Beyond Hegota, the roadmap continues with proposals for reduced slot times, multidimensional gas metering, and PeerDAS for 1 GB/s data availability. The cumulative trajectory is toward an Ethereum that processes substantially more activity at substantially lower cost while maintaining decentralization.

Whether all of this ships on schedule is genuinely uncertain. Ethereum hard forks have historically slipped by months. Glamsterdam itself has only completed Devnet-4 testing as of early 2026, with Devnet-5 in progress. June 2026 is aspirational, not committed.

## The bigger picture

Glamsterdam is Ethereum betting on itself.

For most of 2024 and 2025, the network's posture was passive: let L2s scale, let value migrate, accept that L1 would become a settlement layer. The L1 cannibalization problem we covered in earlier analysis was the predictable result of that posture.

Glamsterdam represents the opposite stance. Rather than ceding general-purpose activity to L2s, Ethereum is upgrading its own base layer to compete directly. The technical changes are aggressive. The political signal is clear: the Ethereum Foundation is no longer comfortable with the status quo.

For ETH holders, this is the most positive development of the past 18 months. The technical solutions to Ethereum's economic problems exist. They're being implemented. They're scheduled to ship within months.

Whether Glamsterdam actually reverses the cannibalization trend depends on adoption — whether users and applications respond to the cheaper, faster L1 by moving back from L2s. That's a behavioral question, not a technical one. Behavioral questions have less predictable answers than engineering ones.

What's certain is that the ETH price entering the upgrade — currently in the $1,900-$2,400 range — does not appear to fully reflect what's about to ship. Either the market is right and the upgrade fails to drive meaningful change, or the market is asleep and Glamsterdam catalyzes the kind of repricing that previous major upgrades have produced.

The chart will tell us. Probably soon.

---

*This is news analysis based on data and reporting from ethereum.org, Bitfinex blog, Phemex, BlockEden, and Coinpedia. It is not financial advice. Hard fork timelines are subject to delay, and price predictions are inherently uncertain.*
