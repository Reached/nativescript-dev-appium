export declare const verbose: boolean;
export declare const testFolder: any;
export declare const mochaCustomOptions: any;
export declare const capabilitiesName = "appium.capabilities.json";
export declare const appLocation: any;
export declare const executionPath: any;
export declare function resolve(mainPath: any, ...args: any[]): any;
export declare function projectDir(): any;
export declare function pluginBinary(): any;
export declare function projectBinary(): any;
export declare function pluginRoot(): any;
export declare function fileExists(p: any): boolean;
export declare function executeNpmInstall(cwd: any): void;
export declare function copy(src: any, dest: any, verbose: any): any;
export declare function isFile(fullName: any): boolean;
export declare function contains(source: any, check: any): boolean;
export declare function searchFiles(folder: any, words: any, recursive?: boolean, files?: any[]): Array<string>;
export declare function log(message: any): void;
export declare function loglogOut(line: any, force: any): void;
export declare function logErr(line: any, force: any): void;
export declare function shutdown(processToKill: any): void;
export declare function killPid(pid: any): void;
export declare function waitForOutput(process: any, matcher: any, timeout: any): Promise<boolean>;
export declare function executeCommand(args: any, cwd?: any): string;
export declare function isWin(): boolean;