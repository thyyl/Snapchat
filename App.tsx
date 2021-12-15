import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import { SnapchatRoutes } from "./models/SnapchatModels";
import Snapchat from "./screens/Snapchat/Snapchat";
import Story from "./screens/Story/Story";

const Stack = createSharedElementStackNavigator<SnapchatRoutes>();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardOverlayEnabled: true,
        cardStyle: { backgroundColor: "transparent" },
      }}
      mode="modal"
    >
      <Stack.Screen name="Snapchat" component={Snapchat} />
      <Stack.Screen
        name="Story"
        component={Story}
        sharedElements={(route) => {
          const { id } = route.params.story;
          return [id];
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
