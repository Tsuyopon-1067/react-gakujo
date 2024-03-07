import { jsx } from "@emotion/react";
import styles from "./BusTimeTable.module.css";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface BusTimeTable {
    weekday: Bus[];
    holiday: Bus[];
}

interface Bus {
    departureTime: Time;
    route: number;
    option: number;
    omuni: boolean;
}

interface Time {
    hour: number;
    minute: number;
}

interface BusTimeTableProps {
    list: Bus[];
}

function BusTimeTable() {
    const table: BusTimeTable = JSON.parse(
        `{"weekday":[{"departureTime":{"hour":5,"minute":58},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":6,"minute":6},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":6,"minute":15},"route":2,"option":1,"omuni":true},{"departureTime":{"hour":6,"minute":16},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":6,"minute":19},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":6,"minute":24},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":6,"minute":32},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":6,"minute":33},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":6,"minute":36},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":6,"minute":41},"route":2,"option":1,"omuni":true},{"departureTime":{"hour":6,"minute":44},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":6,"minute":44},"route":1,"option":2,"omuni":true},{"departureTime":{"hour":6,"minute":52},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":6,"minute":57},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":1},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":3},"route":0,"option":3,"omuni":true},{"departureTime":{"hour":7,"minute":3},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":6},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":9},"route":0,"option":4,"omuni":false},{"departureTime":{"hour":7,"minute":9},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":10},"route":1,"option":5,"omuni":false},{"departureTime":{"hour":7,"minute":10},"route":2,"option":6,"omuni":true},{"departureTime":{"hour":7,"minute":12},"route":0,"option":4,"omuni":false},{"departureTime":{"hour":7,"minute":15},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":18},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":21},"route":1,"option":2,"omuni":true},{"departureTime":{"hour":7,"minute":28},"route":0,"option":2,"omuni":true},{"departureTime":{"hour":7,"minute":33},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":37},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":7,"minute":40},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":45},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":45},"route":2,"option":6,"omuni":true},{"departureTime":{"hour":7,"minute":48},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":56},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":58},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":8,"minute":4},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":8,"minute":16},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":8,"minute":22},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":8,"minute":26},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":8,"minute":27},"route":2,"option":1,"omuni":true},{"departureTime":{"hour":8,"minute":36},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":8,"minute":42},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":8,"minute":50},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":8,"minute":58},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":9,"minute":6},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":9,"minute":13},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":9,"minute":19},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":9,"minute":28},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":9,"minute":34},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":9,"minute":36},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":9,"minute":45},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":9,"minute":49},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":9,"minute":57},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":10,"minute":3},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":10,"minute":9},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":10,"minute":15},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":10,"minute":21},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":10,"minute":27},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":10,"minute":33},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":10,"minute":39},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":10,"minute":45},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":10,"minute":51},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":10,"minute":57},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":11,"minute":3},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":9},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":15},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":21},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":27},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":33},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":39},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":11,"minute":45},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":51},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":57},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":12,"minute":3},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":12,"minute":9},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":12,"minute":15},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":12,"minute":21},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":12,"minute":27},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":12,"minute":33},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":12,"minute":39},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":12,"minute":45},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":12,"minute":51},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":12,"minute":57},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":3},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":9},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":13,"minute":15},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":21},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":27},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":33},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":39},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":45},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":51},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":57},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":3},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":9},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":15},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":21},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":27},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":33},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":39},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":14,"minute":45},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":51},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":57},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":15,"minute":3},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":15,"minute":9},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":15,"minute":15},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":15,"minute":21},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":15,"minute":27},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":15,"minute":33},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":15,"minute":40},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":15,"minute":45},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":15,"minute":52},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":15,"minute":59},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":4},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":10},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":16},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":20},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":25},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":28},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":35},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":16,"minute":40},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":45},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":52},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":16,"minute":55},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":17,"minute":0},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":17,"minute":4},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":17,"minute":15},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":17,"minute":16},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":17,"minute":22},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":17,"minute":30},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":17,"minute":33},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":17,"minute":42},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":17,"minute":49},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":17,"minute":59},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":18,"minute":4},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":18,"minute":9},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":18,"minute":14},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":18,"minute":19},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":18,"minute":24},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":18,"minute":29},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":18,"minute":34},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":18,"minute":39},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":18,"minute":49},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":18,"minute":53},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":19,"minute":5},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":19,"minute":10},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":19,"minute":15},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":19,"minute":29},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":19,"minute":37},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":19,"minute":47},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":19,"minute":52},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":20,"minute":7},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":20,"minute":12},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":20,"minute":21},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":20,"minute":46},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":20,"minute":56},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":21,"minute":6},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":21,"minute":26},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":21,"minute":51},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":22,"minute":21},"route":0,"option":0,"omuni":true}],"holiday":[{"departureTime":{"hour":6,"minute":2},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":6,"minute":12},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":6,"minute":20},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":6,"minute":31},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":6,"minute":47},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":6,"minute":49},"route":2,"option":1,"omuni":true},{"departureTime":{"hour":7,"minute":1},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":8},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":7,"minute":9},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":21},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":30},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":7,"minute":36},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":45},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":7,"minute":49},"route":2,"option":1,"omuni":true},{"departureTime":{"hour":7,"minute":56},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":8,"minute":2},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":8,"minute":5},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":8,"minute":18},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":8,"minute":22},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":8,"minute":32},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":8,"minute":38},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":8,"minute":47},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":8,"minute":53},"route":2,"option":1,"omuni":true},{"departureTime":{"hour":8,"minute":58},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":9,"minute":7},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":9,"minute":12},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":9,"minute":18},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":9,"minute":22},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":9,"minute":33},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":9,"minute":37},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":9,"minute":49},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":9,"minute":59},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":10,"minute":4},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":10,"minute":16},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":10,"minute":22},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":10,"minute":28},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":10,"minute":34},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":10,"minute":40},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":10,"minute":46},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":10,"minute":52},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":10,"minute":58},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":4},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":10},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":16},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":22},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":28},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":34},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":40},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":11,"minute":46},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":52},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":11,"minute":58},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":12,"minute":4},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":12,"minute":10},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":12,"minute":16},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":12,"minute":22},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":12,"minute":28},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":12,"minute":34},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":12,"minute":40},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":12,"minute":46},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":12,"minute":52},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":12,"minute":58},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":4},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":10},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":16},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":22},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":28},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":34},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":40},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":46},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":52},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":13,"minute":58},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":4},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":14,"minute":10},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":16},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":22},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":28},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":34},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":40},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":46},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":14,"minute":52},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":14,"minute":58},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":15,"minute":4},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":15,"minute":10},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":15,"minute":16},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":15,"minute":22},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":15,"minute":28},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":15,"minute":34},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":15,"minute":40},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":15,"minute":46},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":15,"minute":52},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":15,"minute":58},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":16,"minute":4},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":10},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":14},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":24},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":29},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":34},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":44},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":49},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":16,"minute":59},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":17,"minute":3},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":17,"minute":14},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":17,"minute":24},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":17,"minute":29},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":17,"minute":38},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":17,"minute":45},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":17,"minute":58},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":18,"minute":3},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":18,"minute":13},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":18,"minute":18},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":18,"minute":29},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":18,"minute":43},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":19,"minute":8},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":19,"minute":16},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":19,"minute":27},"route":1,"option":0,"omuni":false},{"departureTime":{"hour":19,"minute":42},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":20,"minute":10},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":20,"minute":40},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":20,"minute":55},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":21,"minute":4},"route":1,"option":0,"omuni":true},{"departureTime":{"hour":21,"minute":20},"route":0,"option":0,"omuni":true},{"departureTime":{"hour":21,"minute":50},"route":0,"option":0,"omuni":false},{"departureTime":{"hour":22,"minute":20},"route":0,"option":0,"omuni":false}]}`
    ) as BusTimeTable;
    const weekdayList = table.weekday;
    const holidayList = table.holiday;

    const ToBusTimeTableComponent = ({ list }: BusTimeTableProps) => {
        const splitList: Bus[][] = [];
        let hour = -1;
        let tmpList: Bus[] = [] as Bus[];
        for (let i = 0; i < list.length; i++) {
            const newHour = list[i].departureTime.hour;
            if (hour != newHour) {
                hour = newHour;
                if (tmpList.length != 0) {
                    splitList.push(tmpList);
                }
                tmpList = [] as Bus[];
            }
            tmpList.push(list[i]);
        }
        return (
            <>
                {splitList.map((hourList: Bus[]) => {
                    if (hourList.length == 0) {
                        return;
                    }
                    const hour = hourList[0].departureTime.hour;
                    return (
                        <HourAccordion key={hour} hour={hour} list={hourList} />
                    );
                })}
            </>
        );
    };

    return (
        <>
            <ToBusTimeTableComponent list={weekdayList} />
        </>
    );
}

