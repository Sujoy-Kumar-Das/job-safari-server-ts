interface ISendResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export default ISendResponse;
