import { ApiResponse } from "@/types";

export default function isError<T extends Object>(input: ApiResponse<T>): boolean {
    return (input.hasOwnProperty('code') && input.hasOwnProperty('description')) 
                || (input instanceof Error);
}