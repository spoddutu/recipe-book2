routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
    //when there is an empty route, redirect to /index
    $urlRouterProvider.when('', '/home');

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'client/src/ng1/root/index.template.html',
        onEnter: ['$state', 'authService', ($state, authService) => {
            if(!authService.isLoggedIn()){
                $state.go('login')
            }
        }]
    })

        .state('cart', {
            url: '/cart',
            component: 'shoppingList'
        })
}