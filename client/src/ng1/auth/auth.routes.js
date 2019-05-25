routes.$inject = ['$stateProvider'];

export default function routes($stateProvider){

    $stateProvider.state('login', {
        url: '/login',
        component: 'signin'
    })

    .state('signup', {
        url: '/signup',
        component: 'signup'
    })
}