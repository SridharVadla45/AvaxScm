
const hre = require("hardhat");

async function main() {
 
  const CoffeeDapp = await hre.ethers.getContractFactory("CoffeeDapp");
  const coffeeDapp = await CoffeeDapp.deploy();

  await coffeeDapp.deployed();

  console.log(
   ` contract Coffee Dapp deployed to ${coffeeDapp.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
