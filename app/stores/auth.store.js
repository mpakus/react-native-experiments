import {observable, action} from 'mobx';

export default class AuthStore {
  @observable AuthUser = null;

  @action
  signIn({email, password}) {
    if(this.AuthUser) {
      return Promise.resolve(this.AuthUser);
    }

    // return Authentication with email and password
    return fetch('http://localhost:4000/')
      .then((response) => response.json())
      .then((responseData) => {
          this.AuthUser = responseData;
      });
  }

}