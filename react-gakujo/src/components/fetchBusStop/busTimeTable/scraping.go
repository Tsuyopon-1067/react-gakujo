package busTimeTable

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/gocolly/colly"
)

func FetchTimeTable(url string, routeCol int, allRouteCol int) *BusTimeTable {
	weekday := []*Bus{}
	holiday := []*Bus{}

	c := colly.NewCollector()
	c.OnHTML("body", func(e *colly.HTMLElement) {
		routePath := fmt.Sprintf("body > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(%d) > td:nth-child(%d)", 2, routeCol)
		routeText := e.DOM.Find(routePath).Text()
		for i := 3; i < 24; i++ {
			path := fmt.Sprintf("body > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(%d) > td:nth-child(%d)", i, 1)
			hourText := e.DOM.Find(path).Text()
			hourText = removeSpace(hourText)
			if hourText == "" {
				return
			}
			hour, _ := strconv.Atoi(hourText)
			newWeekday := fetchHour(i, 1+routeCol, e, routeText, hour)
			newHoliday := fetchHour(i, 1+allRouteCol+routeCol, e, routeText, hour)
			weekday = append(weekday, *newWeekday...)
			holiday = append(holiday, *newHoliday...)
		}
	})

	c.Visit(url)
	res := BusTimeTable{Weekday: weekday, Holiday: holiday}
	return &res
}

func fetchHour(row int, col int, e *colly.HTMLElement, routeText string, hour int) *[]*Bus {
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

		minute, _ := strconv.Atoi(text)
		option := ""
		if len(text) > 2 {
			option = text[2:]
			option = strings.Replace(option, "(", "", -1)
			option = strings.Replace(option, ")", "", -1)
		}
		time := Time{Hour: hour, Minute: minute}
		newData := Bus{DepartureTime: time, Option: option, Omuni: omuni, Route: routeText}
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
