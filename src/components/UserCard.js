// src/components/UserCard.js
import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Address: {user.address.city}, {user.address.street}</p>
        </div>
    );
};

export default UserCard;
