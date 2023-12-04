export default interface IAddress {
  id?: string;
  neighborhood: string;
  publicPlace: string;
  number: number | string;
  zipCode: string;
  address: string;
  complement: string;
}
