import  jwtDecode  from 'jwt-decode';

interface UserLogin {
  username: string;
  password: string;
}

interface JwtPayload {
  exp?: number; // Add this if it's not already included
}

class AuthService {
  getProfile() {
    try {
      const token = this.getToken();
      return token ? jwtDecode<JwtPayload>(token) : null;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }


  loggedIn() {
    // Check if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    // Check if the token is expired
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (decoded.exp) {
        return decoded.exp * 1000 < Date.now(); // Convert exp to milliseconds
      }
      return false;
    } catch (error) {
      console.error('Error decoding token:', error);
      return true;
    }
  }

  getToken() {
    // Retrieve the token from localStorage
    return localStorage.getItem('id_token');
  }
  async loginUser(userInfo: UserLogin) {
    try {
      const response = await fetch('/auth/login', { // Ensure this matches your backend route
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo),
      });
  
      if (!response.ok) {
        throw new Error('Invalid login credentials');
      }
  
      const { token } = await response.json(); // Ensure the backend returns a token
      this.login(token); // Save the token and redirect
      return token;
    } catch (err) {
      console.error('Login failed:', err);
      throw err;
    }
  }

  login(idToken: string) {
    // Save the token to localStorage and redirect to the homepage
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // Remove the token from localStorage and redirect to the login page
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();