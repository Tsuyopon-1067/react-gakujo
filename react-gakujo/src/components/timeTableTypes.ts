class UniTable {
  private classes: UniGrid[][];

  constructor(classes: UniGrid[][]) {
    this.classes = classes;
  }

  public getClass(day: number, period: number): UniGrid {
    return this.classes[day][period];
  }

  public getClasses(): UniGrid[][] {
    return this.classes;
  }

  public setClass(uniClass: UniClass, day: number, period: number, index: number) {
    const grid = this.classes[day][period];
    grid.setClass(uniClass, index);
  }

  public static createEmptyUniTable(): UniTable {
    const tableData = [
      [new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid()],
      [new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid()],
      [new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid()],
      [new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid()],
      [new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid(), new UniGrid()],
      [new UniGrid()],
    ];
    return new UniTable(tableData);
  }

  public static fromJson(json: UniTable): UniTable {
    const tmp = [[]] as UniGrid[][];
    for (let i = 0; i < json.classes.length; i++) {
      tmp.push([]);
      for (let j = 0; j < json.classes[i].length; j++) {
        tmp[i].push(UniGrid.fromJson(json.classes[i][j]));
      }
    }
    return new UniTable(tmp);
  }
}

class UniGrid {
  private classes: UniClass[];

  constructor()
  constructor(uniClasses: UniClass[])
  constructor(uniClasses?: UniClass[]) {
    if (uniClasses) {
      this.classes = uniClasses;
    } else {
      this.classes = [UniClass.getEmptyClass()];
    }
  }

  public add(uniClass: UniClass) {
    this.classes.push(uniClass);
  }

  public delete(index: number) {
    const newClasses = this.classes.filter((_, i) => i !== index);
    this.classes = newClasses;
  }

  public update(index: number, uniClass: UniClass) {
    this.classes[index] = uniClass;
  }

  public getClass(index: number): UniClass {
    return this.classes[index];
  }

  public getClasses(): UniClass[] {
    return this.classes;
  }

  public setClass(uniClass: UniClass, index: number) {
    this.classes[index] = uniClass;
  }

  public static fromJson(json: UniGrid): UniGrid {
    const tmp = [] as UniClass[];
    for (let i = 0; i < json.classes.length; i++) {
      tmp.push(UniClass.fromJson(json.classes[i]));
    }
    return new UniGrid(tmp);
  }
}

class UniClass {
  private name: string
  private teacher: string
  private room: string
  private credit: number
  private online: UniOnline
  private category: UniCategory
  private length: number
  private memo: string
  private isEnable: boolean = false;

  constructor(name: string, teacher: string, room: string, credit: number, online: UniOnline, category: UniCategory, length: number, memo: string)
  constructor(name: string, teacher: string, room: string, credit: number, online: UniOnline, category: UniCategory, length: number, memo: string, isEnable: boolean)
  constructor(name: string, teacher: string, room: string, credit: number, online: UniOnline, category: UniCategory, length: number, memo: string, isEnable?: boolean) {
    this.name = name;
    this.teacher = teacher;
    this.room = room;
    this.credit = credit;
    this.online = online
    this.category = category;
    this.length = length;
    this.memo = memo;
    if (isEnable !== undefined) {
      this.isEnable = isEnable;
    } else {
      this.isEnable = true;
    }
  }

  public static getEmptyClass(): UniClass {
    return new UniClass("", "", "", 0, new UniOnline(0), new UniCategory(0), 1, "", false);
  }

  public getName(): string {
    return this.name;
  }

  public getTeacher(): string {
    return this.teacher;
  }

  public getRoom(): string {
    return this.room;
  }

  public getCredit(): number {
    return this.credit;
  }

  public getOnline(): UniOnline {
    return this.online;
  }

  public getCategory(): UniCategory {
    return this.category;
  }

  public getCategoryValue(): number {
    return this.category.getValue();
  }

  public getLength(): number {
    return this.length;
  }

  public getIsEnable(): boolean {
    return this.isEnable;
  }

  public getMemo(): string {
    return this.memo;
  }

  public setIsEnable(isEnable: boolean) {
    this.isEnable = isEnable;
  }

  public static fromJson(json: UniClass): UniClass {
    const online = new UniOnline(json.online.value);
    const category = new UniCategory(json.category.value);
    return new UniClass(json.name, json.teacher, json.room, json.credit, online, category, json.length, json.memo, json.isEnable);
  }
}

class UniOnline {
  public value: number = 0;
  public  static readonly labels: string[] = [
    "対面", "オンライン", "オンデマンド", "ハイブリッド", "双方向オンライン", "その他"
  ];

  constructor(value: number) {
    this.value = value;
  }

  public toString(): string {
    return UniOnline.labels[this.value];
  }

  public setValue(value: number) {
    this.value = value;
  }
}

class UniCategory {
  public readonly value: number;
  public static IDX_REQUIRED: number = 0;
  public static IDX_ELECTIVE: number = 1;
  public static IDX_FREE: number = 2;
  public static IDX_OTHER: number = 3;

  public static readonly labels: string[] = [
    "必修", "選必", "選択", "自由", "その他"
  ];

  constructor(value: number) {
    this.value = value;
  }

  public toString(): string {
    return UniCategory.labels[this.value];
  }

  public getValue(): number {
    return this.value;
  }
}

export { UniCategory, UniClass, UniGrid, UniOnline, UniTable };

