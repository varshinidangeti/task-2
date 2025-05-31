# Task 2: Inline Styles, Basic Interaction, and Server-Side Validation

## Objective

Enhance the existing form application with:

- Client-side validation using inline JavaScript
- Server-side validation using Express
- Temporary in-memory data storage for validated submissions

## Project Structure

task-2/
├── views/
│ ├── index.ejs # Main form with inline validation
│ └── result.ejs # Displays submitted form data
├── server.js # Node.js server with Express
├── package.json # Dependencies and scripts
└── README.md # Project documentation


## Features

- Inline client-side validation with JavaScript
- Express-based server-side validation
- Basic user data storage using a server-side array
- EJS templating for dynamic HTML rendering

## Technologies Used

- Node.js
- Express.js
- EJS templating engine
- body-parser middleware

## Setup Instructions

1. Clone the repository

git clone https://github.com/your-username/task-2.git
cd task-2


2. Install dependencies

npm install


3. Start the server


The application will be accessible at `http://localhost:3000`.

## Client-Side Validation

- Ensures that all fields are filled
- Validates that age is 18 or above
- Displays alert messages for invalid input

## Server-Side Validation

- Validates that all fields are present
- Ensures age is a number and at least 18
- Sends back an error message if validation fails

## Temporary Data Storage

- Submissions are stored in an in-memory array
- No database is used in this version

## Deployment (Render.com)

To deploy this project on Render:

1. Push the code to a GitHub repository
2. Go to [https://render.com](https://render.com)
3. Create a new Web Service
4. Connect your GitHub repo
5. Use the following settings:

   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Use `process.env.PORT` in server.js to support Render's dynamic ports

6. Click "Create Web Service" to deploy

## License

This project is licensed under the ISC License.