interface HourAccordionProps {
    hour: number;
    list: Bus[];
}

const HourAccordion = ({ hour, list }: HourAccordionProps) => (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
            {hour}時
        </AccordionSummary>
        <AccordionDetails>
            <TableContainer>
                <HourTable list={list} hour={hour} />
            </TableContainer>
        </AccordionDetails>
    </Accordion>
);

const HourTable = ({ list }: HourAccordionProps) => {
    const routeLabels = [
        "市役所 尾張町 浜松駅",
        "市役所 ゆりの木通り 浜松駅",
        "市役所 常盤町 浜松駅",
    ];
    const optionLabels = ["", "下", "学", "学キ", "学星", "伝", "浜"];
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell align="center">分</TableCell>
                    <TableCell align="center">オムニ</TableCell>
                    <TableCell align="center">経由</TableCell>
                    <TableCell align="center">備考</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {list.map((element) => (
                    <TableRow>
                        <TableCell align="center">
                            {element.departureTime.minute}
                        </TableCell>
                        <TableCell align="center">
                            {element.omuni ? "O" : "X"}
                        </TableCell>
                        <TableCell align="center">
                            {routeLabels[element.route]}
                        </TableCell>
                        <TableCell align="center">
                            {optionLabels[element.option]}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default BusTimeTable;
