# Leetcode Project

This project is a web application that displays the top performers on Leetcode. It includes both frontend and backend components.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Libraries**: Axios, React Router, Mongoose

## Frontend

The frontend is built using React and Tailwind CSS. It displays the top three performers with their avatars, usernames, and rankings.

### Key Components

- **TopThreeWinners**: A component that displays the top three performers.

### Installation

1. Navigate to the frontend directory:
    ```sh
    cd leetcode-project/frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

## Backend

The backend is built using Node.js and Express. It provides the data for the top performers.

### Key Endpoints

- **GET /api/top-performers**: Returns the top performers.

### Installation

1. Navigate to the backend directory:
    ```sh
    cd leetcode-project/backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npm start
    ```

## Project Structure

```
leetcode-project/
│
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── TopThreeWinners.jsx
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
│
└── README.md
```

## Deployment

The project is deployed at [https://leetcodecompare.web.app/](https://leetcodecompare.web.app/).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
