const loadData = key => {
    try{
        let data = localStorage.getItem(key)
        data = JSON.parse(data)
        return data
    }
    catch (err){
        return err;
    }
}

const saveData = (key, data) =>{
    localStorage.setItem(key, JSON.stringify(data))
}

const initialState = {
    data: loadData("repo") || [],
    follower : loadData("follower") || [],
    followerRepo : []
}

const reducer =  (state=initialState, action) => {
    switch(action.type){
        case "GET_REPO_DATA":
            saveData("repo", []);
            return {
                ...state,
                data: [],
            }
        case "REPO_SUCCESS":
            saveData("repo", action.payload);
            // console.log("data fetched",action.payload )
            return{
                ...state,
                data: action.payload,
            }
        case "GET_FOLLOWER_DATA":
            saveData("follower", []);
            return {
                ...state,
                data: [],
            }
        case "FOLLOWER_SUCCESS":
            saveData("follower", action.payload);
            return {
                ...state,
                data: [action.payload],
            }
        case "GET_FOLLOWER_REPO_DATA":
            return {
                ...state,
                data: [],
            }
        case "FOLLOWER_REPO_SUCCESS":
            return {
                ...state,
                data: action.payload,
            }
        default :
            return state;
    }
}
export default reducer;