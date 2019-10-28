import { fetchUsersPending, fetchUsersSuccess } from '../actioncreators/users';

export default () => {
    console.log(process.env.REACT_APP_HOST_URL);
    
    return dispatch => {
        dispatch(fetchUsersPending());
        fetch(`${process.env.REACT_APP_HOST_URL}/api/v1/users`, 
        { method: 'GET', mode: 'cors' })
            .then(res => res.json())
            .then(({success, message, payload}) => {
                (success === true)? dispatch(fetchUsersSuccess(payload)): 
                console.log(message);
            }).catch(console.log);
    }
};