export interface IMessageJobResponse {
  author: string;
  message: string;
  date: string;
}

export interface IMessageJobResponseRequest {
  messages: IMessageJobResponse[];
}
