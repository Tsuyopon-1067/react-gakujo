import { Settings } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface TitleAppBarProps {
    title: string;
    setIsSetting: (value: boolean) => void;
    primaryColor: string;
    fontColor: string;
}

export default function TitleAppBar({ title, setIsSetting, primaryColor, fontColor }: TitleAppBarProps) {

    return (
        <AppBar position="static" sx={{ color: fontColor, background: primaryColor }}>
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
                    onClick={() => setIsSetting(true)}
                >
                    <Settings />
                </IconButton>
            </Toolbar>
        </AppBar >
    );
}