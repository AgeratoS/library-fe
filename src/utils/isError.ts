import { ApiResponse } from "@/appTypes";

export default function isError<T extends Object>(input: ApiResponse<T>): boolean {
    return (input.hasOwnProperty('statusCode') && input.hasOwnProperty('message')) 
                || (input instanceof Error);
}