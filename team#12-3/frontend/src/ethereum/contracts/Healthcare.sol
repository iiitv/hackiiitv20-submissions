//SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.7.0;

abstract contract EIP20 {
    uint256 public totalSupply;

    function balanceOf(address _owner) public view virtual returns (uint256 balance);

    function transfer(address _to, uint256 _value) public virtual returns (bool success);
}

contract Healthcare {
    
    EIP20 instanceEIP20;
    address public manager;
    
    constructor(address addressEIP20) {
        instanceEIP20 = EIP20(addressEIP20);
        manager = msg.sender;
    }
    
    receive() external payable {
    }
    
    function sendCoins() public returns (bool){        // function to send coins to user
        uint coins = 5;
        return instanceEIP20.transfer(msg.sender, coins);
    }
    
}