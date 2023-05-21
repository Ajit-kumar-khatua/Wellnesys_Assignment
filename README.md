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


### To complete the assignment, I followed the following steps:

- Installed Node.js: I ensured that Node.js was installed on my system. Node.js allows us to run JavaScript on 
   the server-side.

- Initialized a new Node.js project: I created a new directory for the project and ran npm init -y command to 
   initialize a new Node.js project. This generated a package.json file to manage project dependencies.

- Installed Express: I installed the Express framework by running npm install express command in the project
  directory. Express is a popular framework for building web applications in Node.js.

- Set up the basic server: I created a new JavaScript file (e.g., server.js) and imported the Express module 
using commomn JS. I defined a constant app as the result of calling the express() function, which creates an 
instance of the Express application.

- Defined routes: I implemented the three routes mentioned in the assignment using the app.get() and app.post()
 methods provided by Express. These methods take a URL pattern and a callback function to handle the request 
 and send a response. Basiclly I segregate the user route to another folder and used inside server.js file.

- Implemented middleware:I write the middlewares in a different folder and  used the app.use() method to define
 middleware functions. Middleware functions are executed before the route handlers and can perform tasks such 
 as logging and error handling. I created middleware functions to log incoming requests and handle errors.

- Handled file operations: To save and retrieve user information from a JSON file, I used the fs module 
   provided by Node.js. I used the fs.readFile() method to read the file contents and the fs.writeFile() method 
   to save updated data back to the file.

- Started the server: I called the app.listen() method to start the server and make it listen on the specified port.

### Challenges faced:

- Debugging: During development, I encountered errors such as typos, missing dependencies, or incorrect file 
   paths. I had to carefully review the code, use console.log statements, and consult the Express and Node.js 
   documentation to identify and resolve these issues.

- Handling asynchronous operations: Reading and writing files are asynchronous operations. To ensure the 
   correct execution order, I had to use callbacks or promises to handle the asynchronous nature of these 
   operations.

- Handling Error middleware: I am gettting some errors to implement Error Middleware. I had to carefully review 
  the code, use console.log statements to overcome these errors.


### Lessons Learned
   - Express simplifies web application development: Express provides a straightforward way to define routes, 
     handle requests, and manage middleware. It abstracts away many complexities, allowing developers to focus 
     on the core functionality of the application. It is much mmore easier to implement the server than the 
     conventional http methods.

  - Middleware enhances functionality: Middleware functions provide a flexible way to add common functionality 
     to the application, such as logging and error handling. They can be chained together and executed in a 
    specific order, enhancing the overall functionality and maintainability of the application.

   - File operations require careful handling: When working with file operations, it's important to handle 
      errors gracefully and consider potential race conditions. Proper error handling and understanding of 
      asynchronous programming are crucial for ensuring data integrity and a smooth user experience.

   - Testing and error handling: In a real-world scenario, it's important to thoroughly test the application 
      and handle various error conditions, such as invalid routes, file read/write errors, and server errors. 
      Robust error handling improves the stability and reliability of the application.






 