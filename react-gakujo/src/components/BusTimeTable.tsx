import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
} from "@mui/material";
import * as React from "react";
import styles from "./BusTimeTable.module.css";
import BusRoute from "./subPage/BusRoute";

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

    const BusTimeTableAcordion = ({ list }: BusTimeTableProps) => {
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

    const handleChange = () => { };
    const [value, setValue] = React.useState(0);
    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="平日" onClick={() => setValue(0)} />
                    <Tab label="休日" onClick={() => setValue(1)} />
                </Tabs>
            </Box>
            <div className={styles.main_div}>
                <TabPanel value={value} index={0}>
                    <BusTimeTableAcordion list={weekdayList} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <BusTimeTableAcordion list={holidayList} />
                </TabPanel>
                <div className={styles.map_div}>
                    <BusRoute style={{ width: "100%" }} />
                </div>
            </div>
        </Box>
    );
}

interface TabPanelProps {
    value: number;
    index: number;
    children?: React.ReactNode;
}

const TabPanel = ({ value, index, children }: TabPanelProps) => {
    return value === index && <div>{children}</div>;
};

interface HourAccordionProps {
    hour: number;
    list: Bus[];
}

const HourAccordion = ({ hour, list }: HourAccordionProps) => (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} sx={{ justifyContent: "center" }} >
            {hour}時
        </AccordionSummary>
        <AccordionDetails>
            <TableContainer>
                <HourTable list={list} hour={hour} />
            </TableContainer>
        </AccordionDetails>
    </Accordion >
);

const HourTable = ({ list }: HourAccordionProps) => {
    const routeLabels = ["尾張町・田町", "ゆりの木通り", "尾張町・常盤町"];
    const optionLabels = [
        <></>,
        <>
            <span className={styles.table_cell_span}>下池川</span>
            <span className={styles.table_cell_span}>経由</span>
        </>,
        <>
            <span className={styles.table_cell_span}>開校日</span>
            <span className={styles.table_cell_span}>のみ</span>
        </>,
        <>
            <span className={styles.table_cell_span}>浜松</span>
            <span className={styles.table_cell_span}>北高行</span>
            <span className={styles.table_cell_span}>・</span>
            <span className={styles.table_cell_span}>開校日</span>
            <span className={styles.table_cell_span}>のみ</span>
        </>,
        <>
            <span className={styles.table_cell_span}>北高</span>
            <span className={styles.table_cell_span}>・</span>
            <span className={styles.table_cell_span}>聖星高</span>
            <span className={styles.table_cell_span}>・</span>
            <span className={styles.table_cell_span}>西高行</span>
            <span className={styles.table_cell_span}>・</span>
            <span className={styles.table_cell_span}>開校日</span>
            <span className={styles.table_cell_span}>のみ</span>
        </>,
        <>
            <span className={styles.table_cell_span}>伝馬町</span>
            <span className={styles.table_cell_span}>経由</span>
        </>,
        <></>, // 浜松北高経由 下池川経由ではない
    ];
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell align="center" sx={{ width: 20, padding: 0.5 }}>
                        <p className={styles.table_cell_p}>分</p>
                    </TableCell>
                    <TableCell align="center" sx={{ width: 60, padding: 0.5 }}>
                        <p className={styles.table_cell_p}>オムニ</p>
                    </TableCell>
                    <TableCell align="center" sx={{ width: 120, padding: 1 }}>
                        <p className={styles.table_cell_p}>経由</p>
                    </TableCell>
                    <TableCell align="center" sx={{ padding: 1 }}>
                        <p className={styles.table_cell_p}>備考</p>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {list.map((element) => (
                    <TableRow>
                        <TableCell
                            align="center"
                            sx={{ width: 20, padding: 0.5 }}
                        >
                            <p className={styles.table_cell_p}>
                                {element.departureTime.minute}
                            </p>
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{ width: 60, padding: 0.5 }}
                        >
                            <p className={styles.table_cell_p}>
                                {element.omuni ? "O" : "X"}
                            </p>
                        </TableCell>
                        <TableCell align="center" sx={{ padding: 1 }}>
                            <p className={styles.table_cell_p}>
                                {routeLabels[element.route]}
                            </p>
                        </TableCell>
                        <TableCell align="center" sx={{ padding: 1 }}>
                            <p className={styles.table_cell_p}>
                                {optionLabels[element.option]}
                            </p>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default BusTimeTable;
