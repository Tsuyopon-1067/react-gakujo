import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";
import styles from "./GradeCalculatorPage.module.css";
import { useEffect, useState } from "react";

interface YearMonthDay {
    year: number;
    month: number;
    date: number;
}

function GradeCalculatorPage() {
    const [birthDay, setBirthDay] = useState({
        year: 2000,
        month: 1,
        date: 1,
    } as YearMonthDay);

    const [highSchoolExtra, setHighSchoolExtra] = useState(0);
    const [universitySchoolExtra, setUniversitySchoolExtra] = useState(0);
    const [lastDayOfMonth, setLastDayOfMonth] = useState(0);
    useEffect(() => {
        const lastDay = new Date(birthDay.year, birthDay.month, 0).getDate();
        setLastDayOfMonth(lastDay);
    }, [birthDay]);

    const currentYear = new Date().getFullYear();
    const yearList: number[] = [...Array<number>(16)].map(
        (_, i: number): number => currentYear - 30 + i
    );
    const monthList: number[] = [...Array<number>(12)].map(
        (_, i): number => i + 1
    );
    const dayList: number[] = [...Array<number>(31)].map(
        (_, i): number => i + 1
    );
    for (let i = currentYear - 30; i < currentYear - 15; i++) {}
    return (
        <div className={styles.main_div}>
            <div>
                <p>生年月日</p>
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
                        setBirthDay({ ...birthDay, year: year });
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
                        setBirthDay({ ...birthDay, month: month });
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
                        setBirthDay({ ...birthDay, date: date });
                    }}
                >
                    {dayList.slice(0, lastDayOfMonth).map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </TextField>
            </div>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                </TableBody>
            </Table>
        </div>
    );
}

export default GradeCalculatorPage;
