export type ApiError = {
    statusCode: number;
    message: string;
}

export type ApiResponse<T> = T | ApiError;

export type ApiCall<T, P> = (params: P) => Promise<ApiResponse<T>>;

export type SafeRenderType = {
    data?: unknown
}

export type Identifyable<T> = T | {
    id: number;
}