export interface IRegisterFirstStepData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  cpf: string;
}

export interface IRegisterSecondStepData {
  phoneNumber: string;
  bio?: string | null;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  birthDate: string;
  addressNumber: number | null;
}

export type IRegisterData = IRegisterFirstStepData & IRegisterSecondStepData;
