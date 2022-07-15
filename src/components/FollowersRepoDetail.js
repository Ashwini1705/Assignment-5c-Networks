import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getFollowerRepo } from "../Redux/actions";
import RepoList from "./RepoList";
import '../styles/Home.css'

const FollowersRepoDetail = () => {
    const param = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    useEffect(()=>{
        dispatch(getFollowerRepo(param.name))
    },[])

    return (
        <div>
            <button className="goto-button"><Link to='/'>Go to Home Page</Link></button>
            <div className="repo-wrapper">
                {data && data.map(repo => <RepoList repo={repo}/>)}
            </div>
        </div>
    )
}
export default FollowersRepoDetail;