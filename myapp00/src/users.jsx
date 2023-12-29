import { Box } from "@mui/material";
import UserForms from "./userforms";
import UsersTable from "./usersTables";
import Axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
const [users, setUsers] = useState([]);
const [submitted, setSubmitted] = useState(false);
const [selectedUser, setSelectedUser] = useState({});
const [isEdit, setIsEdit] = useState(false);

useEffect(() => {
    getUsers();
}, []);



const getUsers = () => {
    Axios.get('http://localhost:3001/api/users')
    .then((response) => {
        setUsers(response.data?.response);
    })
    .catch((error) => {
        console.error("Axois error", error);
    });
}


const addUser = (data) => {
    setSubmitted(true);
    const payload = {
        id: data.id,
        name: data.name,
    }
    Axios.post('http://localhost:3001/api/createuser', payload )
    .then(() => {
        getUsers();
        setSubmitted(false);
        setIsEdit(false);
    })
    .catch((error) => {
        console.error("Axois error", error);
    });
}


const updateUser = (data) => {
setSubmitted(true);

const payload = {
    id: data.id,
    name: data.name,
}

Axios.post('http://localhost:3001/api/updateuser', payload )
.then(() => {
    getUsers();
    setSubmitted(false);
    setIsEdit(false);
})
.catch((error) => {
    console.error("Axois error", error);
});

}


const deleteUser = (data) => {

    Axios.post('http://localhost:3001/api/deleteuser', data)
.then(() => {
    getUsers();
   
})
.catch((error) => {
    console.error("Axois error", error);
});
}






return(
    <Box 
    sx={{
        width: 'calc(100% -100px)',
        margin:'auto',
        marginTop: '100px',
        }}>
         <UserForms
         updateUser={updateUser}
         addUser={addUser}
         submitted={submitted}
         data={selectedUser}
         isEdit={isEdit}
         />
         
    <UsersTable 
    rows={users}
    selectedUser={data => {
setSelectedUser(data)
setIsEdit(true);
    }}
    deleteUser={data => window.confirm('Are you sure??') && deleteUser(data)}
    />
    </Box>
   
);

}

export default Users;