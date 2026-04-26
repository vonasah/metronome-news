---
title: "EigenLayer After the FOMO: What Restaking Actually Built When the Hype
  Stopped"
description: The points-driven hype is gone. Puffer Finance lost 95% of its TVL.
  EigenLayer still holds $18B and is building real infrastructure. This is what
  restaking looks like grown up.
publishDate: 2026-04-26
author: raptor
category: defi
tags:
  - defi
  - eigenlayer
  - restaking
  - lrt
  - etherfi
  - kelp-dao
image: /uploads/_ae8459f2-55bf-4308-8f39-d4374f59c9e8-1-.jpg
featured: false
draft: false
---
In June 2024, the entire crypto industry was talking about restaking. EigenLayer, the protocol that pioneered the concept, had just crossed $20 billion in total value locked. Andreessen Horowitz had committed $100 million to its parent company, Eigen Labs. Liquid restaking protocols built on top of EigenLayer were posting hundreds of percent growth in TVL. Crypto Twitter was full of breathless posts about "the future of yield."

In April 2026, the conversation has changed entirely.

EigenLayer's TVL sits at approximately $18-19 billion as of February 2026, up from earlier lows but still below its peak. More importantly, the conversation has moved on. The points-driven hype that characterized restaking through most of 2024 has burned out. Several liquid restaking protocols that were briefly billion-dollar businesses are now zombies. And the actual product — earning extra yield by reusing staked ETH to secure other protocols — has settled into a quieter, more boring reality.

This is what restaking looks like after the FOMO. It's smaller. It's slower. It's more sustainable. And it's reshaping a meaningful portion of Ethereum's economic security in ways that are still being figured out in real time.

## What restaking actually is, in plain language

Restaking is the practice of using already-staked ETH to simultaneously secure additional protocols beyond Ethereum itself. The base concept: instead of just earning the standard 3-4% APY for staking ETH on the consensus layer, restakers also opt into "Actively Validated Services" (AVSs) — third-party protocols that pay extra yield in exchange for the additional security guarantees.

The trade-off is risk. Restakers can be slashed (penalized) if their delegated operator misbehaves on Ethereum or on any AVS they secure. The more services you opt into, the more potential reward and the more potential downside.

EigenLayer dominates this market. As of early 2026, the protocol holds approximately 93.9% market share in restaking, with around 4.3-4.65 million ETH restaked across more than 1,900 active operators. The competitors — Symbiotic, Karak — exist but have not seriously challenged EigenLayer's lead. The first-mover advantage in this category turned out to be enormous.

Most users do not interact with EigenLayer directly. They go through liquid restaking tokens, or LRTs.

## The LRT layer

When restaking became a recognizable category in 2024, a new generation of protocols launched specifically to make it accessible to non-technical users. These liquid restaking protocols (LRTs) accept ETH or liquid staking tokens like stETH, deposit them into EigenLayer on the user's behalf, and issue a tradeable receipt token (like eETH or ezETH) representing the position.

The user gets restaking yield plus the ability to use the receipt token elsewhere in DeFi — as collateral on Aave, in Pendle yield strategies, in Curve liquidity pools. EigenLayer gets aggregated capital from a much larger user base than would have arrived through direct deposits.

The LRT sector reached approximately $10 billion at its peak. Today the leaders look very different from where they were 18 months ago.

EtherFi leads with approximately $5.6 billion in TVL, having grown through both retail demand and institutional partnerships. The protocol's weETH token has become the most widely accepted LRT across major lending platforms. Kelp DAO holds second position. Renzo, which once held over $2 billion in TVL, has declined significantly.

Puffer Finance illustrates the brutal nature of the LRT shakeout. The protocol peaked at $1.3 billion in TVL during the points-farming boom of 2024. By early 2026, it had declined to approximately $62 million — a 95% drawdown.

The lesson is uncomfortable but consistent. Protocols that grew on points alone could not retain users when the points stopped paying out. Protocols that built deep DeFi integrations and institutional partnerships kept their TVL even as incentives wound down.

## Why the yield hasn't matched the promise

The most awkward fact about restaking in 2026 is that the actual yields are not as differentiated as the marketing suggested.

Standard Ethereum staking yields approximately 4-5% APY. Liquid restaking strategies typically deliver 5-7% APY in the current environment. The premium for taking on additional smart contract risk, slashing risk, and operational complexity is roughly 1-3 percentage points. For most retail users, that gap is meaningful but not transformative.

The high APY numbers cited during the 2024 hype cycle (15-40% range) were largely driven by token incentives — both from EigenLayer's own EIGEN points program and from individual LRT protocols' airdrop campaigns. Once those programs concluded or matured, the underlying yield from AVSs themselves remained modest.

