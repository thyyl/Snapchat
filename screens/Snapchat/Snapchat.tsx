import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { stories } from "./components/SnapchatData";
import StoryThumbnail from "./components/StoryThumbnail";

export default function Snapchat() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {stories.map((story) => (
            <StoryThumbnail key={story.id} story={story} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});
