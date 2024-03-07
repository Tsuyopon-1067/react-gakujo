package main

// go get -u github.com/gocolly/colly/...
import (
	"fetchBusStop/busTimeTable"
	"fmt"
)

func main() {
	url1 := "https://info.entetsu.co.jp/navi/pc/dispjikokutable.aspx?tp=HTML&bs=290020&pn=1&nw=0"
	//url2 := "https://info.entetsu.co.jp/navi/pc/dispjikokutable.aspx?tp=HTML&bs=290020&pn=5&nw=0"
	data1 := *busTimeTable.FetchTimeTable(url1)
	fmt.Println(data1.Text())

}
