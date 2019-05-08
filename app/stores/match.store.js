import {action, observable} from 'mobx';

export default class MatchStore {
    @observable meetings = null;
    @observable fetchingData = true;

    @action 
    getData () {
        this.fetchingData = true;
        // console.warn('fetching data...');
        
        return fetch('http://localhost:4000/meetings')
        .then((response) => response.json())
        .then((responseData) => {
            this.fetchingData = false;
            this.meetings = responseData['data'];
        })
        .catch(console.log);
    }
}