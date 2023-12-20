import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";

export default function App() {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log(playSound);
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/lofi_hiphop.mp3")
    );
    setSound(sound);

    // console.log("playing sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          // console.log("unloading sound ");
          sound.unloadAsync();
        }
      : undefined;
  }, [{ sound }]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" color="#3cbbb1" onPress={playSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
