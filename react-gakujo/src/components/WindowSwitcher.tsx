import { useState } from "react";
import FixedBottomNavigation, {
    MainLocalStorageData,
} from "./FixedBottomNavigation";

export interface ColorSettingsProps {
    primaryColor: string;
    setPrimaryColor: (primaryColor: string) => void;
    fontColor: string;
    setFontColor: (fontColor: string) => void;
    primaryColorHover: string;
    setPrimaryHover: (primaryHover: string) => void;
}

function WindowSwitcher() {
    const [primaryColor, setPrimaryColor] = useState(
        MainLocalStorageData.getColor().getPrimaryColor()
    );
    const [primaryColorHover, setPrimaryHover] = useState(
        MainLocalStorageData.getColor().getPrimaryColorHover()
    );
    const [fontColor, setFontColor] = useState(
        MainLocalStorageData.getColor().getFontColor()
    );
    const props: ColorSettingsProps = {
        primaryColor,
        setPrimaryColor,
        fontColor,
        setFontColor,
        primaryColorHover,
        setPrimaryHover,
    };

    return <FixedBottomNavigation colorSettingsProps={props} />;
}

export default WindowSwitcher;
