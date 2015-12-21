import {Dispatcher} from 'flux'
import "babel-polyfill";
import AppConstants from '../constants/AppConstants'

var PayloadSources = AppConstants.PayloadSources;
/**
 * Dispacher自体はEventEmitterのシングルトンみたいな感じ
 * Actionから発火されたイベントをハンドリングする。
 * DispacherはActionから呼ばれたメソッドを、イベントのストリームに流してるイメージ
 */
export default Object.assign(new Dispatcher(), {
    handleViewAction: function(action) {
        this.dispatch({
            source: PayloadSources.VIEW_ACTION,
            action: action
        });
    }
})
