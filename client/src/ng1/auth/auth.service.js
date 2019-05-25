export default class AuthService {
    constructor($firebaseAuth){
        this.firebaseAuthObject = $firebaseAuth();
    }

    signup(user) {
        return this.firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
    }

    login(user) {
        return this.firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
    }

    logout() {
        return this.firebaseAuthObject.$signOut();
    }

    isLoggedIn() {
        return this.firebaseAuthObject.$getAuth();
    }
}

AuthService.$inject = ['$firebaseAuth']