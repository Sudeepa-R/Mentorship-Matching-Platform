import { styled } from '@mui/material/styles';
import { CircularProgress, Dialog, DialogContent, Typography } from '@mui/material';

export const CustomLoader = styled(CircularProgress)(({ size, spinnerColor }) => {
  const sizes = {
    small: '20px',
    medium: '40px',
    large: '60px',
  };
  return {
    width: sizes[size] || '40px',
    height: sizes[size] || '40px',
    color: spinnerColor,
  };
});

const LoadingText = styled(Typography)({
  marginTop: '10px',
  color: 'text.primary',
});

export default function CustomLoaderWithText({ size, spinnerColor, ...otherProps }) {
  return (
    <div style={{height:"100vh" , width:"100vw" , display:"flex" , justifyContent:"center" , alignItems:"center", flexDirection:"column", position: 'relative'}} {...otherProps}>
      <CustomLoader size={size} spinnerColor={spinnerColor} />
      <LoadingText>Loading...</LoadingText>
    </div>
  );
}

export const CircularProgressComponent = ({loading}) => {
  return(
    <Dialog open={loading}>
          <DialogContent>
            <CircularProgress />
          </DialogContent>
        </Dialog>
  )
}