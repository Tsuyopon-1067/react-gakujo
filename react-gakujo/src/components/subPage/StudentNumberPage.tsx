import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
    Input,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";
import styles from "./StudentNumberPage.module.css";
import { useState } from "react";

class StudentNumberCode {
    type: string;
    code: number;
    constructor(type: string, code: number) {
        this.type = type;
        this.code = code;
    }
}

const studentTypeList: StudentNumberCode[] = [
    new StudentNumberCode("一般学生", 1),
    new StudentNumberCode("夜間主コース", 2),
    new StudentNumberCode("科目等履修生", 5),
    new StudentNumberCode("聴講生等", 7),
    new StudentNumberCode("特別聴講学生", 8),
];

interface Facility {
    name: string;
    code: number;
    departNumbers: number[];
    departMap: Map<number, string>;
}

const humanitiesAndSocialSciencesStudentNumberToDepart = new Map([
    [0, "社会学科"],
    [1, "言語文化学科"],
    [2, "法学科"],
    [3, "経済学科"],
]);
const scienceStudentNumberToDepart = new Map([
    [0, "数学科"],
    [1, "物理学科"],
    [2, "化学科"],
    [3, "生物化学科"],
    [4, "地球科学科"],
    [5, "創造理学コース"],
]);
const engineeringStudentNumberToDepart = new Map([
    [0, "機械工学科"],
    [1, "電気電子工学科"],
    [4, "電子物質科学科"],
    [5, "化学バイオ工学科"],
    [6, "数理システム工学科"],
]);
const informaticsStudentNumberToDepart = new Map([
    [0, "情報科学科"],
    [1, "情報社会学科"],
    [2, "行動情報学科"],
]);

const humanitiesAndSocialSciencesFacility: Facility = {
    name: "人文社会科学部",
    code: 20,
    departNumbers: [0, 1, 2, 3],
    departMap: humanitiesAndSocialSciencesStudentNumberToDepart,
};
const educationFacility: Facility = {
    name: "教育学部",
    code: 30,
    departNumbers: [],
    departMap: {} as Map<number, string>,
};
const scienceFacility: Facility = {
    name: "理学部",
    code: 40,
    departNumbers: [0, 1, 2, 3, 4, 5],
    departMap: scienceStudentNumberToDepart,
};
const engineeringFacility: Facility = {
    name: "工学部",
    code: 50,
    departNumbers: [0, 1, 4, 5, 6],
    departMap: engineeringStudentNumberToDepart,
};
const agricultureFacility: Facility = {
    name: "農学部",
    code: 60,
    departNumbers: [],
    departMap: {} as Map<number, string>,
};
const informaticsFacility: Facility = {
    name: "情報学部",
    code: 70,
    departNumbers: [0, 1, 2],
    departMap: informaticsStudentNumberToDepart,
};

const facilityCodeList = [
    humanitiesAndSocialSciencesFacility,
    educationFacility,
    scienceFacility,
    engineeringFacility,
    agricultureFacility,
    informaticsFacility,
];

const facultyCodeMap = new Map([
    [20, humanitiesAndSocialSciencesFacility],
    [30, educationFacility],
    [40, scienceFacility],
    [50, engineeringFacility],
    [60, agricultureFacility],
    [70, informaticsFacility],
]);

