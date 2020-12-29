import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenLogin from './containers/screenLogin'
import ScreenHome from './containers/screenHome'
import ScreenSignUp from './containers/screenSignUp'
import ScreenInfo from './containers/screenInfo'
import ScreenAccount from './containers/screenAccount'
import ScreenHost from './containers/screenHost'
import ScreenJoiner from './containers/screenJoiner'


const Stack = createStackNavigator();

export default () => {

  const navigateToAccountButton = (funcNavigator) => {
    return(
      <Pressable onPress={ funcNavigator }>
        <Image source={  }/>
      </Pressable>
    )
  }

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      {({ navigation }) =>
        <SafeAreaView>
          <Stack.Screen name="Login" component={ ScreenLogin } />
          <Stack.Screen name="SignUp" component={ ScreenSignUp } />
          <Stack.Screen name="Home" component={ ScreenHome } options={{ title: "WithWtvr" }}/>
          <Stack.Screen name="Maps" component={ ScreenMaps } options={{
            headerRight: navigateToAccountButton(navigation.navigate("Account"))
          }}/>
          <Stack.Screen name="Info" component={ ScreenInfo } options={{ 
            title: "Information", 
            headerRight: navigateToAccountButton(navigation.navigate("Account"))}} />
          <Stack.Screen name="Account" component={ ScreenAccount } options={{ title: "Account Settings" }}/>
          <Stack.Screen name="Host" component={ ScreenHost } />
          <Stack.Screen name="Joiner" component={ ScreenJoiner } />
        </SafeAreaView>
      }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
