export interface IRegisterFirstStepData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  contactIdentity: string;
}

export interface IRegisterSecondStepData {
  contact: string;
  bio: string;
  neighborhood: string;
  publicPlace: string;
  number: string;
  zipCode: string;
  address: string;
  complement: string;
  photoUrl: string;
}

export type IRegisterData = IRegisterFirstStepData & IRegisterSecondStepData;
