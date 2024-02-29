package main

import (
	"encoding/json"
	"fmt"
	"strconv"
)
func main() {
	list4 := []HelperSchedule {
		HelperSchedule{[]string{""}, true, 0},
		HelperSchedule{[]string{""}, true, 0},
		HelperSchedule{[]string{""}, false, 0},
		HelperSchedule{[]string{"入学式"}, false, 0},
		HelperSchedule{[]string{"ガイダンス"}, false, 0}, // 5
		HelperSchedule{[]string{"ガイダンス"}, false, 0},
		HelperSchedule{[]string{"ガイダンス"}, false, 0},
		HelperSchedule{[]string{""}, true, 0},
		HelperSchedule{[]string{""}, true, 0},
		HelperSchedule{[]string{"ガイダンス"}, false, 0}, // 10
		HelperSchedule{[]string{""}, false, 0},
		HelperSchedule{[]string{"授業開始"}, false, 1},
		HelperSchedule{[]string{""}, false, 1},
		HelperSchedule{[]string{""}, false, 1},
		HelperSchedule{[]string{""}, true, 0}, // 15
		HelperSchedule{[]string{""}, true, 0},
		HelperSchedule{[]string{""}, false, 1},
		HelperSchedule{[]string{""}, false, 1},
		HelperSchedule{[]string{""}, false, 2},
		HelperSchedule{[]string{""}, false, 2}, // 20
		HelperSchedule{[]string{""}, false, 2},
		HelperSchedule{[]string{""}, true, 0},
		HelperSchedule{[]string{""}, true, 0},
		HelperSchedule{[]string{""}, false, 2},
		HelperSchedule{[]string{""}, false, 2}, // 25
		HelperSchedule{[]string{""}, false, 3},
		HelperSchedule{[]string{""}, false, 3},
		HelperSchedule{[]string{""}, false, 3},
		HelperSchedule{[]string{"昭和の日"}, true, 0},
		HelperSchedule{[]string{""}, true, 0}, // 30
	}
	schedule4 := []DailySchedule{}
	for i, s := range list4 {
		schedule4 = append(schedule4, s.ToSchedule(s.Content, i+1, s.IsHoliday, s.ClassNumber, 6))
	}
	month4 := &MonthlySchedule{4, schedule4}
	str := ToJson(month4)
	fmt.Println(str)
}

func ToJson(month *MonthlySchedule) string {
	e, err := json.Marshal(month)
    if err != nil {
		return "error: " + err.Error()
    }
	return string(e)
}

type DailySchedule struct {
	Day int `json:"day"`
	DayOfWeek string `json:"dayOfWeek"`
	Content string `json:"content"`
	IsHoliday bool `json:"isHoliday"`
}

type HelperSchedule struct {
	Content []string
	IsHoliday bool
	ClassNumber int
}


func (*HelperSchedule) ToSchedule(contents []string, day int, isHoliday bool, classNumber int, dayOfWeekStart int) DailySchedule {
	dayOfWeekList := []string{"日", "月", "火", "水", "木", "金", "土"};
	dayOfWeek := dayOfWeekList[(day+dayOfWeekStart-1)%7];
	content := "";
	for _, c := range contents {
		content += c + " "
	}
	if (classNumber != 0) {
		content += dayOfWeek + strconv.Itoa(classNumber) + " "
	}
	content = content[:len(content)-1]
	return DailySchedule{ day, dayOfWeek, content, isHoliday}
}

type MonthlySchedule struct {
	Month int `json:"month"`
	Data []DailySchedule `json:"data"`
}