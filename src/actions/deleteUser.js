import fetchUsers from './fetchUsers';

export default (userId) => {
    return dispatch => {
        fetch(`${process.env.REACT_APP_HOST_URL}/api/v1/users/${userId}`, 
        { method: 'DELETE', mode: 'cors' })
            .then(res => res.json())
            .then(({success, message}) => {
                (success === true)? dispatch(fetchUsers()): 
                console.log(message);
            }).catch(console.log);
    }
};