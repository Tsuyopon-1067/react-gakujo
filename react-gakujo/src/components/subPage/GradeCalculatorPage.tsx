import {
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";
import styles from "./GradeCalculatorPage.module.css";
import { useState } from "react";

// for input birth day
interface YearMonthDay {
    year: number;
    month: number;
    date: number;
}

// for SchoolRow component
class DelayEnrolled {
    name: string;
    delay: number;
    enrolledYear: number;
    entranceYear: number;
    graduationYear: number;

    constructor(name: string, delay: number, enrolledYear: number) {
        this.name = name;
        this.delay = delay;
        this.enrolledYear = enrolledYear;
        this.entranceYear = 0;
        this.graduationYear = 0;
    }
}

// main component
function GradeCalculatorPage() {
    const [birthDay, setBirthDay] = useState({
        year: 2000,
        month: 1,
        date: 1,
    } as YearMonthDay);

    const [delayEnrolledList, setDelayEnrolledList] = useState([
        new DelayEnrolled("小学校", 0, 6),
        new DelayEnrolled("中学校", 0, 3),
        new DelayEnrolled("高校", 0, 3),
        new DelayEnrolled("大学", 0, 4),
        new DelayEnrolled("大学院", 0, 2),
    ]);
    // for option of year
    const currentYear = new Date().getFullYear();
    const yearList: number[] = [...Array<number>(16)].map(
        (_, i: number): number => currentYear - 30 + i
    );
    // for option of month
    const monthList: number[] = [...Array<number>(12)].map(
        (_, i): number => i + 1
    );
    // for option of date
    const dayList: number[] = [...Array<number>(31)].map(
        (_, i): number => i + 1
    );
    const [lastDayOfMonth, setLastDayOfMonth] = useState(0);
    const handleOnChaneBirthDay = (birthDay: YearMonthDay) => {
        setBirthDay(birthDay);
        const lastDay = new Date(birthDay.year, birthDay.month, 0).getDate();
        setLastDayOfMonth(lastDay);
        updateEnteranceGraduationYearList(birthDay);
    };

    const updateEnteranceGraduationYearList = (argBirthDay: YearMonthDay) => {
        let year = argBirthDay.year;
        const month = argBirthDay.month;
        const date = argBirthDay.date;
        if (month <= 3 || (month === 4 && date === 1)) {
            year--;
        }

        const newList = [] as DelayEnrolled[];
        delayEnrolledList.map((delayEnrolled) => newList.push(delayEnrolled));

        newList[0].entranceYear = year + 7 + newList[0].delay;
        newList[0].graduationYear =
            newList[0].entranceYear + newList[0].enrolledYear;
        for (let i = 1; i < 5; i++) {
            newList[i].entranceYear =
                newList[i - 1].graduationYear + newList[i].delay;
            newList[i].graduationYear =
                newList[i].entranceYear + newList[i].enrolledYear;
        }
        setDelayEnrolledList(newList);
    };

    return (
        <div className={styles.main_div}>
            <h1 className={styles.h1}>生年月日</h1>
            <div className={styles.birthday_input_div}>
                <TextField
                    select
                    label="年"
                    defaultValue={birthDay.year}
                    SelectProps={{ native: true }}
                    variant="standard"
                    value={birthDay.year}
                    sx={{ width: "50%" }}
                    onChange={(e) => {
                        const year = parseInt(e.target.value);
                        handleOnChaneBirthDay({ ...birthDay, year: year });
                    }}
                >
                    {yearList.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </TextField>
                <TextField
                    select
                    label="月"
                    defaultValue={birthDay.month}
                    SelectProps={{ native: true }}
                    variant="standard"
                    value={birthDay.month}
                    sx={{ width: "23%", margin: "0 2%" }}
                    onChange={(e) => {
                        const month = parseInt(e.target.value);
                        handleOnChaneBirthDay({ ...birthDay, month: month });
                    }}
                >
                    {monthList.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </TextField>
                <TextField
                    select
                    label="日"
                    defaultValue={birthDay.date}
                    SelectProps={{ native: true }}
                    variant="standard"
                    value={birthDay.date}
                    sx={{ width: "23%" }}
                    onChange={(e) => {
                        const date = parseInt(e.target.value);
                        handleOnChaneBirthDay({ ...birthDay, date: date });
                    }}
                >
                    {dayList.slice(0, lastDayOfMonth).map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </TextField>
            </div>
            <h1 className={styles.h1}>入学・卒業年度</h1>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell
                            align="center"
                            sx={{ paddingLeft: 1, paddingRight: 1 }}
                        >
                            学校
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{ padding: 1, paddingRight: 1 }}
                        >
                            年度
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{ padding: 1, paddingRight: 1 }}
                        >
                            入学・卒業条件
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {delayEnrolledList.map((delayEnrolled, index) => (
                        <SchoolRow
                            key={index}
                            delayEnrolled={delayEnrolled}
                            update={updateEnteranceGraduationYearList}
                            birthDay={birthDay}
                        />
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

interface SchoolRowProps {
    delayEnrolled: DelayEnrolled;
    update: (y: YearMonthDay) => void;
    birthDay: YearMonthDay;
}
const SchoolRow = ({ delayEnrolled, update, birthDay }: SchoolRowProps) => {
    const delayLabel: string[] = [...Array<string>(10)].map(
        (_, i): string => `${i}年遅れて入学`
    );
    const enrolledYearLabel: string[] = [...Array<string>(9)].map(
        (_, i): string => `${i + 1}年在学`
    );
    delayLabel[0] = "現役入学";
    const [delayLabelIndex, setDelayLabelIndex] = useState(delayEnrolled.delay);
    const [enrolledYearLabelIndex, setEnrolledYearLabelIndex] = useState(
        delayEnrolled.enrolledYear - 1
    );
    const tablePadding = { paddingLeft: 0.5, paddingRight: 0.5 };
    return (
        <>
            <TableRow>
                <TableCell align="center" sx={tablePadding}>
                    {delayEnrolled.name}入学
                </TableCell>
                <TableCell align="center" sx={tablePadding}>
                    {delayEnrolled.entranceYear}年4月
                </TableCell>
                <TableCell align="center" sx={tablePadding}>
                    <TextField
                        select
                        fullWidth
                        label="入学"
                        defaultValue={delayLabel[delayLabelIndex]}
                        SelectProps={{ native: true }}
                        variant="standard"
                        value={delayLabel[delayLabelIndex]}
                        onChange={(e) => {
                            const index = delayLabel.indexOf(e.target.value);
                            setDelayLabelIndex(index);
                            delayEnrolled.delay = index;
                            update(birthDay);
                        }}
                    >
                        {delayLabel.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </TextField>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="center" sx={tablePadding}>
                    {delayEnrolled.name}卒業
                </TableCell>
                <TableCell align="center" sx={tablePadding}>
                    {delayEnrolled.graduationYear}年3月
                </TableCell>
                <TableCell align="center" sx={tablePadding}>
                    <TextField
                        select
                        fullWidth
                        label="在学年数"
                        defaultValue={enrolledYearLabel[enrolledYearLabelIndex]}
                        SelectProps={{ native: true }}
                        variant="standard"
                        value={enrolledYearLabel[enrolledYearLabelIndex]}
                        onChange={(e) => {
                            const index = enrolledYearLabel.indexOf(
                                e.target.value
                            );
                            setEnrolledYearLabelIndex(index);
                            delayEnrolled.enrolledYear = index + 1;
                            update(birthDay);
                            console.log(index + 1);
                        }}
                    >
                        {enrolledYearLabel.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </TextField>
                </TableCell>
            </TableRow>
        </>
    );
};

export default GradeCalculatorPage;
