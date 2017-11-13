export interface IResult<TData> {
  success?: boolean;      // in case of progress, this is undefined
  type?: string;          // division of result, in case of multiple results
  data?: TData;           // in case of progress, this is undefined;             // the output of the result
  log?: ILog;             // infos...
  info?: IInfo;
  warn?: IWarn;
  error?: IError;
  debug?: IDebug;
}

export interface ILog {
  code?: number | string;     // code of the info/error/...
  section?: string;           // section of the application, action
  message?: string;           // a meaningful dev/debug message
  data?: any;                 // optional data of this section/action
}

export interface IInfo extends ILog {
  // Info most of the times is used for messages for the user
  progress?: number;      // 0 to 1 indicating the progress (0.10 = 10%, 1 = 100%)
  values?: any;           // values object to be used in case where the message is translation key (see yahoo intl)
}

export interface IWarn extends ILog {
}

export enum EErrorType {
  USER, APP, HW
}

export interface IError extends ILog {
  error?: Error | any;    // the raw error object
  errorType?: EErrorType;
  networkStatus?: number;
}

export interface IDebug extends ILog {
}
