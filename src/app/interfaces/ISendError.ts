interface IError<T> {
  statusCode: number;
  message: string;
  errorMessage: string;
  errorDetails: T;
  stack: string;
}

export default IError;
