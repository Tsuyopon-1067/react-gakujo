package main

// go get -u github.com/gocolly/colly/...
import (
	"fmt"
	"strings"

	"github.com/gocolly/colly"
)

func main() {
	url1 := "https://info.entetsu.co.jp/navi/pc/dispjikokutable.aspx?tp=HTML&bs=290020&pn=1&nw=0"
	//url2 := "https://info.entetsu.co.jp/navi/pc/dispjikokutable.aspx?tp=HTML&bs=290020&pn=5&nw=0"

	c := colly.NewCollector()

	c.OnHTML("body", func(e *colly.HTMLElement) {

		for i := 3; i < 24; i++ {
			fmt.Printf("%d:", i)
			for j := 1; j < 20; j++ {
				path := fmt.Sprintf("body > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(%d) > td:nth-child(%d)", i, j)
				text := e.DOM.Find(path).Text()
				text = strings.Replace(text, " ", "", -1)
				text = strings.Replace(text, "\t", "", -1)
				text = strings.Replace(text, "\n", "", -1)
				if text == "" {
					break
				}
				fmt.Printf("%d:%s, ", j, text)
			}
			fmt.Println()
		}
	})

	c.Visit(url1)
}
