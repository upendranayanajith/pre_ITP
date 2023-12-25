import { Box } from "@mui/material";
import UserForms from "./userforms";
import UsersTable from "./usersTables";

const users = [
    {
        id: 1,
        name: "Upendra",
    },
    {
        id: 2,
        name: "Raghu",
    },
];

const Users = () => {
return(
    <Box sx={{
        width: 'calc(100% -100px)',
        margin:'auto',
        marginTop: '100px',
        }}>
         <UserForms/>
    <UsersTable rows={users}/>
    </Box>
   
);

}

export default Users;