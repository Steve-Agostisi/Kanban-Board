import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error('Invalid login credentials');
    }

    const data = await response.json();
    return data; // This should include the JWT token
  } catch (err) {
    console.error('Login failed:', err);
    throw err;
  }
};



export { login };
