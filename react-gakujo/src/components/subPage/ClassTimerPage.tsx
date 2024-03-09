import { useEffect, useState } from "react";
import styles from "./ClassTimerPage.module.css";

function ClassTimerPage() {
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const intervalId = setInterval(updateTimer, 200);
        return () => clearInterval(intervalId);
    }, []);

    const updateTimer = () => {
        const d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const day = d.getDate();
        const dayOfWeek = d.getDay();
        const weekday: string[] = ["日", "月", "火", "水", "木", "金", "土"];
        setDate(
            year +
                "年" +
                month +
                "月" +
                day +
                "日" +
                "[" +
                weekday[dayOfWeek] +
                "]"
        );
        const hour = d.getHours().toString().padStart(2, "0");
        const minute = d.getMinutes().toString().padStart(2, "0");
        const seconds = d.getSeconds().toString().padStart(2, "0");
        setTime(hour + ":" + minute + ":" + seconds);
    };

    return (
        <div className={styles.main_div}>
            <p>
                {date} <span>{time}</span>
            </p>
        </div>
    );
}

export default ClassTimerPage;
