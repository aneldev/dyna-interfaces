"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppName = void 0;
var DEFAUL_NAME_DELIMITER = '--';
var AppName = /** @class */ (function () {
    function AppName(config) {
        var _a = config || {}, _b = _a.projectName, projectName = _b === void 0 ? 'UnknownProject' : _b, _c = _a.end, end = _c === void 0 ? 'BE' : _c, _d = _a.machineName, machineName = _d === void 0 ? 'UnknownMachine' : _d, _e = _a.mode, mode = _e === void 0 ? 'DEV' : _e, _f = _a.version, version = _f === void 0 ? { major: 0, minor: 0, patch: 0 } : _f, _g = _a.nameDelimiter, nameDelimiter = _g === void 0 ? DEFAUL_NAME_DELIMITER : _g;
        var newConfig = {
            projectName: projectName,
            machineName: machineName,
            end: end,
            mode: mode,
            version: version,
            nameDelimiter: nameDelimiter,
        };
        var validationError = this.validate(newConfig);
        if (validationError)
            throw {
                section: 'AppName/constructor',
                code: 202002229030,
                message: 'AppName: ' + validationError,
                data: {
                    givenConfig: config,
                    finalConfig: newConfig,
                },
            };
        this._config = newConfig;
    }
    AppName.prototype.setConfig = function (config) {
        var validationError = this.validate(config);
        if (validationError)
            throw {
                section: 'AppName/setConfig',
                code: 202002229031,
                message: 'AppName: ' + validationError,
                data: { config: config },
            };
        this._config = config;
    };
    AppName.prototype.updateConfig = function (partialConfig) {
        this.setConfig(__assign(__assign({}, this._config), partialConfig));
    };
    AppName.prototype.getConfig = function () {
        return this._config;
    };
    AppName.prototype.parse = function (appName) {
        var parts = appName.split(this._config.nameDelimiter || DEFAUL_NAME_DELIMITER);
        if (parts.length !== 4)
            throw {
                section: 'AppName/parse',
                code: 202002229034,
                message: 'AppName: ' + "Wrong number of parts, it should be 4.",
                data: {
                    appName: appName,
                },
            };
        var projectName = parts[0], mode = parts[1], end = parts[2], machineName = parts[3];
        var parsedConfig = {
            projectName: projectName,
            mode: mode,
            end: end,
            machineName: machineName,
            version: { major: 0, minor: 0, patch: 0 },
        };
        var validationError = this.validate(parsedConfig);
        if (validationError)
            throw {
                section: 'AppName/parse',
                code: 202002229034,
                message: 'AppName: ' + validationError,
                data: {
                    appName: appName,
                    parsedConfig: parsedConfig,
                },
            };
        this._config = parsedConfig;
    };
    Object.defineProperty(AppName.prototype, "name", {
        get: function () {
            var _a = this._config, projectName = _a.projectName, mode = _a.mode, end = _a.end, _b = _a.machineName, machineName = _b === void 0 ? '' : _b;
            return [
                projectName,
                mode,
                end,
                machineName,
            ].join(this._config.nameDelimiter);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppName.prototype, "tags", {
        get: function () {
            var _a = this._config, projectName = _a.projectName, mode = _a.mode, end = _a.end, _b = _a.machineName, machineName = _b === void 0 ? '' : _b;
            return [
                projectName,
                mode,
                end,
                machineName,
                "v" + this.version
            ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppName.prototype, "version", {
        get: function () {
            var _a = this._config.version, major = _a.major, minor = _a.minor, patch = _a.patch, _b = _a.flag, flag = _b === void 0 ? '' : _b;
            return [
                major,
                minor,
                patch,
            ]
                .join('.')
                + (flag ? '-' + flag : '');
        },
        enumerable: false,
        configurable: true
    });
    AppName.prototype.validate = function (config) {
        var _a = config.nameDelimiter, delimiter = _a === void 0 ? DEFAUL_NAME_DELIMITER : _a;
        if (!config.projectName)
            return "projectName is required";
        if (!config.machineName)
            return "machineName is required";
        if (config.projectName.indexOf(delimiter) > -1)
            return "projectName should contain the '" + delimiter + "' char";
        if (config.machineName.indexOf(delimiter) > -1)
            return "machineName should contain the '" + delimiter + "' char";
        if (config.projectName.indexOf(' ') > -1)
            return "projectName should contain the space char";
        if (config.machineName.indexOf(' ') > -1)
            return "machineName should contain the space char";
        return "";
    };
    return AppName;
}());
exports.AppName = AppName;
//# sourceMappingURL=AppName.js.map