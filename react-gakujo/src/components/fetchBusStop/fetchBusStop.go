package main

// go get -u github.com/gocolly/colly/...
import (
	"fmt"

	"github.com/gocolly/colly"
)

func main() {
	url1 := "https://info.entetsu.co.jp/navi/pc/dispjikokutable.aspx?tp=HTML&bs=290020&pn=1&nw=0"
	//url2 := "https://info.entetsu.co.jp/navi/pc/dispjikokutable.aspx?tp=HTML&bs=290020&pn=5&nw=0"

	c := colly.NewCollector()

	i := 0
	c.OnHTML("body", func(e *colly.HTMLElement) {

		i++
		fmt.Printf("%d %s\n", i, e.DOM.Find("body > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(2) > a:nth-child(1)").Text())
	})

	c.Visit(url1)
}
