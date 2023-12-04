export interface createRoomDTO {
  title: string;
  description?: string;
  evaluation?: string;
  number: string;
  cover?: string;
  photos?: string[];
  daily_price: number;
}

export interface updateRoomDTO {
  title: string;
  description?: string;
  evaluation?: string;
  number: string;
  cover?: string;
  photos?: string[];
  isAvaliable: boolean;
  daily_price: number;
}
