import React from 'react';

export const User = ({user, deleteUser}) => {
    
    return (
        <li className="collection-item avatar">
            <img src={user.imageUrl} alt="" className="circle"/>
            <span className="title">{ user.firstName }</span>
            <p> { `${user.firstName} ${user.lastName}` }</p>
            <a href="#!" className="secondary-content" onClick={ () => deleteUser(user.id) }><i className="material-icons">✖</i></a>
        </li>
    );
}