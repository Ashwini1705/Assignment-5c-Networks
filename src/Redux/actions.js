import axios from 'axios';

export const getRepo = (username) => (dispatch) => {
    dispatch({type: "GET_REPO_DATA"})
    axios.get(`https://api.github.com/users/${username}/repos`)
    .then(res => dispatch({type:"REPO_SUCCESS", payload: res.data}))
}

export const getFollowerDetails = (follower) => (dispatch) => {
    console.log(follower);
    dispatch({type:"GET_FOLLOWER_DATA"});
    axios.get(`https://api.github.com/users/${follower}/followers`)
    .then(res => dispatch({type:"FOLLOWER_SUCCESS",payload: res.data}))
}

export const getFollowerRepo = (followerRepo) => (dispatch) => {
    console.log(followerRepo);
    dispatch({type:"GET_FOLLOWER_REPO_DATA"});
    axios.get(`https://api.github.com/users/${followerRepo}/repos`)
    .then(res => dispatch({type:"FOLLOWER_REPO_SUCCESS", payload: res.data}))
}