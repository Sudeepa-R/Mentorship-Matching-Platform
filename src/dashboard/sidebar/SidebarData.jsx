import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupIcon from '@mui/icons-material/Group';
import MailIcon from '@mui/icons-material/Mail';
import HelpIcon from '@mui/icons-material/Help';

export const SidebarData = [
  {
    title: 'Home',
    path: '',
    icon: <HomeIcon sx={{ color: '#537786' }} />,
    cName: 'nav-text',
  },
  {
    title: 'Reports',
    path: '',
    icon: <DescriptionIcon sx={{ color: '#537786' }} />,
    cName: 'nav-text',
  },
  {
    title: 'Products',
    path: '',
    icon: <ShoppingCartIcon sx={{ color: '#537786' }} />,
    cName: 'nav-text',
  },
  {
    title: 'Team',
    path: '',
    icon: <GroupIcon sx={{ color: '#537786' }} />,
    cName: 'nav-text',
  },
  {
    title: 'Messages',
    path: '',
    icon: <MailIcon sx={{ color: '#537786' }} />,
    cName: 'nav-text',
  },
  {
    title: 'Support',
    path: '',
    icon: <HelpIcon sx={{ color: '#537786' }} />,
    cName: 'nav-text',
  },
];
