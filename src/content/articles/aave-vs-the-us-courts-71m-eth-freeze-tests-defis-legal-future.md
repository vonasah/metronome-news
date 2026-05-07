---
title: "Aave vs the US Courts: $71M ETH Freeze Tests DeFi's Legal Future"
description: Arbitrum DAO votes today on releasing $71M frozen ETH to KelpDAO
  victims. A NY law firm wants the same funds to satisfy $877M in North Korea
  terrorism judgments.
publishDate: 2026-05-07
author: raptor
category: defi
tags:
  - Aave
  - Arbitrum
  - KelpDAO
  - North Korea
  - Lazarus
  - DeFi United
  - governance
  - Stani Kulechov
  - court battle
  - restraining notice
image: /uploads/aave-arbitrum-eth-freeze-court-battle-may-26.webp
featured: true
draft: false
---
Arbitrum DAO's vote on whether to release 30,766 ETH worth approximately $71 million to Kelp DAO exploit victims closes today, May 7. The temperature check has been overwhelmingly favorable since voting opened on April 30, with 16.9 million ARB tokens cast in favor within the first hour of voting and almost no opposition recorded since. Under normal DeFi governance circumstances, that vote would clear cleanly and the funds would move into the DeFi United recovery initiative coordinated by Aave, Kelp DAO, LayerZero, EtherFi, and Compound.

These are not normal circumstances. On May 1, just three days into the vote, a New York law firm representing US nationals with terrorism judgments against North Korea served Arbitrum DAO with a restraining notice. The firm — Gerstein Harrow LLP — argued that because the Kelp DAO exploit was likely conducted by North Korea's Lazarus Group, the recovered ETH should be seized to satisfy approximately $877 million in default judgments their clients hold against North Korea for prior terrorism cases. Aave LLC filed an emergency motion to vacate the restraining notice on May 4. As of publication, no court ruling has been issued.

The legal question has no real precedent. The structural question it creates for DeFi governance is one of the most consequential to emerge in the past two years.

## What actually happened

The chain of events traces back to the April 18 KelpDAO bridge exploit, which drained approximately $292 million in rsETH from multiple lending protocols. The attacker exploited a vulnerability in a LayerZero V2 messaging route that Kelp DAO had configured as a single point of failure. Forged cross-chain messages caused the bridge's verification logic to release 116,500 rsETH — roughly 18% of the token's circulating supply — to attacker-controlled addresses across more than 20 different chains.

The attacker then used the unbacked rsETH as collateral on Aave (Ethereum Core and Arbitrum), Compound, and Euler, borrowing approximately $236 million in WETH, wstETH, and other liquid assets against those positions. The cascade produced direct lending losses across multiple protocols and threatened a contagion event that the broader DeFi infrastructure was structurally unprepared for.

Arbitrum's Security Council moved on April 20 to freeze 30,766 ETH (worth roughly $71 million at current prices, $92 million at peak) linked to the exploit. The funds were moved into a DAO-controlled wallet that requires governance authorization to release. The Council's action was the first major test of an L2 emergency governance power that had been theoretical since 2023 — the precedent it set has implications well beyond this specific incident.

Aave Labs led the proposal to release the frozen ETH into DeFi United, a coordinated industry recovery effort. The proposal drew immediate support: more than 102,000 ETH had been pledged toward covering an original 163,200 ETH shortfall, with additional commitments from Mantle (30,000 ETH), MakerDAO, Golem Foundation, and others. Total industry commitments now exceed $327 million in pledged ETH and stablecoins.

The Snapshot temperature check vote opened April 30. Within the first hour, 16.9 million ARB tokens had voted yes with no opposition. The trajectory was overwhelmingly favorable for release. That trajectory hit the legal restraining notice on May 1.

## The Gerstein Harrow argument

Gerstein Harrow's argument relies on a chain of attribution and inference. The firm represents US nationals who hold default judgments totaling more than $877 million against North Korea for terrorism-related claims. North Korean assets sufficient to satisfy these judgments have historically been difficult to locate and seize. The KelpDAO exploit's suspected attribution to Lazarus Group — North Korea's primary state-sponsored hacking unit — created the legal opening Gerstein Harrow chose to pursue.

The firm's argument: the recovered ETH should be considered "property in which a terrorist party has an interest" under US terrorism judgment enforcement statutes, since the assets briefly came under the control of an actor linked to a state sponsor of terrorism. Under that interpretation, the funds become legally seizable by parties holding existing terrorism judgments against the relevant state, taking precedence over the DeFi protocol's recovery efforts.

Gerstein Harrow has previously pursued similar actions against assets allegedly tied to North Korea on platforms including Bybit (following the February 2025 $1.5 billion hack) and the Heco Bridge incident. The pattern is consistent: the firm targets assets that may have transited through North Korean control, regardless of where they ultimately ended up or whether the rightful owners have been identified.

The structural issue is that Gerstein Harrow's interpretation, if accepted by US courts, creates a competing claim framework where stolen crypto assets can be seized by third-party creditors of suspected attackers, rather than being returned to victims. The implications extend well beyond this specific case.

## The Aave argument

Aave's emergency motion, filed May 4 in the US District Court for the Southern District of New York, attacks the Gerstein Harrow argument on three structural grounds.

