export interface AppServerResponse {
  success: boolean
}

export interface AppServerResponseData<T> extends AppServerResponse {
  data: T
}
