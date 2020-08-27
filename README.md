NestJS API Jumpstart

## Description
Implemented the following API in the simplest way with Nest.js. <br/>
The API consists of two endpoints, GET /balance, and POST /event. Using Nest.js, build a system that can handle those requests. <br/>
Used PostgreSQL for Users and JWL for Authentication. <br/>
Reset, Balance and Event are not using real database, they using internal memory for just demonstration! 

### Live Demo
https://nestjs-simple-balance-api.herokuapp.com/api

### Desired Actions
```
--
# Reset state before starting tests

POST /reset

200 OK


--
# Get balance for non-existing account

GET /balance?account_id=1234

404 0


--
# Create account with initial balance

POST /event {"type":"deposit", "destination":"100", "amount":10}

201 {"destination": {"id":"100", "balance":10}}


--
# Deposit into existing account

POST /event {"type":"deposit", "destination":"100", "amount":10}

201 {"destination": {"id":"100", "balance":20}}


--
# Get balance for existing account

GET /balance?account_id=100

200 20

--
# Withdraw from non-existing account

POST /event {"type":"withdraw", "origin":"200", "amount":10}

404 0

--
# Withdraw from existing account

POST /event {"type":"withdraw", "origin":"100", "amount":5}

201 {"origin": {"id":"100", "balance":15}}

--
# Transfer from existing account

POST /event {"type":"transfer", "origin":"100", "amount":15, "destination":"300"}

201 {"origin": {"id":"100", "balance":0}, "destination": {"id":"300", "balance":15}}

--
# Transfer from non-existing account

POST /event {"type":"transfer", "origin":"200", "amount":15, "destination":"300"}

404 0
```

### Screenshot
https://www.screencast.com/t/oulkjNFtX
<img src="https://content.screencast.com/users/SupremeDev/folders/Default/media/f20597c7-e004-45b8-844b-fc696d8163b7/screenshot.png">

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
# start
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
