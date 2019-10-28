import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import materialize from 'materialize-css';
import './home.css';
import { Header } from '../components/header';
import { User } from '../components/user';
import { LoadingBar } from '../components/LoadingBar';


import fetchUsersAction from '../actions/fetchUsers';
import deleteUser from '../actions/deleteUser';

import {getUsersError, getUsers, getUsersPending} from '../reducers/users';

class Home extends Component {

  componentDidMount() {
    materialize.AutoInit();
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  render() {
    const {users, pending, deleteUser } = this.props;
    
    const userComponents = users.map((user, index) => {
      return (
        <User 
          index={index}
          user={user}
          key={user.name}
          deleteUser={deleteUser}
        />
      );
    });
    
    if(pending){
      return (
        <div>
          <Header />
          <LoadingBar />
        </div>
      );
    }else {
    return (
      <div>
        <Header />
        <ul className="collection">
          { userComponents }
        </ul>
      </div>
    );
        }
  };
}


const mapStateToProps = state => ({
  error: getUsersError(state),
  users: getUsers(state),
  pending: getUsersPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers: fetchUsersAction,
  deleteUser,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Home);
