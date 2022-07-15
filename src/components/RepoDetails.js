import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import '../styles/RepoList.css';
const RepoDetails = () => {
    const param = useParams();
    const data = useSelector(state => state.data);
    const target = data.find(item => item.id == param.id);
    
    return (
        <div>
            <button className="goto-button"><Link to='/'>Go to home page</Link></button>
            {target && 
                <div className="center">
                    <div>
                        <img height={100} style={{margin:"10px",borderRadius:"50%"}} src={target.owner.avatar_url} alt='' />
                    </div>
                    <div style={{margin:"10px"}}>
                        <h5 style={{fontSize:"18px", fontWeight:900}}>{target.name} </h5>
                        <p>{target.description}</p>
                        <p>forks: {target.forks}</p>
                        <p>watcher: {target.watchers}</p>
                    </div>
                </div>
            }
        </div>
    )
}
export default RepoDetails;