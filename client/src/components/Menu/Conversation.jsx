import { useEffect, useState,useContext } from "react";
import { getUsers } from "../../service/api";
import { Box,makeStyles } from "@material-ui/core"


import{ AccountContext } from '../../context/AccountProvider'


//component
import Convo from './Convo';

const useStyles = makeStyles(
    {
        component:
        {
            height:'81vh',
            overflow:'overlay'
        }
    }
)
const Coversation = ( { text })=>
{
    const [users,setUsers] = useState([]);
const { account,socket,setActiveUsers,newMessageFlag } = useContext(AccountContext);

const classes = useStyles();

    useEffect(()=>
    {
        const fetchData = async()=>
        {
          const data =  await getUsers();
        const filterData =  data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
          setUsers(filterData);
        }
        fetchData();
    },[text,newMessageFlag])
    useEffect(()=>
    {
        socket.current.emit('addUser',account.googleId);
        socket.current.on('getUsers',users =>
        {
            setActiveUsers(users);
        })
    },[account,newMessageFlag])

    
    return(
        <Box className={classes.component}>
           { users.map(
                user =>
                (   
                        user.googleId !== account.googleId &&
                        <Convo user ={user}/>
                )
            )
                }
        </Box>

    )
}

export default Coversation;