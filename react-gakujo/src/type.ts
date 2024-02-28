class UniTable {
  private classes: UniGrid[][];

  constructor(classes: UniGrid[][]) {
    this.classes = classes;
  }

  public getClass(day: number, period: number): UniGrid {
    return this.classes[day][period];
  }

  public getDay(day: number): UniGrid[] {
    return this.classes[day];
  }

  public getClasses(): UniGrid[][] {
    return this.classes;
  }
}

class UniGrid {
  private classes: UniClass[];

  constructor()
  constructor(uniClass: UniClass)
  constructor(uniClass?: UniClass) {
    if (uniClass) {
      this.classes = [uniClass];
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
    return new UniClass("", "", "", 0, new UniOnline(0), new UniCategory(0), 0, "", false);
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

  public getOnline(): string {
    return this.online.toString();
  }

  public getCategory(): string {
    return this.category.toString();
  }

  public getLength(): number {
    return this.length;
  }

  public getIsEnable(): boolean {
    return this.isEnable;
  }
}

class UniOnline {
  private value: number = 0;
  private static labels: string[] = [
    "オンライン", "対面", "オンデマンド", "ハイブリッド", "双方向オンライン", "その他"
  ];

  constructor(value: number) {
    this.value = value;
  }

  public toString(): string {
    return UniOnline.labels[this.value];
  }
}

class UniCategory {
  private value: number;
  public static IDX_REQUIRED: number = 0;
  public static IDX_ELECTIVE: number = 1;
  public static IDX_FREE: number = 2;
  public static IDX_OTHER: number = 3;

  private static labels: string[] = [
    "必修", "選択", "自由", "その他"
  ];

  constructor(value: number) {
    this.value = value;
  }

  public static required(): UniCategory {
    return new UniCategory(UniCategory.IDX_REQUIRED);
  }

  public static elective(): UniCategory {
    return new UniCategory(UniCategory.IDX_ELECTIVE);
  }

  public static free(): UniCategory {
    return new UniCategory(UniCategory.IDX_FREE);
  }

  public static other(): UniCategory {
    return new UniCategory(UniCategory.IDX_OTHER);
  }

  public toString(): string {
    return UniCategory.labels[this.value];
  }
}

export { UniCategory, UniClass, UniGrid, UniOnline, UniTable };

