import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts, Poppins_400Regular,Poppins_700Bold,Poppins_300Light, Poppins_500Medium,  Poppins_600SemiBold  } from '@expo-google-fonts/poppins';
import { NavigationContainer } from "@react-navigation/native";
import Routes from './src/routes.js'

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_600SemiBold
  })

  if(!fontLoaded) {
    return null
  }

  return (
      <NavigationContainer>
        <StatusBar style="light" backgroundColor="black" />
        <Routes/>
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
