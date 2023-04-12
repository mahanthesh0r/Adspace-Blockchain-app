// // We require the Hardhat Runtime Environment explicitly here. This is optional
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// // will compile your contracts, add the Hardhat Runtime Environment's members to the
// // global scope, and execute the script.
// const hre = require("hardhat");


// async function getBalances(address){
//   const balanceBigInt = await hre.ethers.provider.getBalance(address);
//   return hre.ethers.utils.formatEther(balanceBigInt);
//  }

//  async function consoleBalance(addresses){
//   let counter = 0;
//   for(const address of addresses){
//     console.log(`Address ${counter} balance: `,await getBalances(address))
//     counter++;
//   }
//  }

//  async function consoleAds(ads){
//   for(const ad of ads){
//     const timestamp = ad.timestamp;
//     const name = ad.name;
//     const img = ad.img;
//     const from = ad.from;

//     console.log(`At ${timestamp}, name ${name}, img ${img}, from ${from}`);
//   }
//  }

// async function main() {

//   const [owner, from1,from2,from3] = await hre.ethers.getSigners();
//   const adspace = await hre.ethers.getContractFactory("adspace");
//   const contract = await adspace.deploy();

//   await contract.deployed();
//   console.log("Address of contract: ", contract.address);

//   const addresses = [owner.address, from1.address, from2.address, from3.address];
//   console.log("Before buying");
//   await consoleBalance(addresses)

//   const amount = {value:hre.ethers.utils.parseEther("1")}
//   await contract.connect(from1).buyAdSpace("Google","IMG1",amount);
//   await contract.connect(from2).buyAdSpace("Yahoo","IMG2",amount);
//   await contract.connect(from3).buyAdSpace("Amazon","IMG3",amount);

//   console.log("After buying");
//   await consoleBalance(addresses);


// }



// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });



const hre = require("hardhat");

async function main() {

    const adspace = await hre.ethers.getContractFactory("adspace");
    const contract = await adspace.deploy();
  
    await contract.deployed();
    console.log("Address of contract: ", contract.address);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  