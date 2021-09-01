import axios from "axios";
import authHeader from "@/service/auth-header";

const API_URL = 'https://voting-app.newtechaudit.ru/api/accounts/';

class AuthService {
  async login(user) {
    return await axios
      .post(API_URL + 'login/', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response;
      })
      .catch(error => {
          return error.response.status
       })
  }

  async getUserInfo() {
    return await axios
        .get(API_URL + 'users/me/' , {
            headers: authHeader()
        })
        .then(response => {
          return response.data
    })

  }

  async logout() {
    await localStorage.removeItem('user');
  }

  async register(user) {
    let userToRegister = {
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      password: user.password
    }

    return axios.post(API_URL + 'signup/', userToRegister);
  }

  async verifyEmailCode(code) {
      return axios.get(API_URL + 'signup/verify/', {
          params: {
              code: code
          }
      })
  }


  async requestResetPassword(email) {
    return axios.post(API_URL + 'password/reset/', {
            email: email
        })
  }

  async verifyResetCode(code) {
    return axios.get(API_URL + 'password/reset/verify/', {
      params: {
        code: code
      }
    })
  }

  async resetUserPassword(verifyCode, password) {
    return axios.post(API_URL + '/password/reset/verified/', {
        code: verifyCode,
        password: password
    })
  }



}

export default new AuthService();
