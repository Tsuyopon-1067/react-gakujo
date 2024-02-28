import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { UniClass, UniTable } from "../type";
import styles from "./TimeTable.module.css";

interface Props {
  data: UniTable;
}

interface GridCellProps {
  data: UniTable;
  day: number;
  period: number;
  length: number;
}

interface ClassCellProps {
  data: UniClass;
}

interface ClassPeriodCellProps {
  period: number;
}

const GridCell = ({ data, day, period, length }: GridCellProps) => {
  const classData = data.getClass(day - 1, period - 1);
  return (
    <div className={styles.main_cell} style={{ gridRow: `${period + 1} / ${period + 1 + length}`, gridColumn: `${day + 1}` }}>
      <div className={styles.class_grid_cell}>
        <div className={styles.edit_button}>
          <EditButton />
        </div>
        <ClassCell data={classData.getClass(0)} />
      </div>
    </div>
  );
}

const ClassCell = ({ data }: ClassCellProps) => {
  if (data.getIsEnable()) {
    const credit = data.getCredit();
    const category = data.getCategory();
    const categoryValue = data.getCategoryValue();
    const creditColors = ["", "#FF0000", "#0088FF", "#880088", "#880088", "#880088", "#880088"];
    const categoryColors = ["", "#FF0000", "#008800", "#0088FF", "#000000"];
    return (
      <div className={styles.classcell_main}>
        <p className={`${styles.classcell_title}`}>{data.getName()}</p>
        <p className={`${styles.classcell_teacher} ${styles.classcell_subtitle}`}>{data.getTeacher()}</p>
        <p className={`${styles.classcell_room} ${styles.classcell_subtitle}`}>{data.getRoom()}</p>
        <p className={`${styles.classcell_online} ${styles.classcell_subtitle}`}>{data.getOnline()}</p>
        <p className={`${styles.classcell_credit} ${styles.classcell_subtitle}`} style={{ backgroundColor: creditColors[credit] }}>{credit}</p>
        <p className={`${styles.classcell_category} ${styles.classcell_subtitle}`} style={{ backgroundColor: categoryColors[categoryValue] }}>{category}</p>
      </div>
    );
  }
}

const ClassPeriodCell = ({ period }: ClassPeriodCellProps) => {
  if (period === 0) {
    return;
  }
  const time1 = ["", "8:40", "10:20", "12:45", "14:25", "16:05"];
  const time2 = ["", "10:10", "11:50", "14:15", "15:55", "17:35"];
  return (
    <div className={styles.period_label_container}>
      <div>
        <p className={styles.period_label}>[{period}]</p>
        <p className={styles.period_label_time}>{time1[period]}</p>
        <p className={styles.period_label_time}>～</p>
        <p className={styles.period_label_time}>{time2[period]}</p>
      </div>
    </div>
  );
}

const EditButton = () => {
  return (
    <IconButton sx={{ width: 12, height: 12, padding: 0, margin: 0, display: "flex" }}>
      <Edit sx={{ width: 12, height: 12 }} />
    </IconButton>
  );
}

export default function TimeTable({ data }: Props) {
  const periodLabels = ["", "1", "2", "3", "4", "5"];
  const dayLabels = ["", "月", "火", "水", "木", "金"];
  let skipCount = 0;
  return (
    <div className={styles.main_div}>
      {dayLabels.map((dayLabel, j) => (
        periodLabels.map((periodLabel, i) => {
          if (skipCount > 0) {
            skipCount--;
            return;
          }
          if (j === 0) {
            return (
              <div key={6 * i + j} className={`${styles.main_cell} ${styles.cell_color}`} style={{ gridRow: i + 1, gridColumn: 1 }}>
                <ClassPeriodCell period={i} />
              </div>
            );
          }
          if (i === 0) {
            return (
              <div key={6 * i + j} className={`${styles.main_cell} ${styles.cell_color} ${styles.day_cell}`} style={{ gridRow: 1, gridColumn: j + 1 }}>
                <p className={styles.day_p}>
                  {dayLabel}
                </p>
              </div>
            );
          }
          const length = data.getClass(j - 1, i - 1).getClass(0).getLength();
          skipCount = length - 1;
          return (
            <GridCell key={6 * i + j} data={data} day={j} period={i} length={length} />
          );
        })
      ))}
    </div >
  );
}