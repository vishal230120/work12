import { AppBar , Toolbar,Box, Typography, styled } from '@mui/material';
import CustomeButtons from './CustomeButtons';
import { Public } from '@mui/icons-material';
//import { Image } from '../header/Images/download';

const StyledHeader = styled(AppBar)`
      background: lightviolet;
       height : 68px;
`;

const Component = styled(Box)`
    margin-left: 12%;
    line-height: 1.5;
    
`;

const SubHeading =styled(Typography)`
  font-size: 15px;
  font-style: italic; 
  color: Black;
`;

const CustomeButtonsWrapper = styled(Box)`
  margin: 0 5% 0 auto;
`


const Header = () =>{
 
    const logoURL = ''

   return(
    <>
     <StyledHeader>
        <Toolbar>
       <Component>
               <img src = {'download'} alt = "logo" styled={{ width: 75 }}/>
                <Box>
                  <SubHeading>Job Portal</SubHeading>
                </Box>
       </Component>
 

     <CustomeButtonsWrapper>
        <CustomeButtons />
     </CustomeButtonsWrapper>

        </Toolbar>
     </StyledHeader>
        <AppBar />
     </>
   )
}
export default Header;