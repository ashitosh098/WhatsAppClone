import { useContext } from "react";
import { Dialog,withStyles,Box,Typography, ListItem,List,makeStyles } from "@material-ui/core";
import { GoogleLogin } from"react-google-login";
import { clientId } from "../../constants/data";



import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

const useStyle = makeStyles(
    {
            component:
                    {
                      display:'flex'
                    },
            leftComponent:
                    {
                      padding:'56px 0 56px 56px'
                    },
            qrcode:
                    {
                        height:264,
                        width:264,
                        padding:'50px 0px 0px 50px',
                    },
            title:
            {
                fontSize:26,
                marginBottom: 25,
                color:'#525252',
                fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
                fontWeight:300
            },
            list:
                {
                    '& > *':
                    {
                        fontSize:18,
                        padding:0,
                        marginBottom:15,
                        lineHeight:'28px',
                        color:'#4a4a4a'
                    }
                }
    }
)

 
const style = 
{
    dialogPaper:
    {
        height:'95%',
        width:'60%',
        marginTop:'12%',
        boxShadow:'none',
        borderRadius:'0px',
        maxHeight:'100%',
        maxWidth:'100%',
        overflow:'hidden'
    }
}




const Login = ({ classes })=>

{

    const classname = useStyle();
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';


const { account, setAccount } = useContext(AccountContext);

const onLoginSuccess = async (res)=>
{
    console.log("login successfull");
    setAccount(res.profileObj);
    await addUser(res.profileObj);
}

const onLoginFailuer = ()=>
{
console.log("login Failed")
}
    return(
       
        <Dialog
        open={true}
        classes={{paper:classes.dialogPaper}}
        BackdropProps={{style: { backgroundColor:'unset'}}}
        >
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>

                    <Typography className={classname.title}>To use this  WhatsApp-Clone On Your Computer</Typography>
                    <List className={classname.list}>
                        <ListItem>
                            1.Click on Google icon and sign in with your gmail id
                        </ListItem>
                        <ListItem>
                            2.Now you can chat with any user of this WhatsApp-Clone
                        </ListItem>
                        <ListItem>
                            3.This WhatsApp-Clone is a real-time chatting website
                        </ListItem>
                    </List>
                    </Box>
                    <Box style={{position: 'relative'}}>
                        <img src={qrurl} alt='QR' className ={classname.qrcode}/>
                        <Box style={{position: "absolute", left:"50%", top:'50%'}}>
                        <GoogleLogin
                        clientId={clientId}
                        cookiePolicy={'single_host_origin'}
                        buttonText=""
                        isSignedIn={true}
                        onSuccess={onLoginSuccess}
                        onFailuer={onLoginFailuer}
                        />
                        </Box>
                        </Box>
            </Box>
            
        </Dialog>
    )
}
export default withStyles(style)(Login);