# Banklite X GraphQL Server

The following repo hosts the complete GraphQL server needed to provide BFF functionality for the Mobile clients.

## Requirements

- NodeJS 18.x or newer
- Docker - needed to generare types from OpenAPI; not required if you're nore planning on generating the types (non-developers)
- connectivity with 3rd party services like Thought Machine or Pingone

## Running the server locally

To run the server locally please run following commands:

```bash
npm i
npm run dev
```

This will start the apollo-server instance on port 4000.

Alternatively you can run the docker instance via:

```bash
docker compose up -d
```

Which will also start the server but it will require a rebuild every time you change the server source (used mainly by testers).

### Configuration

The server will attempt to connect to various microservices hosted locally on the same machine when started in development mode. You can specify the URLs of individual services by changing the `.env.development` file.

You might also create `.env.development.local` which will be loaded over the `.env.development` file and will not be commited to the repository.

## Development

### Adding new queries or mutations

In order to add a new query, open the `operations.graphql` file matching the feature you wish to develop (e.g. `features/customer/operations.graphql`) and declare the query. Keep the file short, declare only operations + inputs, keeping `enums` and `types` in separate files.

> Note: at build time the merge script will merge all your `.graphql` files into a single schema file so while you don't need to worry about the scope of your types, you should make sure not to overwrite existing types, enums and operations.

Once you added the query or mutation, open the corresponding `resolvers.ts` file and declare the handler for it:

```js
export const resolvers = {
  myQuery: () => ...
  myMutation: () => ...
}
```

#### Re-generating schema and types

Every time you change the GraphQL schema you should re-generate the merged schema (which is consumed by apollo-server) and TS types for it. You can do both of those operations individually or at once:

```bash
npm run schema:merge
npm run schema:generate
# or
npm run schema:all
```

### Adding new data source

The project uses [apollo-server DataSource](https://www.apollographql.com/docs/apollo-server) pattern to help avoid network issues. It is highly recommended to imlpement this feature in all your handlers working with HTTP calls.

The provided `AuthenticatedRESTDataSource` class should be used as it will automatically attach various headers (authorization, idempotency).

To help you properly type the requests payloads and responses, you can use openapi generator to generate models of the data. In order to generate models for new API, place its definition in `contracts/{serviceName}/openapi.yaml` and run the following:

```bash
npm run contracts:generate
```

This will produce output in `generated/contracts/{serviceName}/models/` directory. Please note that ONLY models are generated, you will have to manually provide paths for your calls and type the input/output.

### Registering new resolvers (features) and DataSource-s

There's no auto discovery feature. If you've added a new feature (folder in `src/features`) you should register it manually in `src/features/index.ts` by adding new entry to the `resolvers` array.

Similarly, if you created a new DataSource, add it to the `dataSources` export to make it available via `context.dataSources` object.

## Security measures

In order to avoid abuse, the server implements following security measures:

- authentication - you can mark selected operations with `@auth (required=USER)` directive, when accessing those fields the server will verify that a valid JWT is passed via `Authorisation: Bearer` header
- query depth limit - by default, the server will reject any queries that are deeper than 5 levels; this helps prevent an attacker from attempting to recursively request large amounts of data. This feature is controlled by `MAX_QUERY_DEPTH` env variable
