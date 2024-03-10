import { ArrowBack } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface TitleAppBarProps {
    title: string;
    primaryColor: string;
    fontColor: string;
    handleBackButton: () => void;
    isSubPage: boolean;
}

export default function TitleAppBar({
    title,
    primaryColor,
    fontColor,
    handleBackButton,
    isSubPage,
}: TitleAppBarProps) {
    return (
        <AppBar
            position="static"
            sx={{ color: fontColor, background: primaryColor }}
        >
            <Toolbar>
                {isSubPage && (
                    <IconButton onClick={() => handleBackButton()}>
                        <ArrowBack style={{ color: fontColor }} />
                    </IconButton>
                )}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
