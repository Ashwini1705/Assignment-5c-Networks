import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getRepo } from "../Redux/actions";
import RepoList from './RepoList';
import '../styles/Home.css'
const Home = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const navigate = useNavigate();
    // console.log("history", navigate)
    function handleSearch(){
        // e.preventDefault();
        dispatch(getRepo(username));
    }
    const handleFollower = () =>{
        // history.push(`/follower/${data[0].owner.login}`)
        navigate(`/follower/${data[0].owner.login}`);
    }
    return (
        <div>
            <input className="search-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button className="search-button" onClick={() => handleSearch()}>Search</button>

            <div>
                {data.length > 0 &&
                    <div>
                        <h4>Name: {data[0].owner.login}</h4>
                        <button className="search-button" onClick={()=>handleFollower()}>Followers</button>
                    </div>
                }
                <div className="repo-wrapper">
                    {data && data.map( repo => <RepoList repo={repo}/> )}
                </div>
            </div>
        </div>
    )
}
export default Home;