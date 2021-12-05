
import {AppBar,Toolbar,makeStyles,Box} from '@material-ui/core'
import React, { useContext } from 'react';

import { AccountContext } from '../context/AccountProvider';


//components
import Login from './account/Login';
import ChatBox from './ChatBox';
const useStyle = makeStyles({
component:
{
background:'#DCDCDC',
height:'100vh'
},
    loginHeader:
{
height:200,
background:'#00bfa5',
boxShadow:'none'

},
header:
{
height:115,
background:'#128C7E',
boxShadow:'none'

}
})

const Messenger = ()=>
{

const classes = useStyle();

const { account } = useContext(AccountContext);
    return(
        <Box className={classes.component}>
       <React.Fragment> 
     <AppBar className={account ? classes.header : classes.loginHeader}>
         <Toolbar></Toolbar>
     </AppBar>
     { account ? <ChatBox/> : <Login/>}
     </React.Fragment>
     </Box>
    
    )
}
export default Messenger;