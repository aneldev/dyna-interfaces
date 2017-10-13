import { IError } from "./IResult";
export interface IResponse {
    command?: string;
    interface?: string;
    data?: any;
    completed?: boolean;
    error?: IError;
}
