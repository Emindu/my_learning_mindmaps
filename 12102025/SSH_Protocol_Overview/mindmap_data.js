// Auto-generated from mindmap_20251012_190609.json
const mindmapData = [
  {
    "id": "root",
    "text": "SSH Protocol Overview",
    "parent": null,
    "level": 0,
    "position": {
      "x": 100,
      "y": 300
    },
    "isCollapsed": false
  },
  {
    "id": "history",
    "text": "History and Origin",
    "parent": "root",
    "level": 1,
    "position": {
      "x": 350,
      "y": 150
    },
    "isCollapsed": false
  },
  {
    "id": "history_inventor",
    "text": "Inventor and Motivation",
    "parent": "history",
    "level": 2,
    "position": {
      "x": 600,
      "y": 100
    },
    "isCollapsed": false
  },
  {
    "id": "history_predecessors",
    "text": "Predecessor Protocols",
    "parent": "history",
    "level": 2,
    "position": {
      "x": 600,
      "y": 200
    },
    "isCollapsed": false
  },
  {
    "id": "history_network_context",
    "text": "Network Context in 90s",
    "parent": "history",
    "level": 2,
    "position": {
      "x": 600,
      "y": 300
    },
    "isCollapsed": false
  },
  {
    "id": "security_issues",
    "text": "Security Issues with Telnet",
    "parent": "root",
    "level": 1,
    "position": {
      "x": 350,
      "y": 350
    },
    "isCollapsed": false
  },
  {
    "id": "security_cleartext",
    "text": "Cleartext Packet Transmission",
    "parent": "security_issues",
    "level": 2,
    "position": {
      "x": 600,
      "y": 300
    },
    "isCollapsed": false
  },
  {
    "id": "security_risks",
    "text": "Risks of Credential Theft",
    "parent": "security_issues",
    "level": 2,
    "position": {
      "x": 600,
      "y": 400
    },
    "isCollapsed": false
  },
  {
    "id": "security_networks",
    "text": "Insecurity of Local Networks",
    "parent": "security_issues",
    "level": 2,
    "position": {
      "x": 600,
      "y": 500
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_encryption",
    "text": "SSH Encryption Benefits",
    "parent": "root",
    "level": 1,
    "position": {
      "x": 350,
      "y": 550
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_encryption_data",
    "text": "Data Encryption in Transit",
    "parent": "ssh_encryption",
    "level": 2,
    "position": {
      "x": 600,
      "y": 500
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_encryption_inference",
    "text": "Limited Adversary Inferences",
    "parent": "ssh_encryption",
    "level": 2,
    "position": {
      "x": 600,
      "y": 600
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_connection",
    "text": "SSH Connection Setup",
    "parent": "root",
    "level": 1,
    "position": {
      "x": 350,
      "y": 650
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_connection_tcp",
    "text": "TCP Connection Establishment",
    "parent": "ssh_connection",
    "level": 2,
    "position": {
      "x": 600,
      "y": 600
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_packet_structure",
    "text": "Packet Structure",
    "parent": "ssh_connection",
    "level": 2,
    "position": {
      "x": 600,
      "y": 700
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_packet_length",
    "text": "Packet Length and Padding",
    "parent": "ssh_packet_structure",
    "level": 3,
    "position": {
      "x": 850,
      "y": 650
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_packet_payload",
    "text": "Payload and Padding Purpose",
    "parent": "ssh_packet_structure",
    "level": 3,
    "position": {
      "x": 850,
      "y": 750
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_packet_mac",
    "text": "Message Authentication Code",
    "parent": "ssh_packet_structure",
    "level": 3,
    "position": {
      "x": 850,
      "y": 850
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_packet_compression",
    "text": "Payload Compression",
    "parent": "ssh_packet_structure",
    "level": 3,
    "position": {
      "x": 850,
      "y": 950
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_encryption_negotiation",
    "text": "Encryption Algorithm Negotiation",
    "parent": "ssh_connection",
    "level": 2,
    "position": {
      "x": 600,
      "y": 800
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_multiplexing",
    "text": "Multiplexing Channels",
    "parent": "root",
    "level": 1,
    "position": {
      "x": 350,
      "y": 750
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_multiplexing_usage",
    "text": "Multiple Concurrent Connections",
    "parent": "ssh_multiplexing",
    "level": 2,
    "position": {
      "x": 600,
      "y": 750
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_tunneling",
    "text": "SSH Tunneling",
    "parent": "root",
    "level": 1,
    "position": {
      "x": 350,
      "y": 850
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_tunneling_usage",
    "text": "Encrypted Tunnels and Firewalls",
    "parent": "ssh_tunneling",
    "level": 2,
    "position": {
      "x": 600,
      "y": 850
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_x11_forwarding",
    "text": "X11 Forwarding",
    "parent": "root",
    "level": 1,
    "position": {
      "x": 350,
      "y": 950
    },
    "isCollapsed": false
  },
  {
    "id": "ssh_x11_usage",
    "text": "Remote Graphical Applications",
    "parent": "ssh_x11_forwarding",
    "level": 2,
    "position": {
      "x": 600,
      "y": 950
    },
    "isCollapsed": false
  }
];
