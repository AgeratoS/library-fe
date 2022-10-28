import { ApiError } from "@/appTypes";

class ApiHelper {
    static post<T>(url: RequestInfo | URL, init?: RequestInit) {
        return fetch(url, {...init, method: "POST", headers: {
            'Content-Type': 'application/json'
        }})
            .then((value: Response) => value.json())
            .then((value: T) => value)
            .catch((error: ApiError) => error);
    }

    static get<T>(url: string | URL, getParams?: Record<string, string>, init?: RequestInit) {
        const urlParams = new URLSearchParams(getParams).toString()
        return fetch(`${url}?${urlParams}`, {...init, method: "GET"})
            .then((value: Response) => value.json())
            .then((value: T) => value)
            .catch((error: ApiError) => error);
    }

    static put<T>(url: string | URL, init?: RequestInit) {
        return fetch(url, {...init, method: "PUT", headers: {
            'Content-Type': 'application/json'
        }})
            .then((value: Response) => value.json())
            .then((value: T) => value)
            .catch((error: ApiError) => error);
    }

    static patch<T>(url: string | URL, init?: RequestInit) {
        return fetch(url, {...init, method: "PATCH", headers: {
            'Content-Type': 'application/json'
        }})
            .then((value: Response) => value.json())
            .then((value: T) => value)
            .catch((error: ApiError) => error);
    }

    static delete<T>(url: string | URL, init?: RequestInit) {
        return fetch(url, {...init, method: "DELETE", headers: {
            'Content-Type': 'application/json'
        }})
            .then((value: Response) => value.json())
            .then((value: T) => value)
            .catch((error: ApiError) => error);
    }
};

export default ApiHelper;