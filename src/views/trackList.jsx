import React from 'react'
import TrackStore from '../stores/TrackStore'

export default React.createClass({
    getInitialState() {
        return {
            tracks: TrackStore.getAll()
        }
    },

    componentDidMount: function () {
        TrackStore.addChangeListener(this._onChange)
    },

    componentWillMount: function() {
        TrackStore.removeChangeListener(this._onChange)
    },

    render() {
        var tracks = this.state.tracks.map( (tracks, index) => {
            return (
                <li className="list-group-item" key={index}>
                    <span className="label label-info">{index}</span>
                    <a href={track.url} target="_blank">
                        <span className="track">{track.name}</span>
                    </a>
                    <small className="listeners glyphicon glyphicon--headphones">{track.listeners}</small>
                </li>
            )
        })

        return (
            <div className="tracks">
                <ul className="list-group">
                    {tracks}
                </ul>
            </div>
        )
    }
});
