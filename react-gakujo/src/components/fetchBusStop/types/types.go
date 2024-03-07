package busTimeTable

import "fmt"

type BusTimeTable struct {
	Weekday []*Bus
	Holiday []*Bus
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

type Bus struct {
	DepartureTime Time
	Route         string
	Omuni         bool
}

func (b *Bus) Text() string {
	if b.Omuni {
		return fmt.Sprintf("%s %s O", b.DepartureTime.Text(), b.Route)
	}
	return fmt.Sprintf("%s %s X", b.DepartureTime.Text(), b.Route)
}

type Time struct {
	Hour   int
	Minute int
}

func (t *Time) Text() string {
	return fmt.Sprintf("%02d:%02d", t.Hour, t.Minute)
}
