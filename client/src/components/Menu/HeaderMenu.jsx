import { useState,useContext } from 'react'
import { MoreVert } from '@material-ui/icons'
import {Menu,MenuItem,makeStyles} from '@material-ui/core'
import { GoogleLogout } from 'react-google-login'
import { clientId } from '../../constants/data'

import { AccountContext } from '../../context/AccountProvider'
import InfoDrawer from '../drawer/InfoDrawer'

const useStyles = makeStyles(
    {
        menuItem:
        {
fontSize:14,
padding:'15px 60px 5px 24px',
color:'4A4A4A'
        },
        logout:
        {
            border:'none!important',
            boxShadow:'none!important',
            '& >*':
            {
                padding:'0px!important'
            }
        }
    }
)

const HeaderMenu = ()=>
{
    const [open,setOpen] = useState(false)
    const [openDrawer,setOpenDrawer] = useState(false);
    const { setAccount } = useContext(AccountContext);
    const classes = useStyles();
    const toggleDrawer = ()=>
{
setOpenDrawer(true);
}

    const handleClose = ()=>
    {
        setOpen(false);
    }

    const handleClick =(event)=>
    {
        setOpen(event.currentTarget);
    }

    const onLogoutSuccess = ()=>
    {
        alert('you have successfully loged out')
        console.clear();
        setAccount('');
    }
      return(
<>
    <MoreVert onClick={handleClick}/>
    <Menu
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
        >
        <MenuItem onClick={()=>{ handleClose();toggleDrawer()}} className = { classes.menuItem}>Profile</MenuItem>
        <MenuItem onClick={handleClose} className = { classes.menuItem}>
<GoogleLogout
 clientId={clientId}
 buttonText="Logout"
 onLogoutSuccess={onLogoutSuccess}
 className={ classes.logout}
>

</GoogleLogout>

        </MenuItem>
        
    </Menu> 
    <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
 </>
    )
}

export default HeaderMenu