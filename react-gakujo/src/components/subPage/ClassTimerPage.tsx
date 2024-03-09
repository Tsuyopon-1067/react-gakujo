import { useEffect, useState } from "react";
import styles from "./ClassTimerPage.module.css";
import CircularWithValueLabel from "./CircularProgressWithLabel";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import { ColorSettingsProps } from "../WindowSwitcher";
import { Step, StepButton, Stepper } from "@mui/material";

class HourMinuteSecond {
    private hour: number;
    private minute: number;
    private second: number;
    private type: number;
    private period: number;
    private milisecond: number;

    constructor(
        hour: number,
        minute: number,
        second: number,
        type: number,
        period: number
    ) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.type = type;
        this.period = period;
        this.milisecond = 0;
    }

    public toValue(): number {
        return (
            (this.hour * 3600 + this.minute * 60 + this.second) * 1000 +
            this.milisecond
        );
    }

    public isStart(): boolean {
        return this.type === HourMinuteSecond.TYPE_START;
    }

    public isEnd(): boolean {
        return this.type === HourMinuteSecond.TYPE_END;
    }

    public getPriod(): number {
        return this.period;
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

    public toStringWithMilisecond(): string {
        return (
            this.hour.toString().padStart(2, "0") +
            ":" +
            this.minute.toString().padStart(2, "0") +
            ":" +
            this.second.toString().padStart(2, "0") +
            "." +
            this.milisecond.toString().padStart(3, "0")
        );
    }

    public toPeriodString(): string {
        return String(this.period) + "コマ";
    }

    public static fromValue(value: number): HourMinuteSecond {
        const valueSecond = Math.floor(value / 1000);
        const res = new HourMinuteSecond(
            Math.floor(valueSecond / 3600),
            Math.floor((valueSecond % 3600) / 60),
            valueSecond % 60,
            HourMinuteSecond.TYPE_NORMAL,
            0
        );
        res.setMilisecond(value % 1000);
        return res;
    }

    public static fromDate(date: Date): HourMinuteSecond {
        const res = new HourMinuteSecond(
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            HourMinuteSecond.TYPE_NORMAL,
            0
        );
        res.setMilisecond(date.getMilliseconds());
        return res;
    }

    private setMilisecond(milisecond: number): void {
        this.milisecond = milisecond;
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
    new HourMinuteSecond(8 + 24, 40, 0, HourMinuteSecond.TYPE_NORMAL, 1),
];

interface CircularProgressWithLabelProps {
    colorsettings: ColorSettingsProps;
}

function ClassTimerPage({ colorsettings }: CircularProgressWithLabelProps) {
    const [date, setDate] = useState<string>("");
    const [time, setTime] = useState<string>("");
    const [remainingTime, setRemainingTime] = useState<string>("");
    const [ratio, setRatio] = useState<number>(0);

    const steps = [...Array(5)].map((_, i) => (i + 1).toString() + "コマ");
    const [activeStep, setActiveStep] = useState(-1);
    const [completed, setCompleted] = useState(steps.map(() => false));

    useEffect(() => {
        const intervalId = setInterval(updateTimer, 50);
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
        const currentTime = HourMinuteSecond.fromDate(d);
        setTime(currentTime.toString());

        const nextClassTime = classStartEndTimeList.find(
            (t) => t.toValue() > currentTime.toValue()
        );
        const nextClassValue = nextClassTime?.toValue() ?? 0;
        const remain = HourMinuteSecond.fromValue(
            nextClassValue - currentTime.toValue()
        );
        let nextClassCaption = "";
        let maxMiliSecond = 0;
        if (nextClassTime?.isStart()) {
            nextClassCaption = "開始";
            maxMiliSecond = 10 * 60 * 1000;
        } else if (nextClassTime?.isEnd()) {
            nextClassCaption = "終了";
            maxMiliSecond = 90 * 60 * 1000;
        } else {
            nextClassCaption = "開始";
            maxMiliSecond = 905 * 60 * 1000; // 1735->0840 = 0535->2040 = 15:05 = 900+5 = 905
        }
        setRemainingTime(
            `残り${remain.toString()}で${nextClassTime?.toPeriodString()}${nextClassCaption}`
        );
        //setRatio(`${((remain.toValue() * 100) / maxMiliSecond).toFixed(2)}%`);
        const newRaitio = 1 - remain.toValue() / maxMiliSecond;
        setRatio(newRaitio * 100);

        let newActiveStep = activeStep;
        classStartEndTimeList.map((t) => {
            if (t.toValue() <= currentTime.toValue() && t.isStart()) {
                newActiveStep = t.getPriod() - 1;
            }
        });
        if (newActiveStep !== activeStep) {
            completed.fill(false);
            classStartEndTimeList.map((t) => {
                if (t.toValue() <= currentTime.toValue() && t.isEnd()) {
                    completed[t.getPriod() - 1] = true;
                }
            });
            setActiveStep(newActiveStep);
        }
    };

    return (
        <div className={styles.main_div}>
            <div className={styles.progress_circle_area}>
                <CircularProgressWithLabel
                    value={ratio}
                    colorSettings={colorsettings}
                />
            </div>
            <p className={styles.date_time_text}>
                <span className={styles.text_date}>{date}</span>
                &nbsp;
                <span>{time}</span>
            </p>
            <p className={styles.remain_text}>{remainingTime}</p>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index} completed={completed[index]}>
                        <StepButton>{label}</StepButton>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}

export default ClassTimerPage;
