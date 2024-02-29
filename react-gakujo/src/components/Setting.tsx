import { ContentPaste, Input } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { ContextApp, MainLocalStorageData } from "./FixedBottomNavigation";
import styles from "./Setting.module.css";

interface ImportDataProps {
    data: string;
}

function AlertDialog({ data }: ImportDataProps) {
    const [open, setOpen] = React.useState(false);
    const [_, setter] = useContext(ContextApp);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleImport = () => {
        handleClose();
        MainLocalStorageData.saveDataFromJson(data);
        MainLocalStorageData.loadData();
        setter(MainLocalStorageData.getUniTable());
    }

    return (
        <React.Fragment>
            <Button
                variant="contained"
                fullWidth sx={{ backgroundColor: "#04CBB0", marginBottom: 2 }}
                onClick={handleClickOpen}
            >
                <Input /><span className={styles.clipboard_caption}>設定をインポート</span>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>
                    設定データをインポートしてもよろしいですか？
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        入力した設定データをインポートします。現在の設定データは上書きされます。
                        不正な設定データを読み込んだ場合，異常終了する場合があります．
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>キャンセル</Button>
                    <Button onClick={handleImport} autoFocus>
                        インポート
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

function Setting() {
    const jsonStringData = MainLocalStorageData.toJsonString();
    const [inputJsonStringData, setInputJsonStringData] = useState("");

    const handleToClipBoard = async () => {
        await navigator.clipboard.writeText(jsonStringData);
    }

    return (
        <div className={styles.main_div}>
            <h1>Setting</h1>
            <h2>インポート / エクスポート </h2>
            <h3>インポート</h3>
            <TextField
                label="設定データをここにペーストしてください"
                multiline
                fullWidth
                rows={8}
                sx={{ marginBottom: 2 }}
                onChange={(e) => setInputJsonStringData(e.target.value)}
            />
            <AlertDialog data={inputJsonStringData} />
            <h3>エクスポート</h3>
            <Button
                variant="contained"
                fullWidth sx={{ backgroundColor: "#04CBB0" }}
                onClick={handleToClipBoard}
            >
                <ContentPaste /><span className={styles.clipboard_caption}>設定をクリップボードにコピー</span>
            </Button>
        </div>
    );
}

export default Setting;
