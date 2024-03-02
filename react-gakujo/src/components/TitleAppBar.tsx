import { Settings } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MainLocalStorageData } from './FixedBottomNavigation';

interface TitleAppBarProps {
    title: string;
}

export default function TitleAppBar({ title }: TitleAppBarProps) {
    const color = MainLocalStorageData.getColor().getPrimaryColor();

    return (
        <AppBar position="static" sx={{ background: color }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <Settings />
                </IconButton>
            </Toolbar>
        </AppBar >
    );
}