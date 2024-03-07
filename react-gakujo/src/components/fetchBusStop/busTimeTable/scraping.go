package busTimeTable

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/gocolly/colly"
)

func FetchTimeTable(url string) *BusTimeTable {
	weekday := []*Bus{}
	holiday := []*Bus{}

	c := colly.NewCollector()
	c.OnHTML("body", func(e *colly.HTMLElement) {
		for i := 3; i < 24; i++ {
			path := fmt.Sprintf("body > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(%d) > td:nth-child(%d)", i, 1)
			text := e.DOM.Find(path).Text()
			text = removeSpace(text)
			if text == "" {
				return
			}
			newWeekday := fetchHour(i, 2, e)
			newHoliday := fetchHour(i, 3, e)
			weekday = append(weekday, *newWeekday...)
			holiday = append(holiday, *newHoliday...)
		}
	})

	c.Visit(url)
	res := BusTimeTable{Weekday: weekday, Holiday: holiday}
	return &res
}

func fetchHour(row int, col int, e *colly.HTMLElement) *[]*Bus {
	res := []*Bus{}
	for i := 1; i <= 20; i++ {
		path := fmt.Sprintf("body > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(%d) > td:nth-child(%d) > a:nth-child(%d)", row, col, i)
		text := e.DOM.Find(path).Text()
		text = removeSpace(text)
		if text == "" {
			break
		}

		fontPath := fmt.Sprintf("body > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(%d) > td:nth-child(%d) > a:nth-child(%d) > font", row, col, i)
		fontText := e.DOM.Find(fontPath).Text()
		fontText = removeSpace(fontText)
		omuni := true
		if fontText == "" {
			omuni = false
		}

		hour := row + 2
		minute, _ := strconv.Atoi(text)
		route := ""
		if len(text) > 2 {
			route = text[2:]
			route = strings.Replace(route, "(", "", -1)
			route = strings.Replace(route, ")", "", -1)
		}
		time := Time{Hour: hour, Minute: minute}
		newData := Bus{DepartureTime: time, Route: route, Omuni: omuni}
		res = append(res, &newData)
	}
	return &res
}

func removeSpace(text string) string {
	text = strings.Replace(text, " ", "", -1)
	text = strings.Replace(text, "\t", "", -1)
	text = strings.Replace(text, "\n", "", -1)
	return text
}
