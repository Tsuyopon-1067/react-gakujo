import styles from "./TimeTable.module.css";

export default function TimeTable() {
  return (
<table className={styles.table}>
  <thead className={styles.thead}>
    <tr className={styles.tr}>
      <th className={styles.th} scope="col"></th>
      <th className={styles.th} scope="col">月</th>
      <th className={styles.th} scope="col">火</th>
      <th className={styles.th} scope="col">水</th>
      <th className={styles.th} scope="col">木</th>
      <th className={styles.th} scope="col">金</th>
    </tr>
  </thead>
  <tbody className={styles.tbody}>
    <tr className={styles.tr}>
      <th className={styles.th} scope="row">1-2</th>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
    </tr>
    <tr className={styles.tr}>
      <th className={styles.th} scope="row">1-2</th>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
    </tr>
    <tr className={styles.tr}>
      <th className={styles.th} scope="row">1-2</th>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
    </tr>
    <tr className={styles.tr}>
      <th className={styles.th} scope="row">1-2</th>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
    </tr>
    <tr className={styles.tr}>
      <th className={styles.th} scope="row">1-2</th>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
      <td className={styles.td}>hoge1</td>
    </tr>
  </tbody>
</table>
  );
}