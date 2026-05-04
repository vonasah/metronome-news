---
title: Telegram Just Took Over TON. Pavel Durov's Plan Goes Public
description: Pavel Durov cut TON fees 6x to $0.0005. Telegram became the chain's
  primary validator. The TON Foundation is being replaced. The messaging app is
  no longer a partner — it's now the operator.
publishDate: 2026-05-04
author: raptor
category: web3
tags:
  - crypto trading
  - losses
  - statistics
  - Polymarket
  - retail traders
  - leverage
  - day trading
  - risk management
  - behavioral finance
image: /uploads/ton-durov-mtonga-telegram-validator-fee-cu.webp
featured: true
draft: false
---
Pavel Durov posted on Telegram on May 3 that TON network fees had dropped sixfold to roughly $0.0005 per transaction — and that the next step is for Telegram itself to replace the TON Foundation as the chain's primary driving force, becoming its largest validator. The two announcements taken together describe what is arguably the most consequential structural change in the TON ecosystem since the network's 2018 launch. Telegram is no longer treating TON as a separate blockchain it spun out under regulatory pressure. Telegram is now treating TON as core infrastructure of its own consumer product.

The change is happening on a tight timeline that Durov has been publicly committing to under the framing "Make TON Great Again" — abbreviated as MTONGA in his communications. The April 9 Catchain 2.0 upgrade dropped block times from 10 seconds to 400 milliseconds. The April 30 Telegram validator stake of 2.2 million TON tokens (about $2.88 million at the time) put the messaging app's parent company in the consensus layer. The May 3 fee cut to $0.0005 per transaction made TON one of the cheapest chains operating at scale anywhere in crypto. The next item on the public roadmap is full-fee elimination — Durov has stated that "soon most transactions go fully feeless. Zero commission."

For a chain that spent five years working through regulatory recovery after the SEC blocked its 2020 launch, the velocity of change in 2026 represents a categorically different posture from anything TON has shown before.

## What changed and what it means

The fee reduction is the most immediately visible change for users. TON transaction fees previously sat around 0.00234 TON (~$0.003) per transaction, with variable pricing during network congestion. After the May upgrade, fees dropped to 0.000388 TON per TON send and 0.00104 TON per USDT send — roughly $0.0005 to $0.0013 depending on transaction type. Critically, the new fees remain fixed regardless of network load, eliminating the spike pricing that had plagued mini-app activity during high-demand periods.

The economic implication is that TON's micropayments thesis becomes operational rather than aspirational. The 950 million-user Telegram audience can now move USDT or TON between wallets for fractions of a cent, predictably, regardless of network congestion. Mini-apps inside Telegram — the click-to-earn games, lightweight DeFi tools, and creator monetization products that have driven TON's user growth — operate on transaction economics that finally support the use case they were designed for.

The Catchain 2.0 upgrade that landed April 9 was the technical foundation for everything that followed. Block production accelerated from 10 seconds to 400 milliseconds. Throughput climbed approximately 10x. Sub-second finality became standard. The technical specifications now compete directly with Solana's performance metrics rather than being categorized as a slower L1.

The Telegram validator stake on April 30 is the structural change that matters most for the next phase. 2.2 million TON staked is small in absolute dollar terms — under $3 million — but the validator wallet reportedly holds 28.2 million TON in reserve, signaling substantial committed capital ready to scale the validator position. More importantly, the move converts Telegram from a downstream consumer of the TON network into an upstream operator of consensus. The relationship between the messaging app and the chain is no longer "Telegram uses TON for payments." The new framing is "Telegram operates TON as its native settlement layer."

## The consolidation Durov is announcing

The May 3 post Durov referenced — that Telegram replaces the TON Foundation as the network's primary driving force — formalizes a transition that has been visible for months. The TON Foundation has historically been the network's nonprofit governance and development entity, separate from Telegram following the 2020 SEC settlement that forced the messaging app to legally distance itself from the chain.

That separation produced specific governance and operational characteristics. The TON Foundation managed roadmap decisions, validator coordination, and ecosystem grants independently of Telegram's commercial priorities. Developers building mini-apps for Telegram could rely on TON as infrastructure without committing to Telegram-specific business models. The independence was a feature, not a bug — it allowed TON to develop a credible "neutral chain" positioning that pure corporate blockchains lacked.

The 2026 shift inverts that structure. Telegram becoming the primary driving force and largest validator means commercial alignment between the messaging app and the chain becomes explicit. The TON Foundation's role compresses from network steward to ecosystem partner. Roadmap priorities will increasingly reflect Telegram's product needs rather than abstract decentralization goals.

The trade-off is real. The benefit is that Telegram's resources, distribution, and engineering capacity get applied directly to TON development. The cost is that TON's positioning as a neutral, decentralized infrastructure layer weakens as one entity takes operational and financial control. Whether that trade-off is positive depends on whether you weight execution velocity above decentralization purity. Durov is clearly betting that users care more about working products than abstract governance structures.

## What's actually shipping

