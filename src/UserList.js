import React from "react";

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b>
            <p>{user.email}</p>
        </div>
    )
}
function UserList({users}) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    )
}

export default UserList