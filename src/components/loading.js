import { extendObservable } from 'mobx';


class loading {
    constructor() {
        extendObservable(this, {

            loading: true,
            isLoggedIn: false,
            username: ''
        })
    }

}

export default new loading();