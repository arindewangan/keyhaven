# KeyHaven

**KeyHaven** is a secure, user-friendly tool for managing A-MACI (Anonymous Minimal Anti-Collusion Infrastructure) keypairs and signing messages. It enables users to maintain privacy and security while participating in decentralized governance systems like quadratic voting. 

---

## Key Features

### Key Management Dashboard
- **View Active Keypairs**: Displays your EdDSA public keys with clear status indicators.
- **Keypair Generation**: Easily generate new secure EdDSA keypairs.
- **Export and Backup**: Export private keys in an encrypted format for safekeeping.
- **Key Switching**: Switch between active keypairs for different operations.
- **Key Discarding**: Securely discard unused or compromised keypairs.

### MACI Message Signing
- **Message Signing**: Sign MACI-compliant messages using your active keypair.
- **Validation**: Ensure message structure aligns with MACI requirements before signing.
- **Output Display**: View and copy signed messages and their signatures for submission.

### Security Features
- **Password Protection**: Access to the tool requires a secure password.
- **Encrypted Storage**: Private keys are stored locally with AES-256 encryption.
- **Session Expiry**: Sensitive data is cleared upon logout or session expiration.
- **Optional 2FA**: Add an extra layer of security with two-factor authentication.

### User Experience Enhancements
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Tooltips and Help Section**: Provides guidance on key management and signing.
- **Clear Alerts**: Warnings for critical actions like key deletion or switching.

---

## Cryptographic Workflow
- **Key Generation**: Generates EdDSA keypairs using secure libraries like `tweetnacl` or `libsodium`.
- **Local Signing**: All signing operations occur locally in the browser to protect private keys.
- **Public Key Display**: Derives and displays public keys for transparency.

---

## Technical Stack

- **Frontend**: React, HTML, CSS, and JavaScript.
- **Cryptography**: `tweetnacl` or `libsodium` for EdDSA key generation and signing.
- **Storage**: Browser local storage with AES-256 encryption for secure private key storage.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/keyhaven.git
   ```
2. Navigate to the project directory:
   ```bash
   cd keyhaven
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Usage

1. **Generate a Keypair**: Navigate to the dashboard and click "Generate New Keypair."
2. **Export Private Key**: Back up your private key securely after generation.
3. **Sign Messages**: Use the "Sign Message" form to input and sign MACI-compliant messages.
4. **Switch Keypairs**: Select a different keypair as active when needed.
5. **Discard Old Keys**: Securely discard unused or compromised keypairs.

---

## Contribution

We welcome contributions to KeyHaven! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## Contributors
- [Arin Dewangan](https://aboutarin.vercel.app/)

---

## License

KeyHaven is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Contact

For questions or support, contact us at **arin@cybsinnovations.com** or open an issue on the GitHub repository.

---

Secure your A-MACI key management with **KeyHaven** today!
