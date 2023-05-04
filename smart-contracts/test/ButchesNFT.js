const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { ethers } = require("hardhat");

describe("ButchesNFT", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployButches() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const ButchesNFT = await ethers.getContractFactory("ButchesNFT");
    const butchesNFT = await ButchesNFT.deploy();

    return { butchesNFT: butchesNFT, owner: owner, otherAccount: otherAccount };
  }

  describe("Deployment", function () {
    it("Should deploy beer from owner", async function () {
      const { butchesNFT, owner, otherAccount } = await deployButches();
      ethers.utils.isAddress(butchesNFT.address)
    });
  });

  describe("Mint", function () {
    it("Should Mint beer NFT", async function () {
      const { butchesNFT, otherAccount, owner } = await deployButches();
      await butchesNFT.connect(owner).mint(otherAccount.address)
    });
  });

});
