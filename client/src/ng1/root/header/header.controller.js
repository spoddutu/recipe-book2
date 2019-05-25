export default class HeaderController {
    constructor($rootScope, $state, authService){
        this.authService = authService;
        this.state = $state;

        this.isLoggedIn = authService.isLoggedIn();

        this.reValidationListener = $rootScope.$on('re-validate.login', () => {
            this.isLoggedIn = authService.isLoggedIn();
        })
    }

    logout() {
        this.authService.logout().then(
            () => {
                this.isLoggedIn = false;
                this.state.go('login');
            }
        );

    }

    $onDestroy() {
        this.reValidationListener();
    }
}

HeaderController.$inject = ['$rootScope', '$state', 'authService'];