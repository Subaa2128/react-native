import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabTwoScreen from "./src/components/TabTwoScreen/TabTwoScreen";
import MyComponent from "./src/components/ModalPaper/ModalPaper";
// import Login from "./src/components/Login/Login";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="login"
          component={Login}
        /> */}
        <Stack.Screen name="modal Paper" component={MyComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
