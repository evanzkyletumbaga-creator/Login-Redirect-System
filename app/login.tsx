import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

import { useRouter } from "expo-router";
import { useState } from "react";

export default function Login() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ required

  const handleLogin = () => {

    if (!email || !password) return;

    setIsLoggedIn(true); // ✅ required

    router.replace({
      pathname: "/dashboard",
      params: {
        email,
        isLoggedIn: "true",
      },
    });

  };

  return (

    <ImageBackground
      source={require("./bg.jpg")}
      style={styles.bg}
      resizeMode="cover"
    >

      <View style={styles.overlay}>

        <View style={styles.box}>

          <Text style={styles.title}>
            LOGIN
          </Text>

          <TextInput
            placeholder="Email"
            placeholderTextColor="#ccc"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#ccc"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={handleLogin}
          >
            <Text style={styles.btnText}>
              LOGIN
            </Text>
          </TouchableOpacity>

        </View>

      </View>

    </ImageBackground>

  );
}

const styles = StyleSheet.create({

  bg: { flex: 1 },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    width: 300,
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 25,
    borderRadius: 15,
  },

  title: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 10,
    padding: 8,
    color: "white",
  },

  btn: {
    backgroundColor: "#00ffaa",
    padding: 10,
    marginTop: 5,
    alignItems: "center",
  },

  btnText: {
    fontWeight: "bold",
  },

});