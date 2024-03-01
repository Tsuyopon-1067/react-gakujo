import { UniTable } from "./components/timeTableTypes";

interface ReactGakujoData {
  uniTable: UniTable;
  color: ColorSettings;
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

  public saveDataFromJson(jsonData: string) {
    localStorage.setItem("tsuyopon1067-react-gakujo", jsonData);
  }

  public loadData(): ReactGakujoData {
    const tmp = localStorage.getItem("tsuyopon1067-react-gakujo");
    if (tmp) {
      try {
        this.data = JSON.parse(tmp);
      } catch (e) {
        const uniTable = UniTable.createEmptyUniTable();
        this.setUniTable(uniTable);
        const color = ColorSettings.createEmptyColor();
        this.setColor(color);
      }
      if (this.data.uniTable) {
        this.setUniTable(UniTable.fromJson(this.data.uniTable));
      }
      if (this.data.color) {
        this.setColor(ColorSettings.fromJson(this.data.color));
      }
    } else {
      const uniTable = UniTable.createEmptyUniTable();
      this.setUniTable(uniTable);
      const color = ColorSettings.createEmptyColor();
      this.setColor(color);
    }
    return this.data;
  }

  public setUniTable(uniTable: UniTable) {
    this.data.uniTable = uniTable;
  }

  public getUniTable(): UniTable {
    return this.data.uniTable;
  }

  public setColor(color: ColorSettings) {
    this.data.color = color;
  }

  public getColor(): ColorSettings {
    return this.data.color;
  }

  public toJsonString(): string {
    return JSON.stringify(this.data);
  }

  public resetData() {
    localStorage.removeItem("tsuyopon1067-react-gakujo");
    this.loadData();
  }
}

export class ColorSettings {
  primaryColor: string = "#04CBB0";
  constructor(primaryColor: string) {
    this.primaryColor = primaryColor;
  }

  public static createEmptyColor(): ColorSettings {
    return new ColorSettings("#04CBB0");
  }

  public getPrimaryColor(): string {
    return this.primaryColor;
  }

  public static fromJson(colorSettings: ColorSettings): ColorSettings {
    return new ColorSettings(colorSettings.primaryColor);
  }
}