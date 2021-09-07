import axios from "axios";
import authHeader from "@/service/auth-header";

const API_URL = 'https://voting-app.newtechaudit.ru/api/authorize/';

class AuthService {
  async login(user) {
    return await axios
      .post(API_URL + 'judge/', {
        email: user.email,
      })
      .then(response => {
        if (response.data.judge) {
          localStorage.setItem('voting_app_user', JSON.stringify({'email': response.data.judge.email}));
        }
        return response;
      })
      .catch(error => {
          return error.response
       })
  }

  async getUserInfo() {
    return await axios
        .post(API_URL + 'judge/' , {
            email: authHeader().email
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
