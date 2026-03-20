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

export default function Dashboard() {

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
      resizeMode="cover"
    >

      <View style={styles.overlay}>

        <Text style={styles.header}>
          DASHBOARD
        </Text>


        <View style={styles.box}>

          <View style={styles.row}>
            <Text style={styles.text}>
              Welcome
            </Text>

            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/profile",
                  params: {
                    email,
                    isLoggedIn: "true",
                  },
                })
              }
            >
              <Text style={styles.btn}>
                Profile
              </Text>
            </TouchableOpacity>
          </View>


          <View style={styles.row}>
            <Text style={styles.email}>
              {email}
            </Text>

            <TouchableOpacity
              onPress={() =>
                router.replace("/login")
              }
            >
              <Text style={styles.logout}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>


        </View>

      </View>

    </ImageBackground>

  );
}

const styles = StyleSheet.create({

  bg: {
    flex: 1,
  },

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
    width: 320,
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 20,
    borderRadius: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  text: {
    color: "white",
    fontSize: 16,
  },

  email: {
    color: "#00ffaa",
  },

  btn: {
    color: "#00ffaa",
    fontSize: 16,
  },

  logout: {
    color: "#ff5555",
    fontSize: 16,
  },

});