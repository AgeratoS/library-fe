class Router {
    static HOME: string = "/"
    static AUTH: string = "/auth";
    static PROFILE: string = "/profile";
    static LINK_READER: string = "/link_reader";
    static DASHBOARD: string = "/dashboard";
    static READER_SETTINGS: string = "/reader_settings";

    static LIBRARY: string = "/library";
    static RENT: string = "/rent_book";

    static ADMIN_CONTEXT = {
        BASE: "/admin",
        BOOK_CONTROLLING: "/admin/book_controlling",
        PROFILE_CONTROLLING: "/admin/profile_controlling"
    }
}

export default Router;