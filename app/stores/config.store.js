export default class ConfigStore {
  constructor() {
    this.splashTime = 1000;
    this.splashImg = require('../../images/splash.png');
    this.loginBG = require('../../images/login-bg.jpg');
  }

  get SplashImg() {
    return this.splashImg;
  }

  get SplashTime() {
    return this.splashTime;
  }

  get LoginBG(){
    return this.loginBG;
  }
}