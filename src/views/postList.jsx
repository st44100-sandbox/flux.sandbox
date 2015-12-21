import React from 'react'
import PostStore from '../stores/PostStore'

export default React.createClass({
    getInitialState() {
        return {
            posts: PostStore.getAll()
        }
    },

    componentDidMount () {
        PostStore.addChangeListener(this._onChange)
    },

    componentWillMount () {
        PostStore.removeChangeListener(this._onChange)
    },

    _onChange () {
        this.setState({ posts: PostStore.getAll() });
    },

    render() {
        var posts = () => {
            return this.state.posts.map( (post, index) => {
                return (
                    <li className="list-group-item" key={index}>
                        <span className="label label-info">{index}</span>
                        <a href={'#' + post.id} target="_self">
                            <span className="post">{post.title}</span>
                        </a>
                        <p className="posts">{post.body}</p>
                    </li>
                )
            })
        }

        // 配列じゃないから、変だけど一旦気にしない。
        var postDetail = () => {
            var post = this.state.posts
            return (
                <li className="list-group-item">
                    <span className="label label-info"></span>
                    <a href={'#' + post.id} target="_self">
                        <span className="post">{post.title}</span>
                    </a>
                    <p className="posts">{post.body}</p>
                </li>
            )
        }

        return (
            <div className="posts">
                <ul className="list-group">
                    {this.state.posts.length > 1 ? posts() : postDetail()}
                </ul>
            </div>
        )
    }
});
