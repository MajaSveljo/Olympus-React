import * as _ from "lodash";
import BaseService from "./BaseService";

const ENDPOINTS = {
  LOGIN: "api/admin/login",
  LOGOUT: "api/logout",
  SIGN_UP: "api/register"
};

class AuthService extends BaseService {
  constructor() {
    super();
    this._restoreSession();
  }

  _setSession(authResult) {
    localStorage.setItem("access_token", authResult.token.value);

    this._setAuthHeader(authResult.token.value);
  }

  _restoreSession() {
    if (this.isAuthenticated()) {
      this._setAuthHeader(localStorage.getItem("access_token"));
    }
  }

  _setAuthHeader(token) {
    _.assign(this.api.defaults.headers, { Authorization: "Bearer " + token });
  }

  login = loginData => {
    return this.api.post(ENDPOINTS.LOGIN, loginData).then(({ data }) => {
      if (data && data.token) {
        this._setSession(data);
      }
    });
  };

  signup(signupData) {
    return this.api.post(ENDPOINTS.SIGN_UP, signupData).then(() => {
      return this.login({
        email: signupData.email,
        password: signupData.password,
        isRemember: true
      });
    });
  }

  logout = async () => {
    this.api.post(ENDPOINTS.LOGOUT, {});
    this.clearToken();
  };

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let token = localStorage.getItem("access_token");
    return !!token;
  }

  clearToken() {
    this.api.defaults.params = {};
    // Clear access token from local storage
    localStorage.removeItem("access_token");
  }
}

const auth = new AuthService();
export default auth;
