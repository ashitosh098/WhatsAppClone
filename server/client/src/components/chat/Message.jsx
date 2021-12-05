import { Box, Typography,makeStyles } from "@material-ui/core";
import { useContext } from "react";

import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
    
    own:
    {
        background:'#dcf8c6',
        padding:5,
        maxWidth: '60%',
        width:'fit-content',
        display:'flex',
        borderRadius:10,
        wordBreak:'break-word',
        marginLeft:'auto'
    },
    
    wrapper:
    {
        background:'#ffffff',
        padding: 5,
        maxWidth:'60%',
        display:'flex',
        borderRadius:10,
        width:'fit-content',
        wordBreak:'break-word'
    },
    text:
    {
        fontSize:14,
        padding:'0 25px 0 5px'
    },
    time:
    {
        fontSize:10,
        marginTop:'auto' ,
        marginTop:10,
        color:'#919191',
        wordBreak:'keep-all'
       },
       date:
    {
        fontSize:10,
        marginTop:-4,
        marginRight:-26,
        marginLeft:'auto',
        color:'#919191',
        wordBreak:'keep-all'
       }
})

const Message = ({ message })=>
{
    const classes  = useStyles();

    const { account } = useContext(AccountContext)

    const formatDate = (date)=>
    {
        return date < 10 ? '0' + date: date; 
    }
    return(
      <Box className={account.googleId === message.sender ? classes.own : classes.wrapper}>
          <Typography className={classes.text}>
              {message.text}
          </Typography>
          <Typography className={classes.date}>
              {formatDate(new Date(message.createdAt).getDate())}/{formatDate(new Date(message.createdAt).getMonth()+1)}/{formatDate(new Date(message.createdAt).getFullYear())}
          </Typography>
          <Typography className={classes.time}>
              {formatDate(new Date(message.createdAt).getHours())}:{formatDate(new Date(message.createdAt).getMinutes())}
          </Typography>
      </Box>
    )
}

export default Message;