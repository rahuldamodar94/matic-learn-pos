// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;

contract Root {
    address public predicate;

    constructor(address _predicate) public {
        predicate = _predicate;
    }

    modifier onlyPredicate() {
        require(msg.sender == predicate);
        _;
    }

    uint256 public data;

    function setData(bytes memory bytes_data) public onlyPredicate {
        data = abi.decode(bytes_data, (uint256));
    }
}
