import { useEffect, useState } from "react";
import styles from "./ClassTimerPage.module.css";

class HourMinuteSecond {
    private hour: number;
    private minute: number;
    private second: number;
    private type: number;
    private period: number;

    constructor(hour: number, minute: number, second: number);
    constructor(
        hour: number,
        minute: number,
        second: number,
        type: number,
        period: number
    );
    constructor(
        hour: number,
        minute: number,
        second: number,
        type?: number,
        period?: number
    ) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.type = type ? type : 0;
        this.period = period ? period : 0;
    }

    public toValue(): number {
        return this.hour * 3600 + this.minute * 60 + this.second;
    }

    public isStart(): boolean {
        return this.type === HourMinuteSecond.TYPE_START;
    }

    public isEnd(): boolean {
        return this.type === HourMinuteSecond.TYPE_END;
    }

    public toString(): string {
        return (
            this.hour.toString().padStart(2, "0") +
            ":" +
            this.minute.toString().padStart(2, "0") +
            ":" +
            this.second.toString().padStart(2, "0")
        );
    }

    public toPeriodString(): string {
        return String(this.period) + "コマ";
    }

    public static fromValue(value: number): HourMinuteSecond {
        return new HourMinuteSecond(
            Math.floor(value / 3600),
            Math.floor((value % 3600) / 60),
            value % 60
        );
    }

    public static readonly TYPE_NORMAL = 0;
    public static readonly TYPE_START = 1;
    public static readonly TYPE_END = 2;
}

const classStartEndTimeList: HourMinuteSecond[] = [
    new HourMinuteSecond(8, 40, 0, HourMinuteSecond.TYPE_START, 1),
    new HourMinuteSecond(10, 10, 0, HourMinuteSecond.TYPE_END, 1),
    new HourMinuteSecond(10, 20, 0, HourMinuteSecond.TYPE_START, 2),
    new HourMinuteSecond(11, 50, 0, HourMinuteSecond.TYPE_END, 2),
    new HourMinuteSecond(12, 45, 0, HourMinuteSecond.TYPE_START, 3),
    new HourMinuteSecond(14, 15, 0, HourMinuteSecond.TYPE_END, 3),
    new HourMinuteSecond(14, 25, 0, HourMinuteSecond.TYPE_START, 4),
    new HourMinuteSecond(15, 55, 0, HourMinuteSecond.TYPE_END, 4),
    new HourMinuteSecond(16, 5, 0, HourMinuteSecond.TYPE_START, 5),
    new HourMinuteSecond(17, 35, 0, HourMinuteSecond.TYPE_END, 5),
];

function ClassTimerPage() {
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [remainingTime, setRemainingTime] = useState<string>("");

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
        const currentTime = new HourMinuteSecond(
            d.getHours(),
            d.getMinutes(),
            d.getSeconds()
        );
        setTime(currentTime.toString());

        const nextClassTime = classStartEndTimeList.find(
            (t) => t.toValue() > currentTime.toValue()
        );
        const nextClassValue = nextClassTime?.toValue() ?? 0;
        const remain = HourMinuteSecond.fromValue(
            nextClassValue - currentTime.toValue()
        );
        let nextClassCaption = "";
        if (nextClassTime?.isStart()) {
            nextClassCaption = "開始";
        } else if (nextClassTime?.isEnd()) {
            nextClassCaption = "終了";
        }
        setRemainingTime(
            `残り${remain.toString()}で${nextClassTime?.toPeriodString()}${nextClassCaption}`
        );
    };
    return (
        <div className={styles.main_div}>
            <p>{date}</p>
            <p>{time}</p>
            <p>{remainingTime}</p>
        </div>
    );
}

export default ClassTimerPage;
