export interface Story {
  id: string;
  source: string;
  user: string;
  avatar: number;
  video?: string;
}

export type SnapchatRoutes = {
  Snapchat: undefined;
  Story: { story: Story };
};
