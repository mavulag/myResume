# Folder Structure

myResume/
``` bash
|-- backend/
|   |-- models/
|   |-- routes/
|   |-- controllers/
|   |-- config/
|   |-- server.js
|   |-- package.json
|   |-- .env
|-- frontend/
|   |-- 
|-- .gitignore
|-- README.md
```

## 1. Initialize the Backend

Navigate to the backend directory and initialize a Node.js project:

``` bash
cd myResume/backend
npm init -y
```

Install required dependencies:

``` bash
npm install express mongoose body-parser cors dotenv nodemon
```

## 2. Setup server.js

Create a server.js file in the backend directory:
* Import required dependencies
* NodeJS Framework (express)
* Mongoose for MongoDB 
* body-parser to allow to pass json data
* cors to allow backend to communicate with frontend
* dotenv to load data from .env file
* Initialize express framework
* Use Middlewares (cors & body-parser)
* Import Routes from routes/
* Use Routes
* Connect server & MongoDB
* Start Server

## 3. Create a Model (Header.js)

Inside the models directory, create a Header.js file:
* Import mongoose dependency
* Create Social Media Schema
* Create Title Schema
* Create Header Schema (contains Social Media Schema & Title Schema)

## 4. Create a Controller (headerController.js)

Inside the controllers directory, create a headerController.js file:
* Import Header from models
* Create controller for creating a new header
* Create controller for reading all headers
* Create controller for reading a single header by ID
* Create controller for updating a header
* Create controller for deleting a header

## 5. Create a Route (header.js)

Inside the routes directory, create a header.js file:
* Import express dependency
* Import controllers
* Initilize router

## 6. Setup Environment Variables

Create a .env file in the backend directory:

``` bash
MONGO_URI=your_mongodb_connection_string
PORT=your_preferred_port
```

Replace your_mongodb_connection_string & your_preferred_port with the actual values

## 7. Run the Server

Add the following script to package.json:

``` bash
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
}
```

Run the server

``` bash
npm run dev
```

## 8. Testing the API

You can test the API using tools like Postman or cURL. Here's a summary of endpoints:

For Header APIS

``` bash
Method         Endpoint                            Description
POST           /myResume/v1.0.0/api/headers        Create a new header
GET            /myResume/v1.0.0/api/headers        Get all headers
GET            /myResume/v1.0.0/api/headers/:id    Get a header by ID
PATCH          /myResume/v1.0.0/api/headers/:id    Update a header by ID
DELETE         /myResume/v1.0.0/api/headers/:id    Delete a header by ID
```
