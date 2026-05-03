---
title: April 2026 Just Became DeFi's Most-Hacked Month in History
description: DeFi lost $625M across 30 separate exploits in April 2026 — the
  most incidents ever recorded in a single month. North Korea took 75% of it.
  Two attacks did 93%. Here's what actually happened.
publishDate: 2026-05-01
author: raptor
category: bitcoin
tags:
  - DeFi
  - hacks
  - April 2026
  - Drift Protocol
  - KelpDAO
  - Lazarus Group
  - North Korea
  - bridges
  - Aave
  - security
image: /uploads/april-2026-just-became-defi-s-most-hacked-month-in-history.webp
featured: true
draft: false
---
April closed as the worst month for cryptocurrency hacks in the industry's recorded history. Not by dollar value — that record still belongs to February 2025, when North Korea's Lazarus Group walked out of Bybit with $1.4 billion in a single attack. April 2026's distinction is structural and arguably more concerning: it produced 28 to 30 separate exploits, more incidents than any month DefiLlama has ever tracked. The pace worked out to nearly one attack per day across 30 days.

DefiLlama's final figures, published April 30, put the month's total losses at roughly $625 million across 30 incidents. CertiK's parallel tally landed slightly higher at $650.9 million, citing the same primary attacks but counting smaller exploits CertiK's monitoring caught and DefiLlama excluded. Two breaches alone — Drift Protocol on April 1 and KelpDAO on April 18 — accounted for roughly 93% of the dollar volume. Everything else, the long tail of 26 to 28 smaller incidents, made up the remaining 7%.

The number that matters more than either total is comparative: April 2026 lost roughly four times what the entire first quarter of 2026 produced. Q1 saw 19 incidents and $165.5 million in losses. April compressed nearly that entire quarter's pain into 30 days, and then doubled it.

## What broke

The Drift Protocol exploit on April 1 cost $285 million. The attack was not a smart contract bug. According to TRM Labs, the perpetrators were UNC4736, a North Korean state-sponsored group that spent roughly six months running a social engineering operation against Drift team members through a fake LinkedIn recruiting campaign. The attackers eventually compromised an admin key. They then deployed a fake token called CarbonVote (CVT), seeded with $500 in Raydium liquidity, and wash-traded its price to nearly $1. With CVT now appearing as a legitimate, valuable asset to Drift's pricing oracle, the attackers used it as collateral to drain the protocol's vaults.

Drift's contracts had been audited twice, including by ClawSecure as recently as February 2026. The vulnerability was operational, not technical. The audits could not have caught it.

The KelpDAO breach on April 18 took $292 million. The vector was different — a message-spoofing exploit targeting a LayerZero V2 bridge route configured as a single point of failure for KelpDAO's rsETH wrapped asset. The attacker submitted a forged cross-chain message that the bridge's verification logic accepted as legitimate. The bridge released 116,500 rsETH — roughly 18% of the token's circulating supply — to attacker-controlled addresses across more than 20 different chains.

CoinDesk's analysis identified the underlying flaw as "upgrade-introduced" — a defect that emerged from interaction between a recent contract upgrade and existing Merkle verification logic. The bug had survived two audits because it only manifested under specific interaction patterns auditors had not modeled. The class of vulnerability has become the most common attack vector in 2026.

Together those two incidents stole $577 million. The remaining $48 million to $73 million across the other April attacks looks small in comparison but tells its own story.

## The long tail

The smaller incidents revealed how broad the attack surface has become.

Rhea Finance lost $18.4 million on April 10. The attacker used flash loans to manipulate prices and drain a liquidity pool. Tether managed to freeze $3.29 million of the proceeds before it could be moved off-ramp. The transaction pattern was consistent with what Chainalysis flagged as a possible exit scam rather than a pure external attack.