The MTONGA roadmap is unusually specific about deliverables and timelines. The H1 2026 items include WalletKit (shipped), AppKit Alpha (shipped), TON Pay 1.0 (shipped), Builders Portal 2.0 (shipped), and several still-ahead items: AgenticKit (developer preview launched), Rust Node v1, TON Factory, TON Pay 2.0, full AppKit release, Tolk developer tools, and the new TON consensus layer.

AgenticKit is worth specific attention. The toolkit allows AI agents to operate non-custodial wallets within the social media platform, executing payments and DeFi transactions without requiring manual approval for every action. Each smart contract holds two keys — one for user control, one for agent control — enabling autonomous AI to perform swaps and pay fees independently within parameters the user defines. The architecture sits in the same product category as Coinbase's x402, OKX's Agent Payments Protocol, and Visa's Trusted Agent Protocol — but with native integration into Telegram's 950 million-user base, which no other agent infrastructure has matched.

Revolut listed NOT and DOGS — TON's most viral memecoins from the 2024-2025 mini-app cycle — on April 30, putting the tokens in front of approximately 70 million European retail users. Notcoin and Catizen both crossed tens of millions of users during their respective mini-app cycles. Revolut access removes one of the larger friction points for casual European buyers. TON itself has been tradable on Revolut for some time, but the memecoin additions widen the on-ramp considerably.

Rakuten added TON to spot trading on its Japanese platform in April, opening a gateway for the company's 44 million Japanese users similar to the XRP integration announced earlier in the month. The Japanese exposure for TON is structurally different from Telegram's existing user base — Telegram's Japanese penetration is limited, but Rakuten's reach there is comprehensive.

xStocks — Kraken-owned tokenized equities platform — expanded to TON months before the broader announcements, bringing tokenized US equities to the ecosystem. The integration includes support for Telegram's non-custodial Wallet, allowing users to hold tokenized US stocks directly within the chat app.

## The risks

Three structural concerns are worth acknowledging.

The first is validator inflation. The Catchain 2.0 upgrade increased TON's annual inflation rate from approximately 0.6% to 3.6% as a result of faster block production and adjusted validator rewards. That is substantially higher inflation than Bitcoin (~1.7%) or post-Merge Ethereum (typically below 1% net of EIP-1559 burns). Higher inflation creates dilution pressure on TON token holders unless network usage growth meaningfully exceeds the inflation rate. The fee reduction is designed to drive that usage growth, but the math is not automatic.

The second is centralization. Telegram becoming the primary driving force and largest validator concentrates network operational and financial control in a single private entity. The "decentralized" framing weakens. For users who chose TON specifically because it was infrastructure-neutral, the consolidation may shift their preference toward chains with more distributed governance.

The third is regulatory. Telegram's deeper operational integration with TON re-creates the specific risk pattern that triggered the 2020 SEC action against the original Telegram Open Network launch. The 2026 regulatory environment is substantially more crypto-friendly than 2019-2020, but the structural pattern that previously drew enforcement attention — Telegram raising capital tied to TON token economics — could become relevant again if regulators interpret the consolidation as effectively undoing the 2020 settlement's separation.

## What happens next

Three trajectories are worth watching through Q3 2026.

The first is the fee elimination timeline. Durov has stated that "soon most transactions go fully feeless." The exact mechanism for sustaining validator rewards under zero-fee transactions has not been publicly specified beyond inflation-funded validator subsidies. If the transition produces a meaningful increase in transaction volume — measured by daily active wallets, USDT transfer volume, or mini-app session counts — the model works. If volume growth lags behind validator dilution, the economics break.

The second is the AgenticKit adoption arc. AI agent infrastructure is one of the most competitive categories in crypto right now, with Coinbase, OKX, NEAR, and Visa all launching adjacent products in the past four months. TON's native integration with Telegram is its differentiating advantage. Whether developers build agent-native products that leverage the integration will be visible within 60-90 days of AgenticKit reaching wider release.

The third is the TON Foundation's evolved role. As Telegram becomes the primary driver, the question of what the TON Foundation does next remains open. The Foundation continues to manage validator coordination, ecosystem grants, and developer relations, but its operational scope is narrowing. Whether the Foundation pivots toward focusing on specific verticals — DeFi, gaming, identity — or maintains broad ecosystem stewardship under reduced authority will signal how the relationship between the chain and Telegram ultimately stabilizes.

The TON network in 2026 looks substantially different from any prior point in its history. Faster blocks. Cheaper fees. Telegram operating consensus. Memecoins on Revolut. Tokenized stocks on xStocks. AI agents through AgenticKit. The infrastructure is real and the user base is substantial. The question is whether the consolidation around Telegram produces the mainstream adoption the network has spent five years pursuing, or whether the trade-off in decentralization eventually invites either regulatory or community pushback.

Both outcomes remain plausible. The next two quarters will indicate which one is materializing.

---

*This is news analysis based on data from CoinDesk, Cryptopotato, BSC News, Phemex, CoinMarketCap, the official TON Foundation roadmap, Pavel Durov's public X posts and Telegram channel, and on-chain analytics tracking TON network performance and validator distribution. Fee, performance, and validator metrics reflect publicly available data as of early May 2026 and are subject to revision. This is not financial advice.*
