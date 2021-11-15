/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Formatter<P = any, R = any> {
	format: (params: P) => R
}