EigenLayer is working to change this. The protocol's December 2025 ELIP-12 proposal introduced an Incentives Committee and a 20% fee on subsidized AVS rewards. EigenAI launched on mainnet in late 2025, providing verifiable AI inference as a service that pays operators in real fees rather than emissions. EigenCompute and other "Vertical AVSs" are being designed to generate sustainable revenue rather than relying on token issuance.

Whether these mechanisms translate into meaningfully higher yields for restakers remains to be seen. Current revenue numbers are modest — approximately $5.31 million per month as of early 2026 — though growing.

## The KelpDAO exploit and the systemic question

In April 2026, the restaking sector got a brutal reminder of the systemic risks involved.

A major exploit at Kelp DAO, one of the larger LRT protocols, resulted in nearly $300 million in losses. The cascade effect was significant: investors panicked, withdrawing approximately $5.4 billion in ETH from Aave (where many LRTs were held as collateral) within days. The incident exposed vulnerabilities in the bridged and wrapped asset mechanisms that underpin much of the restaking sector.

For users who had layered their LRTs across multiple DeFi protocols — staking ETH, then restaking through EigenLayer, then depositing the LRT in Aave for additional yield — the Kelp incident illustrated what "compounded smart contract risk" actually means in practice. Each layer adds potential failure points. A bug at any layer can cascade through the entire stack.

The Kelp incident did not destroy EigenLayer or restaking as a category. It did force a meaningful reassessment of how much yield premium justified taking on multi-layered protocol risk.

## Where the bet is moving

The most interesting trend in restaking in 2026 is the shift away from generic shared security and toward "Vertical AVSs" — purpose-built validation services for specific use cases.

The flagship example is EigenDA, which provides data availability for rollups using EigenLayer's restaked security. Rollups can post their transaction data through EigenDA at substantially lower cost than posting directly to Ethereum mainnet. The service has captured meaningful market share in the rapidly growing data availability sector, competing with Celestia and Avail.

EigenAI, which launched in late 2025, provides verifiable AI inference. The thesis is that as more AI applications need cryptographically verifiable computation, EigenLayer can serve as the security backbone. Whether this thesis translates into substantial revenue remains uncertain, but the early signals suggest real demand.

Several other Vertical AVSs are emerging — for cross-chain bridging, for oracle infrastructure, for specialized rollup services. Each generates fees that can flow back to restakers, although the actual revenue is still concentrated in a small number of leading services.

## The institutional question

Despite the volatility in the LRT sector, institutional interest in restaking has continued to grow. Puffer Finance partnered with Anchorage Digital to bring restaking products to institutional clients. Several other LRT protocols have begun offering institutional-grade products.

The thesis: institutional allocators looking for yield on their ETH holdings face a choice between vanilla 3-4% staking yields and the slightly higher (but riskier) restaking alternatives. For long-term ETH holders with appropriate risk tolerance, the restaking premium can be material at scale. For shorter-term holders or those with low risk tolerance, vanilla staking remains the better option.

This is the correct institutional framing. Restaking is not a magical yield enhancement; it's a risk-reward trade-off where the rewards are modest and the risks are real but typically manageable.

## What restaking has actually built

Despite the volatility, the boom-bust cycle, and the genuine risks, EigenLayer has succeeded at something important: it has created a marketplace where new protocols can rent Ethereum's security rather than bootstrap their own.

Before EigenLayer, every new blockchain service — bridges, oracles, data availability layers, rollup infrastructure — had to assemble its own validator set and economic security from scratch. This was prohibitively expensive for most projects and introduced fragmented security across the ecosystem.

With EigenLayer, new services can launch with security inherited from approximately $18 billion in restaked ETH. The threshold for launching a credible decentralized service has dropped dramatically. Whether or not individual restakers earn outsized returns, the broader ecosystem has gained access to security infrastructure that didn't exist three years ago.

This may be EigenLayer's most lasting contribution. The yields will fluctuate. The LRT leaderboard will keep reshuffling. The next exploit will inevitably happen. But the underlying primitive — that Ethereum's economic security can be productively reused across multiple services — is now baked into how new crypto infrastructure gets built.

For investors, the lesson is the one DeFi keeps teaching: the protocols that built lasting value were the ones with real product-market fit, not the ones that won points campaigns. EtherFi, Kelp, EigenLayer itself — these survive because they produce something useful. The dozens of LRT clones that died produced nothing except short-term yield.

The FOMO is over. What's left is the actual business. That, in the end, is the more interesting story.

---

*This is news analysis based on data from DefiLlama, BlockEden, DL News, and protocol disclosures. It is not financial advice. Restaking carries smart contract, slashing, and operational risks that compound across protocol layers.*
