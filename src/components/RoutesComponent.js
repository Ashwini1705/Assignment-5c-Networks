import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Followers from './Followers';
import FollowersRepoDetail from './FollowersRepoDetail';
import Home from './Home';
import RepoDetails from './RepoDetails';
const RoutesComponent = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/details/:id' element={<RepoDetails />} />
                    <Route path='/follower/:name' element={<Followers/>} />
                    <Route path='/follower/repo/:name' element={<FollowersRepoDetail />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default RoutesComponent;