//helpers functions for users which will helps us to manage users.


//userlist
const users = []


//adduser to the user list
const addUser = ({ id, name, room }) => {

    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.name === id && user.room === room);
    if (existingUser) return { error: "username is taken" }

    const user = { id, name, room };

    console.log('users.js:', user);
    users.push(user);

    return { user };

}

//remove user from the user list
const removeUser = (id) => {
    const updatedUsers = users.filter((user) => user.id!==id);
    users = [...users,updatedUsers];

    return;
}


//get the user
const getUser = (id) => {
    const user = users.find((user) => user.id ===id); 
    if(user ) return user; 
    
    return {error: 'there is no user with this id'};
}


//get the list of user present in particular room
const getUsersInRoom = (room) => users.filter((user) => user.room ===room);

module.exports =  {addUser, removeUser, getUser, getUsersInRoom};