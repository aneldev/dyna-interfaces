export interface IResult {
    success?: boolean;
    type?: string;
    data?: any;
    log?: ILog;
    info?: IInfo;
    warn?: IWarn;
    error?: IError;
    debug?: IDebug;
}
export interface ILog {
    code?: number | string;
    section?: string;
    message?: string;
    data?: any;
    parent?: IResult;
}
export interface IInfo extends ILog {
    progress?: number;
    values?: any;
}
export interface IWarn extends ILog {
}
export declare enum EErrorType {
    USER = 0,
    APP = 1,
    HW = 2,
}
export interface IError extends ILog {
    error?: Error | any;
    errorType?: EErrorType;
}
export interface IDebug extends ILog {
}
