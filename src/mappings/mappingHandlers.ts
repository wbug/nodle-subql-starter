import {SubstrateEvent} from "@subql/types";
import {Account} from "../types";
import {Transfer} from "../types";
import {Balance} from "@polkadot/types/interfaces";

export async function handleEvent(event: SubstrateEvent): Promise<void> {
    logger.info(`handle event  at ${event} `);
    const {event: {data: [account, dest, balance]}} = event;
     //Create a new Account entity with ID using block hash
    //let record = new Account(event.extrinsic.block.block.header.hash.toString());
    let record = new Transfer(account.toString()+ "_"+ event.extrinsic.block.block.header.number.toNumber().toString());
    // Assign the Polkadot address to the account field
    record.from = account.toString();
    record.to = dest.toString();
    // Assign the balance to the balance field "type cast as Balance"
    record.balance = (balance as Balance).toBigInt();
    record.timestamp = event.extrinsic.block.timestamp;
    await record.save();
}


