import React, { Component } from "react";
import { getPosts } from "./getData";
import { Spinner } from 'reactstrap';


class PostList extends Component {
  state = {
    isLoading: false,
    posts: []
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    let postUrl = `${getPosts}`;
    fetch(postUrl)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ posts: data, isLoading: false });
      });
  }

  render() {
    const {isLoading } = this.state;
    if (isLoading) {
      return <div><Spinner type="grow" color="primary" />
      <div><p>Cargando tasa...</p></div>
      </div>;
    }
    let listposts = this.state.posts.map((post, index) => {
      return (
        <div key={index}>
           {post.title.rendered}{/* <p dangerouslySetInnerHTML={{__html: post.content.rendered}}/>  */}
          {/* dangerouslySetInnerHTML eliminates the html tags */}
        </div>
      );
    });

    return (
      <article>
        {/* <h1>Posts</h1> */}
        {listposts}
      </article>
    );
  }
}

export default PostList;
