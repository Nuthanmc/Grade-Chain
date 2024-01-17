// OLD CONTRACT FOR REFERENCE IGNORE THIS
//export const contractAddress = "0x4a090EeD9857fBCf35cf55ebd22C654bEDE33791";
// export const contractAddress = "0x4faC7fa17dD0Fe90780370cf922668b29Bcd65c0";
// export const contractAddress = "0x2056661f08c5e6e3AC3C8b626F562Bc4AE409a0c";

// DEPLOYED FINAL CONTRACT
export const contractAddress = "0xe507d2c54ae06e83f3db348f8d2bbcef85445237";

export const certificateContractAddress =
  "0x9c1a7ce8cac114f4320a67689053fa9e486858af";

// ABI
export const CertificateABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "certificateId",
				"type": "string"
			}
		],
		"name": "CertificateGenerated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_first_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_last_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_issuer_name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_issuer_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_course_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_creation_date",
				"type": "string"
			}
		],
		"name": "generateCertificate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "generateCertificateId",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "certificates",
		"outputs": [
			{
				"internalType": "string",
				"name": "certificateId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "first_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "last_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "issuer_name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "issuer_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "course_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "creation_date",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "certificatesMap",
		"outputs": [
			{
				"internalType": "string",
				"name": "certificateId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "first_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "last_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "issuer_name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "issuer_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "course_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "creation_date",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllCertificates",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "certificateId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "first_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "last_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "issuer_name",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "issuer_address",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "course_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "creation_date",
						"type": "string"
					}
				],
				"internalType": "struct Certificates.Certificate[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_certificateId",
				"type": "string"
			}
		],
		"name": "getCertificateById",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_certificateId",
				"type": "string"
			}
		],
		"name": "getCertificateByIdDirect",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_issuer_address",
				"type": "address"
			}
		],
		"name": "getCertificatesByIssuer",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "certificateId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "first_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "last_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "issuer_name",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "issuer_address",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "course_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "creation_date",
						"type": "string"
					}
				],
				"internalType": "struct Certificates.Certificate[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_issuer_address",
				"type": "address"
			}
		],
		"name": "getCertificatesCountByIssuer",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export const InstitutesABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_walletAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_courseNames",
        type: "string[]",
      },
    ],
    name: "addInstituteAndCourses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "coursesMap",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_walletAddress",
        type: "address",
      },
    ],
    name: "getAllCourses",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct Institutes.Course[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllInstitutes",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "coursesCount",
            type: "uint256",
          },
        ],
        internalType: "struct Institutes.Institute[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_walletAddress",
        type: "address",
      },
    ],
    name: "getInstitute",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "coursesCount",
            type: "uint256",
          },
        ],
        internalType: "struct Institutes.Institute",
        name: "",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct Institutes.Course[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "institutes",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "coursesCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "institutesMap",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "coursesCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_walletAddress",
        type: "address",
      },
    ],
    name: "login",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
