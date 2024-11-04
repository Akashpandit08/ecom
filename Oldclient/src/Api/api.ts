import axios from 'axios';

// Define interfaces for login and registration data and responses
export interface LoginData {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
}

export interface RegisterData {
    username: string;
    phone: string;
    email: string;
    password: string;
}

// Set the base URL for axios requests
axios.defaults.baseURL = 'http://localhost:3000/api/v1/admin';

// Function to handle user registration
export const register = async (data: RegisterData): Promise<void> => {
    try {
       const response = await axios.post<void>('/register', data);
        console.log('register successful:', response.data);
        return response.data;
        
    } catch (error: any) {
        console.error('Registration failed:', error?.response?.data || error.message);
        throw new Error(error?.response?.data?.message || 'Registration request failed');
    }
};

// Function to handle user login
export const login = async (data: LoginData): Promise<LoginResponse> => {
    try {
        const response = await axios.post<LoginResponse>('/login', data);
        console.log('Login successful:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('Login failed:', error?.response?.data || error.message);
        throw new Error(error?.response?.data?.message || 'Login request failed');
    }
};
