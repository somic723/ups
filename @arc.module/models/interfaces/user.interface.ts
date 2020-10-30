export interface IUser {
  userId: number;
  username: string;
  password: string;
  name: string;
  family: string;
  isActive?: boolean;
  isService?: boolean;
  userGroupFk?: number;
  shiftTeamFk?: number;
}
