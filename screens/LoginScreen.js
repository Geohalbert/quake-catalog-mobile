import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";
import DebouncedTouchableOpacity from "../components/DebouncedTouchableOpacity.js";

import styles from "../styles/screens/LoginScreenStyles";

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.inputTitle}>Email</Text>
        <View style={styles.inputWrap}>
          <TextInput
            ref="email"
            placeholder="john@smith.com"
            style={styles.input}
            autoCapitalize="none"
            onChangeText={text => this.setState({ email: text })}
            returnKeyType="next"
            value={this.state.email}
            onSubmitEditing={event => {
              this.refs.password.focus();
            }}
          />
        </View>
        <Text style={styles.inputTitle}>Password</Text>
        <View style={styles.inputWrap}>
          <TextInput
            ref="password"
            placeholder="••••••••"
            style={styles.input}
            autoCapitalize="none"
            onChangeText={text => this.setState({ password: text })}
            returnKeyType="done"
            value={this.state.password}
            secureTextEntry={true}
            onSubmitEditing={() => {}}
          />
        </View>
        <View style={styles.centerItems}>
          {this.props.loading ? (
            <LoaderView />
          ) : (
            <DebouncedTouchableOpacity
              style={styles.submitButton}
              onPress={() =>
                this.props.onSubmit(this.state.email, this.state.password)
              }
            >
              <Text>SUBMIT</Text>
            </DebouncedTouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
