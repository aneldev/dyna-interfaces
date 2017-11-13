import { IError } from "./IResult";
export interface IResponse<TData, TAuth> {
    command?: string;
    interface?: string;
    status?: number;
    data?: TData;
    completed?: boolean;
    auth?: TAuth;
    error?: IError;
}
