# Arcane Horizon NodeJS Backend

This project is the backend server for the Arcane Horizon system, built using **Node.js** and **TypeScript**. It provides services registration, a simple service registry, and serves static files for a service list interface. This backend listens on port `3000` and exposes several routes for managing and displaying services.

## Features

- **Service Registry**: Register services by name and port.
- **Service List**: Display the list of registered services.
- **Static Files**: Serves static HTML and CSS files to render a service list page.
- **Error Handling**: Responds with 404 for unrecognized routes.

## Requirements

- **Node.js** (>=14.x)
- **npm** (>=6.x)

## Setup

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/arcane-horizon-nodejs-backend.git
cd arcane-horizon-nodejs-backend
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Start the server:

```bash
npm start
```

The server will start listening on port `3000`. You can access the API at `http://localhost:3000`.

## API Endpoints

### 1. **GET /**

- **Description**: Welcome message.
- **Response**: `Welcome to Node.js and TypeScript!`

### 2. **GET /registry**

- **Description**: Serves the static file `index.html`.
- **Usage**: Access via `http://localhost:3000/registry`.

### 3. **GET /register**

- **Description**: Register a service by providing its name and port as query parameters.
- **Usage**:
  ```bash
  http://localhost:3000/register?name=service_name&port=1234
  ```
- **Response**:
  - Success: `{"error": false, "status": 200, "message": "service name=service_name port=1234 successfully registered!"}`

### 4. **GET /services**

- **Description**: Lists all registered services.
- **Response**: Returns an array of registered services in JSON format.
  
### 5. **GET /service-list.html**

- **Description**: Serves the `service-list.html` file containing a static list of services.
  
### 6. **Static File Endpoints**:

- **/style.css**: Serves the `style.css` file for the service list page.
- **/font-awesome-4.3.0/**: Serves Font Awesome files for icons.

### 7. **GET /404**

- **Description**: Any unrecognized route will return a 404 error.
- **Response**:
  ```json
  {
    "error": true,
    "status": 404,
    "message": "Not Found"
  }
  ```

## Folder Structure

```
├── index.html                # Main static HTML file served at /registry
├── service-list.html         # Static HTML page showing registered services
├── style.css                 # CSS file for service list styling
├── font-awesome-4.3.0/       # Font Awesome assets for icons
├── src/                      # Source code
│   ├── server.ts             # Main backend logic
└── README.md                 # This README file
```

## Development

To develop with live reloading, you can use tools like `nodemon` or `ts-node-dev`.
