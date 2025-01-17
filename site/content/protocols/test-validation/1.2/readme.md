---
title: test validation
publisher: annaShatkovskaya
license: MIT
piuri: https://didcomm.org/test-validation/1.2
status: Production
summary: https://merciful12.github.io/didcomm.org/test-images-protocol/0.67/
tags:
 - test
authors:
 - dcmnadkncod

---

## Roles

Provides a `formal name` (using backticks in markdown) for each role in the protocol, says who and how many can play each role, and describes constraints associated with those roles (e.g., "You can only issue a credential if you have a DID on the public ledger"). The issue of qualification for roles can also be explored (e.g., "The holder of the credential must be known to the issuer").

The formal names for each role are important because they are used when [agents discover one another's capabilities](https://github.com/hyperledger/aries-rfcs/tree/master/features/0031-discover-features). An agent doesn't just claim that it supports a protocol; it makes a claim about which *roles* in the protocol it supports. An agent that supports credential issuance and an agent that supports credential holding may have very different features, but they both use the _credential-issuance_ protocol. By convention, role names use lower-kebab-case and are compared case-sensitively.

## Connectivity

Describe any assumptions about simplex vs. duplex, which parties need to talk to which parties, etc.
