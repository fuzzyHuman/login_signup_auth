
# MelodyVerse Project

## Getting Started

### Frontend Setup

To get started with the frontend of the MelodyVerse project, follow these steps:

1. **Install Dependencies**: Run the following command to install all necessary dependencies:
   ```bash
   npm install
   ```

2. **Start the Frontend**: Once the dependencies are installed, start the frontend application with:
   ```bash
   npm start
   ```
   This will start the MelodyVerse frontend.

### Backend Setup

To start the backend, you will need to set up a `.env` file with the following variables:

1. **MONGO_URI**: Provide the URI of your personal MongoDB that works on your IP address.
2. **JWT_SECRET**: Generate a JWT secret key and place it here.
3. **PORT**: Set this to `8080`.

Example `.env` file:
```bash
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
PORT=8080
```

### Running the Backend

1. **Start the Backend**: Ensure you have your `.env` file set up as described. Then, start the backend server using your preferred method (e.g., `node`, `nodemon`, etc.).

### JWT Authentication Middleware

- The backend uses JWT authentication middleware to handle protected routes.
- Upon successful login or signup, a JWT token is generated and returned, valid for 5 hours.
- This JWT token is used to authenticate requests to protected routes.
- Proper error handling is implemented for cases where the JWT doesn't match or there is a database mismatch.

### Frontend Functionality

- The frontend has two main screens: the **homepage** and the **sign-in** screen.
- Conditional rendering is used to handle both the signup and sign-in flows.
- The "Remember Me" functionality stores the JWT token in local storage and uses it when the page is reloaded or navigated after closing the website.

### Libraries Used

- **NextUI**: Used for various UI components to ensure a clean and responsive design.
- **Framer Motion**: Added for interactive animations on some elements to enhance the user experience.
