// pragma solidity ^0.8.9;

// // 0x5FbDB2315678afecb367f032d93F642f64180aa3
// // SEPOLIA CONTRACT ADDRESS: 0x2d6a1440550ea48f0665e23b9d19084b0c8c1bd2
// contract Institutes {
//     // institute structure
//     struct Institute {
//         uint256 id;
//         address walletAddress;
//         string name;
//         string description;
//         bytes32 password;
//     }

//     uint256 public institutesCount; // number of institutes
//     Institute[] public institutes; // array of institutes
//     mapping(address => Institute) public institutesMap;

//     // login function
//     function login(
//         address _walletAddress,
//         string memory _password
//     ) public view returns (bool) {
//         for (uint256 i = 0; i < institutesCount; i++) {
//             if (
//                 keccak256(abi.encodePacked(institutes[i].walletAddress)) ==
//                 keccak256(abi.encodePacked(_walletAddress))
//             ) {
//                 if (
//                     keccak256(abi.encodePacked(institutes[i].password)) ==
//                     keccak256(abi.encodePacked(_password))
//                 ) {
//                     return true;
//                 }
//             }
//         }
//         return false;
//     }

//     // get all institutes function
//     function getAllInstitutes() public view returns (Institute[] memory) {
//         return institutes;
//     }

//     function addInstitute(
//         address _walletAddress,
//         string memory _name,
//         string memory _description,
//         string memory _password
//     ) public {
//         require(
//             institutesMap[_walletAddress].id == 0,
//             "Institute with this address already exists"
//         );
//         institutesCount++;
//         Institute memory newInstitute = Institute(
//             institutesCount,
//             _walletAddress,
//             _name,
//             _description,
//             keccak256(abi.encodePacked(_password))
//         );
//         institutes.push(newInstitute);
//         institutesMap[_walletAddress] = newInstitute;
//     }

//     function getInstitute(
//         address _walletAddress
//     ) public view returns (Institute memory) {
//         Institute memory institute = institutesMap[_walletAddress];
//         require(institute.id != 0, "Institute not found");
//         return institute;
//     }

//     // Reset Password function
//     function resetPassword(
//         address _walletAddress,
//         string memory _oldPassword,
//         string memory _newPassword
//     ) public {
//         require(
//             institutesMap[_walletAddress].id != 0,
//             "Institute with this address does not exist"
//         );
//         require(
//             keccak256(abi.encodePacked(institutesMap[_walletAddress].password)) ==
//                 keccak256(abi.encodePacked(_oldPassword)),
//             "Old password is incorrect"
//         );
//         institutesMap[_walletAddress].password = keccak256(
//             abi.encodePacked(_newPassword)
//         );
//     }
// }

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Institutes {
    struct Institute {
        uint256 id;
        address walletAddress;
        string name;
        string description;
    }

    uint256 institutesCount; // number of institutes
    Institute[] public institutes; // array of institutes
    mapping(address => Institute) public institutesMap;

    function addInstitute(
        address _walletAddress,
        string memory _name,
        string memory _description
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
            _description
        );
        institutes.push(newInstitute);
        institutesMap[_walletAddress] = newInstitute;
    }

    // get all institutes function
    function getAllInstitutes() public view returns (Institute[] memory) {
        return institutes;
    }

    function login(address _walletAddress) public view returns (bool) {
        for (uint256 i=0; i<institutesCount; i++) 
        {
            if(_walletAddress == institutesMap[_walletAddress].walletAddress) {
                return true;
            }   
        }
        return false;
    }

    function getInstitute(
        address _walletAddress
    ) public view returns (Institute memory) {
        Institute memory institute = institutesMap[_walletAddress];
        require(institute.id != 0, "Institute not found");
        return institute;
    }
}