import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome, SingIn, SingUp, FPassword } from "./src/screens";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SingIn" component={SingIn} />
      <Stack.Screen name="SingUp" component={SingUp} />
      <Stack.Screen name="ForgotPassword" component={FPassword} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}