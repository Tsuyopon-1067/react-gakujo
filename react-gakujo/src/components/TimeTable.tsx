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

const GridCell = ({ data, day, period, length }: GridCellProps) => {
  const classData = data.getClass(day - 1, period - 1);
  return (
    <div className={styles.main_cell} style={{ gridRow: `${period + 1} / ${period + 1 + length}`, gridColumn: `${day + 1}` }}>
      <ClassCell data={classData.getClass(0)} />
    </div>
  );
}

const ClassCell = ({ data }: ClassCellProps) => (
  <div className={styles.classcell_main}>
    <p className={`${styles.classcell_title}`}>{data.getName()}</p>
    <p className={`${styles.classcell_teacher} ${styles.classcell_subtitle}`}>{data.getTeacher()}</p>
    <p className={`${styles.classcell_room} ${styles.classcell_subtitle}`}>{data.getRoom()}</p>
    <p className={`${styles.classcell_online} ${styles.classcell_subtitle}`}>{data.getOnline()}</p>
    <p className={`${styles.classcell_credit} ${styles.classcell_subtitle}`}>{data.getCredit()}</p>
    <p className={`${styles.classcell_category} ${styles.classcell_subtitle}`}>{data.getCategory()}</p>
  </div>
);

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
              <div key={6 * i + j} className={styles.main_cell} style={{ gridRow: i + 1, gridColumn: 1 }}>
                {periodLabel}
              </div>
            );
          }
          if (i === 0) {
            return (
              <div key={6 * i + j} className={styles.main_cell} style={{ gridRow: 1, gridColumn: j + 1 }}>
                {dayLabel}
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