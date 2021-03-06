export interface IAppNameConfig {
    projectName: string;
    end: "FE" | "BE";
    machineName: string;
    mode: "PROD" | "STAGE" | "DEV";
    version: {
        major: number;
        minor: number;
        patch: number;
        flag?: string;
    };
    nameDelimiter?: string;
}
export declare class AppName {
    private _config;
    constructor(config?: IAppNameConfig);
    setConfig(config: IAppNameConfig): void;
    updateConfig(partialConfig: Partial<IAppNameConfig>): void;
    getConfig(): IAppNameConfig;
    parse(appName: string): void;
    get name(): string;
    get tags(): string[];
    get version(): string;
    validate(config: IAppNameConfig): string;
}