Grinex was drained for $15 million in mid-April through a vault misconfiguration. Wasabi Protocol lost $5 million. Volo Vault on Sui lost $3.5 million from three vaults holding WBTC, XAUm, and USDC; the protocol froze remaining funds and recovered approximately $500,000 through coordination with the Sui Foundation. Sweat Foundation lost $3.5 million. Hyperbridge took $2.5 million. CoW Swap lost $1.2 million to a domain-hijacking attack on its frontend infrastructure. Aftermath Perps lost approximately $1.14 million through an exploit in its Sui-based perpetuals module. Purrlend lost $1.5 million on a weekend after a suspicious multisig transaction granted unauthorized bridge access. Silo Finance lost $392,000 to a misconfigured oracle on April 3.

A flash loan attack on BNB Chain pulled $1.6 million by manipulating reserves on a low-liquidity pool. Zerion reported a $100,000 loss to a frontend exploit similar to CoW Swap's. Smaller incidents — domain typosquatting, vault permission errors, oracle latency exploits — added up to another $5 million across the month's tail.

April 25 added a different kind of attack to the record. Litecoin suffered a 13-block chain reorganization attack that exploited its MWEB privacy layer. The reorg enabled double-spend attempts on cross-chain swaps, marking the first time in 2026 that a major Layer 1 had its base consensus successfully manipulated rather than its smart contract layer. The dollar impact was limited — the affected swaps were caught quickly enough that most attacker positions could not be settled — but the technical implication was significant. A reorg attack on a top-30 cryptocurrency had not been considered economically feasible since 2019.

## Where the money went and where the money came from

TRM Labs published a notable attribution figure during the final week of April. Through the first four months of 2026, North Korean state-backed hacking units accounted for roughly 75% of all crypto losses — approximately $577 million out of $759 million in industry-wide theft. Drift, KelpDAO, and the smaller February attacks attributed to North Korean clusters together formed the bulk of that share.

Ari Redbord, TRM's Global Head of Policy and Government Affairs, framed the change in posture during an industry conference: the North Korean campaign in 2026 is sharper rather than broader. Operations are taking longer to set up — the Drift social engineering operation reportedly ran for six months — and yielding higher returns per attack than the more diffuse hacking patterns of 2023 and 2024. The Lazarus Group cluster has historically funded a meaningful share of North Korea's foreign currency reserves. The 2026 pace, if maintained, would represent the most successful year for state-sponsored crypto theft on record outside the 2022 Ronin and 2025 Bybit single-event outliers.

The capital flight after KelpDAO went beyond the immediate exploit. According to data shared by multiple analysts, more than $14 billion in total value locked exited DeFi protocols within days of the breach, with withdrawals concentrated in bridge platforms and lending markets that had accepted rsETH or related restaked assets as collateral. Aave faced potential bad debt of up to $230 million. Aave's response — the "DeFi United" coalition that pulled together $200 million in commitments from Mantle, MakerDAO, and others to backstop the protocol — prevented liquidation cascades but did not reverse the capital flight.

## Why April happened the way it did

The structural argument from security researchers is that DeFi's defensive posture has not kept pace with its growth or its attackers' sophistication.

Total DeFi TVL crossed $120 billion in early 2026. Restaking protocols added tens of billions in new smart contract complexity over the past 18 months. Layer-2 networks proliferated, with each new chain integration creating additional bridge routes that needed independent security models. The number of high-value targets is several multiples larger than it was in 2024.

The attack methodology has shifted in parallel. Earlier years of DeFi exploits were dominated by smart contract bugs — reentrancy, integer overflow, unchecked external calls. The industry responded. Audit standards improved, bug bounty programs scaled, and formal verification became routine for major protocols. That hardening did not eliminate the threat. It moved it.

Attackers have moved toward bridge layers, oracle systems, signing infrastructure, multisig key holders, and frontend domain controls. Those attack surfaces are substantially harder to audit than smart contracts. The Drift exploit involved no contract bug; the contracts behaved exactly as designed. The KelpDAO bridge passed audits because the vulnerability only manifested in post-upgrade interaction patterns. The Sky Mavis Ronin breach in 2022 involved a forgotten allowlist on a validator. The Bybit breach in 2025 involved a compromised developer machine at a third-party multisig provider.

