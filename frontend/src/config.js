// Backend API Configuration
// In Vite, import.meta.env is used instead of process.env
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const API_BASE_URL = API_URL;

