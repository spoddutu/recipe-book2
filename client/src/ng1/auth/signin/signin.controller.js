export default class SigninController {
    constructor($state, $rootScope, authService){
        this.state = $state;
        this.rootScope = $rootScope;
        this.authService = authService;

        this.user = {};
    }

    onSignin() {
        this.authService.login(this.user).then(
            (response) => {
                this.rootScope.$emit('re-validate.login');
                this.state.go('recipes');
            },
            (error) => {
                this.status = error.message;
            }
        );
    }
}

SigninController.$inject = ['$state', '$rootScope', 'authService'];