# flutter
:dizzy: backend test case for [flutterwave rave](https://github.com/Flutterwave/ravepay-nodejs) functionalities

## Overivew
This project focuses on implementing the flutterwave rave package for node.js called ravepay. ravepay should allow me charge users with traditional bank accounts to help my application service. This project is written as a guide to help others fully implement flutterwave payments. I'll start with a few basic tasks

- create subaccounts
- charge a user's card
- fetch subaccounts (single, list)
- initiate a transfer
- initialte bulk transfer
- fetch transfers (single, list)
- fetch my wallet balance
- verify bvn
- verify transactions
- collect payments via ussd

Alongside the ravepay node details, the ravepay api [documentation](https://developer.flutterwave.com/v2.0/reference#) will also be relied upon heavily during this project.

## Setup
A lot of basics setups can be ignored, such as connecting to a real database, unit testing, orm setups, middlewares, data validations etc. Every data point used in this project will be controlled and created as needed.

The project will be a small plant store that needs to use flutterwave to handle its payments.

### Database
Our databse will consist of mock data of three specific types:
- *Customer* - A customer who will use the payment platform to by a plant
```javascript
export const customerA = {
  id: 1,
  firstName: 'Jane',
  lastName: 'Austin',
  email: 'jaustin@test.com',
};
```
- *Supplier* - A supplier who supplies plants to the store
```javascript
export const supplierA = {
  id: 1,
  firstName: 'Julius',
  lastName: 'Caesar',
  email: 'jCaes@test.com',
};
```
- *Store* - The store itself with all the plants.
```javascript
export const plantA = {
  id: 1,
  name: 'Snake Plant',
  price: 3000,
  supplierId: 1,
};
```

## Subaccounts
My first api test will be adding subaccounts to the flutterwave dtabase. subaccounts are accounts of suppliers who you want to get a cut from the sale of an item. These accounts are good to setup when working on a marketplace application that acts as a link between customers and suppliers.

For our application, the plant store will get 20% off  every transaction for a plant, while the suppliers get 80%.

### create subaccount
