import List from '../component/List';
import { getList } from '../module/post';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';

function ListContainer({posts, getList, loading}){
    useEffect(() => {
        getList();
    }, [getList]);
    return (
        <div>
            <List posts={posts} loading={loading}/>
        </div>
    )
}

export default connect(
    ({post, loading}) => ({
        posts: post.posts,
        loading: loading['post/GET_POSTS']
    }),
    {
        getList
    }
)(ListContainer);