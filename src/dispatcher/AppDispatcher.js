import {Dispatcher} from 'flux'
import "babel-polyfill";
import AppConstants from '../constants/AppConstants'

var PayloadSources = AppConstants.PayloadSources;

export default Object.assign(new Dispatcher(), {
    handleViewAction: function(action) {
        this.dispatch({
            source: PayloadSources.VIEW_ACTION,
            action: action
        });
    }
})