The first is property law. Aave's filing argues that "a thief does not own what he steals" — that under standard US property law, criminal acquisition does not transfer ownership rights from the original owner. The recovered ETH, Aave argues, belongs to the Aave protocol users who lost funds in the April 18 exploit, not to any external party that briefly may have controlled the assets through criminal means. Stani Kulechov, Aave's founder, has been publicly explicit on this point.

The second is attribution. Aave's filing emphasizes that the link to North Korea remains unproven and based on suspicion rather than confirmed attribution. Gerstein Harrow's case, the filing argues, "relies on conjecture from posts on the internet" to establish that North Korea gained ownership of the assets. Without a court finding establishing North Korean control, the underlying premise of the seizure attempt fails.

The third is harm to victims. Aave argues the ongoing freeze causes irreversible harm to both the protocol and its users, undermining broader confidence in DeFi recovery efforts. The filing requests that the court either vacate the restraining notice or, if it remains in place, require Gerstein Harrow to post a $300 million bond to compensate for the harm caused by delaying victim restitution.

Aave's position has been backed by a substantial portion of the DeFi industry. The DeFi United coalition's $327 million in pledged commitments depends operationally on the release of the frozen ETH. If the legal block persists, the coordinated recovery effort fragments.

## Why this matters for DeFi governance

The Aave vs. Gerstein Harrow case represents the first major US court treatment of a DAO as an entity capable of receiving legal process and being subject to restraining orders. The implications shape how courts may handle DAO-governed assets in future disputes for years.

Three structural questions are at stake.

The first is whether US courts treat DAOs as legally cognizable entities for purposes of asset restraint. If Arbitrum DAO can be served with a restraining notice and its on-chain governance can be effectively overridden by US court orders, the practical autonomy of DAO governance is substantially reduced. This isn't necessarily bad — it brings DAOs into the existing legal framework where assets and disputes are managed — but it does undermine the "code is law" thesis that motivated much of the original DAO design.

The second is whether stolen crypto assets can be seized by third-party creditors of the suspected thief, rather than returned to victims. If the answer is yes, every future DeFi exploit creates a complex legal cascade where multiple parties — victims, protocol governance, third-party creditors of the attacker, government enforcement — compete for the same recovered assets. The recovery process becomes a multi-year litigation exercise rather than a fast-moving industry coordination effort.

The third is whether the on-chain governance vote (closing today, May 7) and the legal proceeding can resolve in conflicting directions. If Arbitrum DAO votes overwhelmingly to release the ETH but the court order remains in place, the protocol faces an uncomfortable choice: comply with on-chain governance or comply with the US court order. The two cannot coexist for the same assets. This is the kind of jurisdictional friction that emerged in similar form in the World Liberty Financial defamation lawsuit against Justin Sun, but at substantially larger scale and with broader DeFi implications.

## What happens next

Three near-term outcomes are worth tracking.

The first is the court's ruling on Aave's emergency motion. The judge has not scheduled a hearing as of publication. A ruling that vacates the restraining notice clears the path for the DAO governance to execute. A ruling that maintains the freeze — particularly if it requires Aave to post the $300 million bond Gerstein Harrow may seek — substantially complicates DeFi United's recovery timeline.

The second is the closing of the Arbitrum DAO vote today. If the temperature check passes overwhelmingly (highly likely based on early voting), the proposal advances to an on-chain vote on Tally. The on-chain vote process typically takes 7-14 days. If both legal and governance processes resolve in favor of release within the next month, DeFi United proceeds with rsETH recovery. If they conflict, the recovery framework stalls.

The third is the broader precedent. Other US law firms representing creditors of state-sponsored actors are likely watching this case closely. If Gerstein Harrow succeeds in establishing that recovered crypto from suspected nation-state hacks can be seized for terrorism judgments, similar attempts will follow on assets recovered from prior incidents — potentially including the $30 million the FBI recovered from the 2022 Ronin Network exploit and various amounts from the 2025 Bybit hack. The legal architecture for handling these claims will be substantially shaped by what happens in this case.

For DeFi protocols generally, the case creates a new category of risk. Assets recovered from exploits — historically considered the cleanest possible recovery scenario — may now be subject to competing claims from third-party creditors with no operational connection to the protocol or its users. The risk profile of operating major DeFi infrastructure shifts marginally as a result.

For Aave specifically, the dispute extends a difficult quarter. The protocol has been managing rsETH bad debt exposure of up to $230 million since the original April 18 exploit. AAVE token trades around $93, having held in a tight range through most of April despite the underlying stress. The May 7 vote outcome and the court ruling timeline together represent the largest near-term variables for both AAVE price action and the broader DeFi sector's confidence in coordinated recovery efforts.

The vote closes today. The court has not yet ruled. The two timelines are racing each other to define how DeFi handles the next major exploit. Whichever resolves first sets the precedent.

The infrastructure has been tested before. This is the first time the legal framework around it is being tested at this scale.

---

*This is news analysis based on data from CoinDesk, Crypto Times, BanklessTimes, Cryptopolitan, BitGet News, The Coin Republic, Cryptobreaking, Aave LLC's May 4 emergency motion filing in the U.S. District Court for the Southern District of New York, and Arbitrum DAO Snapshot voting data. Voting figures, legal proceedings, and pledge commitments reflect publicly available data as of May 7, 2026 and are subject to change as the situation develops. This is not legal or financial advice.*
