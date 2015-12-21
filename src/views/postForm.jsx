import React from 'react'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import {fetchById, fetchAll} from '../actions/PostAction'

export default React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState() {
        return {
            postId: ''
        }
    },
    handleSubmit(e) {
        e.preventDefault()
        var postId = this.state.postId;
        if (postId) {
            fetchById(postId)
        } else {
            fetchAll()
        }
    },

    render() {
        return (
            <form className="fron-horizontal" role="form" onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label htmlFor="js-input-location" className="col-sm-1 control-label">POST ID</label>
                    <div className="col-sm-11">
                    <input type="text" className="form-control" placeholder="Input post ID for fetch" valueLink={this.linkState('postId')} />

                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-1 col-sm-11">
                        <button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon--search">Search</span></button>
                    </div>
                </div>
            </form>
        )
    }
});
