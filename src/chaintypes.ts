import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
    rpc: {
        automationTime: {
            generateTaskId: {
                description: 'Getting task ID given account ID and provided ID',
                params: [
                    {
                        name: 'accountId',
                        type: 'AccountId',
                    },
                    {
                        name: 'providedId',
                        type: 'Text',
                    },
                ],
                type: 'Hash',
            },
        },
    },
    types: [
        {
            // on all versions
            minmax: [0, undefined],
            types:{
                MyText:  "Text",
                SpreadInfo: {
                        parent: "Option<T::AccountId>",
                        last_height: "T::BlockNumber",
                        create_time: "u64"
                },
                ScoreInfo: {
                        score: "u128",
                        create_time: "u64",
                        update_time: "u64"
                },
                VpnId: "u32",
                OrderInfo: {
                        vpn_id: "VpnId",
                        buyer: "T::AccountId",
                        token_md5: "Text",
                        client_cfg: "Text",
                        update_time: "u64"
                },
                AreaId: "u16",
                Asset: "Text",
                Payload: {
                        number: "u64",
                        public: "Public"
                },
                AssetId: "Text",
                PoolId: "u64",
                AccountDeposit: {
                        amount: "BalanceOf<T>",
                        assets: "BTreeMap<T::AssetId, BalanceOf<T>>"
                },
                AssetBalance: {
                        asset: "AssetId",
                        amount: "BalanceOf<T>"
                },
                AssetSwap: {
                        pool_id: "PoolId",
                        asset_in: "AssetId",
                        amount_in: "Option<Balance>",
                        asset_out: "AssetId",
                        min_amount_out: "BalanceOf<T>"
                },
                AssetSwapInfo: {
                        pool_id: "PoolId",
                        asset_in: "AssetId",
                        amount_in: "Balance",
                        asset_out: "AssetId",
                        amount_out: "Balance"
                },
                SwapVolume: {
                        input: "Balance",
                        output: "Balance"
                },
                BasicPool: {
                        asset_ids_to_amounts: "BTreeMap<T::AssetId, BalanceOf<T>>",
                        volumes: "BTreeMap<T::AssetId, SwapVolume<BalanceOf<T>>>",
                        total_fee: "BalanceOf<T>",
                        exchange_fee: "BalanceOf<T>",
                        referral_fee: "BalanceOf<T>",
                        shares: "BTreeMap<AccountId, BalanceOf<T>>",
                        shares_total_supply: "BalanceOf<T>"
                },
                Pool: {
                _enum: {
                        BasicPool: "BasicPool"
                }
                },
                DaoId: "u64",
                DaoStatus: {
                _enum: [
                        "Proposal",
                        "Normal",
                        "Finish",
                        "Abort"
                ]
                },
                BasicDao: {
                shares: "BTreeMap<T::AccountId, BalanceOf<T>>",
                supply: "BalanceOf<T>",
                to_supply: "BalanceOf<T>",
                status: "DaoStatus",
                desp: "Text",
                asset_id: "Option<T::AssetId>",
                to_asset_id: "T::AssetId",
                deadline: "T::BlockNumber",
                rate: "u128",
                min: "BalanceOf<T>",
                max: "BalanceOf<T>",
                keep_rate: "u128",
                keep_account: "T::AccountId"
                },
                Dao: {
                _enum: {
                        BasicDao: "BasicDao"
                }
                },
                VpnInfo: {
                        exid: "Text",
                        title: "Text",
                        max_use: "u16",
                        pledge: "BalanceOf<T>",
                        update_time: "u64"
                },
                AdvertiseInfo: {
                        area_id: "AreaId",
                        title: "Text",
                        slogan: "Text",
                        ids: "Vec<VpnId>",
                        update_time: "u64"
                }
            }
        }
    ],
};

export default { typesBundle: {spec: {"node-template": definitions}}};

