import { createAction, handleActions } from '../reduxActionsSequence';
import { readData } from '../../api/serverApi.js'

const FETCH_GIT_HUB_DATA = 'FETCH_GIT_HUB_DATA';

export const fetchGitHubData = createAction(FETCH_GIT_HUB_DATA, inputText => {
    return new readData(inputText).then( response => {
        let result = [];
        if (response && response.length>0) {
            result = response.map( item => {
                return {
                    name: item.name,
                    stargazers: item.stargazers_count,
                    open: item.open_issues_count

                }
            });
        }
        return result;
    });

});

export default handleActions({

    [FETCH_GIT_HUB_DATA]: {
        start(state, action) {
            state = Object.assign({}, state, {
                    list: [],
                    fetching: {
                        status: 'loading'
                    }
            });
            return state;
        },
        next(state, action) {
            state = Object.assign({}, state, {
                    list: action.payload,
                    fetching: {
                        status: 'done'
                    }
            });
            return state;
        },
        throw(state, action) {
            state = Object.assign({}, state, {
                    list: [],
                    fetching: {
                        status: 'error',
                        statusText: action.payload
                    }
            });
            return state;
        }
    }

}, {});
