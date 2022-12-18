
// Тип, отвечающий над кнопкой аккаунта на странице
export type AccountButtonProps = {
    onLogout?: VoidFunction;
    onNavigateToProfile?: VoidFunction;
    onNavigateToDashboard?: VoidFunction;
    onNavigateToBooks?: VoidFunction;
}

// Тип, отвечающий над кнопокй аккаунта на странице администратора
export type AdminAccountButtonProps = {
    onLogout?: VoidFunction;
    onNavigateToBooks?: VoidFunction;
    onNavigateToReaders?: VoidFunction;
    onNavigateToProfiles?: VoidFunction;
}

// Тип, отвечающий за логотип
export type LogoTypes = {
    isAdmin?: boolean;
}