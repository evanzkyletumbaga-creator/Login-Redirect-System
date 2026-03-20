import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

import {
  useRouter,
  useLocalSearchParams,
} from "expo-router";

import { useEffect } from "react";

export default function Profile() {

  const router = useRouter();

  const { email, isLoggedIn } =
    useLocalSearchParams();

  useEffect(() => {
    if (isLoggedIn !== "true") {
      router.replace("/login");
    }
  }, []);

  return (

    <ImageBackground
      source={require("./bg.jpg")}
      style={styles.bg}
    >

      <View style={styles.overlay}>

        <Text style={styles.header}>
          PROFILE
        </Text>

        <View style={styles.box}>

          <Text style={styles.title}>
            User Info
          </Text>


          <View style={styles.row}>
            <Text style={styles.text}>
              Email
            </Text>

            <TouchableOpacity
              onPress={() => router.back()}
            >
              <Text style={styles.btn}>
                Back
              </Text>
            </TouchableOpacity>
          </View>


          <View style={styles.row}>
            <Text style={styles.text}>
              Status
            </Text>

            <Text style={styles.text}>
              Logged In
            </Text>
          </View>

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

  header: {
    color: "white",
    fontSize: 26,
    marginBottom: 10,
  },

  box: {
    width: 300,
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 20,
    borderRadius: 15,
  },

  title: {
    color: "white",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  text: {
    color: "white",
  },

  btn: {
    color: "#00ffaa",
  },

});