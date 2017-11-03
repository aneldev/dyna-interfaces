import { IError } from "./IResult";
export interface IResponse<TData> {
    command?: string;
    interface?: string;
    status?: number;
    data?: TData;
    completed?: boolean;
    error?: IError;
}
