export default class HeaderController {
    constructor($rootScope, $state, authService){
        this.authService = authService;
        this.state = $state;

        this.isLoggedIn = authService.isLoggedIn();

        this.unsubscribeFns = [];

        this.unsubscribeFns.push($rootScope.$on('re-validate.login', () => {
            this.isLoggedIn = authService.isLoggedIn();
        }));

        this.counter = 0;
        this.unsubscribeFns.push($rootScope.$on('INCREMENT_COUNTER', () => {
            ++this.counter;
        }));
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
        this.unsubscribeFns.forEach(unsubscribeFn => unsubscribeFn());
    }
}

HeaderController.$inject = ['$rootScope', '$state', 'authService'];
