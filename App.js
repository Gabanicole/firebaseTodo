import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Detail from "./screens/Detail";

const Stack = createStackNavigator();

export default function app() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Detail" component="Detail" />
      </stack.Navigator>
    </NavigationContainer>
  );
}
