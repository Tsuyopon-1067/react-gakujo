import { UniTable } from "./components/timeTableTypes";

interface ReactGakujoData {
  uniTable: UniTable;
}

export class LocalStorageData {
  private data: ReactGakujoData;

  constructor() {
    this.data = {} as ReactGakujoData;
    this.loadData();
  }

  public saveData() {
    localStorage.setItem("tsuyopon1067-react-gakujo", JSON.stringify(this.data));
  }

  public loadData(): ReactGakujoData {
    const tmp = localStorage.getItem("tsuyopon1067-react-gakujo");
    if (tmp) {
      this.data = JSON.parse(tmp);
      this.setUniTable(UniTable.fromJson(this.data.uniTable));
    } else {
      const tmp = UniTable.createEmptyUniTable();
      this.setUniTable(tmp);
    }
    return this.data;
  }

  public setUniTable(uniTable: UniTable) {
    this.data.uniTable = uniTable;
  }

  public getUniTable(): UniTable {
    return this.data.uniTable;
  }
}