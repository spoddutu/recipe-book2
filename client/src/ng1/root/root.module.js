import routing from './root.routes';
import {HeaderComponent} from "./header/header.component";

angular.module('root', ['ui.router'])
.config(routing)
.component('header', HeaderComponent)