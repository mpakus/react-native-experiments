import {observable, action} from 'mobx';

export default class AuthStore {
  @observable AuthUser = null;

  construction() {

  }

  @action
  signIn({email, password}) {
    if(this.AuthUser) {
      return Promise.resolve(this.AuthUser);
    }
    // return Authentication with email and password
  }

}