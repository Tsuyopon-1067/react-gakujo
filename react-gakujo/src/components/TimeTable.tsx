import { UniTable } from "../type";
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

const GridCell = ({ data, day, period, length }: GridCellProps) => {
  return (
    <div className={styles.main_cell} style={{ gridRow: `${period + 1} / ${period + 1 + length}`, gridColumn: `${day + 1}` }}>
      {data.getClass(day - 1, period - 1).getClass(0).getName()}-{length}
    </div>
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