import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Item,
  Input,
  Icon,
  Text,
  Form
} from "native-base";
import { observer } from "mobx-react/native";
import { observable } from "mobx";
// import { Icon } from 'react-native-vector-icons/FontAwesome5'

@observer
export default class Login extends Component {
  @observable email = '';
  @observable password = '';

  constructor(props) {
    super(props);
  }

  signIn() {
    const {auth} = this.props.stores;
    const {navigate} = this.props.navigation;
    auth.signIn({email: this.email, password: this.password})
      .then(() => {
        navigate('Match')
      })
  }

  render() {
    const {auth} = this.props.stores;

    return (
      <Form>
        <Item style={styles.item} rounded>
          <Icon style={styles.icon} name='person-outline'/>
          <Input style={styles.input}
                 placeholder='E-mail'
                 placeholderTextColor='#FFFFFF'
                 onChangeText={(email) => this.email = email}
          />
        </Item>
        <Item style={styles.item} rounded>
          <Icon style={styles.icon} name='lock-open'/>
          <Input style={styles.input}
                 placeholder='Password'
                 placeholderTextColor='#FFFFFF'
                 secureTextEntry={true}
                 onChangeText={(pasword) => this.password = pasword}
          />
        </Item>
        <Button rounded block style={styles.button} onPress={this.signIn.bind(this)}>
          <Text>Login</Text>
        </Button>
      </Form>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 10
  },

  icon: {
    color: '#FFFFFF'
  },

  input: {
    color: '#FFFFFF'
  },

  button: {
    marginBottom: 10
  },
});