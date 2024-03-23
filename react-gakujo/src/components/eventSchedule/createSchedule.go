package main

import (
	"encoding/csv"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	file, err := os.Open("./event2024.csv")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	r := csv.NewReader(file)
	rows, err := r.ReadAll()
	if err != nil {
		log.Fatal(err)
	}

	eventMonthList := []MonthlySchedule{}
	for i := 0; i < 12; i++ {
		eventMonthList = append(eventMonthList, MonthlySchedule{i + 1, []DailySchedule{}})
	}

	for _, v := range rows {
		for i, _ := range v {
			v[i] = strings.Replace(v[i], " ", "", -1)
		}
		//year, _ := strconv.Atoi(v[1])
		month, _ := strconv.Atoi(v[2])
		day, _ := strconv.Atoi(v[3])
		dayOfWeek, _ := strconv.Atoi(v[4])
		clasDayOfWeek, _ := strconv.Atoi(v[5])
		classNumber, _ := strconv.Atoi(v[6])

		dayOfWeekList := []string{"日", "月", "火", "水", "木", "金", "土"}
		contents := []string{}
		if classNumber != 0 {
			contents = []string{dayOfWeekList[clasDayOfWeek] + strconv.Itoa(classNumber)}
		}
		contents = append(contents, v[7:]...)

		schedule := DailySchedule{day, dayOfWeekList[dayOfWeek], contents[0]}

		eventMonthList[month-1].Data = append(eventMonthList[month-1].Data, schedule)
	}

	// start from April
	newList := []MonthlySchedule{}
	for i, _ := range eventMonthList {
		month := (i + 3) % 12
		newList = append(newList, eventMonthList[month])
	}

	jsonString := ToJson(&newList)
	fmt.Println(jsonString)
}

func ToJson(month *[]MonthlySchedule) string {
	e, err := json.Marshal(month)
	if err != nil {
		return "error: " + err.Error()
	}
	return string(e)
}

type DailySchedule struct {
	Day       int    `json:"day"`
	DayOfWeek string `json:"dayOfWeek"`
	Content   string `json:"content"`
}

type MonthlySchedule struct {
	Month int             `json:"month"`
	Data  []DailySchedule `json:"data"`
}
