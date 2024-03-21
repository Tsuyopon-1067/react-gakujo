import { UniTable } from "./components/timeTableTypes";

interface ReactGakujoData {
    uniTable: UniTable;
    color: ColorSettings;
    gradeCalc: GraduateCalcData;
}

export class LocalStorageData {
    private data: ReactGakujoData;

    constructor() {
        this.data = {} as ReactGakujoData;
        this.loadData();
    }

    public saveData() {
        localStorage.setItem(
            "tsuyopon1067-react-gakujo",
            JSON.stringify(this.data)
        );
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
                const gradeCalc =
                    GraduateCalcData.createEmptyGraduateCalcData();
                this.setGradeCalc(gradeCalc);
            }
            if (this.data.uniTable) {
                this.setUniTable(UniTable.fromJson(this.data.uniTable));
            }
            if (this.data.color) {
                this.setColor(ColorSettings.fromJson(this.data.color));
            }
            if (this.data.gradeCalc) {
                this.setGradeCalc(
                    GraduateCalcData.fromJson(this.data.gradeCalc)
                );
            }
        } else {
            const uniTable = UniTable.createEmptyUniTable();
            this.setUniTable(uniTable);
            const color = ColorSettings.createEmptyColor();
            this.setColor(color);
            const gradeCalcData =
                GraduateCalcData.createEmptyGraduateCalcData();
            this.setGradeCalc(gradeCalcData);
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

    public setGradeCalc(gradeCalc: GraduateCalcData) {
        this.data.gradeCalc = gradeCalc;
    }

    public getGradeCalc(): GraduateCalcData {
        return this.data.gradeCalc;
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
            let dec = Math.floor(Math.pow((x * 1.05) / 255, 2.2) * 255);
            if (dec > 255) {
                dec = 255;
            }
            const hex = dec.toString(16);
            if (hex.length === 1) {
                return "0" + hex;
            }
            return hex;
        };
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
        return new ColorSettings(
            colorSettings.primaryColor,
            colorSettings.fontColor
        );
    }
}

export class GraduateCalcData {
    birthDay: YearMonthDay;
    DelayEnrolled: DelayEnrolled[] = [];
    constructor(birthDay: YearMonthDay, DelayEnrolled: DelayEnrolled[] = []) {
        this.birthDay = birthDay;
        this.DelayEnrolled = DelayEnrolled;
    }

    public static createEmptyGraduateCalcData(): GraduateCalcData {
        const birthDay = { year: 2002, month: 4, date: 2 } as YearMonthDay;
        const delayEnrolled = [
            new DelayEnrolled("小学校", 0, 6),
            new DelayEnrolled("中学校", 0, 3),
            new DelayEnrolled("高校", 0, 3),
            new DelayEnrolled("大学", 0, 4),
            new DelayEnrolled("大学院", 0, 2),
        ];
        return new GraduateCalcData(birthDay, delayEnrolled);
    }

    public getBirthDay(): YearMonthDay {
        return this.birthDay;
    }

    public getDelayEnrolled(): DelayEnrolled[] {
        return this.DelayEnrolled;
    }

    public static fromJson(gradeCalcData: GraduateCalcData) {
        const birthDayJson = gradeCalcData.birthDay;
        const delayEnrolledJson = gradeCalcData.DelayEnrolled;

        const birthDay = YearMonthDay.fromJson(birthDayJson);
        const delayEnrolled: DelayEnrolled[] = [];
        delayEnrolledJson.map((d) =>
            delayEnrolled.push(DelayEnrolled.fromJson(d))
        );
        return new GraduateCalcData(birthDay, delayEnrolled);
    }
}

export class YearMonthDay {
    year: number;
    month: number;
    date: number;

    constructor(year: number, month: number, date: number) {
        this.year = year;
        this.month = month;
        this.date = date;
    }

    public static fromJson(yearMonthDay: YearMonthDay): YearMonthDay {
        return new YearMonthDay(
            yearMonthDay.year,
            yearMonthDay.month,
            yearMonthDay.date
        );
    }
}

export class DelayEnrolled {
    name: string;
    delay: number;
    enrolledYear: number;
    entranceYear: number;
    graduationYear: number;

    constructor(name: string, delay: number, enrolledYear: number) {
        this.name = name;
        this.delay = delay;
        this.enrolledYear = enrolledYear;
        this.entranceYear = 0;
        this.graduationYear = 0;
    }

    public static fromJson(delayEnrolled: DelayEnrolled): DelayEnrolled {
        const res = new DelayEnrolled(
            delayEnrolled.name,
            delayEnrolled.delay,
            delayEnrolled.enrolledYear
        );
        res.entranceYear = delayEnrolled.entranceYear;
        res.graduationYear = delayEnrolled.graduationYear;
        return res;
    }
}
