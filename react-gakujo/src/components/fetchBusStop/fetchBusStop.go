package main

// go get -u github.com/gocolly/colly/...
import (
	"encoding/json"
	"fetchBusStop/busTimeTable"
	"fmt"
)

func main() {
	url1 := "https://info.entetsu.co.jp/navi/pc/dispjikokutable.aspx?tp=HTML&bs=290020&pn=1&nw=0"
	url2 := "https://info.entetsu.co.jp/navi/pc/dispjikokutable.aspx?tp=HTML&bs=290020&pn=5&nw=0"
	data1 := *busTimeTable.FetchTimeTable(url1, 1, 1)
	data2 := *busTimeTable.FetchTimeTable(url2, 1, 2)
	data3 := *busTimeTable.FetchTimeTable(url2, 2, 2)

	allWeekDay := append(data1.Weekday, data2.Weekday...)
	allWeekDay = append(allWeekDay, data3.Weekday...)
	allHoliday := append(data1.Holiday, data2.Holiday...)
	allHoliday = append(allHoliday, data3.Holiday...)
	allData := busTimeTable.BusTimeTable{Weekday: allWeekDay, Holiday: allHoliday}

	allData.Sort()

	optionToIndex := map[string]int{}
	for _, bus := range allData.Weekday {
		option := bus.Option
		if _, ok := optionToIndex[option]; !ok {
			fmt.Println(option, len(optionToIndex))
		}
	}
	for _, bus := range allData.Holiday {
		option := bus.Option
		if _, ok := optionToIndex[option]; !ok {
			optionToIndex[bus.Option] = len(optionToIndex)
		}
	}

	out, _ := json.Marshal(allData)
	fmt.Println(string(out))

	fmt.Println(optionToIndex)
}
