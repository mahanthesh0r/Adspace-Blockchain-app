// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract adspace{
    struct Ad{
        string name;
        string img;
        uint timestamp;
        address from;
    }

    Ad[] ads;
    address payable owner;

    constructor(){
        owner = payable(msg.sender);
    }

    function buyAdSpace(string memory name, string memory img) public payable{
        require(msg.value>0, "Please pay greater than 0 ether");
        owner.transfer(msg.value);
        ads.push(Ad(name,img,block.timestamp,msg.sender));
    }

    function getAds() public view returns(Ad[] memory){
        return ads;
    }
}