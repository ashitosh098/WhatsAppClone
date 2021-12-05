import { Box,makeStyles,Typography } from "@material-ui/core"
import { useContext  } from "react"
import { AccountContext } from "../../context/AccountProvider"

const useStyles = makeStyles(
    {
imageContainer:
{
display:'flex',
justifyContent:'center'
},
displayPicture:
{
height:200,
width:200,
borderRadius:'50%',
padding:'10px 0'
},
nameContainer:
{
    background:'#ffffff',
    padding:'12px 30px',
    boxShadow:'0 1px 3px rgba(0,0,0, 0.08)',
    '& :first-child':
    {
        fontSize: 14,
        color:'#009688'
    },
    '& :last-child':
    {
        color:'#4A4A4A',
        margin:'14px 0'
    }
},
description:
{
   padding:'10px 20px 28px 30px',
   '& >*':
   {
       fontSize:12,
       color:'rgba(0,0,0,0.45)'
   }
}
    }
)

const Profile = ()=>
{
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    return(
<>
<Box className={classes.imageContainer}>
<img src={account.imageUrl} alt='profile picture' className={classes.displayPicture}/>
</Box>
<Box className={classes.nameContainer}>
<Typography>Your name</Typography>
<Typography>{account.name}</Typography>
</Box>
<Box className={classes.description}>
<Typography>
    This is not your pin or username .This name will be visible to your whatsApp contact
</Typography>

</Box>
<Box className={classes.nameContainer}>
<Typography>About</Typography>
<Typography>Hey! let's have a chat</Typography>
</Box>
</>
    )
}

export default Profile