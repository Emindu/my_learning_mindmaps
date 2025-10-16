// Auto-generated from mindmap_20251016_141612.json
const mindmapData = [
  {
    "id": "root",
    "text": "Distributed Transaction Patterns",
    "parent": null,
    "level": 0,
    "position": {
      "x": 100,
      "y": 300
    },
    "isCollapsed": false
  },
  {
    "id": "design_vs_architecture",
    "text": "Design vs Architecture Patterns",
    "parent": "root",
    "level": 1,
    "position": {
      "x": 300,
      "y": 150
    },
    "isCollapsed": false
  },
  {
    "id": "monolith_transactions",
    "text": "Monolith Transaction Handling",
    "parent": "root",
    "level": 1,
    "position": {
      "x": 300,
      "y": 300
    },
    "isCollapsed": false
  },
  {
    "id": "microservices_challenges",
    "text": "Microservices Transaction Challenges",
    "parent": "root",
    "level": 1,
    "position": {
      "x": 300,
      "y": 450
    },
    "isCollapsed": false
  },
  {
    "id": "saga_pattern",
    "text": "Saga Pattern",
    "parent": "root",
    "level": 1,
    "position": {
      "x": 550,
      "y": 150
    },
    "isCollapsed": false
  },
  {
    "id": "tcc_pattern",
    "text": "Try-Confirm-Cancel (TCC) Pattern",
    "parent": "root",
    "level": 1,
    "position": {
      "x": 550,
      "y": 300
    },
    "isCollapsed": false
  },
  {
    "id": "event_sourcing",
    "text": "Event Sourcing",
    "parent": "root",
    "level": 1,
    "position": {
      "x": 550,
      "y": 450
    },
    "isCollapsed": false
  },
  {
    "id": "design_vs_architecture_def",
    "text": "Definition and Distinction",
    "parent": "design_vs_architecture",
    "level": 2,
    "position": {
      "x": 450,
      "y": 100
    },
    "isCollapsed": false
  },
  {
    "id": "design_pattern_code_level",
    "text": "Design Patterns at Code Level",
    "parent": "design_vs_architecture",
    "level": 2,
    "position": {
      "x": 450,
      "y": 150
    },
    "isCollapsed": false
  },
  {
    "id": "architecture_pattern_system_level",
    "text": "Architecture Patterns at System Level",
    "parent": "design_vs_architecture",
    "level": 2,
    "position": {
      "x": 450,
      "y": 200
    },
    "isCollapsed": false
  },
  {
    "id": "monolith_transaction_context",
    "text": "Single Transaction Context",
    "parent": "monolith_transactions",
    "level": 2,
    "position": {
      "x": 450,
      "y": 250
    },
    "isCollapsed": false
  },
  {
    "id": "transaction_handling_acid",
    "text": "ACID Transactions and Rollbacks",
    "parent": "monolith_transactions",
    "level": 2,
    "position": {
      "x": 450,
      "y": 300
    },
    "isCollapsed": false
  },
  {
    "id": "read_uncommitted_risks",
    "text": "Read Uncommitted Risks",
    "parent": "monolith_transactions",
    "level": 2,
    "position": {
      "x": 450,
      "y": 350
    },
    "isCollapsed": false
  },
  {
    "id": "microservices_independent_services",
    "text": "Independent Services and Databases",
    "parent": "microservices_challenges",
    "level": 2,
    "position": {
      "x": 450,
      "y": 400
    },
    "isCollapsed": false
  },
  {
    "id": "distributed_transaction_problem",
    "text": "Distributed Transaction Problem",
    "parent": "microservices_challenges",
    "level": 2,
    "position": {
      "x": 450,
      "y": 450
    },
    "isCollapsed": false
  },
  {
    "id": "saga_orchestration",
    "text": "Saga Orchestration Mode",
    "parent": "saga_pattern",
    "level": 2,
    "position": {
      "x": 700,
      "y": 100
    },
    "isCollapsed": false
  },
  {
    "id": "saga_choreography",
    "text": "Saga Choreography Mode",
    "parent": "saga_pattern",
    "level": 2,
    "position": {
      "x": 700,
      "y": 150
    },
    "isCollapsed": false
  },
  {
    "id": "orchestration_disadvantage",
    "text": "Orchestration Single Point Failure",
    "parent": "saga_orchestration",
    "level": 3,
    "position": {
      "x": 850,
      "y": 100
    },
    "isCollapsed": false
  },
  {
    "id": "choreography_advantages",
    "text": "Choreography Advantages",
    "parent": "saga_choreography",
    "level": 3,
    "position": {
      "x": 850,
      "y": 150
    },
    "isCollapsed": false
  },
  {
    "id": "choreography_disadvantages",
    "text": "Choreography Debugging Challenges",
    "parent": "saga_choreography",
    "level": 3,
    "position": {
      "x": 850,
      "y": 200
    },
    "isCollapsed": false
  },
  {
    "id": "tcc_process",
    "text": "TCC Process Steps",
    "parent": "tcc_pattern",
    "level": 2,
    "position": {
      "x": 700,
      "y": 300
    },
    "isCollapsed": false
  },
  {
    "id": "tcc_inconsistencies",
    "text": "Inconsistencies and Challenges",
    "parent": "tcc_pattern",
    "level": 2,
    "position": {
      "x": 700,
      "y": 350
    },
    "isCollapsed": false
  },
  {
    "id": "tcc_checklist_solution",
    "text": "Checklist for Consistency",
    "parent": "tcc_pattern",
    "level": 2,
    "position": {
      "x": 700,
      "y": 400
    },
    "isCollapsed": false
  },
  {
    "id": "event_sourcing_concept",
    "text": "Event Sourcing Concept",
    "parent": "event_sourcing",
    "level": 2,
    "position": {
      "x": 700,
      "y": 450
    },
    "isCollapsed": false
  },
  {
    "id": "event_sourcing_advantages",
    "text": "Advantages of Event Sourcing",
    "parent": "event_sourcing",
    "level": 2,
    "position": {
      "x": 700,
      "y": 500
    },
    "isCollapsed": false
  },
  {
    "id": "event_sourcing_disadvantages",
    "text": "Disadvantages of Event Sourcing",
    "parent": "event_sourcing",
    "level": 2,
    "position": {
      "x": 700,
      "y": 550
    },
    "isCollapsed": false
  }
];
