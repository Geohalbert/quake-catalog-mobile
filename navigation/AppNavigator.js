import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import QueryScreen from "../screens/QueryScreen";
import LoginScreen from "../screens/LoginScreen";

const defaultStyle = {
  headerStyle: {
    backgroundColor: "#e67300"
  },
  headerTitleStyle: {
    textAlign: "center",
    flexGrow: 1,
    alignSelf: "center"
  }
};

// Stack before authorization
const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Login",
      ...defaultStyle
    }
  },
  CreateAccount: {
    screen: CreateAccountScreen,
    navigationOptions: {
      title: "Create Account",
      ...defaultStyle
    }
  }
});

// Stack after authorization
const AppStack = createStackNavigator({
  Home: {
    screen: QueryScreen,
    navigationOptions: {
      title: "Query",
      ...defaultStyle
    }
  }
});

// base stack and potential modals
const RootStack = createStackNavigator(
  {
    Main: {
      screen: AppStack
    }
    // PlaceholderModal: {
    //     screen: PlaceholderModal
    //   },
    //   Placeholder2Modal: {
    //     screen: Placeholder2Modal
    //   }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

// const PlaceholderDrawer = createStackNavigator({
//   Placeholder: {
//     screen: PlaceholderScreen,
//     navigationOptions: { title: "Placeholder", ...defaultStyle }
//   }
// });

// drawer items
const DrawerNavigation = createDrawerNavigator(
  {
    HomeDrawer: {
      screen: RootStack,
      navigationOptions: {
        drawerLabel: "Query"
      }
    }
    // },
    // PlaceholderDrawer: {
    //   screen: PlaceholderDrawer,
    //   navigationOptions: {
    //     drawerLabel: "Placeholder",
    //     ...defaultStyle
    //   }
    // },
    // Placeholder2Drawer: {
    //     screen: Placeholder2Drawer,
    //     navigationOptions: {
    //       drawerLabel: "Placeholder 2",
    //       ...defaultStyle
    //     }
    //   }
  }
  //   {
  //     contentComponent: CustomDrawer
  //   }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: DrawerNavigation,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