These are operational failures, not technical ones. They are produced by humans, configurations, and processes — exactly the layer where AI-assisted social engineering and improved attacker tooling have made the largest gains over the past 24 months. Several security researchers cited improvements in AI-assisted phishing kits and code analysis tools as factors increasing attack volume in 2026.

## What protocols are doing

The April incidents have triggered a wave of responses across the DeFi sector.

Several major lending protocols have implemented emergency rate limits on cross-chain bridge flows, capping the dollar volume of bridge withdrawals over rolling time windows. Aave's DeFi United coalition has been positioned as a template for ecosystem-level mutual backstops, with similar commitments announced across other major lending markets. Audit firms including ClawSecure, Trail of Bits, and CertiK have begun expanding scope to include post-upgrade behavioral testing rather than purely pre-deployment static review.

Insurance products are gaining adoption. Protocols including Nexus Mutual and InsurAce have reported substantial increases in coverage demand following the April incidents, with several previously DeFi-skeptical institutional desks now requiring insurance coverage as a precondition for treasury deployment.

Jefferies, in a note published April 22, warned that the April hacks could temporarily slow Wall Street's appetite for DeFi tokenization projects. The note specifically cited bridge risk and operational security failures as the categories regulated institutions are least equipped to assess independently. Whether the slowdown is temporary or structural depends on whether May and June produce additional incidents at April's pace.

## What happens next

Three trajectories are worth tracking through Q2 2026.

The first is whether April was an outlier or a new baseline. DefiLlama's data going back to 2021 shows that record months tend to cluster — the worst month in any given year is typically followed by another above-average month within 60 days, as attackers capitalize on documented playbooks before defenders deploy mitigations. If May produces 15 or more incidents, April is the new baseline. If the count drops back into the typical 8 to 12 range, April was driven by specific Lazarus operations completing simultaneously and is not a permanent shift.

The second is bridge architecture. Native asset bridges like Circle's CCTP and intent-based models from Across, deBridge, and others are gaining adoption. Migration of existing protocols from lock-and-mint models to native or intent-based architectures is slow but accelerating after KelpDAO. The protocols that move fastest will reduce their attack surface meaningfully. The ones that remain on legacy bridges through the rest of 2026 should expect continued targeting.

The third is the Lazarus campaign itself. North Korean operations are constrained by available skilled operators and by the friction of cashing out stolen funds. The OFAC-sanctioned wallets associated with Lazarus operations have made on-ramp and off-ramp activity progressively harder, with more exchanges flagging and freezing flows linked to known clusters. Tether's ability to freeze stolen USDT — demonstrated again in the Rhea Finance recovery of $3.29 million — is becoming a meaningful operational constraint on attackers. Whether North Korean operations can sustain April's pace through summer depends partly on whether the recovered funds make the operations economically viable on a risk-adjusted basis.

The longer-term question DefiLlama's lifetime data raises is harder to answer. Cumulative crypto hack losses have now crossed $16.5 billion since 2017, with DeFi-specific losses near $7.7 billion and bridge exploits accounting for approximately $2.9 billion. The 2026 pace adds to that total faster than any year except 2022 and 2025. Each successful exploit teaches the next attacker something new. Each new bridge route, restaking primitive, and Layer-2 deployment expands the surface area faster than security tooling can keep pace.

The defenders are learning. The attackers are learning faster. April 2026 is the first month where that gap produced a 30-incident result. It is unlikely to be the last.

---

*This is news analysis based on data from DefiLlama, CertiK, TRM Labs, CoinDesk, BeInCrypto, Phemex, Yahoo Finance, Crypto.news, Bitcoin.com News, GNcrypto, Cryptopolitan, Coinpedia, LiveBitcoinNews, Aave Labs and LlamaRisk's joint incident report, and on-chain analysis from independent researchers including Stacy Muur and 0xALTF4. Loss figures reflect publicly reported numbers as of April 30, 2026, and may be revised as recovery efforts and attribution work continues. This is not financial or security advice.*
