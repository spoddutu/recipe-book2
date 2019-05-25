export default class SignupController {
    constructor($state, $rootScope, authService){
        this.state = $state;
        this.rootScope = $rootScope;
        this.authService = authService;

        this.user = {};
    }

    onSignup() {
        this.authService.signup(this.user).then(
            (response) => {
                this.rootScope.$emit('re-validate.login');
                this.state.go('recipes');
            },
            (error) => {
                this.status = error.message;
            });
    }
}

SignupController.$inject = ['$state', '$rootScope', 'authService'];