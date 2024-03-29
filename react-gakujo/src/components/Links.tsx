import {
    Business,
    Egg,
    IntegrationInstructions,
    MenuBook,
    Restaurant,
    TextSnippet,
    Web,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { CSSProperties } from "react";
import styles from "./Links.module.css";
import { ColorSettingsProps } from "./WindowSwitcher";

interface PropsType {
    style?: CSSProperties;
    color?: string;
}

const GakujoIcon = (props: PropsType) => {
    return (
        <svg
            width="37.078"
            height="30.295"
            viewBox="0 0 9.81 8.016"
            xmlns="http://www.w3.org/2000/svg"
            style={props.style ? props.style : undefined}
        >
            <path
                d="M.138 6.39h-5.276v5.276H.138zm-2.246 6.851-3.954 3.954.48.48 3.954-3.954zm-.76-.348h-3.498V9.49l-2.914 2.914v3.403h3.497z"
                transform="scale(1.27979 .60179) rotate(-45 -5.779 -1.142)"
            />
        </svg>
    );
};

interface LinkButtonProps {
    title: string | JSX.Element;
    href: string;
    icon: JSX.Element;
    colorSettings: ColorSettingsProps;
}

const LinkButton = ({ title, href, icon, colorSettings }: LinkButtonProps) => {
    const { primaryColor, primaryColorHover, fontColor } = colorSettings;
    return (
        <Button
            variant="contained"
            fullWidth
            sx={{
                backgroundColor: primaryColor,
                ":hover": { background: primaryColorHover },
                height: "100%",
            }}
            href={href}
        >
            <div className={styles.link_button_div}>
                <p className={styles.link_button_icon_p}>{icon}</p>
                <div className={styles.link_button_caption_area}>
                    <p
                        className={styles.link_button_caption}
                        style={{ color: fontColor }}
                    >
                        {title}
                    </p>
                </div>
            </div>
        </Button>
    );
};

interface WrapedLinkButtonProps {
    colorSettings: ColorSettingsProps;
}

const fontSize = 110;

const GakujoButton = ({ colorSettings }: WrapedLinkButtonProps) => (
    <LinkButton
        title=<>
            <span className={styles.gakujo_button_caption_span}>学務情報</span>
            <span className={styles.gakujo_button_caption_span}>システム</span>
        </>
        href="https://gakujo.shizuoka.ac.jp/portal/"
        icon={
            <GakujoIcon
                style={{
                    fill: "#00000088",
                    width: fontSize,
                    height: fontSize,
                }}
            />
        }
        colorSettings={colorSettings}
    />
);

const AcademicAffairsButton = ({ colorSettings }: WrapedLinkButtonProps) => (
    <LinkButton
        title="教務システム"
        href="https://gakujo.shizuoka.ac.jp/kyoumu/sso/loginStudent.do"
        icon={<Business sx={{ fontSize: fontSize }} color="action" />}
        colorSettings={colorSettings}
    />
);

const OpacButton = ({ colorSettings }: WrapedLinkButtonProps) => (
    <LinkButton
        title="OPAC"
        href="https://opac.lib.shizuoka.ac.jp/simple/"
        icon={<MenuBook sx={{ fontSize: fontSize }} color="action" />}
        colorSettings={colorSettings}
    />
);

const HandBookButton = ({ colorSettings }: WrapedLinkButtonProps) => (
    <LinkButton
        title="学生便覧"
        href="https://www.shizuoka.ac.jp/education/affairs/handbook/"
        icon={<TextSnippet sx={{ fontSize: fontSize }} color="action" />}
        colorSettings={colorSettings}
    />
);

const HamaXButton = ({ colorSettings }: WrapedLinkButtonProps) => (
    <LinkButton
        title="生協（浜松）X"
        href="https://x.com/hama_coop"
        icon={<Egg sx={{ fontSize: fontSize }} color="action" />}
        colorSettings={colorSettings}
    />
);

const OfficialSiteButton = ({ colorSettings }: WrapedLinkButtonProps) => (
    <LinkButton
        title="静岡大学公式サイト"
        href="https://www.shizuoka.ac.jp/"
        icon={<Web sx={{ fontSize: fontSize }} color="action" />}
        colorSettings={colorSettings}
    />
);

const SawayakaButton = ({ colorSettings }: WrapedLinkButtonProps) => (
    <LinkButton
        title="さわやか和合店待ち時間"
        href="https://www.genkotsu-hb.com/shop/wago.php"
        icon={<Restaurant sx={{ fontSize: fontSize }} color="action" />}
        colorSettings={colorSettings}
    />
);

const JsonCopyButton = ({ colorSettings }: WrapedLinkButtonProps) => (
    <LinkButton
        title="設定データコピー"
        href="https://tsuyopon-1067.github.io/react-gakujo/jsonCopy.html"
        icon={
            <IntegrationInstructions
                sx={{ fontSize: fontSize }}
                color="action"
            />
        }
        colorSettings={colorSettings}
    />
);

export {
    AcademicAffairsButton,
    GakujoButton,
    HamaXButton,
    HandBookButton,
    JsonCopyButton,
    OfficialSiteButton,
    OpacButton,
    SawayakaButton,
};
