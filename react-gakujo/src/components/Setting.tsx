import { ArrowBack, ContentPaste, Input, RestartAlt } from "@mui/icons-material";
import { AppBar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, TextField, Toolbar, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { ColorSettings } from "../types";
import { ContextApp, MainLocalStorageData } from "./FixedBottomNavigation";
import styles from "./Setting.module.css";
import { ColorSettingsProps } from "./WindowSwitcher";

interface SettingAppBarProps {
    setIsSetting: (value: boolean) => void;
    colorSettingsProps: ColorSettingsProps;
}

function SettingAppBar({ setIsSetting, colorSettingsProps }: SettingAppBarProps) {
    const primaryColor = colorSettingsProps.primaryColor;
    const fontColor = colorSettingsProps.fontColor;

    return (
        <AppBar position="static" sx={{ color: fontColor, background: primaryColor }}>
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
    data: string;
    primaryColor: string;
    primaryColorHover: string;
    fontColor: string;
}

function AlertDialog({ data, primaryColor, primaryColorHover, fontColor }: ImportDataProps) {
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
                fullWidth sx={{ marginBottom: 2, color: fontColor, background: primaryColor, ":hover": { background: primaryColorHover } }}
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
    setPrimaryColor: (value: string) => void;
    setFontColor: (value: string) => void;
}

function ResetButton({ primaryColor, setPrimaryColor, setFontColor }: ResetButtonProps) {
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
        setPrimaryColor(MainLocalStorageData.getColor().getPrimaryColor());
        setFontColor(MainLocalStorageData.getColor().getFontColor());
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

interface ColorInputProps {
    color: string;
    setColor: (s: string) => void;
    handleConfirmColor: () => void;
}

function ColorInput({ color, setColor, handleConfirmColor }: ColorInputProps) {
    return (
        <div className={styles.color_div}>
            <div className={styles.color_pallet_area} >
                <input
                    type="color"
                    className={styles.color_input}
                    value={color}
                    onChange={(e) => {
                        setColor(e.target.value);
                    }}
                />
            </div>
            <div className={styles.color_pallet_text}>
                <TextField
                    label="カラーコード"
                    variant="standard"
                    fullWidth
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </div>
            <Button sx={{ gridColumn: 3 }}
                onClick={handleConfirmColor}>適用</Button>
        </div>
    );
}

function Setting({ setIsSetting, colorSettingsProps }: SettingAppBarProps) {
    const jsonStringData = MainLocalStorageData.toJsonString();
    const [inputJsonStringData, setInputJsonStringData] = useState("");
    const [selectedPrimaryColor, setSelectedPrimaryColor] = useState<string>(colorSettingsProps.primaryColor);
    const storageColorHover = MainLocalStorageData.getColor().getPrimaryColorHover();
    const [primaryColorHover, setPrimaryColorHover] = useState<string>(storageColorHover);
    const [selectedFontColor, setSelectedFontColor] = useState<string>(colorSettingsProps.fontColor);

    const [, setter] = useContext(ContextApp);

    const handleConfirmColor = () => {
        const newColor = new ColorSettings(selectedPrimaryColor, selectedFontColor);
        MainLocalStorageData.setColor(newColor);
        MainLocalStorageData.saveData();
        MainLocalStorageData.loadData();
        setter(MainLocalStorageData.getUniTable());
        colorSettingsProps.setPrimaryColor(newColor.getPrimaryColor());
        setPrimaryColorHover(newColor.getPrimaryColorHover());
        colorSettingsProps.setFontColor(newColor.getFontColor());
    }

    const handleToClipBoard = async () => {
        await navigator.clipboard.writeText(jsonStringData);
    }

    return (
        <div className={styles.main_div}>
            <SettingAppBar
                setIsSetting={setIsSetting}
                colorSettingsProps={colorSettingsProps} />
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
                    primaryColor={colorSettingsProps.primaryColor}
                    primaryColorHover={primaryColorHover}
                    fontColor={colorSettingsProps.fontColor}
                />
                <h3>エクスポート</h3>
                <Button
                    variant="contained"
                    fullWidth sx={{ color: colorSettingsProps.fontColor, background: colorSettingsProps.primaryColor, marginBottom: 4, ":hover": { background: primaryColorHover } }}
                    onClick={handleToClipBoard}
                >
                    <ContentPaste /><span className={styles.clipboard_caption}>設定をクリップボードにコピー</span>
                </Button>
                <Divider />
                <h2>カラー</h2>
                <h3>テーマカラー</h3>
                <ColorInput color={selectedPrimaryColor} setColor={setSelectedPrimaryColor} handleConfirmColor={handleConfirmColor} />
                <h3>フォントカラー</h3>
                <ColorInput color={selectedFontColor} setColor={setSelectedFontColor} handleConfirmColor={handleConfirmColor} />
                <Divider />
                <h2>リセット</h2>
                <ResetButton
                    primaryColor={colorSettingsProps.primaryColor}
                    setPrimaryColor={(color: string) => { colorSettingsProps.setPrimaryColor(color); setSelectedPrimaryColor(color) }}
                    setFontColor={(color: string) => { colorSettingsProps.setFontColor(color); setSelectedFontColor(color) }} />
            </div>
        </div>
    );
}

export default Setting;
