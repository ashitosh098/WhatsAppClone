import { Box,Typography,makeStyles } from'@material-ui/core';
import { useContext, useEffect, useState } from 'react';

import { AccountContext } from '../../context/AccountProvider';
import { getConversation, setConversation } from '../../service/api';
import { UserContext } from '../../context/UserProvider';


const useStyles = makeStyles(
    {
        displayPicture:
        {
            width:50,
            height:50,
            borderRadius:'50%',
            padding:'0 14px'
        },
        component:
        {
            display:'flex',
            height:40,
            padding:'13px 0',
            cursor:'pointer'
        },
        timeStamp:
        {
            fontSize:12,
            marginLeft:'auto',
            marginRight: 20,
            color:'#00000099'
        },
        text:
        {
            color:'rgba(0,0,0,0.6)',
            fontSize:14
        }
    }
)

const Convo = ({user})=>
{
    const classes = useStyles();
    const url = user.imageUrl;

    const { account,newMessageFlag } = useContext(AccountContext);
    const { setPerson } = useContext(UserContext);

    const [message,setMessage] = useState({});
    const [update,setUpdate] = useState(false);
    useEffect(()=>
    {
        setUpdate(prev =>!prev)
    },[newMessageFlag])

    useEffect(()=>
    {
        const getConversationMessage = async ()=>
        {
            const data = await getConversation({ sender: account.googleId,receiver: user.googleId});
            data &&
            setMessage({text : data.message ,timeStamp: data.updatedAt });
        
        }
        getConversationMessage();
    },[update])

    const setUser = async ()=>
    {
        setPerson(user);
       await  setConversation({senderId: account.googleId , receiverId:user.googleId })
    }
    
    const getTime = (time) => {
        return time < 10 ? '0' + time : time; 
    } 
    return(
<Box className={classes.component} onClick={()=>setUser()}>
    <Box>
        <img src={url} alt ="display pic" className={classes.displayPicture}/>
    </Box>
    <Box style={{width:'100%'}}>
        <Box style={{display:'flex'}}>
            <Typography>
                {user.name}
            </Typography>
            {
                message.text &&
            <Typography className={classes.timeStamp}>
             {new Date().toJSON().slice(0,10).replace(/-/g,'/') === new Date(message.timeStamp).toJSON().slice(0,10).replace(/-/g,'/')? 'today' : new Date(message.timeStamp).toJSON().slice(0,10).replace(/-/g,'/')}
            </Typography>
}
        </Box>
        <Box>
            <Typography className={classes.text}>
                {message.text}
            </Typography>
        </Box>
    </Box>
</Box>
    )
}

export default Convo;