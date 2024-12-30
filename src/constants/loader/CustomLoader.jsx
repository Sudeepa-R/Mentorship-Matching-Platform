import { styled } from '@mui/material/styles';
import { CircularProgress, Typography } from '@mui/material';

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

export default function CustomLoaderWithText({ size, spinnerColor }) {
  return (
    <div>
      <CustomLoader size={size} spinnerColor={spinnerColor} />
      <LoadingText>Loading...</LoadingText>
    </div>
  );
}