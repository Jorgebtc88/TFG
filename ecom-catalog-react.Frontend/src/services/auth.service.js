const API_URL = 'http://localhost:8000/api/usuarios';

class AuthService {
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  async login(email, password) {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error en el inicio de sesión');
      }

      if (data.token) {
        localStorage.setItem('user', JSON.stringify(data));
        this.user = data;
        return data;
      } else {
        throw new Error('No se recibió el token de autenticación');
      }
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  }

  async register(userData) {
    try {
      const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        credentials: 'include'
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error en el registro');
      }

      return await response.json();
    } catch (error) {
      console.error('Error en registro:', error);
      throw error;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.user = null;
  }

  isLoggedIn() {
    return !!this.user;
  }

  isAdmin() {
    return this.user?.rol === 'ADMIN';
  }

  getCurrentUser() {
    return this.user;
  }

  getToken() {
    return this.user?.token;
  }
}

export default new AuthService(); 