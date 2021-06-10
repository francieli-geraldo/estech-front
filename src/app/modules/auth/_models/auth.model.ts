export class AuthModel {
  authToken: string;
  refreshToken: string;
  expiresIn: Date;
  token: string;

  setAuth(auth: any) {
    this.token = auth.authToken;
    this.authToken = auth.authToken;
    this.refreshToken = auth.refreshToken;
    this.expiresIn = auth.expiresIn;
  }
}
