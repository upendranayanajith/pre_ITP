import { Box } from "@mui/material";
import UserForms from "./userforms";
import UsersTable from "./usersTables";
import Axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
const [users, setUsers] = useState([]);
const [submitted, setSubmitted] = useState(false);

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
         
         addUser={addUser}
         submitted={submitted}
         
         />
         
    <UsersTable rows={users}/>
    </Box>
   
);

}

export default Users;