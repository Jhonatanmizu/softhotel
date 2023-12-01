export interface createUserDTO {
  name: string;
  email: string;
  contact: string;
  photoUrl: string;
  bio: string;
  addressId?: string;
  roleId?: string;
  contactIdentity: string;
}

export interface updateUserDTO {
  name: string;
  contact: string;
  bio: string;
  photoUrl: string;
}
