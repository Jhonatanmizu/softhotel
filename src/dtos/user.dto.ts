import { IAddress } from "@/types";

export interface createUserDTO {
  name: string;
  email: string;
  contact: string;
  photoUrl: string;
  bio: string;
  roleId?: string;
  contactIdentity: string;
  address: IAddress;
}

export interface updateUserDTO {
  name: string;
  contact: string;
  bio: string;
  photoUrl: string;
}
