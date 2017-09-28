export interface IResult {
  success?: boolean;      // in case of progress, this is undefined
  data?: any;             // the output of the result
  log?: ILog;             // infos...
  info?: ILog;
  warn?: ILog;
  error?: ILog;
  debug?: ILog;
}

export interface ILog {
  code?: number | string; // code of the info/error/...
  section?: string;       // section of the application, action
  message?: string;       // a meaningful dev/debug message
  data?: any;             // optional data of this section/action
  parent?: IResult;       // in case of bubble, the parent of it
}

export interface IWarn extends ILog {
}

export interface IInfo extends ILog {
}

export interface IError extends ILog {
  error?: any;            // the raw error object
}

export interface IDebug extends ILog {
}
