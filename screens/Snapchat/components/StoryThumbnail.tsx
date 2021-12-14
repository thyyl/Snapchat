import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Dimensions, StyleSheet, Pressable } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import { Story } from "../../../models/SnapchatModels";

const margin = 20;
const borderRadius = 5;
const width = Dimensions.get("window").width / 2 - margin * 2;

interface StoryThumbnailProps {
  story: Story;
}

export default function StoryThumbnail({ story }: StoryThumbnailProps) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      onPress={() => {
        navigation.navigate("Story", { story });
      }}
    >
      <View style={styles.container}>
        <SharedElement id={story.id} style={{ flex: 1 }}>
          <Image source={story.source} style={styles.image} />
        </SharedElement>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height: width * 1.77,
    marginTop: 16,
    borderRadius,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    resizeMode: "cover",
    borderRadius,
  },
});
