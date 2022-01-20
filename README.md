# Inventory Tracker created using a REST API
This is an inventory tracking application created with a REST API. 
The user can perform basic CRUD operations to manage their inventory, including creating warehouses/locations along with assigning inventory to them.

# Technologies
Node.js, Express, PostgreSQL, Sequelize, CORS, React

# Getting Started 
**Installation**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This application uses [Node v17.3.1](https://nodejs.org/en/download/). Run ```npm install``` to install the following dependencies required: 
  - Express: ^4.17.2
  - CORS: ^2.8.5
  - PostgreSQL: ^8.7.1
  - Sequelize: ^6.13.0
  - React: ^17.0.2
  - ReactDOM: ^17.0.2

**Setup**

We'll need to download PostgreSQL to your device to setup the database. Download and instructions [here](https://www.postgresql.org/download/).

Now that we have PostgreSQL installed, we're going to create a database on our local machine called "inventorytracker". 
Open your terminal or SQL shell, type "psql" and hit enter.

<img width="221" alt="Screen Shot 2022-01-19 at 8 59 48 PM" src="https://user-images.githubusercontent.com/67983289/150249022-e5b274d5-965b-43c0-9d12-21c456edbd0b.png">

Enter "CREATE DATABASE inventorytracker;" Don't forget to include the semicolon at the end. If you already have a database named ```inventorytracker```, you can choose a different name as long as you change the name in ```package.json```.

<img width="334" alt="Screen Shot 2022-01-19 at 9 03 39 PM" src="https://user-images.githubusercontent.com/67983289/150250977-eb87679e-0436-4a8e-ab97-fe617f7e5854.png">

Keep in mind that the default PostgreSQL port is 5432.

We will also be using Postman as an API Platform, although you can choose any API platform that you prefer. Let's [sign up and create an account](https://www.postman.com/downloads/).

A web version is available but I recommend downloading it as it's available for MacOS, Windows, and Linux. Download [here](https://www.postman.com/downloads/).

# Run Application

The application has a back-end along with a barebones front-end built with React.

To run the application, let's open the terminal and enter ```npm run start``` to launch our React app in the browser. You'll see that we have some text displayed with a link to our Github page running on http://localhost:3000.

Now let's open an additional command line so we can run our back-end code in Node. Let's enter ```node server``` and we should get "App listening on PORT 8080" logged into our console. Great! This means that our server is running on http://localhost:8080 and synced to our database. 

# API Routes

We have several API routes, so let's go over all of our CRUD operations. Open up Postman.

Let's add some items into our inventory. 

**POST http://localhost:8080/api/items will add a new item into our inventory.**

Input fields:
 - Required: sku (integer), name (string), price (float), quantity (integer) 
 - Optional: sold (integer)

Let's select POST, insert our api route http://localhost:8080/api/items, and select the ```Body``` tab  as well as ```JSON``` for our data type. Afterwards, we'll select the ```raw``` input field and insert our JSON with the appropriate fields. Then click ```Send```.

<img width="948" alt="Screen Shot 2022-01-19 at 9 34 11 PM" src="https://user-images.githubusercontent.com/67983289/150261727-33de3e65-bd61-49f7-8de0-678816a5aacd.png">

Awesome! We've just created our first item into our inventory. Let's see what's in our inventory.

**GET http://localhost:8080/api/items will query all of our items from our inventory.**

Let's select GET, insert our api route http://localhost:8080/api/items, and hit send.

<img width="859" alt="Screen Shot 2022-01-19 at 9 41 11 PM" src="https://user-images.githubusercontent.com/67983289/150262456-9467db83-62ea-4a5b-9442-19d455613f40.png">

We get an array with all of the items we've created so far!

**PATCH http://localhost:8080/api/items/:id will adjust an item in our inventory.**

It looks like we've forgotten to add a space in our item with the name "megatowel". Let's fix that real quick. We want to change our item with the primary id of 1. The id will be dependent on which item you want to change.

Select PATCH, insert our api route http://localhost:8080/api/items/1, and let's update our name field.

<img width="863" alt="Screen Shot 2022-01-19 at 9 46 56 PM" src="https://user-images.githubusercontent.com/67983289/150263039-ece28a1e-d4ed-4293-a595-fa31030d58b4.png">

Now the name is "big towel" when we query our data! 

<img width="181" alt="Screen Shot 2022-01-19 at 9 47 17 PM" src="https://user-images.githubusercontent.com/67983289/150263062-2a59cc33-a384-4de2-9782-8850e9a31cfb.png">

**DELETE http://localhost:8080/api/items/:id will delete a specific item in our inventory.**

Let's delete the item we've created. 

Select DELETE, insert our api route http://localhost:8080/api/items/1, and hit send.

<img width="851" alt="Screen Shot 2022-01-19 at 9 50 40 PM" src="https://user-images.githubusercontent.com/67983289/150263383-63c2f79c-230e-4134-b287-d28b3c413f16.png">

Now we have no items left in our inventory.

<img width="842" alt="Screen Shot 2022-01-19 at 9 50 58 PM" src="https://user-images.githubusercontent.com/67983289/150263411-2cad34ea-dc94-4317-a0d7-db45f9f3684b.png">

You know, it'd be nice if we had a place to store these items... Luckily we can create a warehouse!

**POST http://localhost:8080/api/warehouses will create a new warehouse.**

Input fields:
 - Required: name (string), location (string)

Let's select POST, insert our api route http://localhost:8080/api/warehouses, and select the ```Body``` tab  as well as ```JSON``` for our data type. Afterwards, we'll select the ```raw``` input field and insert our JSON with the appropriate fields. Then click ```Send```.

<img width="848" alt="Screen Shot 2022-01-19 at 9 54 33 PM" src="https://user-images.githubusercontent.com/67983289/150263820-7b419927-ffcc-4506-a7af-2ca4b224ec23.png">

We've just created our first warehouse!

**GET http://localhost:8080/api/warehouses will query all of our warehouses.**

Let's select GET, insert our api route http://localhost:8080/api/warehouses, and hit send.

<img width="855" alt="Screen Shot 2022-01-19 at 9 55 44 PM" src="https://user-images.githubusercontent.com/67983289/150263935-62ac297c-1f2d-4847-bb23-3877624a1912.png">

It's great that we can create and view our warehouses, but what use does it have if we can't assign items to a warehouse?

**PATCH http://localhost:8080/api/items/:id can be used to assign an item to a warehouse.**

It's really simple! All we have to do is send in our JSON data with a warehouseId. It has to be an existing warehouseId or we'll get a 404 response. Feel free to try it yourself.

<img width="847" alt="Screen Shot 2022-01-19 at 9 59 43 PM" src="https://user-images.githubusercontent.com/67983289/150264338-d53f2621-81c9-4c10-9dd5-026e2d578d79.png">

And at last, we have our warehouseId assigned to our item! We can assign multiple items to the same warehouse.

<img width="834" alt="Screen Shot 2022-01-19 at 10 00 11 PM" src="https://user-images.githubusercontent.com/67983289/150264393-fd748040-c7fc-4c1d-99ed-89dfe0345213.png">

# Future Improvements

- I would add user authorization to ensure that only administrators could modify data in the API and that regular users could only query the data from the items route. Standard users should not be able to modify data or view which warehouse the item is located at.
- Developing the front-end to retrieve data from the API and make it look visually pleasing. Right now the front-end has no real use case other than providing directions to this Github page.
