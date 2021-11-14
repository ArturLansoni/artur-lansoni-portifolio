export interface Formatter<P = any, R = any> {
	format: (params: P) => R
}
