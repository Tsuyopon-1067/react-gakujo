import { useState } from "react";
import FixedBottomNavigation from "./FixedBottomNavigation";
import Setting from "./Setting";

function WindowSwitcher() {
    const [isSetting, setIsSetting] = useState(false);
    return (
        isSetting ? <Setting setIsSetting={setIsSetting} /> : <FixedBottomNavigation setIsSetting={setIsSetting} />
    );
}

export default WindowSwitcher;