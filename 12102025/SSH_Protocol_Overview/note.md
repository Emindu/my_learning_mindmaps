## Origin and Motivation

- SSH (Secure Shell) was created in 1995 by Tatu Ylönen after a password-sniffing attack on his Finnish university’s network[2].
- Before SSH, people used insecure protocols like Telnet and rlogin, which transmitted data (including passwords) in plaintext, making them vulnerable to eavesdropping and credential theft[5].
- SSH was designed to securely replace these protocols by encrypting all transmitted data.

## How SSH Works

- **Encryption:** All data (including usernames and passwords) is encrypted, preventing attackers who intercept traffic from reading sensitive information.
- **Packet Structure:** SSH packets begin with a 4-byte length field, a byte for padding size, the payload (actual data), random padding (to obscure traffic patterns), and a message authentication code (MAC) to detect tampering.
- **Compression:** Payloads are often compressed to optimize bandwidth.
- **Encryption Algorithms:** The encryption method is negotiated between client and server, with recommendations to disable obsolete or weak algorithms.
- **Session & Channel Multiplexing:** SSH supports multiple simultaneous channels (e.g., shell, file transfer, tunneling), allowing several operations over a single connection.
- **TCP Connection:** SSH typically runs over TCP, establishing a reliable connection between client and server.

## Security Features

- **Data Confidentiality:** Encrypted traffic means sniffers see only that communication is happening, not the content.
- **Integrity:** The MAC ensures data has not been altered in transit.
- **Forward Secrecy:** Modern SSH uses strong key exchange methods to protect session keys.
- **Padding:** Random padding makes traffic analysis more difficult by obscuring the true size and nature of the payload.

## Advanced Uses

- **Tunneling:** Encrypt and forward non-SSH traffic (e.g., web browsing) through an SSH connection, useful for bypassing firewalls or securing unencrypted services.
- **X11 Forwarding:** Run graphical applications on a remote Linux machine and display them locally over SSH.
- **Multiplexing:** Multiple channels (shell, file transfer, etc.) can operate concurrently within one SSH session.

## Key Comparison

| Feature            | SSH                           | Telnet/rlogin          |
|--------------------|-------------------------------|------------------------|
| Encryption         | Yes (all data)                | No (plaintext)         |
| Authentication     | Encrypted credentials         | Plaintext credentials  |
| Integrity          | Message authentication codes  | None                   |
| Multiplexing       | Yes (multiple channels)       | No                     |
| Tunneling          | Yes                           | No                     |

## Summary

SSH is a critical protocol for secure remote system administration, encrypting all communications to protect against eavesdropping and tampering. It replaced insecure predecessors like Telnet, supports advanced features like tunneling and X11 forwarding, and continues to evolve to address new security challenges. Always use the latest, properly configured SSH implementations to maintain security[1][5].

### Source: https://youtu.be/5JvLV2-ngCI?si=zztb7Am00Ive_Yy-