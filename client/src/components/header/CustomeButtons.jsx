
import { Box, Button, Typography, styled } from '@mui/material';




const Wrapper = styled(Box)`
    display: flex;
     margin: 0% 8% 0 auto; 
      margin-left: 40px;
     & > button, & > p, & > div{
      margin-right: 40px:
        font-size: 18px;
        align-items: center;
     }
`;
const Container = styled(Box)`
display : flex;
`;
 const LoginButtons = styled(Button)`
 color: #2874f0;
 background: #ffffff;
 text-transform: none;
 padding:5px 40px;
 border-radius:4px;
 box-shadow: none;
 font-weight: 600;
 height: 32px;
 ` 


const CustomeButtons = () =>  {
    return (
        <Wrapper> 
            

            <Typography style ={ { marginTop: 5, marginLeft:15, width: 135} }>Jobs</Typography>
            <Typography style = {{ marginTop: 5,  marginLeft:15,width: 135} }>Companies</Typography>
            <Typography style = {{ marginTop: 5,  marginLeft:15,width: 135} }>Services</Typography>
             
            
            <Typography style ={ { marginTop: 5, marginLeft:15, width: 135} }>Recuriters</Typography>
            <Typography style = {{ marginTop: 5,  marginLeft:15,width: 135} }>Your Profile</Typography>



            <LoginButtons variant="contained" style ={{marginTop:4 , marginLeft:50,marginRight:15}}>Login </LoginButtons>
            
          


        </Wrapper>
    )
}
export default CustomeButtons;