export class AuthService {
  isLoggedIn = false;

  isAuthenticated() {
    return this.isLoggedIn;
  }

  logIn() {
    this.isLoggedIn = true;
  }
  logOut() {
    this.isLoggedIn = false;
  }
}
