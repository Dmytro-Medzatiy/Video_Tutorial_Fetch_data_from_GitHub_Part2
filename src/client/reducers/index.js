import gitHubRepoFormReducer from '../actions/GitHubRepo/GitHubRepoFormActions.js';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    githubData: gitHubRepoFormReducer
});
export default rootReducer;