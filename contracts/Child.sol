// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;

contract Child {
    event Data(address indexed from, bytes bytes_data);

    uint256 public data;

    function setData(bytes memory bytes_data) public {
        data = abi.decode(bytes_data, (uint256));
        emit Data(msg.sender, bytes_data);
    }
}
