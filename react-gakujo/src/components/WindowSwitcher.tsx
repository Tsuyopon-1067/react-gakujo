import { useState } from "react";
import FixedBottomNavigation, { MainLocalStorageData } from "./FixedBottomNavigation";
import Setting from "./Setting";

export interface ColorSettingsProps {
    primaryColor: string;
    setPrimaryColor: (primaryColor: string) => void;
    fontColor: string;
    setFontColor: (fontColor: string) => void;
}

function WindowSwitcher() {
    const [isSetting, setIsSetting] = useState(false);
    const [primaryColor, setPrimaryColor] = useState(MainLocalStorageData.getColor().getPrimaryColor());
    const [fontColor, setFontColor] = useState(MainLocalStorageData.getColor().getFontColor());
    const props: ColorSettingsProps = { primaryColor, setPrimaryColor, fontColor, setFontColor };

    return (
        isSetting ? <Setting setIsSetting={setIsSetting} colorSettingsProps={props} /> : <FixedBottomNavigation setIsSetting={setIsSetting} colorSettingsProps={props} />
    );
}

export default WindowSwitcher;