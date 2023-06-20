import type { CheckpointWriter } from '@snapshot-labs/checkpoint';

export async function handleDeploy() {
  // Run logic as at the time Contract was deployed.
}

// This decodes the new_post events data and stores successfully
// decoded information in the `posts` table.
//
// See here for the original logic used to create post transactions:
// https://gist.github.com/perfectmak/417a4dab69243c517654195edf100ef9#file-index-ts
export async function handleIncreaseBalance({
  block,
  tx,
  event,
  mysql
}: Parameters<CheckpointWriter>[0]) {
  if (!event) return;

  const currentBalance = BigInt(event.data[0]);
  const amount = BigInt(event.data[1]);
  const timestamp = block.timestamp;
  const blockNumber = block.block_number;

  const post = {
    id: tx.transaction_hash,
    current_balance: currentBalance,
    amount,
    tx_hash: tx.transaction_hash,
    created_at: timestamp,
    created_at_block: blockNumber
  };

  // table names are `lowercase(TypeName)s` and can be interacted with sql
  await mysql.queryAsync('INSERT IGNORE INTO posts SET ?', [post]);
}
