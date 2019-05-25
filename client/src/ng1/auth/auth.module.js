import routing from "./auth.routes";

import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import AuthService from "./auth.service";

angular.module('auth', ['ui.router'])
.config(routing)

.component('signup', SignupComponent)
.component('signin', SigninComponent)

.service('authService', AuthService)