import React from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";

export default class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this.fetchToken();
  }

  // Fetch the token from storage, navigate depending if token exists
  fetchToken = async () => {
    const userToken = await AsyncStorage.getItem("userToken");

    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
