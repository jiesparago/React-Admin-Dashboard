import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material';
import LightModeOutLinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutLinedIcon from '@mui/icons-material/DarkModeOutLined';
import NotificationsOutLinedIcon from '@mui/icons-material/NotificationsOutLined';
import SettingsOutLinedIcon from '@mui/icons-material/SettingsOutLined';
import PersonOutLinedIcon from '@mui/icons-material/PersonOutLined';
import SearchIcon from '@mui/icons-material/Search';



const Topbar = () => {
    const theme = useTheme();
  return (
    <div>Topbar</div>
  )
}

export default Topbar