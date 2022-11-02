export type AccountButtonProps = {
    onLogout?: VoidFunction;
    onNavigateToProfile?: VoidFunction;
    onNavigateToDashboard?: VoidFunction;
}

export type AdminAccountButtonProps = {
    onLogout?: VoidFunction;
    onNavigateToBooks?: VoidFunction;
    onNavigateToReaders?: VoidFunction;
    onNavigateToProfiles?: VoidFunction;
}

export type LogoTypes = {
    isAdmin?: boolean;
}