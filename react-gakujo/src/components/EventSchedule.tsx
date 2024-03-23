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
import styles from "./EventSchedule.module.css";
import {
    DaliySchedule,
    MonthlySchedule,
    monthlySchedule,
} from "./EventScheduleType";

function EventSchedule() {
    return (
        <div className={styles.main_div}>
            <h1>行事予定表</h1>
            {monthlySchedule.map((data) => (
                <MonthlyScheduleAccordion key={data.month} data={data} />
            ))}
        </div>
    );
}

interface EventScheduleProps {
    data: MonthlySchedule;
}

function MonthlyScheduleAccordion({ data }: EventScheduleProps) {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
                {data.month}月
            </AccordionSummary>
            <AccordionDetails>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">日</TableCell>
                                <TableCell align="center">曜日</TableCell>
                                <TableCell align="center">行事</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.data.map((d) => (
                                <ScheduleTableRow key={d.day} data={d} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </AccordionDetails>
        </Accordion>
    );
}

interface ScheduleTableRowProps {
    data: DaliySchedule;
}

const ScheduleTableRow = ({ data }: ScheduleTableRowProps) => {
    let color;
    switch (data.dayOfWeek) {
        case "土":
            color = { background: "#f0ffff" };
            break;
        case "日":
            color = { background: "#fff0f0" };
            break;
        default:
            color = { background: "#ffffff" };
    }
    return (
        <TableRow sx={{ color }}>
            <TableCell align="center">{data.day}</TableCell>
            <TableCell align="center">{data.dayOfWeek}</TableCell>
            <TableCell align="center">{data.content}</TableCell>
        </TableRow>
    );
};

export default EventSchedule;
