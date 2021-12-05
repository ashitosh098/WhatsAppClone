import { useContext } from 'react';
import { Dialog,withStyles,Box,makeStyles} from '@material-ui/core';

import { UserContext } from '../context/UserProvider';

//component

import Menu from './Menu/Menu';
import Chat from './chat/Chat';
import EmptyChat from './chat/EmptyChat';
const useStyle = makeStyles(
    {
        component:
        {
            display:'flex'
        },
        leftComponent:
        {
            minWidth: 380
        },
        rightComponent:
        {
            borderLeft:'1px solid rgba(0,0,0,0.14)',
            width:'73%',
            minWidth:300,
            height:'100%'
        }
    }
)


const style = 
{
    dialogPaper:
    {
        height:'95%',
        width:'91%',
        boxShadow:'none',
        borderRadius:'0px',
        maxHeight:'100%',
        maxWidth:'100%',
        overflow:'hidden'
    }
}



const ChatBox = ({ classes })=>
{

    const className = useStyle();
    const { person } = useContext(UserContext);
    return (
        <Dialog 
        open={true}
        classes={{paper:classes.dialogPaper}}
        BackdropProps ={{style :{backgroundColor:'unset'}}}
        >
            <Box className={ className.component}>
            <Box className={className.leftComponent}>
<Menu/>
            </Box>
            <Box className={className.rightComponent}>
                {
                    Object.keys(person).length ? <Chat/> :<EmptyChat/>
                }
              
            </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(style)(ChatBox);