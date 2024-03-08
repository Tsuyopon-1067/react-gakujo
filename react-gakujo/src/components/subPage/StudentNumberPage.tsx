import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import styles from "./StudentNumberPage.module.css";

class StudentNumberCode {
    type: string;
    code: number;
    constructor(type: string, code: number) {
        this.type = type;
        this.code = code;
    }
}

class FacultyCode {
    faculty: string;
    department: string;
    code: number;
    constructor(faculty: string, department: string, code: number) {
        this.faculty = faculty;
        this.department = department;
        this.code = code;
    }
}

const studentNumberList: StudentNumberCode[] = [
    new StudentNumberCode("人文社会科学部", 20),
    new StudentNumberCode("教育学部", 30),
    new StudentNumberCode("理学部", 40),
    new StudentNumberCode("工学部", 50),
    new StudentNumberCode("農学部", 60),
    new StudentNumberCode("情報学部", 70),
];

const studentTypeList: StudentNumberCode[] = [
    new StudentNumberCode("一般学生", 1),
    new StudentNumberCode("夜間主コース", 2),
    new StudentNumberCode("科目等履修生", 5),
    new StudentNumberCode("聴講生等", 7),
    new StudentNumberCode("特別聴講学生", 8),
];

const facultyCodeList: FacultyCode[] = [
    new FacultyCode("人文社会科学部", "社会学科", 0),
    new FacultyCode("人文社会科学部", "言語文化学科", 1),
    new FacultyCode("人文社会科学部", "法学科", 2),
    new FacultyCode("人文社会科学部", "経済学科", 3),
    new FacultyCode("理学部", "数学科", 0),
    new FacultyCode("理学部", "物理学科", 1),
    new FacultyCode("理学部", "化学科", 2),
    new FacultyCode("理学部", "生物科学科", 3),
    new FacultyCode("理学部", "地球科学科", 4),
    new FacultyCode("理学部", "創造理学コース", 5),
    new FacultyCode("工学部", "機械工学科", 0),
    new FacultyCode("工学部", "電気電子工学科", 1),
    new FacultyCode("工学部", "電子物質科学科", 4),
    new FacultyCode("工学部", "科学バイオ工学科", 5),
    new FacultyCode("工学部", "数理システム工学科", 6),
    new FacultyCode("農学部", "生物資源科学化", 0),
    new FacultyCode("農学部", "応用生命化学化", 1),
    new FacultyCode("情報学部", "情報科学科", 0),
    new FacultyCode("情報学部", "情報社会学科", 1),
    new FacultyCode("情報学部", "行動情報学科", 2),
];

function StudentNumberPage() {
    return (
        <div className={styles.main_div}>
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
                                {studentNumberList.map((studentNumber) => (
                                    <TableRow>
                                        <TableCell align="center">
                                            {studentNumber.type}
                                        </TableCell>
                                        <TableCell align="center">
                                            {studentNumber.code}
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
                                    <TableCell align="center">学部</TableCell>
                                    <TableCell align="center">学科</TableCell>
                                    <TableCell align="center">コード</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {facultyCodeList.map((facultyCode) => (
                                    <TableRow>
                                        <TableCell align="center">
                                            {facultyCode.faculty}
                                        </TableCell>
                                        <TableCell align="center">
                                            {facultyCode.department}
                                        </TableCell>
                                        <TableCell align="center">
                                            {facultyCode.code}
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

export default StudentNumberPage;
