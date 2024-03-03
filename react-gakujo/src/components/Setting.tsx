import { ArrowBack, ContentPaste, Input, RestartAlt } from "@mui/icons-material";
import { AppBar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, TextField, Toolbar, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { ColorSettings } from "../types";
import { ContextApp, MainLocalStorageData } from "./FixedBottomNavigation";
import styles from "./Setting.module.css";

interface SettingAppBarProps {
    setIsSetting: (value: boolean) => void;
}

function SettingAppBar({ setIsSetting }: SettingAppBarProps) {
    const color = MainLocalStorageData.getColor().getPrimaryColor();

    return (
        <AppBar position="static" sx={{ background: color }}>
            <Toolbar sx={{ paddingLeft: 0 }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={() => setIsSetting(false)}
                >
                    <ArrowBack />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    設定
                </Typography>
            </Toolbar>
        </AppBar >
    );
}

interface ImportDataProps {
    primaryColor: string;
    primaryColorHover: string;
    data: string;
}

function AlertDialog({ data, primaryColor, primaryColorHover }: ImportDataProps) {
    const [open, setOpen] = React.useState(false);
    const [, setter] = useContext(ContextApp);

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
                fullWidth sx={{ marginBottom: 2, background: primaryColor, ":hover": { background: primaryColorHover } }}
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

interface ResetButtonProps {
    primaryColor: string;
    setColor: (value: string) => void;
}

function ResetButton({ primaryColor, setColor }: ResetButtonProps) {
    const [open, setOpen] = React.useState(false);
    const [, setter] = useContext(ContextApp);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleReset = () => {
        handleClose();
        MainLocalStorageData.resetData();
        MainLocalStorageData.loadData();
        setter(MainLocalStorageData.getUniTable());
        const newColor = MainLocalStorageData.getColor().getPrimaryColor();
        setColor(newColor);
    }

    return (
        <React.Fragment>
            <Button
                variant="outlined"
                fullWidth sx={{ color: primaryColor, borderColor: primaryColor, marginBottom: 2 }}
                onClick={handleClickOpen}
            >
                <RestartAlt /><span className={styles.clipboard_caption}>リセット</span>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle>
                    リセットしてもよろしいですか？
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        設定データをリセットします。リセット後は元に戻せません。
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>キャンセル</Button>
                    <Button onClick={handleReset} autoFocus>
                        リセット
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}

function Setting({ setIsSetting }: SettingAppBarProps) {
    const jsonStringData = MainLocalStorageData.toJsonString();
    const [inputJsonStringData, setInputJsonStringData] = useState("");
    const color = MainLocalStorageData.getColor().getPrimaryColor();
    const colorHover = MainLocalStorageData.getColor().getPrimaryColorHover();
    const [settingColor, setSettingColor] = useState<string>(color);
    const [primaryColor, setPrimaryColor] = useState<string>(color);
    const [primaryColorHover, setPrimaryColorHover] = useState<string>(colorHover);

    const [, setter] = useContext(ContextApp);

    const handleSetColor = (value: string) => {
        setSettingColor(value);
    }

    const handleCnfirmColor = () => {
        const newColor = new ColorSettings(settingColor);
        MainLocalStorageData.setColor(newColor);
        MainLocalStorageData.saveData();
        MainLocalStorageData.loadData();
        setter(MainLocalStorageData.getUniTable());
        setPrimaryColor(settingColor);
        setPrimaryColorHover(newColor.getPrimaryColorHover());
    }

    const handleToClipBoard = async () => {
        await navigator.clipboard.writeText(jsonStringData);
    }

    return (
        <div className={styles.main_div}>
            <SettingAppBar setIsSetting={setIsSetting} />
            <div className={styles.content_div}>
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
                <AlertDialog
                    data={inputJsonStringData}
                    primaryColor={primaryColor}
                    primaryColorHover={primaryColorHover} />
                <h3>エクスポート</h3>
                <Button
                    variant="contained"
                    fullWidth sx={{ background: primaryColor, marginBottom: 4, ":hover": { background: primaryColorHover } }}
                    onClick={handleToClipBoard}
                >
                    <ContentPaste /><span className={styles.clipboard_caption}>設定をクリップボードにコピー</span>
                </Button>
                <Divider />
                <h2>カラー</h2>
                <div className={styles.color_div}>
                    <div className={styles.color_pallet_area} >
                        <input
                            type="color"
                            className={styles.color_input}
                            value={settingColor}
                            onChange={(e) => {
                                handleSetColor(e.target.value);
                            }}
                        />
                    </div>
                    <div className={styles.color_pallet_text}>
                        <TextField
                            label="カラーコード"
                            variant="standard"
                            fullWidth
                            value={settingColor}
                            onChange={(e) => setSettingColor(e.target.value)}
                        />
                    </div>
                    <Button sx={{ gridColumn: 3 }}
                        onClick={handleCnfirmColor}>適用</Button>
                </div>
                <Divider />
                <h2>リセット</h2>
                <ResetButton
                    primaryColor={primaryColor}
                    setColor={setSettingColor} />
            </div>
        </div>
    );
}

export default Setting;
