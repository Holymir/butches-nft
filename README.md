# README

This guide will walk you through the steps to run a Koa backend, React frontend, and deploy smart contracts.

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started)
- [Metamask](https://metamask.io/)

## Backend Setup

1. Clone the repository.

   ```bash
   git clone https://github.com/Holymir/butches-nft
   ```

2. Change to the backend directory and install the dependencies.

   ```bash
   cd butches-nft/backend
   npm install
   ```

3. Start the backend server.

   ```bash
   npm start
   ```

   The server will be running at `http://localhost:3001`.

## Frontend Setup

1. Change to the frontend directory and install the dependencies.

   ```bash
   cd butches-nft/frontend
   npm install
   ```

2. Start the frontend development server.

   ```bash
   npm start
   ```

   The frontend will be running at `http://localhost:3000`.

## Smart Contract Deployment

1. Change to the Smart Contracts directory and install the dependencies.

   ```bash
   cd butches-nft/smart-contracts
   npm install
   ```

2. Compile the smart contracts.

   ```bash
   npx hardhat compile
   ```
3. Run local Hardhat Node.

   ```bash
   npx hardhat node
   ```

4. Deploy the smart contracts.

   ```bash
   npx hardhat run ./script/deploy.js
   ```

5. Connect Metamask to the Hardhat network.

   - Open Metamask.
   - Click the network dropdown in the top right corner.
   - Click "Custom RPC".
   - Enter the Hardhat network details:
     - Network Name: Hardhat
     - New RPC URL: http://127.0.0.1:8545
     - Chain ID: 31337
   - Click "Save".

6. Interact with the deployed smart contracts from the frontend.

   - Open the frontend in your browser.
   - Connect Metamask to the Hardhat network.
   - Use the frontend to interact with the smart contracts.

## Conclusion

Congratulations! You have successfully set up a Koa backend, React frontend, and deployed smart contracts. You can now start building your decentralized application!