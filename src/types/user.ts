import { IAddress, IRole } from ".";

export default interface IUser {
  name: string;
  email: string;
  contact: string;
  photoUrl: string;
  bio: string;
  contactIdentity: string;
  address: IAddress;
  role: IRole;
}