function StudentNumberPage() {
    return (
        <div className={styles.main_div}>
            <StudentNumberChecker />
            <Divider sx={{ marginTop: 4, marginBottom: 4 }} />
            <h1 className={styles.h1}>凡例</h1>
            <h2 className={styles.h2}>AABC-DEEE</h2>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    AA（1・2桁目） 部局別コード
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">部局</TableCell>
                                    <TableCell align="center">コード</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {facilityCodeList.map((facility) => (
                                    <TableRow>
                                        <TableCell align="center">
                                            {facility.name}
                                        </TableCell>
                                        <TableCell align="center">
                                            {facility.code}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    B（3桁目）入学年度コード
                </AccordionSummary>
                <AccordionDetails>入学年度（西暦）の下1桁</AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    C（4桁目））学生種別コード
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">種別</TableCell>
                                    <TableCell align="center">コード</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {studentTypeList.map((studentType) => (
                                    <TableRow>
                                        <TableCell align="center">
                                            {studentType.type}
                                        </TableCell>
                                        <TableCell align="center">
                                            {studentType.code}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    D（5桁目）学科コード
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            paddingLeft: 0.5,
                                            paddingRight: 0.5,
                                        }}
                                    >
                                        学部
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            paddingLeft: 0.5,
                                            paddingRight: 0.5,
                                        }}
                                    >
                                        学科
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            paddingLeft: 0.5,
                                            paddingRight: 0.5,
                                        }}
                                    >
                                        コード
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {facilityCodeList.map((facility) =>
                                    facility.departNumbers.map((code) => (
                                        <TableRow>
                                            <TableCell
                                                align="center"
                                                sx={{
                                                    paddingLeft: 0.5,
                                                    paddingRight: 0.5,
                                                }}
                                            >
                                                {facility.name}
                                            </TableCell>
                                            <TableCell
                                                align="center"
                                                sx={{
                                                    paddingLeft: 0.5,
                                                    paddingRight: 0.5,
                                                }}
                                            >
                                                {facility.departMap.get(code)}
                                            </TableCell>
                                            <TableCell
                                                align="center"
                                                sx={{
                                                    paddingLeft: 0.5,
                                                    paddingRight: 0.5,
                                                }}
                                            >
                                                {code}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    EEE（6～8桁目） 個人コード
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{ textAlign: "left" }}>
                        名前順連番．編入生の場合は100の位が異なる
                    </p>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

const StudentNumberChecker = () => {
    const [inputValue, setInputValue] = useState("");
    const [faculty, setFaculty] = useState("");
    const [entry, setEntry] = useState("");
    const [type, setType] = useState("");
    const [department, setDepartment] = useState("");
    const parse = (str: string): number => {
        const res = parseInt(str);
        if (isNaN(res)) {
            return -1;
        }
        return res;
    };
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let valueStr = e.target.value;
        setInputValue(valueStr);
        valueStr = valueStr.replace("-", "");
        const a = parse(valueStr.substring(0, 2));
        const b = parse(valueStr.substring(2, 3));
        const c = parse(valueStr.substring(3, 4));
        const d = parse(valueStr.substring(4, 5));

        const facultyObject = facultyCodeMap.get(a);
        setFaculty(facultyObject?.name ?? "");
        setDepartment(facultyObject?.departMap.get(d) ?? "");
        let entryNumber = 2020 + b;
        const currentYear = new Date().getFullYear();
        if (entryNumber > currentYear) {
            entryNumber -= 10;
        }
        setEntry(entryNumber.toString() + "年");
        if (b === -1) {
            setEntry("");
        }
        setType(
            studentTypeList.find((element) => element.code === c)?.type ?? ""
        );
    };
    return (
        <>
            <h1 className={styles.h1}>学籍番号チェッカー</h1>
            <TextField
                fullWidth
                value={inputValue}
                onChange={handleOnChange}
                label="学籍番号"
                variant="filled"
                variant="standard"
                sx={{ marginTop: 2 }}
            />
            <Table sx={{ marginTop: 2 }}>
                <TableHead>
                    <TableRow>
                        <TableCell width={140} align="center">
                            項目
                        </TableCell>
                        <TableCell align="center">内容</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell width={140} align="center">
                            学部
                        </TableCell>
                        <TableCell align="center">{faculty}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">学科</TableCell>
                        <TableCell align="center">{department}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">入学年度</TableCell>
                        <TableCell align="center">{entry}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">種別</TableCell>
                        <TableCell align="center">{type}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
};

export default StudentNumberPage;
