// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;

contract Child {
    event Data(address indexed from, bytes bytes_data);

    uint256 public data;

    function setData(uint256 _data) public {
        data = _data;
        bytes memory bytes_data = abi.encode(_data);
        emit Data(msg.sender, bytes_data);
    }
}
