//SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.7.0;

abstract contract EIP20 {
    uint256 public totalSupply;

    function balanceOf(address _owner) public view virtual returns (uint256 balance);

    function transfer(address _to, uint256 _value) public virtual returns (bool success);
}

contract HealthCare {
    
    EIP20 instanceEIP20;
    
    receive() external payable {
    }
    
    function sendCoins() public returns (bool){        // function to send coins to user
        uint coins = 5;
        return instanceEIP20.transfer(msg.sender, coins);
    }
    
    function convertCoinsToEther(uint coins) public {
        require(instanceEIP20.balanceOf(msg.sender) >= coins);
        (msg.sender).transfer(coins*0.01 ether);
    }
    
}