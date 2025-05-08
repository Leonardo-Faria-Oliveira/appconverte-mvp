import { BasicResponse } from "../httpClient/httpResponse";

export interface LoginResponse extends BasicResponse{

    token:string

}