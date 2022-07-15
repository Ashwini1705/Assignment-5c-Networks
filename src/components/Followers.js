import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getFollowerDetails } from "../Redux/actions";
import '../styles/Followers.css'

const Followers = () => {
    const param = useParams();
    // console.log("param",param);
    const dispatch = useDispatch();
    const follower = useSelector(state => state.follower);
    const navigate = useNavigate()

    useEffect(()=> {
        if(follower.length === 0){
            dispatch(getFollowerDetails(param.name))
        }
    },[])
    const handleFollower = (name) => {
        navigate(`/follower/repo/${name}`)
    }
    return (
        <div>
            <button className="goto-button"><Link to='/'>Go to Home Page</Link></button>
            <div className="followers-container">
                {follower && follower.length === 0 ? "No Follower Found" : 
                    follower.map( item => 
                        <div className="followers-wrapper">
                            <div>
                            <img className="follower-img" heigth={100} width={100} src={item.avatar_url} alt="" />
                            </div>
                            <div className="follower-info">
                                <h5 className="onhoverChange" onClick={()=>handleFollower(item.login)}>{item.login}</h5>
                                <p>{item.type}</p>
                            </div>
                        </div>    
                    )
                }
            </div>
        </div>
    )
}
export default Followers;