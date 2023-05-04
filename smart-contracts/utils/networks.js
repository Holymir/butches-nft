require('dotenv/config');

function node_url(networkName) {
    return `https://${networkName}.infura.io/v3/${process.env.INFURA_API_KEY}`;
}

function signerKey() {
    return process.env.SEPOLIA_PRIVATE_KEY;
}

module.exports = {
    node_url,
    signerKey
}