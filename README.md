NestJS API Jumpstart

## Description
Implemented the following API in the simplest way with Nest.js.
The API consists of two endpoints, GET /balance, and POST /event. Using Nest.js, build a system that can handle those requests.

## Installation

```bash
$ yarn install
```
### Database configuration
Install postgres latest version. Copy `.env.example -> .env` and config database variables.

```bash
$ yarn migration:run
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

Open browser and visit `localhost:8080/api`.

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
