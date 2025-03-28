interface IPin {
  _id: string;
  media: string; // media is required and of type string
  width: number; // width is required and of type number
  height: number; // height is required and of type number
  title: string; // title is required and of type string
  description: string; // description is required and of type string
  link?: string; // link is optional and of type string
  board?: string; // board is optional, referencing Board (ObjectId)
  tags?: string[]; // tags is optional, an array of strings
  user: string; // user is required and references User (ObjectId)
}

export default IPin;
