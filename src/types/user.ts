import { IAddress, IRole } from ".";

export default interface IUser {
  id: string;
  name: string;
  email: string;
  contact: string;
  photoUrl: string;
  bio: string;
  contactIdentity: string;
  address: IAddress;
  role?: IRole;
  createdAt: Date;
  updatedAt: Date;
}
