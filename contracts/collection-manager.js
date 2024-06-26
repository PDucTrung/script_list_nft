const collection_manager = {
  CONTRACT_ADDRESS: "5FFqxQBrtnVMjSyXXqyoHzmUHHthTqX3rY9Kr7nx9bzE9cD5",
  CONTRACT_ABI: {
	"source": {
	"hash": "0x3cc56938bd78552e9b720786ace3cf63bd59fffad6154d6708ace9cd9d48572b",
	"language": "ink! 4.0.1",
	"compiler": "rustc 1.70.0-nightly",
	"build_info": {
		"build_mode": "Debug",
		"cargo_contract_version": "2.0.0-rc",
		"rust_toolchain": "nightly-x86_64-unknown-linux-gnu",
		"wasm_opt_settings": {
		"keep_debug_symbols": false,
		"optimization_passes": "Z"
		}
	}
	},
	"contract": {
	"name": "artzero_collection_manager",
	"version": "1.0.0",
	"authors": [
		"ArtZero <admin@artzero.io>"
	]
	},
	"spec": {
	"constructors": [
		{
		"args": [
			{
			"label": "admin_address",
			"type": {
				"displayName": [
				"AccountId"
				],
				"type": 0
			}
			},
			{
			"label": "standard_nft_hash",
			"type": {
				"displayName": [
				"Hash"
				],
				"type": 5
			}
			},
			{
			"label": "simple_mode_adding_fee",
			"type": {
				"displayName": [
				"Balance"
				],
				"type": 7
			}
			},
			{
			"label": "advance_mode_adding_fee",
			"type": {
				"displayName": [
				"Balance"
				],
				"type": 7
			}
			},
			{
			"label": "max_royalty_fee_rate",
			"type": {
				"displayName": [
				"u32"
				],
				"type": 4
			}
			}
		],
		"docs": [
			"Collection Contract Manager manages all collections on ArtZero platform. User can create in simple mode or in advanced mode",
			"In Simple mode, the contract will automatically create the standard NFT contract for the User",
			"In Advanced mode, user creates their own customized NFT Contract and add the contract address to the Collection Manager"
		],
		"label": "new",
		"payable": false,
		"returnType": {
			"displayName": [
			"ink_primitives",
			"ConstructorResult"
			],
			"type": 13
		},
		"selector": "0x9bae9d5e"
		}
	],
	"docs": [],
	"events": [
		{
		"args": [
			{
			"docs": [],
			"indexed": false,
			"label": "collection_owner",
			"type": {
				"displayName": [
				"Option"
				],
				"type": 29
			}
			},
			{
			"docs": [],
			"indexed": false,
			"label": "nft_contract_address",
			"type": {
				"displayName": [
				"Option"
				],
				"type": 29
			}
			},
			{
			"docs": [],
			"indexed": false,
			"label": "contract_type",
			"type": {
				"displayName": [
				"CollectionType"
				],
				"type": 37
			}
			},
			{
			"docs": [],
			"indexed": false,
			"label": "is_active",
			"type": {
				"displayName": [
				"bool"
				],
				"type": 8
			}
			},
			{
			"docs": [],
			"indexed": false,
			"label": "show_on_chain_metadata",
			"type": {
				"displayName": [
				"bool"
				],
				"type": 8
			}
			}
		],
		"docs": [],
		"label": "AddNewCollectionEvent"
		}
	],
	"lang_error": {
		"displayName": [
		"ink",
		"LangError"
		],
		"type": 14
	},
	"messages": [
		{
		"args": [
			{
			"label": "standard_nft_hash",
			"type": {
				"displayName": [
				"Hash"
				],
				"type": 5
			}
			},
			{
			"label": "simple_mode_adding_fee",
			"type": {
				"displayName": [
				"Balance"
				],
				"type": 7
			}
			},
			{
			"label": "advance_mode_adding_fee",
			"type": {
				"displayName": [
				"Balance"
				],
				"type": 7
			}
			},
			{
			"label": "max_royalty_fee_rate",
			"type": {
				"displayName": [
				"u32"
				],
				"type": 4
			}
			},
			{
			"label": "admin_address",
			"type": {
				"displayName": [
				"AccountId"
				],
				"type": 0
			}
			}
		],
		"docs": [],
		"label": "initialize",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0xf2f6dba3"
		},
		{
		"args": [
			{
			"label": "nft_name",
			"type": {
				"displayName": [
				"String"
				],
				"type": 18
			}
			},
			{
			"label": "nft_symbol",
			"type": {
				"displayName": [
				"String"
				],
				"type": 18
			}
			},
			{
			"label": "attributes",
			"type": {
				"displayName": [
				"Vec"
				],
				"type": 23
			}
			},
			{
			"label": "attribute_vals",
			"type": {
				"displayName": [
				"Vec"
				],
				"type": 23
			}
			},
			{
			"label": "is_collect_royalty_fee",
			"type": {
				"displayName": [
				"bool"
				],
				"type": 8
			}
			},
			{
			"label": "royalty_fee",
			"type": {
				"displayName": [
				"u32"
				],
				"type": 4
			}
			}
		],
		"docs": [
			" Simple New Collection Creation - Auto create NFT Contract - Collection_Owner is owner of NFT contract and receive royalty fee"
		],
		"label": "auto_new_collection",
		"mutates": true,
		"payable": true,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0x05c561cd"
		},
		{
		"args": [
			{
			"label": "nft_contract_address",
			"type": {
				"displayName": [
				"AccountId"
				],
				"type": 0
			}
			},
			{
			"label": "attributes",
			"type": {
				"displayName": [
				"Vec"
				],
				"type": 23
			}
			},
			{
			"label": "attribute_vals",
			"type": {
				"displayName": [
				"Vec"
				],
				"type": 23
			}
			},
			{
			"label": "is_collect_royalty_fee",
			"type": {
				"displayName": [
				"bool"
				],
				"type": 8
			}
			},
			{
			"label": "royalty_fee",
			"type": {
				"displayName": [
				"u32"
				],
				"type": 4
			}
			}
		],
		"docs": [
			" Advanced Add new collection - with fee in AZERO 1% = 100 - anyone can add Existing contract - Collection_Owner is owner of NFT contract and receive royal fee"
		],
		"label": "add_new_collection",
		"mutates": true,
		"payable": true,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0x36193f5f"
		},
		{
		"args": [
			{
			"label": "role",
			"type": {
				"displayName": [
				"accesscontrol_external",
				"RenounceRoleInput1"
				],
				"type": 4
			}
			},
			{
			"label": "account",
			"type": {
				"displayName": [
				"accesscontrol_external",
				"RenounceRoleInput2"
				],
				"type": 0
			}
			}
		],
		"docs": [
			" Revokes `role` from the calling account.",
			" Roles are often managed via `grant_role` and `revoke_role`: this function's",
			" purpose is to provide a mechanism for accounts to lose their privileges",
			" if they are compromised (such as when a trusted device is misplaced).",
			"",
			" On success a `RoleRevoked` event is emitted.",
			"",
			" # Errors",
			"",
			" Returns with `InvalidCaller` error if caller is not `account`.",
			" Returns with `MissingRole` error if `account` doesn't have `role`."
		],
		"label": "AccessControl::renounce_role",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 24
		},
		"selector": "0xeaf1248a"
		},
		{
		"args": [
			{
			"label": "role",
			"type": {
				"displayName": [
				"accesscontrol_external",
				"HasRoleInput1"
				],
				"type": 4
			}
			},
			{
			"label": "address",
			"type": {
				"displayName": [
				"accesscontrol_external",
				"HasRoleInput2"
				],
				"type": 0
			}
			}
		],
		"docs": [
			" Returns `true` if `account` has been granted `role`."
		],
		"label": "AccessControl::has_role",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 26
		},
		"selector": "0xc1d9ac18"
		},
		{
		"args": [
			{
			"label": "role",
			"type": {
				"displayName": [
				"accesscontrol_external",
				"RevokeRoleInput1"
				],
				"type": 4
			}
			},
			{
			"label": "account",
			"type": {
				"displayName": [
				"accesscontrol_external",
				"RevokeRoleInput2"
				],
				"type": 0
			}
			}
		],
		"docs": [
			" Revokes `role` from `account`.",
			"",
			" On success a `RoleRevoked` event is emitted.",
			"",
			" # Errors",
			"",
			" Returns with `MissingRole` error if caller can't grant the `role` or if `account` doesn't have `role`."
		],
		"label": "AccessControl::revoke_role",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 24
		},
		"selector": "0x6e4f0991"
		},
		{
		"args": [
			{
			"label": "role",
			"type": {
				"displayName": [
				"accesscontrol_external",
				"GetRoleAdminInput1"
				],
				"type": 4
			}
			}
		],
		"docs": [
			" Returns the admin role that controls `role`. See `grant_role` and `revoke_role`."
		],
		"label": "AccessControl::get_role_admin",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 27
		},
		"selector": "0x83da3bb2"
		},
		{
		"args": [
			{
			"label": "role",
			"type": {
				"displayName": [
				"accesscontrol_external",
				"GrantRoleInput1"
				],
				"type": 4
			}
			},
			{
			"label": "account",
			"type": {
				"displayName": [
				"accesscontrol_external",
				"GrantRoleInput2"
				],
				"type": 0
			}
			}
		],
		"docs": [
			" Grants `role` to `account`.",
			"",
			" On success a `RoleGranted` event is emitted.",
			"",
			" # Errors",
			"",
			" Returns with `MissingRole` error if caller can't grant the role.",
			" Returns with `RoleRedundant` error `account` has `role`."
		],
		"label": "AccessControl::grant_role",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 24
		},
		"selector": "0x4ac062fd"
		},
		{
		"args": [
			{
			"label": "role",
			"type": {
				"displayName": [
				"accesscontrolenumerable_external",
				"GetRoleMemberInput1"
				],
				"type": 4
			}
			},
			{
			"label": "index",
			"type": {
				"displayName": [
				"accesscontrolenumerable_external",
				"GetRoleMemberInput2"
				],
				"type": 4
			}
			}
		],
		"docs": [
			" Returns one of the accounts that have `role`.",
			"",
			" Role bearers are not sorted in any particular way, and their",
			" ordering may change at any point."
		],
		"label": "AccessControlEnumerable::get_role_member",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 28
		},
		"selector": "0x163469e0"
		},
		{
		"args": [
			{
			"label": "role",
			"type": {
				"displayName": [
				"accesscontrolenumerable_external",
				"GetRoleMemberCountInput1"
				],
				"type": 4
			}
			}
		],
		"docs": [
			" Returns the number of accounts that have `role`.",
			" Can be used together with {get_role_member} to enumerate",
			" all bearers of a role."
		],
		"label": "AccessControlEnumerable::get_role_member_count",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 27
		},
		"selector": "0xf1b1a9d7"
		},
		{
		"args": [
			{
			"label": "new_owner",
			"type": {
				"displayName": [
				"ownable_external",
				"TransferOwnershipInput1"
				],
				"type": 0
			}
			}
		],
		"docs": [
			" Transfers ownership of the contract to a `new_owner`.",
			" Can only be called by the current owner.",
			"",
			" On success a `OwnershipTransferred` event is emitted.",
			"",
			" # Errors",
			"",
			" Panics with `CallerIsNotOwner` error if caller is not owner.",
			"",
			" Panics with `NewOwnerIsZero` error if new owner's address is zero."
		],
		"label": "Ownable::transfer_ownership",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 30
		},
		"selector": "0x11f43efd"
		},
		{
		"args": [],
		"docs": [
			" Returns the address of the current owner."
		],
		"label": "Ownable::owner",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 32
		},
		"selector": "0x4fa43c8c"
		},
		{
		"args": [],
		"docs": [
			" Leaves the contract without owner. It will not be possible to call",
			" owner's functions anymore. Can only be called by the current owner.",
			"",
			" NOTE: Renouncing ownership will leave the contract without an owner,",
			" thereby removing any functionality that is only available to the owner.",
			"",
			" On success a `OwnershipTransferred` event is emitted.",
			"",
			" # Errors",
			"",
			" Panics with `CallerIsNotOwner` error if caller is not owner"
		],
		"label": "Ownable::renounce_ownership",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 30
		},
		"selector": "0x5e228753"
		},
		{
		"args": [
			{
			"label": "standard_nft_hash",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"UpdateStandardNftHashInput1"
				],
				"type": 5
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::update_standard_nft_hash",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0x8f99cb93"
		},
		{
		"args": [
			{
			"label": "owner_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"GetCollectionsByOwnerInput1"
				],
				"type": 0
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::get_collections_by_owner",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 33
		},
		"selector": "0xae558f31"
		},
		{
		"args": [
			{
			"label": "contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"GetCollectionAttributeCountInput1"
				],
				"type": 0
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::get_collection_attribute_count",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 35
		},
		"selector": "0x13a2a329"
		},
		{
		"args": [
			{
			"label": "contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"UpdateContractTypeInput1"
				],
				"type": 0
			}
			},
			{
			"label": "contract_type",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"UpdateContractTypeInput2"
				],
				"type": 37
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::update_contract_type",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0x9df6e931"
		},
		{
		"args": [
			{
			"label": "nft_contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"GetCollectionOwnerInput1"
				],
				"type": 0
			}
			}
		],
		"docs": [
			" This function returns the Owner of a Collection"
		],
		"label": "ArtZeroCollectionTrait::get_collection_owner",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 28
		},
		"selector": "0xeb3b33fd"
		},
		{
		"args": [
			{
			"label": "contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"UpdateCollectionOwnerInput1"
				],
				"type": 0
			}
			},
			{
			"label": "new_owner",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"UpdateCollectionOwnerInput2"
				],
				"type": 0
			}
			}
		],
		"docs": [
			" This function updates Owner of Collecion - who receive royalty fee - Only Admin can change"
		],
		"label": "ArtZeroCollectionTrait::update_collection_owner",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0x614a1a1a"
		},
		{
		"args": [
			{
			"label": "contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"UpdateIsCollectRoyaltyFeeInput1"
				],
				"type": 0
			}
			},
			{
			"label": "is_collect_royalty_fee",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"UpdateIsCollectRoyaltyFeeInput2"
				],
				"type": 8
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::update_is_collect_royalty_fee",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0xb889a131"
		},
		{
		"args": [
			{
			"label": "contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"GetCollectionAttributeIndexInput1"
				],
				"type": 0
			}
			},
			{
			"label": "attribute_key",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"GetCollectionAttributeIndexInput2"
				],
				"type": 18
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::get_collection_attribute_index",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 35
		},
		"selector": "0xa29e5168"
		},
		{
		"args": [],
		"docs": [],
		"label": "ArtZeroCollectionTrait::get_simple_mode_adding_fee",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 38
		},
		"selector": "0xb568138f"
		},
		{
		"args": [],
		"docs": [],
		"label": "ArtZeroCollectionTrait::get_advance_mode_adding_fee",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 38
		},
		"selector": "0x4d39a1d2"
		},
		{
		"args": [],
		"docs": [],
		"label": "ArtZeroCollectionTrait::get_max_royalty_fee_rate",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 27
		},
		"selector": "0x1923715e"
		},
		{
		"args": [
			{
			"label": "contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"HasAttributeInput1"
				],
				"type": 0
			}
			},
			{
			"label": "attribute_key",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"HasAttributeInput2"
				],
				"type": 18
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::has_attribute",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 26
		},
		"selector": "0x3222a5ae"
		},
		{
		"args": [
			{
			"label": "contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"UpdateRoyaltyFeeInput1"
				],
				"type": 0
			}
			},
			{
			"label": "new_fee",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"UpdateRoyaltyFeeInput2"
				],
				"type": 4
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::update_royalty_fee",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0x98c8278a"
		},
		{
		"args": [],
		"docs": [],
		"label": "ArtZeroCollectionTrait::get_standard_nft_hash",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 39
		},
		"selector": "0x8c600aed"
		},
		{
		"args": [],
		"docs": [],
		"label": "ArtZeroCollectionTrait::get_active_collection_count",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 40
		},
		"selector": "0x3c35bce3"
		},
		{
		"args": [
			{
			"label": "id",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"GetContractByIdInput1"
				],
				"type": 6
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::get_contract_by_id",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 28
		},
		"selector": "0xea26b44c"
		},
		{
		"args": [
			{
			"label": "advance_mode_adding_fee",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"UpdateAdvanceModeAddingFeeInput1"
				],
				"type": 7
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::update_advance_mode_adding_fee",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0x04c17fa6"
		},
		{
		"args": [
			{
			"label": "nft_contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"GetRoyaltyFeeInput1"
				],
				"type": 0
			}
			}
		],
		"docs": [
			" This function returns royalty fee of a Collection"
		],
		"label": "ArtZeroCollectionTrait::get_royalty_fee",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 27
		},
		"selector": "0xfd0ba95a"
		},
		{
		"args": [
			{
			"label": "contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"GetAttributeInput1"
				],
				"type": 0
			}
			},
			{
			"label": "attribute_key",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"GetAttributeInput2"
				],
				"type": 18
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::get_attribute",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 41
		},
		"selector": "0xc2b400f5"
		},
		{
		"args": [
			{
			"label": "nft_contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"IsActiveInput1"
				],
				"type": 0
			}
			}
		],
		"docs": [
			" This function checks if the Collection is active or not. Only Active Collections can be seen on the Marketplace"
		],
		"label": "ArtZeroCollectionTrait::is_active",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 26
		},
		"selector": "0x08c3a1b4"
		},
		{
		"args": [
			{
			"label": "contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"GetAttributesInput1"
				],
				"type": 0
			}
			},
			{
			"label": "attributes",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"GetAttributesInput2"
				],
				"type": 23
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::get_attributes",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 42
		},
		"selector": "0x1b39c2bc"
		},
		{
		"args": [
			{
			"label": "contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"UpdateShowOnChainMetadataInput1"
				],
				"type": 0
			}
			},
			{
			"label": "show_on_chain_metadata",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"UpdateShowOnChainMetadataInput2"
				],
				"type": 8
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::update_show_on_chain_metadata",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0x9d106954"
		},
		{
		"args": [
			{
			"label": "nft_contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"GetContractTypeInput1"
				],
				"type": 0
			}
			}
		],
		"docs": [
			" This function returns NFT Contract Type. When the collection is created using auto_new_collection, this set to 2 and when using add_new_collection, this set to 1. Contract Type is to identify if the contract is standard or customized one."
		],
		"label": "ArtZeroCollectionTrait::get_contract_type",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 43
		},
		"selector": "0xdcd3b8f4"
		},
		{
		"args": [
			{
			"label": "contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"SetMultipleAttributesInput1"
				],
				"type": 0
			}
			},
			{
			"label": "attributes",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"SetMultipleAttributesInput2"
				],
				"type": 23
			}
			},
			{
			"label": "values",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"SetMultipleAttributesInput3"
				],
				"type": 23
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::set_multiple_attributes",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0x88a3a682"
		},
		{
		"args": [],
		"docs": [],
		"label": "ArtZeroCollectionTrait::get_collection_count",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 40
		},
		"selector": "0xe00e1965"
		},
		{
		"args": [
			{
			"label": "max_royalty_fee_rate",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"UpdateMaxRoyaltyFeeRateInput1"
				],
				"type": 4
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::update_max_royalty_fee_rate",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0xf3055b84"
		},
		{
		"args": [
			{
			"label": "simple_mode_adding_fee",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"UpdateSimpleModeAddingFeeInput1"
				],
				"type": 7
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::update_simple_mode_adding_fee",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0xa50cf9ff"
		},
		{
		"args": [
			{
			"label": "contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"UpdateIsActiveInput1"
				],
				"type": 0
			}
			},
			{
			"label": "is_active",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"UpdateIsActiveInput2"
				],
				"type": 8
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::update_is_active",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0xc0c13fae"
		},
		{
		"args": [
			{
			"label": "nft_contract_address",
			"type": {
				"displayName": [
				"artzerocollectiontrait_external",
				"GetCollectionByAddressInput1"
				],
				"type": 0
			}
			}
		],
		"docs": [],
		"label": "ArtZeroCollectionTrait::get_collection_by_address",
		"mutates": false,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 44
		},
		"selector": "0x5168d7f3"
		},
		{
		"args": [
			{
			"label": "nft_contract_address",
			"type": {
				"displayName": [
				"admintrait_external",
				"TranferNftInput1"
				],
				"type": 0
			}
			},
			{
			"label": "token_id",
			"type": {
				"displayName": [
				"admintrait_external",
				"TranferNftInput2"
				],
				"type": 47
			}
			},
			{
			"label": "receiver",
			"type": {
				"displayName": [
				"admintrait_external",
				"TranferNftInput3"
				],
				"type": 0
			}
			}
		],
		"docs": [
			" This function allow contract owner withdraw NFT to an account in case there is any NFT sent to contract by mistake"
		],
		"label": "AdminTrait::tranfer_nft",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0xed1e1dfa"
		},
		{
		"args": [
			{
			"label": "value",
			"type": {
				"displayName": [
				"admintrait_external",
				"WithdrawFeeInput1"
				],
				"type": 7
			}
			},
			{
			"label": "receiver",
			"type": {
				"displayName": [
				"admintrait_external",
				"WithdrawFeeInput2"
				],
				"type": 0
			}
			}
		],
		"docs": [
			" This function allows contract owner to withdraw contract balance to his account."
		],
		"label": "AdminTrait::withdraw_fee",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0x07573e99"
		},
		{
		"args": [
			{
			"label": "psp22_contract_address",
			"type": {
				"displayName": [
				"admintrait_external",
				"TranferPsp22Input1"
				],
				"type": 0
			}
			},
			{
			"label": "amount",
			"type": {
				"displayName": [
				"admintrait_external",
				"TranferPsp22Input2"
				],
				"type": 7
			}
			},
			{
			"label": "receiver",
			"type": {
				"displayName": [
				"admintrait_external",
				"TranferPsp22Input3"
				],
				"type": 0
			}
			}
		],
		"docs": [
			" This function allow contract owner withdraw PSP22 to an account in case there is any token sent to contract by mistake"
		],
		"label": "AdminTrait::tranfer_psp22",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0xd9aad284"
		},
		{
		"args": [
			{
			"label": "code_hash",
			"type": {
				"displayName": [
				"upgradabletrait_external",
				"SetCodeInput1"
				],
				"type": 1
			}
			}
		],
		"docs": [
			" This function allow contract owner modifies the code which is used to execute calls to this contract address (`AccountId`)."
		],
		"label": "UpgradableTrait::set_code",
		"mutates": true,
		"payable": false,
		"returnType": {
			"displayName": [
			"ink",
			"MessageResult"
			],
			"type": 15
		},
		"selector": "0xa9e46760"
		}
	]
	},
	"storage": {
	"root": {
		"layout": {
		"struct": {
			"fields": [
			{
				"layout": {
				"struct": {
					"fields": [
					{
						"layout": {
						"leaf": {
							"key": "0x00000000",
							"ty": 0
						}
						},
						"name": "owner"
					},
					{
						"layout": {
						"enum": {
							"dispatchKey": "0x00000000",
							"name": "Option",
							"variants": {
							"0": {
								"fields": [],
								"name": "None"
							},
							"1": {
								"fields": [
								{
									"layout": {
									"leaf": {
										"key": "0x00000000",
										"ty": 3
									}
									},
									"name": "0"
								}
								],
								"name": "Some"
							}
							}
						}
						},
						"name": "_reserved"
					}
					],
					"name": "Data"
				}
				},
				"name": "ownable"
			},
			{
				"layout": {
				"struct": {
					"fields": [
					{
						"layout": {
						"root": {
							"layout": {
							"leaf": {
								"key": "0x6a2cd2b4",
								"ty": 4
							}
							},
							"root_key": "0x6a2cd2b4"
						}
						},
						"name": "admin_roles"
					},
					{
						"layout": {
						"struct": {
							"fields": [
							{
								"layout": {
								"root": {
									"layout": {
									"leaf": {
										"key": "0x6888e7ba",
										"ty": 0
									}
									},
									"root_key": "0x6888e7ba"
								}
								},
								"name": "role_members"
							},
							{
								"layout": {
								"enum": {
									"dispatchKey": "0x00000000",
									"name": "Option",
									"variants": {
									"0": {
										"fields": [],
										"name": "None"
									},
									"1": {
										"fields": [
										{
											"layout": {
											"leaf": {
												"key": "0x00000000",
												"ty": 3
											}
											},
											"name": "0"
										}
										],
										"name": "Some"
									}
									}
								}
								},
								"name": "_reserved"
							}
							],
							"name": "Members"
						}
						},
						"name": "members"
					},
					{
						"layout": {
						"enum": {
							"dispatchKey": "0x00000000",
							"name": "Option",
							"variants": {
							"0": {
								"fields": [],
								"name": "None"
							},
							"1": {
								"fields": [
								{
									"layout": {
									"leaf": {
										"key": "0x00000000",
										"ty": 3
									}
									},
									"name": "0"
								}
								],
								"name": "Some"
							}
							}
						}
						},
						"name": "_reserved"
					}
					],
					"name": "Data"
				}
				},
				"name": "access_control"
			},
			{
				"layout": {
				"struct": {
					"fields": [
					{
						"layout": {
						"leaf": {
							"key": "0x00000000",
							"ty": 5
						}
						},
						"name": "standard_nft_hash"
					},
					{
						"layout": {
						"leaf": {
							"key": "0x00000000",
							"ty": 6
						}
						},
						"name": "collection_count"
					},
					{
						"layout": {
						"leaf": {
							"key": "0x00000000",
							"ty": 7
						}
						},
						"name": "simple_mode_adding_fee"
					},
					{
						"layout": {
						"leaf": {
							"key": "0x00000000",
							"ty": 7
						}
						},
						"name": "advance_mode_adding_fee"
					},
					{
						"layout": {
						"root": {
							"layout": {
							"struct": {
								"fields": [
								{
									"layout": {
									"leaf": {
										"key": "0x7d9b293f",
										"ty": 0
									}
									},
									"name": "collection_owner"
								},
								{
									"layout": {
									"leaf": {
										"key": "0x7d9b293f",
										"ty": 4
									}
									},
									"name": "collection_id"
								},
								{
									"layout": {
									"leaf": {
										"key": "0x7d9b293f",
										"ty": 0
									}
									},
									"name": "nft_contract_address"
								},
								{
									"layout": {
									"enum": {
										"dispatchKey": "0x7d9b293f",
										"name": "CollectionType",
										"variants": {
										"0": {
											"fields": [],
											"name": "Unknown"
										},
										"1": {
											"fields": [],
											"name": "Psp34Manual"
										},
										"2": {
											"fields": [],
											"name": "Psp34Auto"
										},
										"3": {
											"fields": [],
											"name": "Psp1155Manual"
										},
										"4": {
											"fields": [],
											"name": "Psp1155Auto"
										},
										"5": {
											"fields": [],
											"name": "Reserved1"
										},
										"6": {
											"fields": [],
											"name": "Reserved2"
										}
										}
									}
									},
									"name": "contract_type"
								},
								{
									"layout": {
									"leaf": {
										"key": "0x7d9b293f",
										"ty": 8
									}
									},
									"name": "is_collect_royalty_fee"
								},
								{
									"layout": {
									"leaf": {
										"key": "0x7d9b293f",
										"ty": 4
									}
									},
									"name": "royalty_fee"
								},
								{
									"layout": {
									"leaf": {
										"key": "0x7d9b293f",
										"ty": 8
									}
									},
									"name": "is_active"
								},
								{
									"layout": {
									"leaf": {
										"key": "0x7d9b293f",
										"ty": 8
									}
									},
									"name": "show_on_chain_metadata"
								}
								],
								"name": "Collection"
							}
							},
							"root_key": "0x7d9b293f"
						}
						},
						"name": "collections"
					},
					{
						"layout": {
						"root": {
							"layout": {
							"leaf": {
								"key": "0x769129ae",
								"ty": 0
							}
							},
							"root_key": "0x769129ae"
						}
						},
						"name": "collections_by_id"
					},
					{
						"layout": {
						"root": {
							"layout": {
							"leaf": {
								"key": "0x56b212ad",
								"ty": 9
							}
							},
							"root_key": "0x56b212ad"
						}
						},
						"name": "collections_by_owner"
					},
					{
						"layout": {
						"leaf": {
							"key": "0x00000000",
							"ty": 4
						}
						},
						"name": "max_royalty_fee_rate"
					},
					{
						"layout": {
						"leaf": {
							"key": "0x00000000",
							"ty": 6
						}
						},
						"name": "active_collection_count"
					},
					{
						"layout": {
						"root": {
							"layout": {
							"leaf": {
								"key": "0x8c6b71cd",
								"ty": 10
							}
							},
							"root_key": "0x8c6b71cd"
						}
						},
						"name": "attributes"
					},
					{
						"layout": {
						"enum": {
							"dispatchKey": "0x00000000",
							"name": "Option",
							"variants": {
							"0": {
								"fields": [],
								"name": "None"
							},
							"1": {
								"fields": [
								{
									"layout": {
									"leaf": {
										"key": "0x00000000",
										"ty": 3
									}
									},
									"name": "0"
								}
								],
								"name": "Some"
							}
							}
						}
						},
						"name": "_reserved"
					}
					],
					"name": "Manager"
				}
				},
				"name": "manager"
			},
			{
				"layout": {
				"struct": {
					"fields": [
					{
						"layout": {
						"enum": {
							"dispatchKey": "0x00000000",
							"name": "Option",
							"variants": {
							"0": {
								"fields": [],
								"name": "None"
							},
							"1": {
								"fields": [
								{
									"layout": {
									"leaf": {
										"key": "0x00000000",
										"ty": 3
									}
									},
									"name": "0"
								}
								],
								"name": "Some"
							}
							}
						}
						},
						"name": "_reserved"
					}
					],
					"name": "Data"
				}
				},
				"name": "admin_data"
			},
			{
				"layout": {
				"struct": {
					"fields": [
					{
						"layout": {
						"enum": {
							"dispatchKey": "0x00000000",
							"name": "Option",
							"variants": {
							"0": {
								"fields": [],
								"name": "None"
							},
							"1": {
								"fields": [
								{
									"layout": {
									"leaf": {
										"key": "0x00000000",
										"ty": 3
									}
									},
									"name": "0"
								}
								],
								"name": "Some"
							}
							}
						}
						},
						"name": "_reserved"
					}
					],
					"name": "Data"
				}
				},
				"name": "upgradable_data"
			}
			],
			"name": "ArtZeroCollectionManager"
		}
		},
		"root_key": "0x00000000"
	}
	},
	"types": [
	{
		"id": 0,
		"type": {
		"def": {
			"composite": {
			"fields": [
				{
				"type": 1,
				"typeName": "[u8; 32]"
				}
			]
			}
		},
		"path": [
			"ink_primitives",
			"types",
			"AccountId"
		]
		}
	},
	{
		"id": 1,
		"type": {
		"def": {
			"array": {
			"len": 32,
			"type": 2
			}
		}
		}
	},
	{
		"id": 2,
		"type": {
		"def": {
			"primitive": "u8"
		}
		}
	},
	{
		"id": 3,
		"type": {
		"def": {
			"tuple": []
		}
		}
	},
	{
		"id": 4,
		"type": {
		"def": {
			"primitive": "u32"
		}
		}
	},
	{
		"id": 5,
		"type": {
		"def": {
			"composite": {
			"fields": [
				{
				"type": 1,
				"typeName": "[u8; 32]"
				}
			]
			}
		},
		"path": [
			"ink_primitives",
			"types",
			"Hash"
		]
		}
	},
	{
		"id": 6,
		"type": {
		"def": {
			"primitive": "u64"
		}
		}
	},
	{
		"id": 7,
		"type": {
		"def": {
			"primitive": "u128"
		}
		}
	},
	{
		"id": 8,
		"type": {
		"def": {
			"primitive": "bool"
		}
		}
	},
	{
		"id": 9,
		"type": {
		"def": {
			"sequence": {
			"type": 0
			}
		}
		}
	},
	{
		"id": 10,
		"type": {
		"def": {
			"sequence": {
			"type": 11
			}
		}
		}
	},
	{
		"id": 11,
		"type": {
		"def": {
			"tuple": [
			12,
			12
			]
		}
		}
	},
	{
		"id": 12,
		"type": {
		"def": {
			"sequence": {
			"type": 2
			}
		}
		}
	},
	{
		"id": 13,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 3
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 3
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 14,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"index": 1,
				"name": "CouldNotReadInput"
				}
			]
			}
		},
		"path": [
			"ink_primitives",
			"LangError"
		]
		}
	},
	{
		"id": 15,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 16
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 16
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 16,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 3
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 17
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 3
			},
			{
			"name": "E",
			"type": 17
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 17,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 18,
					"typeName": "String"
					}
				],
				"index": 0,
				"name": "Custom"
				},
				{
				"index": 1,
				"name": "OnlyOwner"
				},
				{
				"index": 2,
				"name": "OnlyAdmin"
				},
				{
				"index": 3,
				"name": "InvalidCaller"
				},
				{
				"index": 4,
				"name": "InvalidFee"
				},
				{
				"index": 5,
				"name": "TokenOwnerNotMatch"
				},
				{
				"index": 6,
				"name": "NotApproved"
				},
				{
				"index": 7,
				"name": "CannotTransfer"
				},
				{
				"index": 8,
				"name": "CannotMint"
				},
				{
				"index": 9,
				"name": "NotPublicMint"
				},
				{
				"index": 10,
				"name": "NotEnoughBalance"
				},
				{
				"index": 11,
				"name": "MaxSupply"
				},
				{
				"index": 12,
				"name": "AlreadyInit"
				},
				{
				"index": 13,
				"name": "NotOwner"
				},
				{
				"index": 14,
				"name": "NotTokenOwner"
				},
				{
				"index": 15,
				"name": "ProjectNotExist"
				},
				{
				"index": 16,
				"name": "ProjectOwnerAndAdmin"
				},
				{
				"index": 17,
				"name": "InvalidStartTimeAndEndTime"
				},
				{
				"index": 18,
				"name": "InvalidPhaseCount"
				},
				{
				"index": 19,
				"name": "CollectionOwnerAndAdmin"
				},
				{
				"index": 20,
				"name": "CollectionNotActive"
				},
				{
				"index": 21,
				"name": "CollectionNotExist"
				},
				{
				"index": 22,
				"name": "InvalidInput"
				},
				{
				"index": 23,
				"name": "InvalidType"
				},
				{
				"index": 24,
				"name": "ClaimedAll"
				},
				{
				"index": 25,
				"name": "TokenLimitReached"
				},
				{
				"index": 26,
				"name": "UpdatePhase"
				},
				{
				"index": 27,
				"name": "PhaseNotExist"
				},
				{
				"index": 28,
				"name": "PhaseExpired"
				},
				{
				"index": 29,
				"name": "PhaseDeactivate"
				},
				{
				"index": 30,
				"name": "WhitelistNotExist"
				},
				{
				"index": 31,
				"name": "WithdrawFeeError"
				},
				{
				"index": 32,
				"name": "WithdrawNFTError"
				},
				{
				"index": 33,
				"name": "WithdrawPSP22Error"
				},
				{
				"index": 34,
				"name": "NotListed"
				},
				{
				"index": 35,
				"name": "BidAlreadyExist"
				},
				{
				"index": 36,
				"name": "BidNotExist"
				},
				{
				"index": 37,
				"name": "NotInMarket"
				},
				{
				"index": 38,
				"name": "NotForSale"
				},
				{
				"index": 39,
				"name": "NotInSaleList"
				},
				{
				"index": 40,
				"name": "InvalidBidLength"
				},
				{
				"index": 41,
				"name": "InvalidCollectionOwner"
				},
				{
				"index": 42,
				"name": "InvalidTime"
				},
				{
				"index": 43,
				"name": "RewardStarted"
				},
				{
				"index": 44,
				"name": "RewardNotStarted"
				},
				{
				"index": 45,
				"name": "RewardNotAdded"
				},
				{
				"index": 46,
				"name": "ClaimMustBeFalse"
				},
				{
				"index": 47,
				"name": "HoldAmountBidderNotExist"
				},
				{
				"fields": [
					{
					"type": 19,
					"typeName": "OwnableError"
					}
				],
				"index": 48,
				"name": "OwnableError"
				},
				{
				"fields": [
					{
					"type": 20,
					"typeName": "AccessControlError"
					}
				],
				"index": 49,
				"name": "AccessControlError"
				},
				{
				"fields": [
					{
					"type": 21,
					"typeName": "PSP22Error"
					}
				],
				"index": 50,
				"name": "PSP22Error"
				},
				{
				"fields": [
					{
					"type": 22,
					"typeName": "PSP34Error"
					}
				],
				"index": 51,
				"name": "PSP34Error"
				},
				{
				"index": 52,
				"name": "CheckedOperations"
				}
			]
			}
		},
		"path": [
			"artzero_project",
			"traits",
			"error",
			"Error"
		]
		}
	},
	{
		"id": 18,
		"type": {
		"def": {
			"primitive": "str"
		}
		}
	},
	{
		"id": 19,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"index": 0,
				"name": "CallerIsNotOwner"
				},
				{
				"index": 1,
				"name": "NewOwnerIsZero"
				}
			]
			}
		},
		"path": [
			"openbrush_contracts",
			"traits",
			"errors",
			"ownable",
			"OwnableError"
		]
		}
	},
	{
		"id": 20,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"index": 0,
				"name": "InvalidCaller"
				},
				{
				"index": 1,
				"name": "MissingRole"
				},
				{
				"index": 2,
				"name": "RoleRedundant"
				}
			]
			}
		},
		"path": [
			"openbrush_contracts",
			"traits",
			"errors",
			"access_control",
			"AccessControlError"
		]
		}
	},
	{
		"id": 21,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 12,
					"typeName": "String"
					}
				],
				"index": 0,
				"name": "Custom"
				},
				{
				"index": 1,
				"name": "InsufficientBalance"
				},
				{
				"index": 2,
				"name": "InsufficientAllowance"
				},
				{
				"index": 3,
				"name": "ZeroRecipientAddress"
				},
				{
				"index": 4,
				"name": "ZeroSenderAddress"
				},
				{
				"fields": [
					{
					"type": 12,
					"typeName": "String"
					}
				],
				"index": 5,
				"name": "SafeTransferCheckFailed"
				}
			]
			}
		},
		"path": [
			"openbrush_contracts",
			"traits",
			"errors",
			"psp22",
			"PSP22Error"
		]
		}
	},
	{
		"id": 22,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 12,
					"typeName": "String"
					}
				],
				"index": 0,
				"name": "Custom"
				},
				{
				"index": 1,
				"name": "SelfApprove"
				},
				{
				"index": 2,
				"name": "NotApproved"
				},
				{
				"index": 3,
				"name": "TokenExists"
				},
				{
				"index": 4,
				"name": "TokenNotExists"
				},
				{
				"fields": [
					{
					"type": 12,
					"typeName": "String"
					}
				],
				"index": 5,
				"name": "SafeTransferCheckFailed"
				}
			]
			}
		},
		"path": [
			"openbrush_contracts",
			"traits",
			"errors",
			"psp34",
			"PSP34Error"
		]
		}
	},
	{
		"id": 23,
		"type": {
		"def": {
			"sequence": {
			"type": 18
			}
		}
		}
	},
	{
		"id": 24,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 25
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 25
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 25,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 3
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 20
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 3
			},
			{
			"name": "E",
			"type": 20
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 26,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 8
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 8
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 27,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 4
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 4
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 28,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 29
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 29
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 29,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"index": 0,
				"name": "None"
				},
				{
				"fields": [
					{
					"type": 0
					}
				],
				"index": 1,
				"name": "Some"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 0
			}
		],
		"path": [
			"Option"
		]
		}
	},
	{
		"id": 30,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 31
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 31
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 31,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 3
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 19
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 3
			},
			{
			"name": "E",
			"type": 19
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 32,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 0
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 0
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 33,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 34
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 34
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 34,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"index": 0,
				"name": "None"
				},
				{
				"fields": [
					{
					"type": 9
					}
				],
				"index": 1,
				"name": "Some"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 9
			}
		],
		"path": [
			"Option"
		]
		}
	},
	{
		"id": 35,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 36
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 36
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 36,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"index": 0,
				"name": "None"
				},
				{
				"fields": [
					{
					"type": 6
					}
				],
				"index": 1,
				"name": "Some"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 6
			}
		],
		"path": [
			"Option"
		]
		}
	},
	{
		"id": 37,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"index": 0,
				"name": "Unknown"
				},
				{
				"index": 1,
				"name": "Psp34Manual"
				},
				{
				"index": 2,
				"name": "Psp34Auto"
				},
				{
				"index": 3,
				"name": "Psp1155Manual"
				},
				{
				"index": 4,
				"name": "Psp1155Auto"
				},
				{
				"index": 5,
				"name": "Reserved1"
				},
				{
				"index": 6,
				"name": "Reserved2"
				}
			]
			}
		},
		"path": [
			"artzero_project",
			"traits",
			"collection_manager",
			"CollectionType"
		]
		}
	},
	{
		"id": 38,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 7
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 7
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 39,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 5
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 5
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 40,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 6
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 6
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 41,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 18
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 18
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 42,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 23
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 23
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 43,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 37
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 37
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 44,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 45
					}
				],
				"index": 0,
				"name": "Ok"
				},
				{
				"fields": [
					{
					"type": 14
					}
				],
				"index": 1,
				"name": "Err"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 45
			},
			{
			"name": "E",
			"type": 14
			}
		],
		"path": [
			"Result"
		]
		}
	},
	{
		"id": 45,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"index": 0,
				"name": "None"
				},
				{
				"fields": [
					{
					"type": 46
					}
				],
				"index": 1,
				"name": "Some"
				}
			]
			}
		},
		"params": [
			{
			"name": "T",
			"type": 46
			}
		],
		"path": [
			"Option"
		]
		}
	},
	{
		"id": 46,
		"type": {
		"def": {
			"composite": {
			"fields": [
				{
				"name": "collection_owner",
				"type": 0,
				"typeName": "AccountId"
				},
				{
				"name": "collection_id",
				"type": 4,
				"typeName": "u32"
				},
				{
				"name": "nft_contract_address",
				"type": 0,
				"typeName": "AccountId"
				},
				{
				"name": "contract_type",
				"type": 37,
				"typeName": "CollectionType"
				},
				{
				"name": "is_collect_royalty_fee",
				"type": 8,
				"typeName": "bool"
				},
				{
				"name": "royalty_fee",
				"type": 4,
				"typeName": "u32"
				},
				{
				"name": "is_active",
				"type": 8,
				"typeName": "bool"
				},
				{
				"name": "show_on_chain_metadata",
				"type": 8,
				"typeName": "bool"
				}
			]
			}
		},
		"path": [
			"artzero_project",
			"impls",
			"collection_manager",
			"data",
			"Collection"
		]
		}
	},
	{
		"id": 47,
		"type": {
		"def": {
			"variant": {
			"variants": [
				{
				"fields": [
					{
					"type": 2,
					"typeName": "u8"
					}
				],
				"index": 0,
				"name": "U8"
				},
				{
				"fields": [
					{
					"type": 48,
					"typeName": "u16"
					}
				],
				"index": 1,
				"name": "U16"
				},
				{
				"fields": [
					{
					"type": 4,
					"typeName": "u32"
					}
				],
				"index": 2,
				"name": "U32"
				},
				{
				"fields": [
					{
					"type": 6,
					"typeName": "u64"
					}
				],
				"index": 3,
				"name": "U64"
				},
				{
				"fields": [
					{
					"type": 7,
					"typeName": "u128"
					}
				],
				"index": 4,
				"name": "U128"
				},
				{
				"fields": [
					{
					"type": 12,
					"typeName": "Vec<u8>"
					}
				],
				"index": 5,
				"name": "Bytes"
				}
			]
			}
		},
		"path": [
			"openbrush_contracts",
			"traits",
			"types",
			"Id"
		]
		}
	},
	{
		"id": 48,
		"type": {
		"def": {
			"primitive": "u16"
		}
		}
	}
	],
	"version": "4"
}
};

module.exports = {
	collection_manager: collection_manager,
  };
  