const inititalState = {
    username: '',
    id:'',
    img:'' 
}
const UPDATE_USERNAME = "UPDATE_USERNAME";
const UPDATE_USERID = "UPDATE_USERID";
const UPDATE_IMG = "UPDATE_IMG";

export function reducer( state = inititalState, action){
    switch(action.type){
        case UPDATE_USERNAME:
        return Object.assign( {}, state, {username: action.payload});
        
        case UPDATE_USERID:
        return Object.assign( {}, state, {userId: action.payload});

        case UPDATE_IMG:
        return Object.assign( {}, state, {img: action.payload});

        Default:
        return state;
    }

}

export function updateUsername(){
    return{
        type: UPDATE_USERNAME,
        payload: name
    }
}
 export function updateUserId(){
     return{
         type: UPDATE_USERID,
         payload: id
     }
 }
 export function updateImg() {
     return{
         type: UPDATE_IMG,
         payload: img
     }
 }