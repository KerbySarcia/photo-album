import IPin from "./pin.interface";

export interface IBoard {
  _id: string;
  title: string;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  pinCount: number;
  firstPin: IPin;
}
