// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// 0x5FbDB2315678afecb367f032d93F642f64180aa3
// SEPOLIA CONTRACT ADDRESS: 0x2d6a1440550ea48f0665e23b9d19084b0c8c1bd2
contract Institutes {
    // institute structure
    struct Institute {
        uint256 id;
        address walletAddress;
        string name;
        string description;
        bytes32 password;
    }

    uint256 public institutesCount; // number of institutes
    Institute[] public institutes; // array of institutes
    mapping(address => Institute) public institutesMap;

    // add institute function
    // function addInstitute(
    //     address _walletAddress,
    //     string memory _name,
    //     string memory _description,
    //     string memory _password
    // ) public {
    //     institutesCount++;
    //     Institute memory newInstitute = Institute(
    //         institutesCount,
    //         _walletAddress,
    //         _name,
    //         _description,
    //         keccak256(abi.encodePacked(_password))
    //     );
    //     institutes.push(newInstitute);
    // }

    // login function
    function login(
        address _walletAddress,
        string memory _password
    ) public view returns (bool) {
        for (uint256 i = 0; i < institutesCount; i++) {
            if (
                keccak256(abi.encodePacked(institutes[i].walletAddress)) ==
                keccak256(abi.encodePacked(_walletAddress))
            ) {
                if (
                    keccak256(abi.encodePacked(institutes[i].password)) ==
                    keccak256(abi.encodePacked(_password))
                ) {
                    return true;
                }
            }
        }
        return false;
    }

    // get institute function
    // function getInstitute(uint256 _id) public view returns (Institute memory) {
    //     for (uint256 i = 0; i < institutes.length; i++) {
    //         if (institutes[i].id == _id) {
    //             return institutes[i];
    //         }
    //     }
    //     revert("Institute not found");
    // }

    // get all institutes function
    function getAllInstitutes() public view returns (Institute[] memory) {
        return institutes;
    }

    function addInstitute(
        address _walletAddress,
        string memory _name,
        string memory _description,
        string memory _password
    ) public {
        require(
            institutesMap[_walletAddress].id == 0,
            "Institute with this address already exists"
        );
        institutesCount++;
        Institute memory newInstitute = Institute(
            institutesCount,
            _walletAddress,
            _name,
            _description,
            keccak256(abi.encodePacked(_password))
        );
        institutes.push(newInstitute);
        institutesMap[_walletAddress] = newInstitute;
    }

    function getInstitute(
        address _walletAddress
    ) public view returns (Institute memory) {
        Institute memory institute = institutesMap[_walletAddress];
        require(institute.id != 0, "Institute not found");
        return institute;
    }
}
