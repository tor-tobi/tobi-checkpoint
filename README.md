# Checkpoint starter template

This is a template to quickly get started to use [Checkpoint](https://docs.checkpoint.fyi)
to expose a GraphQL API to query data from your StarkNet contracts.

## Getting started

This starter project contains logic to index events from a StarkNet Poster contract that is defined in the
[starknet-poster](https://github.com/snapshot-labs/starknet-poster/blob/master/contracts/Poster.cairo) repository.

Create a copy of this repository by clicking **'Use this template'** button or clicking [this
link](https://github.com/snapshot-labs/checkpoint-template/generate).

**Requirements**

- Node.js (>= 16.x.x)
- Docker with `docker-compose`
- Yarn

> You can also use npm, just make sure to replace the subsequent 'yarn' commands with their npm equivalent.

After cloning this project, run the following command to install dependencies:

```bash
pnpm install
```

Next, you'll need a MySQL server running and a connection string available as environment variable `DATABASE_URL`.
You can use `docker-compose` to set up default MySQL server in container:

```bash
docker-compose up -d
```

> For local development, you can create a .env file from the .env.example file and the application will read the values on startup.

Next, start up the server:

```bash
pnpm run dev
```

This will expose a GraphQL API endpoint locally at http://localhost:3000. You can easily interact with this endpoint using the graphiql interface by visiting http://localhost:3000 in your browser.

To fetch a list of Post's try the following query:

```graphql
query {
  posts {
    id
    current_balance
    amount
    tx_hash
    created_at
    created_at_block
  }
}
```

To learn more about the different ways you can query the GraphQL API, visit the Checkpoint documentation [here](https://docs.checkpoint.fyi/core-concepts/entity-schema).

## License

GNU Lesser General Public License v3.0
