import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Image, Dimensions, StyleSheet, Pressable } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import { StoryThumbnailProps } from "../interface/StoryThumbnailProps";

const margin = 20;
const borderRadius = 5;
const width = Dimensions.get("window").width / 2 - margin * 2;

export default function StoryThumbnail({ story }: StoryThumbnailProps) {
  const navigation = useNavigation();

  const [opacity, setOpacity] = useState(1);

  useFocusEffect(() => {
    if (navigation.isFocused()) {
      setOpacity(1);
    }
  });

  return (
    <Pressable
      onPress={() => {
        setOpacity(0);
        navigation.navigate("Story", { story });
      }}
    >
      <SharedElement id={story.id} style={{ flex: 1 }}>
        <View style={[styles.container, { opacity }]}>
          <Image source={story.source} style={styles.image} />
        </View>
      </SharedElement>
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
