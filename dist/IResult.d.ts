export interface IResult {
    success?: boolean;
    data?: any;
    log?: ILog;
    info?: ILog;
    warn?: ILog;
    error?: ILog;
    debug?: ILog;
}
export interface ILog {
    code?: number | string;
    section?: string;
    message?: string;
    data?: any;
    parent?: IResult;
}
export interface IWarn extends ILog {
}
export interface IInfo extends ILog {
}
export interface IError extends ILog {
    error: any;
}
export interface IDebug extends ILog {
}
