export interface User {
  _id: string;
  displayName: string;
  username: string;
  email: string;
  img?: string; // Optional property
  followingCount: number;
  isFollowing: boolean;
}
