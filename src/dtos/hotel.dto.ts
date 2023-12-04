export interface createHotelDTO {
  title: string;
  description?: string;
  evaluation?: string;
  number?: string;
  cover?: string;
  photos?: string[];
  benefits?: string[];
  address: string;
  plan_id: string;
}

export interface updateHotelDTO {
  title: string;
  description?: string;
  evaluation?: string;
  number?: string;
  cover?: string;
  photos?: string[];
  benefits?: string[];
  isAvaliable: boolean;
  address: string;
  rooms?: string[];
  plan_id: string;
}
