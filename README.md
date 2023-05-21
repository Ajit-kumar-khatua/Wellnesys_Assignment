## Welcome to Wellnesys App

### API :- https://wellnesys-dxhg.onrender.com/

This is a simple web application built using Node.js and the Express framework. It provides a basic server that
 listens on a specified port and implements three different routes. The application allows users to retrieve a 
 welcome message, save user information via a POST request, and retrieve user information via a GET request.


### Installation
  1. Clone the repository or download the source code.

  2. Install Node.js on your system if not already installed.

  3. Open a terminal or command prompt and navigate to the project directory.

  4. Run the following command to install the project dependencies:
      
      - npm install

## Routes
    The application implements the following routes:

 ### 1. Route 1: Welcome Message

   - URL: '/'
   - Method: GET
   - Description: Retrieves a welcome message.
   - Example Response :
        "Welcome to Wellnesys Home Route!!!"

### 2. Route 2: Save User Information

   - URL: /users
   - Method: POST
   - Description: Saves user information to a JSON file.
   - Request Payload: JSON object with user information.
   - Example Request:
       POST /api/users
        {
        "name": "ajit",
        "email": "ajit@gmail.com",
        "gender":"male",
        "pasword":"12345"
        }

### 3. Route 3: Retrieve User Information

   - URL: /users
   - Method: GET
   - Description: Retrieves user information from the JSON file.
   - Example Response:
         {
            "users": [
                {
                "name": "Ajit",
                "email": "ajit@gmail.com",
                "gender": "male",
                "password": "12345"
                },
                {
                "name": "Ajit",
                "email": "ajitKhatua@gmail.com",
                "gender": "male",
                "password": "12345"
                }]
         }

## Error Handling
The application handles the following error scenarios:

Invalid routes: If an invalid route is accessed, the server responds with a "Not Found" error (HTTP status code 404).

Server errors: If there is an internal server error, such as a file read/write error, the server responds with 
an "Internal Server Error" (HTTP status code 500).    









 