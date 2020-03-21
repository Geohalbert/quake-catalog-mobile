import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from "../styles/screens/QueryScreenStyles";

export default class QueryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Query Screen</Text>
      </View>
    );
  }
}
