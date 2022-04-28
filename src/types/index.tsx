export type SeatType =
  | 'booked'
  | 'available'
  | 'emptySpace'
  | 'door'
  | 'driver'
  | 'blocked'
  | 'women';

export type SelectedSeatType = 'booked' | 'women' | 'blocked';

export interface SeatLayout {
  id: string;
  type: SeatType;
  isStatusChange?: boolean;
  seatNo?: number;
  isSeatSeleced?: boolean;
}

export interface SelectedSeats {
  seatNumber: number;
  seatType: SelectedSeatType;
}

export type DriverPosition = 'left' | 'right';

export interface SeatImages {
  booked?: string;
  available?: string;
  blocked?: string;
  women?: string;
}
