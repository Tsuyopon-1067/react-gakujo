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
    const createRandomArray = (n: number): number[] => {
        return Array.from({ length: n }, () => Math.floor(Math.random() * 10));
    }
    const [currentScore, setCurrentScore] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [queryList, setQueryList] = useState(createRandomArray(200));
    const handleOnClick = (n: number) => {
        const digit = (queryList[currentIndex] + queryList[currentIndex + 1]) % 10;
        if (n === digit) {
            setCurrentScore(currentScore + 1);
        }
        const newIndex = (currentIndex + 1) % (queryList.length - 1);
        setCurrentIndex(newIndex);
    }

    interface QueryDisplayProps {
        length: number;
    }

    const QueryDisplay = ({ length }: QueryDisplayProps) => {
        let start = currentIndex - Math.floor(length / 2) + 1;
        let end = start + length - 1;
        if (start < 0) {
            const diff = -start;
            start += diff;
            end += diff;
        }

        const queryLength = queryList.length - 1;
        if (end > queryLength) {
            const diff = end - queryLength;
            start -= diff
            end -= diff;
        }

        const spans = [];
        for (let i = start; i <= end; i++) {
            if (i === currentIndex || i === currentIndex + 1) {
                spans.push(<span key={i} className={`${styles.query_span} ${styles.query_span_current}`}>{queryList[i]}</span>);
            } else {
                spans.push(<span key={i} className={styles.query_span}>{queryList[i]}</span>);
            }
        }

        return (
            <div>
                {spans}
            </div>
        );
    }
    return (
        <div className={styles.main_div}>
            <div className={styles.query_div}>
                <QueryDisplay length={12} />
            </div>
            <NumPad onClick={handleOnClick} />
            {currentScore}- {currentIndex}
        </div>
    );
}

export default KraepelinPage;