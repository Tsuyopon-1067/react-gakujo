import { Settings } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface TitleAppBarProps {
    title: string;
    primaryColor: string;
    fontColor: string;
}

export default function TitleAppBar({
    title,
    primaryColor,
    fontColor,
}: TitleAppBarProps) {
    return (
        <AppBar
            position="static"
            sx={{ color: fontColor, background: primaryColor }}
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
