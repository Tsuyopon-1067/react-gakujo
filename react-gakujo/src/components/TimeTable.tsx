import { Add, AddCircleOutline, Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { ContextApp, MainLocalStorageData } from "./FixedBottomNavigation";
import styles from "./TimeTable.module.css";
import TimeTableSetting from "./TimeTableSetting";
import { UniClass, UniTable } from "./timeTableTypes";

interface GridCellProps {
  day: number;
  period: number;
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
  const [data, setData] = useContext(ContextApp);
  const grid = data.getClass(day - 1, period - 1);
  const length = grid.getClass(0).getLength();
  return (
    <div className={styles.main_cell} style={{ gridRow: `${period + 1} / ${period + 1 + length}`, gridColumn: `${day + 1}` }}>
      <div className={styles.class_grid_cell}>
        {grid.getClasses().length === 1 && grid.getClass(0).getIsEnable() && grid.getClass(0).getLength() === 1 && (
          <div className={styles.add_button}>
            <IconButton onClick={() => handleAdd(data, setData, day, period)} sx={{ width: 12, height: 12, padding: 0, margin: 0, display: "flex" }}>
              <Add sx={{ width: 12, height: 12 }} />
            </IconButton>
          </div>
        )}
        < ClassCell day={day} period={period} index={0} />
        {(length === 1 && grid.getClasses().length === 2) && (
          < ClassCell day={day} period={period} index={1} />
        )}
      </div>
    </div >
  );
}

const ClassCell = ({ day, period, index }: ClassCellProps) => {
  const [data, setData] = useContext(ContextApp);
  const classData = data.getClass(day - 1, period - 1).getClass(index);
  if (classData.getIsEnable()) {
    const credit = classData.getCredit();
    const category = classData.getCategory().toString();
    const categoryValue = classData.getCategoryValue();
    const creditColors = ["#000000", "#FF0000", "#0088FF", "#880088", "#880088", "#880088", "#880088"];
    const categoryColors = ["#FF0000", "#009944", "#0088FF", "#000000"];
    return (
      <div className={styles.classcell_main}>
        <div className={styles.edit_button}>
          <EditButton day={day} period={period} index={index} />
        </div>
        <div className={styles.delete_button}>
          <IconButton onClick={() => handleDelete(data, setData, day, period, index)} sx={{ width: 12, height: 12, padding: 0, margin: 0, display: "flex" }}>
            <Delete sx={{ width: 12, height: 12 }} />
          </IconButton>
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
  return (
    <div className={styles.classcell_main}>
      <div className={styles.edit_button}>
        <EditButton day={day} period={period} index={index} />
      </div>
    </div>
  );
}

// leftest column
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

const handleAdd = (data: UniTable, setData: (data: UniTable) => void, day: number, period: number) => {
  const grid = data.getClass(day - 1, period - 1);
  if (grid.getClasses().length === 1) {
    const empty = UniClass.getEmptyClass();
    empty.setIsEnable(true);
    grid.add(empty);
    const tmp = new UniTable(data.getClasses());
    setData(tmp);
  }
}

const handleDelete = (data: UniTable, setData: (data: UniTable) => void, day: number, period: number, index: number) => {
  const grid = data.getClass(day - 1, period - 1);
  grid.delete(index);
  if (grid.getClasses().length === 0) {
    grid.add(UniClass.getEmptyClass());
  }
  const tmp = new UniTable(data.getClasses());
  setData(tmp);
  console.log(grid.getClasses().length);
}

const handleFootAdd = (data: UniTable, setData: (data: UniTable) => void, day: number, period: number) => {
  const grid = data.getClass(day - 1, period - 1);
  const empty = UniClass.getEmptyClass();
  empty.setIsEnable(true);
  grid.add(empty);
  const tmp = new UniTable(data.getClasses());
  setData(tmp);
}

const FootTable = () => {
  const [data, setData] = useContext(ContextApp);
  const list = data.getClass(5, 0);
  const labels = ["科目名", "教員", "教室", "形態", "分類", "単位数"];
  const color = MainLocalStorageData.getColor().getPrimaryColor();
  return (
    <div className={styles.foot_div} style={{ background: color }}>
      {
        labels.map((label, i) => (
          <div key={i} className={styles.foot_title_grid} style={{ gridColumn: i + 1 }}>
            <p className={styles.foot_title_p}>{label}</p>
          </div>
        ))
      }
      {
        list.getClasses().map((classData, i) => {
          if (!classData.getIsEnable()) {
            return;
          }
          return (
            <>
              <div className={styles.foot_class_grid} style={{ gridColumn: 1 }}>
                <div className={styles.foot_left_grid}>
                  <div className={styles.foot_edit_button}>
                    <p>
                      <EditButton day={6} period={1} index={i} />
                    </p>
                  </div>
                  <p className={styles.foot_class_p} style={{ gridColumn: 2 }}>{classData.getName()}</p>
                </div>
              </div>
              <div className={styles.foot_class_grid} style={{ gridColumn: 2 }}>
                <p className={styles.foot_class_p}>{classData.getTeacher()}</p>
              </div>
              <div className={styles.foot_class_grid} style={{ gridColumn: 3 }}>
                <p className={styles.foot_class_p}>{classData.getRoom()}</p>
              </div>
              <div className={styles.foot_class_grid} style={{ gridColumn: 4 }}>
                <p className={styles.foot_class_p}>{classData.getOnline().toString()}</p>
              </div>
              <div className={styles.foot_class_grid} style={{ gridColumn: 5 }}>
                <p className={styles.foot_class_p}>{classData.getCategory().toString()}</p>
              </div>
              <div className={styles.foot_class_grid} style={{ gridColumn: 6 }}>
                <div className={styles.foot_right_grid}>
                  <p className={styles.foot_class_p} style={{ gridColumn: 1 }}>{classData.getCredit()}</p>
                  <div className={styles.foot_delete_button}>
                    <p>
                      <IconButton onClick={() => handleDelete(data, setData, 6, 1, i)} sx={{ width: 12, height: 12, padding: 0, margin: 0, display: "flex" }}>
                        <Delete sx={{ width: 12, height: 12 }} />
                      </IconButton>
                    </p>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }
      <div className={styles.foot_add}>
        <div className={styles.foot_center}>
          <IconButton onClick={() => handleFootAdd(data, setData, 6, 1)}>
            <AddCircleOutline />
          </IconButton>
        </div>
      </div>
    </div >
  );
}

export default function TimeTable({ data }: TimeTableProps) {
  const periodLabels = ["", "1", "2", "3", "4", "5"];
  const dayLabels = ["", "月", "火", "水", "木", "金"];
  const color = MainLocalStorageData.getColor().getPrimaryColor();
  let skipCount = 0;
  return (
    <div className={styles.main_div}>
      <h1>時間割</h1>
      <div className={styles.table_main_div}>
        {dayLabels.map((dayLabel, j) => (
          periodLabels.map((_, i) => {
            if (skipCount > 0) {
              skipCount--;
              return;
            }
            if (j === 0) {
              return (
                <div key={6 * i + j} className={`${styles.main_cell} ${styles.cell_color}`} style={{ gridRow: i + 1, gridColumn: 1, background: color }}>
                  <ClassPeriodCell period={i} />
                </div>
              );
            }
            if (i === 0) {
              return (
                <div key={6 * i + j} className={`${styles.main_cell} ${styles.cell_color} ${styles.day_cell}`} style={{ gridRow: 1, gridColumn: j + 1, background: color }}>
                  <p className={styles.day_p}>
                    {dayLabel}
                  </p>
                </div>
              );
            }
            const length = data.getClass(j - 1, i - 1).getClass(0).getLength();
            skipCount = length - 1;
            return (
              <GridCell key={6 * i + j} day={j} period={i} />
            );
          })
        ))}
      </div >
      <FootTable />
    </div >
  );
}