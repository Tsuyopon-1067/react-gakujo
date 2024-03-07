package busTimeTable

import (
	"fmt"
	"sort"
)

type BusTimeTable struct {
	Weekday []*Bus `json:"weekday"`
	Holiday []*Bus `json:"holiday"`
}

func (b *BusTimeTable) Text() string {
	res := "平日\n"
	for _, bus := range b.Weekday {
		res += (*bus).Text() + "\n"
	}
	res += "休日\n"
	for _, bus := range b.Holiday {
		res += (*bus).Text() + "\n"
	}
	return res
}

func (b *BusTimeTable) Sort() {
	sort.Slice(b.Weekday, BusCompare(b.Weekday))
	sort.Slice(b.Holiday, BusCompare(b.Holiday))
}

func (b *BusTimeTable) createToIndexMap() (map[string]int, map[string]int) {
	routeToIndex := map[string]int{}
	optionToIndex := map[string]int{}

	for _, bus := range b.Weekday {
		option := bus.Option
		if _, ok := optionToIndex[option]; !ok {
			optionToIndex[option] = len(optionToIndex)
		}
		route := bus.Route
		if _, ok := optionToIndex[route]; !ok {
			routeToIndex[route] = len(routeToIndex)
		}
	}
	for _, bus := range b.Holiday {
		option := bus.Option
		if _, ok := optionToIndex[option]; !ok {
			optionToIndex[option] = len(optionToIndex)
		}
		route := bus.Route
		if _, ok := optionToIndex[route]; !ok {
			routeToIndex[route] = len(routeToIndex)
		}
	}
	return routeToIndex, optionToIndex
}

func (b *BusTimeTable) NewDataForJson() *BusTimeTableForJson {
	routeToIndex, optionToIndex := b.createToIndexMap()

	weekday := make([]*BusForJson, len(b.Weekday))
	holiday := make([]*BusForJson, len(b.Holiday))
	for i, bus := range b.Weekday {
		weekday[i] = bus.NewDataForJson(routeToIndex, optionToIndex)
	}
	for i, bus := range b.Holiday {
		holiday[i] = bus.NewDataForJson(routeToIndex, optionToIndex)
	}

	return &BusTimeTableForJson{Weekday: weekday, Holiday: holiday}
}

type Bus struct {
	DepartureTime Time   `json:"departureTime"`
	Route         string `json:"route"`
	Option        string `json:"option"`
	Omuni         bool   `json:"omuni"`
}

func (b *Bus) Text() string {
	omuniText := "X"
	if b.Omuni {
		omuniText = "O"
	}
	return fmt.Sprintf("%s: %s | %s | %s", b.DepartureTime.Text(), b.Route, b.Option, omuniText)
}

func (b *Bus) NewDataForJson(routeToIndex map[string]int, optionToIndex map[string]int) *BusForJson {
	route := routeToIndex[b.Route]
	option := optionToIndex[b.Option]
	return &BusForJson{DepartureTime: b.DepartureTime, Route: route, Option: option, Omuni: b.Omuni}
}

type Time struct {
	Hour   int
	Minute int
}

func (t *Time) Text() string {
	return fmt.Sprintf("%02d:%02d", t.Hour, t.Minute)
}

func (t *Time) Value() int {
	return t.Hour*60 + t.Minute
}

func BusCompare(list []*Bus) func(i, j int) bool {
	return func(i, j int) bool {
		return list[i].DepartureTime.Value() < list[j].DepartureTime.Value()
	}
}
