import { Grid } from "@mui/material";
import styles from "./App.module.css";
import {
    InfBiJsonDataList,
    InfCsJsonDataList,
    InfIaJsonDataList,
} from "./components/JsonButtonPropsData";
import JsonButtons from "./components/JsonButtons";
import SimpleAppBar from "./components/SimpleAppBar";

function App() {
    return (
        <>
            <SimpleAppBar />
            <div className={styles.main_div}>
                <h1 className={styles.h1}>情報学部</h1>
                <h2 className={styles.h2}>情報科学科</h2>
                <Grid container spacing={2} m={1} width={"100%"}>
                    {InfCsJsonDataList.map((data, index) => (
                        <JsonButtons key={index} data={data} />
                    ))}
                </Grid>
                <h2 className={styles.h2}>行動情報学科</h2>
                <Grid container spacing={2} m={1} width={"100%"}>
                    {InfBiJsonDataList.map((data, index) => (
                        <JsonButtons key={index} data={data} />
                    ))}
                </Grid>
                <h2 className={styles.h2}>情報社会学科</h2>
                <Grid container spacing={2} m={1} width={"100%"}>
                    {InfIaJsonDataList.map((data, index) => (
                        <JsonButtons key={index} data={data} />
                    ))}
                </Grid>
            </div>
        </>
    );
}

export default App;
