import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./pages/main";
import Login from "./pages/login";
import CadastrarUsuario from "./pages/cadastro";
import Film from "./pages/film.js";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from '../styles/colors.js'

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
          headerLeft: null,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.deepblue[500],

          },
          headerTitleStyle: {
            color: colors.sand[200],
            fontWeight: "bold",
            fontFamily: "Poppins_700Bold"
          },
        }}
      />
      <Stack.Screen
        name="CadastrarUsuario"
        component={CadastrarUsuario}
        options={{
          title: "Cadastrar",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.deepblue[500],
          },
          headerTitleStyle: {
            color: colors.sand[200],
            fontWeight: "bold",
            fontFamily: "Poppins_700Bold"
          },
        }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={({ navigation }) => ({
          headerLeft: null,
          title: "My List",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.deepblue[500],
          },
          headerTintColor: colors.sand[200],
          headerTitleStyle: {
            fontFamily: "Poppins_700Bold"
          },
          headerRight: () => (
            <Ionicons
              name="log-out-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 15 }}
              onPress={async () => {
                try {
                  await AsyncStorage.removeItem("userToken");
                  navigation.replace("Login");
                } catch (error) {
                  console.error("Erro ao realizar o logout:", error);
                }
              }}
            />
          ),
        })}
      />

      <Stack.Screen
        name="Film"
        component={Film}
        options={{
          title: "Filme / Série",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.deepblue[500],
          },
          headerTitleStyle: {
            color: colors.sand[200],
            fontWeight: "bold",
            fontFamily: "Poppins_700Bold"
          },
        }}
      />
    </Stack.Navigator>
  );
}
