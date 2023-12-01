export default interface IAddress {
  id?: string;
  neighborhood: string;
  publicPlace: string;
  number: number | null;
  zipCode: string;
  address: string;
  complement: string;
}
