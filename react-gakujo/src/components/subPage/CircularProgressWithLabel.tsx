import Box from "@mui/material/Box";
import CircularProgress, {
    CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { ColorSettingsProps } from "../WindowSwitcher";

export default function CircularProgressWithLabel(
    props: CircularProgressProps & {
        value: number;
        colorSettings: ColorSettingsProps;
    }
) {
    return (
        <Box
            sx={{ position: "relative", display: "inline-flex", width: "100%" }}
        >
            <CircularProgress
                variant="determinate"
                {...props}
                size={"100%"}
                sx={{ color: props.colorSettings.primaryColor }}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                    fontSize={48}
                >{`${props.value.toFixed(2)}%`}</Typography>
            </Box>
        </Box>
    );
}
