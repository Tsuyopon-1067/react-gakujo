import { Grid } from "@mui/material";
import styles from "./App.module.css";
import { InfJsonDataList } from "./components/JsonButtonPropsData";
import JsonButtons from "./components/JsonButtons";
import SimpleAppBar from "./components/SimpleAppBar";

function App() {
    return (
        <>
            <SimpleAppBar />
            <div className={styles.main_div}>
                <h1 className={styles.h1}>情報学部</h1>
                <Grid container spacing={2} m={1} width={"100%"}>
                    {InfJsonDataList.map((data, index) => (
                        <JsonButtons key={index} data={data} />
                    ))}
                </Grid>
            </div>
        </>
    );
}

export default App;
