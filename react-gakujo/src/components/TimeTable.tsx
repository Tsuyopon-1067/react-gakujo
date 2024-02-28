import { useContext } from "react";
import { ContextApp } from "../App";
import { UniTable } from "../type";
import styles from "./TimeTable.module.css";
import TimeTableSetting from "./TimeTableSetting";

interface GridCellProps {
  day: number;
  period: number;
  length: number;
}

export interface ClassCellProps {
  day: number;
  period: number;
  index: number;
}

interface ClassPeriodCellProps {
  period: number;
}

interface TimeTableProps {
  data: UniTable;
}

const GridCell = ({ day, period }: GridCellProps) => {
  const [data,] = useContext(ContextApp);
  const length = data.getClass(day - 1, period - 1).getClass(0).getLength();
  return (
    <div className={styles.main_cell} style={{ gridRow: `${period + 1} / ${period + 1 + length}`, gridColumn: `${day + 1}` }}>
      <div className={styles.class_grid_cell}>
        <ClassCell day={day} period={period} index={0} />
      </div>
    </div>
  );
}

const ClassCell = ({ day, period, index }: ClassCellProps) => {
  const [data,] = useContext(ContextApp);
  const classData = data.getClass(day - 1, period - 1).getClass(index);
  if (classData.getIsEnable()) {
    const credit = classData.getCredit();
    const category = classData.getCategory().toString();
    const categoryValue = classData.getCategoryValue();
    const creditColors = ["", "#FF0000", "#0088FF", "#880088", "#880088", "#880088", "#880088"];
    const categoryColors = ["", "#FF0000", "#008800", "#0088FF", "#000000"];
    return (
      <div className={styles.classcell_main}>
        <div className={styles.edit_button}>
          <EditButton day={day} period={period} index={index} />
        </div>
        <p className={`${styles.classcell_title}`}>{classData.getName()}</p>
        <p className={`${styles.classcell_teacher} ${styles.classcell_subtitle}`}>{classData.getTeacher()}</p>
        <p className={`${styles.classcell_room} ${styles.classcell_subtitle}`}>{classData.getRoom()}</p>
        <p className={`${styles.classcell_online} ${styles.classcell_subtitle}`}>{classData.getOnline().toString()}</p>
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

const EditButton = ({ day, period, index }: ClassCellProps) => {
  return (
    <TimeTableSetting day={day} period={period} index={index} />
  );
}

export default function TimeTable({ data }: TimeTableProps) {
  const periodLabels = ["", "1", "2", "3", "4", "5"];
  const dayLabels = ["", "月", "火", "水", "木", "金"];
  //const [data,] = useContext(ContextApp);
  let skipCount = 0;
  return (
    <div className={styles.main_div}>
      {dayLabels.map((dayLabel, j) => (
        periodLabels.map((_, i) => {
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
            <GridCell key={6 * i + j} day={j} period={i} length={length} />
          );
        })
      ))}
    </div >
  );
}