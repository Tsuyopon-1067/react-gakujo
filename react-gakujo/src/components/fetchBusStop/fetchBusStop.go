package main

// go get -u github.com/gocolly/colly/...
import (
	"fmt"
	"strings"

	"github.com/gocolly/colly"
)

type Bus struct {
	Departure string
	route string
}

func main() {
	url1 := "https://info.entetsu.co.jp/navi/pc/dispjikokutable.aspx?tp=HTML&bs=290020&pn=1&nw=0"
	//url2 := "https://info.entetsu.co.jp/navi/pc/dispjikokutable.aspx?tp=HTML&bs=290020&pn=5&nw=0"
	data1 := []Bus{}
	fetchTimeTable(url1, data1)

}

func fetchTimeTable(url string, data []Bus) {
	c := colly.NewCollector()

	c.OnHTML("body", func(e *colly.HTMLElement) {
		for i := 3; i < 24; i++ {
			path := fmt.Sprintf("body > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(%d) > td:nth-child(%d)", i, 1)
			text := e.DOM.Find(path).Text()
			text = removeSpace(text)
			fmt.Printf("[%s]\n", text)
			for j := 2; j <= 3; j++ {
				fetchHour(i, j, e)
			}
		}
	})

	c.Visit(url)
}

func fetchHour(row int, col int, e *colly.HTMLElement) {
	for i := 1; i <= 20; i++ {
		path := fmt.Sprintf("body > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(%d) > td:nth-child(%d) > a:nth-child(%d)", row, col, i)
		text := e.DOM.Find(path).Text()
		text = removeSpace(text)
		if text == "" {
			return
		}
		fmt.Printf("%d,%d,%d: %s, \n", row, col, i, text)
	}
}

func removeSpace(text string) string {
	text = strings.Replace(text, " ", "", -1)
	text = strings.Replace(text, "\t", "", -1)
	text = strings.Replace(text, "\n", "", -1)
	return text
}