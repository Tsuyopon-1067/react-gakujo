import { Button } from "@mui/material";
import { useState } from "react";
import styles from "./KraepelinPage.module.css";

interface NumPadProps {
    onClick: (n: number) => void;
}
const NumPad = ({ onClick }: NumPadProps) => {
    return (
        <div className={styles.num_pad_div}>
            <Button className={styles.num_pad_button_0} onClick={() => onClick(0)} variant="contained">0</Button>
            <Button className={styles.num_pad_button_1} onClick={() => onClick(1)} variant="contained"> 1</Button >
            <Button className={styles.num_pad_button_2} onClick={() => onClick(2)} variant="contained">2</Button>
            <Button className={styles.num_pad_button_3} onClick={() => onClick(3)} variant="contained">3</Button>
            <Button className={styles.num_pad_button_4} onClick={() => onClick(4)} variant="contained">4</Button>
            <Button className={styles.num_pad_button_5} onClick={() => onClick(5)} variant="contained">5</Button>
            <Button className={styles.num_pad_button_6} onClick={() => onClick(6)} variant="contained">6</Button>
            <Button className={styles.num_pad_button_7} onClick={() => onClick(7)} variant="contained">7</Button>
            <Button className={styles.num_pad_button_8} onClick={() => onClick(8)} variant="contained">8</Button>
            <Button className={styles.num_pad_button_9} onClick={() => onClick(9)} variant="contained">9</Button>
        </div >
    );
}
function KraepelinPage() {
    const [currentScore, setCurrentScore] = useState(0);
    return (
        <div className={styles.main_div}>
            <NumPad onClick={(n) => setCurrentScore(currentScore + n)} />
        </div>
    );
}

export default KraepelinPage;