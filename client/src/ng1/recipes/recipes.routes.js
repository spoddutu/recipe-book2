routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider.state('recipes', {
        url: '/recipes',
        component: 'recipes',
        onEnter: ['$state', 'authService', ($state, authService) => {
            if(!authService.isLoggedIn()){
                $state.go('login')
            }
        }]
    })

    .state('recipes.detail', {
        url: '/detail/:index',
        component: 'recipeDetail',
        onEnter: ['$state', 'authService', ($state, authService) => {
            if(!authService.isLoggedIn()){
                $state.go('login')
            }
        }]
    })

    .state('new', {
        url: '/new',
        component: 'editRecipe',
        onEnter: ['$state', 'authService', ($state, authService) => {
            if(!authService.isLoggedIn()){
                $state.go('login')
            }
        }]
    })

    .state('edit', {
        url: '/edit/:id',
        component: 'editRecipe',
        onEnter: ['$state', 'authService', ($state, authService) => {
            if(!authService.isLoggedIn()){
                $state.go('login')
            }
        }]
    })
}