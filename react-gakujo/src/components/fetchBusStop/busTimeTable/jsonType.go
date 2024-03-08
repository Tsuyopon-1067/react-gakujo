package busTimeTable

type BusTimeTableForJson struct {
	Weekday []*BusForJson `json:"weekday"`
	Holiday []*BusForJson `json:"holiday"`
}

type BusForJson struct {
	DepartureTime Time `json:"departureTime"`
	Route         int  `json:"route"`
	Option        int  `json:"option"`
	Omuni         bool `json:"omuni"`
}

func (b *BusTimeTableForJson) New(arg BusTimeTable, optionToIndex map[string]int, routeToIndex map[string]int) *BusTimeTableForJson {
	weekday := make([]*BusForJson, len(arg.Weekday))
	holiday := make([]*BusForJson, len(arg.Holiday))

	for i, bus := range arg.Weekday {
		option := optionToIndex[bus.Option]
		route := routeToIndex[bus.Route]
		weekday[i] = &BusForJson{DepartureTime: bus.DepartureTime, Route: route, Option: option, Omuni: bus.Omuni}
	}

	for i, bus := range arg.Holiday {
		option := optionToIndex[bus.Option]
		route := routeToIndex[bus.Route]
		holiday[i] = &BusForJson{DepartureTime: bus.DepartureTime, Route: route, Option: option, Omuni: bus.Omuni}
	}
	return &BusTimeTableForJson{Weekday: weekday, Holiday: holiday}
}
