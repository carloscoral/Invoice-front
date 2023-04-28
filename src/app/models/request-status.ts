export class RequestStatus {
  private constructor(public isLoading: boolean, public isSuccess: boolean, public isError: boolean, public errorMessage?: string) {}

  static loading() {
    return new RequestStatus(true, false, false);
  }

  static success() {
    return new RequestStatus(false, true, false);
  }

  static error(message: string) {
    return new RequestStatus(false, false, true, message);
  }
}