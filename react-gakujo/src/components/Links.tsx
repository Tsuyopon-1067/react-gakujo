import { MenuBook, TextSnippet } from "@mui/icons-material";
import { Button } from "@mui/material";
import { CSSProperties } from "react";
import { MainLocalStorageData } from "./FixedBottomNavigation";
import styles from "./Links.module.css";

interface PropsType {
    style?: CSSProperties;
    color?: string;
}

const GakujoIcon = (props: PropsType) => {
    return (
        <svg width="37.078" height="30.295" viewBox="0 0 9.81 8.016" xmlns="http://www.w3.org/2000/svg" style={props.style ? props.style : undefined}>
            <path d="M.138 6.39h-5.276v5.276H.138zm-2.246 6.851-3.954 3.954.48.48 3.954-3.954zm-.76-.348h-3.498V9.49l-2.914 2.914v3.403h3.497z" transform="scale(1.27979 .60179) rotate(-45 -5.779 -1.142)" />
        </svg>
    )
}

interface LinkButtonProps {
    title: string;
    href: string;
    icon: JSX.Element;
    primaryColor: string;
    primaryColorHover: string;
    fontColor: string;
}

const LinkButton = ({ title, href, icon, primaryColor, primaryColorHover, fontColor }: LinkButtonProps) => (
    <Button variant="contained" fullWidth sx={{ marginTop: 1, marginBottom: 1, backgroundColor: primaryColor, ":hover": { background: primaryColorHover } }} href={href}>
        <div>
            {icon}
            <p className={styles.caption} style={{ color: fontColor }}>
                {title}
            </p>
        </div>
    </Button>
)

function Links() {
    const primaryColor = MainLocalStorageData.getColor().getPrimaryColor();
    const primaryColorHover = MainLocalStorageData.getColor().getPrimaryColorHover();
    const fontColor = MainLocalStorageData.getColor().getFontColor();
    return (
        <div className={styles.main_div}>
            <LinkButton
                title="学務情報システム"
                href="https://gakujo.shizuoka.ac.jp/portal/"
                icon={<GakujoIcon style={{ fill: "#00000088", width: 180, height: 180, marginTop: 16, marginBottom: -16 }} />}
                primaryColor={primaryColor}
                primaryColorHover={primaryColorHover}
                fontColor={fontColor} />
            <LinkButton
                title="OPAC"
                href="https://opac.lib.shizuoka.ac.jp/simple/"
                icon={<MenuBook sx={{ fontSize: 180 }} color="action" />}
                primaryColor={primaryColor}
                primaryColorHover={primaryColorHover}
                fontColor={fontColor} />
            <LinkButton
                title="学生便覧"
                href="https://www.shizuoka.ac.jp/education/affairs/handbook/"
                icon={<TextSnippet sx={{ fontSize: 180 }} color="action" />}
                primaryColor={primaryColor}
                primaryColorHover={primaryColorHover}
                fontColor={fontColor} />
        </div>
    );
}

export default Links;