# Welcome To Airline Service
## Project Setup
- clone a project on your local
<<<<<<< HEAD
- Execute `npm install` on the same path as of your root directory
=======
- Executte `npm install` on the same path as of your root directory
>>>>>>> 23144f64c989eed7aff806c64da0bc61618e61f1
- Create a dotenv file in root directtory and add the following environment 
variable
    - `PORT = 3000`
- Inside the src/config folder create a new file `config.json` and then add the 
following piece of json

```
{
  "development": {
    "username": "<Your DB Login>",
    "password": "<Your Password>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

<<<<<<< HEAD
```
- Once you've added your db config as listed above, go to src folder from your terminal and execute `npx sequelize db:create`
=======
```
>>>>>>> 23144f64c989eed7aff806c64da0bc61618e61f1
