const noteMarkdown = `# Key Points on AI Agents, MCP, and GRPC Protocols

## Challenge for AI Agents
- AI agents using large language models (LLMs) need to reliably communicate with external services like booking flights, checking inventory, or querying databases.
- LLMs have limitations in context window size and training data, preventing them from holding all necessary external information internally.

## Two Protocols: MCP and GRPC
- **Model Context Protocol (MCP)**
  - Introduced by Anthropic in late 2024, specifically designed for AI agents.
  - Provides a *native AI protocol* to connect LLMs with tools and data.
  - Uses natural language descriptions for tools, resources, and prompts, enabling LLMs to understand capabilities semantically.
  - Supports runtime discovery of available tools via commands like \`tools/list\`.
  - Communication uses JSON-RPC 2.0, human and LLM-readable text format.
  - Enables AI agents to dynamically adapt to available tools without retraining.
  - Suitable for chatbots and systems with moderate request rates.

- **gRPC (Google Remote Procedure Call)**
  - A well-established RPC framework built for microservices, offering fast, binary communication over HTTP/2.
  - Provides structural info via protocol buffers but lacks semantic context for AI understanding.
  - Needs an additional *AI translation* adapter layer to convert natural language intents into specific calls.
  - Supports efficient multiplexing, streaming, and better performance for high-throughput workloads.
  - Designed for deterministic calls where the caller knows method and timing exactly.

## LLM Limitations and External Queries
- LLMs can’t contain entire large datasets or real-time information.
- MCP and gRPC let LLMs query external systems on demand, such as CRM tools for customer data or APIs for live data like weather.
- AI agents act as orchestrators deciding when and what to query.

## Architectural Overview
| Protocol | Components                      | Communication Flow                                | Discovery Mechanism                         | Communication Type      | Use Case                                 |
|----------|--------------------------------|-------------------------------------------------|---------------------------------------------|-----------------------|------------------------------------------|
| MCP      | Host app → MCP client → MCP server → external services | Host app calls MCP client → MCP server → external service, results propagate back | Built-in commands (\`tools/list\`, etc.) with natural language descriptions | JSON-RPC 2.0 (text)      | AI-native; runtime discovery; moderate loads |
| gRPC     | AI agent → Adapter layer → gRPC client → gRPC services | AI agent → Adapter (translates NL to RPC calls) → gRPC client → service | Server reflection returns proto files (no semantic info) | Protocol Buffers (binary) over HTTP/2 | High throughput; needs AI translation layer |

## Strengths and Considerations
- **MCP:** AI-native, semantic discovery, easy debugging due to human-readable messaging, flexible adaptation, but higher overhead in throughput.
- **gRPC:** Very high performance, streaming, multiplexing, but requires translation layer for meaning interpretation by LLMs.

## Summary
- MCP is the *front door* for AI agents to discover and access tools using semantic descriptions.
- gRPC serves as the *engine* powering high-scale communication in production environments with an adapter for AI understanding.
- Both protocols will coexist and complement as AI applications evolve from chatbots to large-scale agentic systems.

### Source: https://www.youtube.com/watch?v=23PzNxw11jc`;
