import { useNavigate, useParams } from "react-router-dom";
import '../styles/RepoList.css'


const RepoList = ({repo}) => {
    // console.log("repolist", repo);
    const navigate = useNavigate();
    const handleRepoDescription = () => {
        navigate(`details/${repo.id}`)
    }
    return (
        <div className="repo-container">
            
            <img className="user-img" src={repo.owner.avatar_url} alt="" />
            <div>
                <h5 className="onhoverChange" onClick={()=>handleRepoDescription()}>{repo.name}</h5>
                <p>{repo.description}</p>
            </div>
        </div>
    )
}
export default RepoList;