package main

// go get -u github.com/gocolly/colly/...
import (
	"fetchBusStop/busTimeTable"
	"fmt"
)

func main() {
	url1 := "https://info.entetsu.co.jp/navi/pc/dispjikokutable.aspx?tp=HTML&bs=290020&pn=1&nw=0"
	url2 := "https://info.entetsu.co.jp/navi/pc/dispjikokutable.aspx?tp=HTML&bs=290020&pn=5&nw=0"
	data1 := *busTimeTable.FetchTimeTable(url1, 1, 1)
	data2 := *busTimeTable.FetchTimeTable(url2, 1, 2)
	data3 := *busTimeTable.FetchTimeTable(url2, 2, 2)
	fmt.Println(data1.Text())
	fmt.Println(data2.Text())
	fmt.Println(data3.Text())
}
