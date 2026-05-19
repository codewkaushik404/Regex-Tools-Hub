# Regex Tools Hub

A powerful web application for password validation and log file analysis using regular expressions.

## Features

### 1. Password Strength Checker
- Validates password strength against 5 criteria:
  - Minimum 8 characters
  - Uppercase letter
  - Lowercase letter
  - Number
  - Special character
- Visual feedback with strength indicator
- Displays regex patterns used for validation

### 2. Log File Analyzer
- Extracts and identifies:
  - IPv4 addresses
  - User IDs
  - Email addresses
- Shows line count
- Displays unique matches

## Project Structure

```
├── backend/
│   ├── server.js          # Express server
│   ├── package.json       # Backend dependencies
│   ├── routes/
│   │   └── analyzerRoutes.js
│   └── controllers/
│       └── analyzerController
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── home.jsx
│   │   ├── config.js      # API configuration
│   │   ├── index.css
│   │   ├── password-strength/
│   │   │   ├── password.jsx
│   │   │   └── style.css
│   │   └── log-analyzer/
│   │       ├── logAnalyzer.jsx
│   │       └── style.css
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
└── .env.example           # Environment variables example
```

## Installation

### Backend Setup
```bash
cd backend
npm install
```

### Frontend Setup
```bash
cd frontend
npm install
```

## Running the Application

### Start Backend Server
```bash
cd backend
npm start
# Server runs on http://localhost:5000
```

Or on Windows, run the batch file:
```bash
cd backend
start-server.bat
```

### Start Frontend Dev Server
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:5173
```

### Building for Production
```bash
# Frontend build
cd frontend
npm run build

# Output will be in frontend/dist/
```

## API Endpoints

### POST /api/password-check
Analyzes password strength
```json
Request:
{
  "password": "MyPassword123!"
}

Response:
{
  "password": "MyPassword123!",
  "passedRules": 5,
  "totalRules": 5,
  "strength": "Strong",
  "rules": [
    {
      "name": "Minimum 8 characters",
      "description": "At least 8 characters long",
      "regex": "/.{8,}/",
      "passed": true
    },
    ...
  ]
}
```

### POST /api/log-analyzer
Analyzes log content for patterns
```json
Request:
{
  "content": "2024-01-01 user_id=U123 IP=192.168.1.1 email=user@example.com"
}

Response:
{
  "ipv4": ["192.168.1.1"],
  "userIds": ["U123"],
  "emails": ["user@example.com"],
  "lineCount": 1
}
```

## Technologies Used

### Backend
- Node.js
- Express.js
- CORS middleware

### Frontend
- React 19
- Vite
- React Icons (lucide-react, react-icons)
- CSS3

## Configuration

Create a `.env` file in the root directory:
```env
BACKEND_PORT=5000
VITE_API_URL=http://localhost:5000/api
```

Or use the default configuration which connects to `http://localhost:5000/api`

## Troubleshooting

### Port 5000 Already in Use
If port 5000 is already in use:
1. Find the process: `netstat -ano | findstr :5000`
2. Kill the process: `taskkill /PID <PID> /F`
3. Or modify `backend/server.js` to use a different PORT via environment variable

### Frontend Can't Connect to Backend
- Ensure backend is running on port 5000
- Check CORS settings in `backend/server.js`
- Update `frontend/src/config.js` if using a different backend port

### Module Not Found Errors
Ensure all dependencies are installed:
```bash
cd backend && npm install
cd frontend && npm install
```

## Development

### Lint Frontend Code
```bash
cd frontend
npm run lint
```

### Watch Backend Changes (with nodemon)
```bash
cd backend
npm run dev
```

## Author
Built by Kaushik K S with React and powered by Regular Expressions

## License
ISC
