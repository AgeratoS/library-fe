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
        BOOK_EDIT: '/admin/crud/book_controlling/edit',
        BOOK_CREATE: '/admin/crud/book_controlling/create',
        BOOK_DELETE: '/admin/crud/book_controlling/delete',

        PROFILE_CONTROLLING: "/admin/profile_controlling",
        PROFILE_EDIT: '/admin/crud/profile_controlling/edit',
        PROFILE_CREATE: '/admin/crud/profile_controlling/create',
        PROFILE_READERS: '/admin/crud/profile_controlling/readers',
        PROFILE_DELETE: '/admin/crud/profile_controlling/delete'
    }
}

export default Router;