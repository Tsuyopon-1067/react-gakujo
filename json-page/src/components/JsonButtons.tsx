import { Button, Grid } from "@mui/material";
import styles from "./JsonButtons.module.css";

export interface JsonButtonsProps {
    data: JsonButtonData;
}

export interface JsonButtonData {
    name: string;
    data1: string;
    data2: string;
}

function JsonButtons({ data }: JsonButtonsProps) {
    const { name, data1, data2 } = data;

    const fetchDataAndCopyToClipboard = async (jsonData: string) => {
        try {
            await navigator.clipboard.writeText(jsonData);
        } catch (error) {
            console.error(
                "データの取得やクリップボードへのコピー中にエラーが発生しました:",
                error
            );
        }
    };
    interface JsonButtonProps {
        name: string;
        data: string;
    }
    const JsonButton = ({ name, data }: JsonButtonProps) => {
        return (
            <Grid item xs={4}>
                <Button
                    variant="contained"
                    disabled={data === ""}
                    onClick={() => fetchDataAndCopyToClipboard(data)}
                >
                    <h3 className={styles.h3}>{name}</h3>
                </Button>
            </Grid>
        );
    };

    return (
        <>
            <Grid item xs={4}>
                <div className={styles.title_div}>
                    <h3 className={styles.h3}>{name}</h3>
                </div>
            </Grid>
            <JsonButton name={"前期"} data={data1} />
            <JsonButton name={"後期"} data={data2} />
        </>
    );
}

export default JsonButtons;
