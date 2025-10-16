# Key Points and Main Ideas from Transcript

## Design Patterns vs Architecture Patterns
- Thin line differentiates design patterns and architecture patterns.
- **Design patterns** are implemented within code, addressing function-level problems (e.g., circuit breaker, factory).
- **Architecture patterns** impact the whole application or system structure.
- Example: Circuit breaker can be a design or architecture pattern depending on context.

## Transaction Handling in Monolithic vs Microservices
- In **monolithic apps**, multiple related table updates can be handled in one transaction (begin, commit, rollback).
- Transactions ensure atomicity: if one update fails, whole transaction rolls back.
- Using `read uncommitted` (dirty reads) is risky and can cause inconsistent data; should be avoided in production.

- In **microservices**, related data spans multiple independent services/databases (order, inventory, customer).
- Distributed transactions are challenging because services run independently with separate databases.
- Traditional rollback is not possible across multiple services/databases.

## Distributed Transaction Problem & Solutions in Microservices
- The **Saga pattern** handles distributed transactions with two modes:
  - **Orchestration mode:** A central orchestrator manages the workflow and rollback actions on failure.
    - Single point of failure risk: if orchestrator fails, entire process fails.
  - **Choreography mode:** No central orchestrator; services communicate via events and react independently.
    - Advantage: no single point of failure, services can operate even if others are down.
    - Hard to debug due to decentralized nature.

## Try Confirm Cancel (TCC) Pattern
- Three-step pattern: *Try* operation, *Confirm* if successful, or *Cancel* if failure.
- Example: Seat booking—hold seat in "unconfirmed" state until payment confirmation.
- Potential issue: partial updates or inconsistent states if confirmation fails.
- Requires additional checks and compensations (e.g., retries, event logs, checkpoints) for consistency.
- Useful for simpler distributed transactions without full complexity of Saga.

## Event Sourcing Pattern
- Instead of storing current data state, store all events (actions) that change state.
- System state is "replayed" from these events to reconstruct current state.
- Advantages:
  - Complete audit trail with event timestamps.
  - Can recreate system state at any point in time.
  - Useful for complex domains like accounting or social media posts/comments.

- Disadvantages:
  - Requires event replay to get current state (more processing).
  - Complexity of managing event storage and replay.
  - Possible inconsistencies if event and processed results mismatch.

## General Architecture Insights
- Microservices design introduces complexity in transaction management due to independent databases.
- Pattern choice depends on use case and trade-offs between simplicity, consistency, and fault tolerance.
- Implementations often require supporting infrastructure (e.g., message brokers, event logs).
- Monitoring and error handling are critical, especially for choreography and TCC patterns.
- Understanding patterns deeply helps in designing scalable, reliable distributed systems.

---

This note summarizes the distinctions between design and architecture patterns, challenges of distributed transactions in microservices, and key patterns (Saga, TCC, Event Sourcing) to handle data consistency and fault tolerance in distributed systems.

### Source: https://www.youtube.com/watch?v=2NrySTAPimU