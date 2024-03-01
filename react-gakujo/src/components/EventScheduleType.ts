interface DaliySchedule {
  readonly day: number;
  readonly dayOfWeek: string;
  readonly content: string;
  readonly isHoliday: boolean;
}

interface MonthlySchedule {
  readonly month: number;
  readonly data: DaliySchedule[];
}

const monthlySchedule4: MonthlySchedule = JSON.parse(`{"month":4,"data":[{"day":1,"dayOfWeek":"土","content":"","isHoliday":true},{"day":2,"dayOfWeek":"日","content":"","isHoliday":true},{"day":3,"dayOfWeek":"月","content":"","isHoliday":false},{"day":4,"dayOfWeek":"火","content":"入学式","isHoliday":false},{"day":5,"dayOfWeek":"水","content":"ガイダンス","isHoliday":false},{"day":6,"dayOfWeek":"木","content":"ガイダンス","isHoliday":false},{"day":7,"dayOfWeek":"金","content":"ガイダンス","isHoliday":false},{"day":8,"dayOfWeek":"土","content":"","isHoliday":true},{"day":9,"dayOfWeek":"日","content":"","isHoliday":true},{"day":10,"dayOfWeek":"月","content":"ガイダンス","isHoliday":false},{"day":11,"dayOfWeek":"火","content":"","isHoliday":false},{"day":12,"dayOfWeek":"水","content":"授業開始 水1","isHoliday":false},{"day":13,"dayOfWeek":"木","content":" 木1","isHoliday":false},{"day":14,"dayOfWeek":"金","content":" 金1","isHoliday":false},{"day":15,"dayOfWeek":"土","content":"","isHoliday":true},{"day":16,"dayOfWeek":"日","content":"","isHoliday":true},{"day":17,"dayOfWeek":"月","content":" 月1","isHoliday":false},{"day":18,"dayOfWeek":"火","content":" 火1","isHoliday":false},{"day":19,"dayOfWeek":"水","content":" 水2","isHoliday":false},{"day":20,"dayOfWeek":"木","content":" 木2","isHoliday":false},{"day":21,"dayOfWeek":"金","content":" 金2","isHoliday":false},{"day":22,"dayOfWeek":"土","content":"","isHoliday":true},{"day":23,"dayOfWeek":"日","content":"","isHoliday":true},{"day":24,"dayOfWeek":"月","content":" 月2","isHoliday":false},{"day":25,"dayOfWeek":"火","content":" 火2","isHoliday":false},{"day":26,"dayOfWeek":"水","content":" 水3","isHoliday":false},{"day":27,"dayOfWeek":"木","content":" 木3","isHoliday":false},{"day":28,"dayOfWeek":"金","content":" 金3","isHoliday":false},{"day":29,"dayOfWeek":"土","content":"昭和の日","isHoliday":true},{"day":30,"dayOfWeek":"日","content":"","isHoliday":true}]}`);

export { monthlySchedule4, type DaliySchedule, type MonthlySchedule };

