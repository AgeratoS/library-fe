export type ApiError = {
    code: number;
    description: string;
}

export type ApiResponse<T> = T | ApiError;

export type ApiCall<T, P> = (params: P) => Promise<ApiResponse<T>>;

export type SafeRenderType = {
    data?: unknown
}