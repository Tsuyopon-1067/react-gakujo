# 行事予定データ形式

## 場所

react-gakujo/src/components/eventShedule/

## 実行

```
go run createSchedule.go > hoge.json
```

## csv

-   A(0)：日付 （yyyy-mm-dd）
-   B(1)：年
-   C(2)：月
-   D(3)：日
-   E(4)：曜日
-   F(5)：授業曜日（月曜授業など対応用）
-   G(6)：授業回数（月 3 など） 0 なら休み
-   H(7) 以降：行事内容など

## Go

### DailySchedule

1 日の予定を保存する．

-   Day：日付
-   DayOfWeek：曜日
-   Content：予定配列

### MonthlySchedule

-   Month：月
-   Data：DailySchedule 配列

## TypeScript(React)

### DaliySchedule

-   day：日付
-   dayOfWeek：曜日
-   content：予定

## MonthlySchedule

-   month：月
-   data：DaliySchedule
