import { NavigationProp, RouteProp } from "@react-navigation/native";
import { SnapchatRoutes } from "../../../models/SnapchatModels";

export interface StoryProps {
  navigation: NavigationProp<SnapchatRoutes, "Story">;
  route: RouteProp<SnapchatRoutes, "Story">;
}
