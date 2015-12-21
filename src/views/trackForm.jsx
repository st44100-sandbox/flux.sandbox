import React from 'react'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import {fetchByArtist, fetchByCountry} from '../actions/TrackAction'

export default React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState() {
        return {
            inputArtist: 'radiohaed'
        }
    },
    handleSubmit(e) {
        e.preventDefault()
        var artist = this.state.inputArtist;
        if (artist) {
            fetchByArtist(artist)
        }
    },

    render() {
        return (
            <form className="fron-horizontal" role="form" onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label htmlFor="js-input-location" className="col-sm-1 control-label">Artist</label>
                    <div className="col-sm-11">
                    <input type="text" className="form-control" placeholder="Input Artist Name" valueLink={this.linkState('inputArtist')} required />

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
