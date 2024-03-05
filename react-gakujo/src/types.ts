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
  primaryColorHover: string = "#04CBB0";
  fontColor: string = "#FFFFFF";

  constructor(primaryColor: string, fontColor: string) {
    this.primaryColor = primaryColor;
    this.fontColor = fontColor;

    const primaryColorNumberStr = this.primaryColor.substring(1);
    const rStr = primaryColorNumberStr.substring(0, 2);
    const gStr = primaryColorNumberStr.substring(2, 4);
    const bStr = primaryColorNumberStr.substring(4, 6);

    const rNum = parseInt(rStr, 16);
    const gNum = parseInt(gStr, 16);
    const bNum = parseInt(bStr, 16);

    const gamma = (x: number) => {
      let dec = Math.floor(Math.pow(x*1.05 / 255, 2.2)*255);
      if (dec > 255) {
        dec = 255;
      }
      const hex = dec.toString(16);
      if (hex.length === 1) {
        return "0" + hex;
      }
      return hex;
    }
    this.primaryColorHover = `#${gamma(rNum)}${gamma(gNum)}${gamma(bNum)}`;
  }

  public static createEmptyColor(): ColorSettings {
    return new ColorSettings("#04CBB0", "#FFFFFF");
  }

  public getPrimaryColor(): string {
    return this.primaryColor;
  }

  public getPrimaryColorHover(): string {
    return this.primaryColorHover;
  }

  public getFontColor(): string {
    return this.fontColor;
  }

  public static fromJson(colorSettings: ColorSettings): ColorSettings {
    return new ColorSettings(colorSettings.primaryColor, colorSettings.fontColor);
  }
}