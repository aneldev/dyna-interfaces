export interface IResult {
    success?: boolean;
    type?: boolean;
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
export interface IError extends ILog {
    error?: any;
}
export interface IDebug extends ILog {
}
