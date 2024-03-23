import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
    FormControlLabel,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { useState } from "react";
import { CSSProperties } from "styled-components";
import styles from "./CampusMap.module.css";

interface PropsType {
    style?: CSSProperties;
    color?: string;
    arrow: boolean;
}

const MapSvg = ({ style, arrow }: PropsType) => {
    return (
        <svg
            viewBox="0 0 131.849 105.126"
            version="1.1"
            id="svg1"
            style={style ? style : undefined}
        >
            <rect
                style={{
                    display: "inline",
                    fill: "#f8f7f7",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: "0.351",
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                }}
                id="rect55"
                width="131.498"
                height="104.775"
                x="0.17550001"
                y="0.17550001"
            />
            <g
                id="layer3"
                style={{ display: "inline" }}
                transform="translate(0.00165327,-0.0019296)"
            >
                <path
                    id="path3061"
                    style={{
                        color: "#000000",
                        fill: "#d8e0e7",
                        stroke: "#000000",
                        strokeWidth: "0.0529167",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    d="M 75.307962,0.35126228 V 9.9878834 h -7.47758 V 9.3553638 H 65.278083 V 9.9878834 H 45.668427 V 8.2474211 h -2.072741 v 1.7404623 h -0.0031 V 32.572551 h -0.12609 l -0.09922,3.22461 h 0.365869 v 4.638476 H 4.6719633 V 33.646904 H 0.34716265 l -5.1677e-4,2.36368 H 3.5226794 v 8.209835 L 1.1584826,46.14485 V 62.045171 H 0.3435453 l 0.008268,2.900081 h 9.0500938 c -0.04573,0.906286 -0.041154,3.292233 -0.021704,5.670972 H 7.9229276 v 1.660364 h 1.5177368 v 3.566707 H 7.0170398 v 1.797823 H 3.644119 V 95.638986 L 8.7812732,100.895 h 4.9273478 v -0.3514 H 8.9295845 L 3.9960355,95.496359 V 77.992518 h 3.0210043 v 4.305164 h 2.3383585 v -3.671611 h 1.8613847 v 8.841321 l 3.695382,2.134753 v 10.715625 h 0.3514 V 89.399057 l -3.697449,-2.134754 v -8.638232 h 9.82679 v 6.048726 h -1.740979 v 4.054017 h 1.740979 v 7.621757 h -0.0026 l -0.740007,3.905189 h 1.130164 l 0.727087,-3.835943 h 24.060547 v 7.571113 h 1.775085 v -7.571113 h 32.528764 v 8.371583 l 7.14375,-0.0165 V 96.419857 H 126.11465 V 93.242273 H 94.13832 v -3.077331 h -3.74189 c -0.391477,-0.550545 -0.867131,-1.180314 -0.867131,-2.230872 0,-0.612873 0.190658,-1.150493 0.398425,-1.730644 0.207768,-0.580151 0.431498,-1.202706 0.431498,-1.952852 0,-0.512886 -0.319317,-0.977892 -0.601513,-1.609721 -0.265156,-0.593676 -0.521368,-1.310408 -0.551388,-2.213818 h 42.258399 l 5.2e-4,-13.417269 H 129.9191 V 51.643739 l -1.12396,0.0057 V 35.797161 h 2.70732 l -0.006,-3.22461 h -19.32647 v -5.355745 h -1.36064 v 5.355745 h -7.9561 v -4.156335 h 3.36775 v -4.163053 h -3.53156 V 13.028008 h 8.12612 v 4.33772 h 1.23041 v -4.33772 h 10.98951 v 3.613216 h 1.35651 V 11.34439 H 104.6302 V 9.9878834 H 85.028299 V 9.4049732 H 82.476 V 9.9878834 H 76.805545 V 0.35126228 Z M 46.328852,11.952105 h 10.155969 v 20.600293 l 0.07545,0.02015 H 46.328852 Z m 11.719698,0 h 19.184359 v 9.638171 h -1.176156 v 2.085144 h 2.299602 V 11.952105 h 4.178556 v 1.183907 H 85.0376 v -1.183907 h 4.227649 v 6.910689 h 3.315044 v -6.910689 h 7.870837 v 8.559684 h -3.397725 v 1.566829 h 3.648355 V 32.572551 H 88.015713 v -2.629297 l -7.14375,0.749309 v 1.879988 h -5.310787 v -1.723409 h -1.899109 v 1.723409 H 62.443631 V 30.83519 h -1.898592 v 1.737361 H 58.04855 Z M 47.147407,35.797161 h 9.604581 v 12.370304 0.427364 l -1.015958,1.016476 h -8.588623 z m 10.781254,0 h 12.343432 v 7.267773 h -1.736328 v -0.520898 h -1.132747 v 1.091406 h 4.489648 0.84336 v -7.838281 h 8.135937 v 4.787304 h -4.415234 v 1.455209 h 4.415234 v 4.816243 h -4.304647 l -0.105419,4.045748 h 4.410066 v 4.838464 h -4.382161 v 3.340365 h 4.382161 v 2.964677 H 64.881208 v -3.063896 h -3.208073 v 3.063896 H 52.26389 v -2.749703 h -2.480468 v 2.749703 H 47.147407 V 50.89443 h 8.642366 l 1.363225,-1.363741 h 4.198193 v -1.256254 h -3.42253 z m 30.087052,0 h 15.918927 v 1.195792 h 1.53169 v -1.195792 h 5.01054 v 6.617167 h -9.2816 v 1.65623 h -1.656229 v 1.953369 h -2.011764 v 8.150407 l 1.44539,1.445389 h 9.118823 v 6.425448 H 96.532506 v -2.3797 h -1.88619 v 2.3797 H 88.015713 V 50.200416 h 4.395598 V 46.4115 h -4.395598 z m 24.402127,0 h 7.83518 v 6.008419 h -7.83518 z m 9.08627,0 h 6.09265 v 16.023828 h -3.1874 V 50.40092 49.634559 h -1.17047 V 48.70645 h -1.73478 z m -48.76395,4.617806 v 1.475879 h 0.913639 V 40.414967 Z M 4.6719633,41.15549 H 10.917577 V 62.045171 H 2.100544 V 46.533456 l 2.5714193,-2.058789 z m 7.8434487,0 H 43.733145 V 62.045171 H 32.948273 v -1.315682 h -3.926892 v 1.315682 H 12.515412 Z m 99.902428,2.143022 h 7.83518 v 5.892146 h 2.70371 v 0.968417 h 0.48421 v 1.661914 h -0.45992 l -0.0217,0.72502 h 0.48162 v 1.932699 h -3.31969 v 8.445996 h -4.56975 v 1.420585 h 0.94775 v 4.438489 h -6.44406 v -3.838526 h 0.63252 v -2.900081 h -0.63252 v -6.018754 h 0.40825 v -1.137915 h -0.40825 v -0.422713 h 1.49707 V 43.897958 h 0.86506 z m -10.32598,0.0124 h 8.38501 V 53.53251 l -2.38538,0.04703 v 1.143599 h -8.747786 l -0.919841,-0.91984 v -6.882784 h 2.011767 v -1.953369 h 1.65623 z m 22.3175,9.235095 h 3.1874 v 0.250631 h 1.03301 v 15.974219 h 1.53738 v 0.90072 h -5.60483 v -0.301274 h -1.50637 v 0.301274 h -3.13262 v -0.887801 h -2.2531 v -4.438489 h 4.09588 l -0.17777,-1.420585 h -0.73019 V 54.73554 h 3.55069 c 0,0 3.5e-4,-1.460127 5.2e-4,-2.189531 z M 12.512828,64.945252 h 8.051188 v 4.883423 h -1.028361 v 1.968872 h 1.028361 v 4.045748 h -8.051188 z m 9.649024,0 h 14.625464 v 10.898043 h -6.689515 v -1.300179 h -2.571936 v 1.300179 h -5.364013 v -5.344376 h 1.32395 v -1.968356 h -1.32395 z m 17.338476,0 h 5.654952 v 7.036263 h -5.654952 z m 7.062618,0 H 56.745271 V 76.147153 H 46.562946 Z m 11.250476,0 h 16.086357 c 0.01746,0.907003 0.400926,1.505827 0.852144,1.945618 0.458338,0.44673 0.967059,0.764208 1.306381,1.191659 l 0.0217,0.02532 2.422591,1.866553 c -0.236063,0.190132 -0.438388,0.405942 -0.606165,0.641304 -0.597624,0.838372 -0.789099,1.880503 -0.789099,2.784843 0,0.531999 -0.1032,0.864234 -0.242362,1.098124 -0.139163,0.23389 -0.320479,0.381073 -0.531234,0.521416 -0.210754,0.140342 -0.451727,0.264182 -0.659908,0.472322 -0.208181,0.20814 -0.361735,0.518385 -0.361735,0.91829 v 7.804692 h -0.533818 l 5.17e-4,2.388485 h 6.093168 v 6.638354 H 60.898505 v -6.501929 h 3.17035 v -1.688785 h -3.17035 v -8.904366 h -3.085083 z m 16.639295,0 h 6.419246 v 4.233334 c -0.753534,0.02228 -1.378504,0.195068 -1.885156,0.472322 L 76.46448,67.708391 c -0.413848,-0.508019 -0.936388,-0.830038 -1.328084,-1.211812 -0.391515,-0.3816 -0.667918,-0.792559 -0.683679,-1.551327 z m 13.562996,0 h 9.508464 v 14.148491 h -5.508708 v -1.434538 h -3.999756 z m 12.865367,0 h 7.21041 v 14.148491 h -7.21041 V 71.03842 h 0.96583 v -2.809647 h -0.96583 z M 80.871963,69.72894 v 14.486454 h -5.008996 v -7.804692 c 0,-0.278461 0.07331,-0.399409 0.201538,-0.527616 0.128232,-0.128208 0.336328,-0.245761 0.574125,-0.40411 0.237796,-0.158351 0.503999,-0.367665 0.701249,-0.699182 0.197251,-0.331515 0.318327,-0.774755 0.318327,-1.379244 0,-0.82497 0.18239,-1.759046 0.685229,-2.464449 0.482338,-0.676641 1.246176,-1.168106 2.528528,-1.207161 z m 29.183747,0.357084 h 8.88318 c 5.5e-4,3.002568 -9.1e-4,6.005151 0,9.007719 h -8.8837 v -2.088245 h 1.75959 v -3.744991 h -1.75959 z m 9.98441,0 h 3.01583 v 0.527099 h 1.50637 v -0.527099 h 5.60483 v 9.007719 h -10.12703 z m -80.539792,3.586344 h 5.654952 v 6.900871 h -5.654952 z m 7.062618,3.924825 h 12.675196 v 15.64504 h -7.140133 v -1.326017 h -1.810225 v 1.326017 h -3.724838 z m -22.980509,1.028878 h 6.824906 v 1.255737 h 1.648995 v -1.255737 h 4.730978 v 14.616162 h -4.875672 v -1.089856 h -1.652612 v 1.089856 h -6.676595 z m 64.433276,1.800924 H 88.6534 c 0.0309,1.006345 0.320129,1.810911 0.600481,2.438611 0.296608,0.664097 0.554488,1.160341 0.554488,1.384928 0,0.640499 -0.191091,1.188392 -0.398426,1.767334 -0.207333,0.578942 -0.431498,1.189462 -0.431498,1.916162 0,1.002682 0.392919,1.70943 0.746725,2.230872 h -1.709457 z m -48.515385,1.837097 h 5.654952 v 9.03304 H 43.400349 V 89.47037 h -1.227832 v 1.826762 H 41.542581 L 40.83203,90.063099 h -1.331702 z m 0,8.150407 h 1.128614 l 0.712618,1.23455 h 3.81372 v 1.593184 h -5.654952 z"
                />
            </g>
            <g
                id="layer6"
                style={{ display: "inline" }}
                transform="translate(0.00165327,-0.0019296)"
            >
                <path
                    id="path64"
                    style={{
                        display: "inline",
                        fill: "#474a4d",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                    }}
                    d="m 88.470266,4.5857631 v 5.3776331 h 15.008254 v -8.180939 h -4.996803 v 2.8033059 z m -42.49043,7.3366859 v 20.65352 l 10.08724,-0.0031 V 11.922449 Z M 13.239199,42.687496 V 62.02275 h 8.780859 l -10e-4,-19.335254 z m 74.764945,23.97063 v 11.013282 h 3.191537 V 66.703602 Z M 60.88642,78.486345 v 6.037357 h 2.560567 v -6.037357 z m 14.971179,0.974617 v 3.836459 h 5.019332 v -3.836459 z m 23.468855,0.934827 v 4.001823 h 7.408336 v -3.985287 z m 26.660386,3.474723 v 13.369727 h 5.49786 V 83.870512 Z m -65.10042,3.390491 v 5.124752 h 2.560567 v -5.124752 z m 14.981514,0.03772 v 3.682462 h 4.817794 v -3.682462 z m -62.434432,9.118823 v 8.314734 h 11.011731 v -8.314734 z m 76.488355,0.0155 v 8.289914 h 23.379163 v -8.289914 z m -31.045134,0.0067 v 6.453854 h 16.136483 v -6.453854 z m 54.425557,-3.374764 0,11.649938 12.7739,0 0,-11.649938 z"
                />
                <path
                    id="path58"
                    style={{
                        display: "inline",
                        fill: "#909398",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                    }}
                    d="m 112.53909,16.56506 v 9.723437 h 2.06705 v 6.300391 l 9.78959,0.01654 V 16.56506 Z M 4.648509,23.406503 V 40.475745 H 8.5883202 V 23.406503 Z m 18.177185,17.775659 v 20.843689 h 1.870687 v -6.086967 h 1.665531 V 41.182162 Z M 128.8213,43.232683 v 4.681368 h 2.17196 V 43.232683 Z M 0.33921128,49.720659 v 9.045443 H 4.7875186 V 49.720659 Z M 129.94268,51.80942 v 15.178919 h 1.06556 V 51.80942 Z"
                />
            </g>
            <g
                id="layer1"
                style={{ display: "inline" }}
                transform="translate(0.00165327,-0.0019296)"
            >
                <rect
                    style={{
                        display: "inline",
                        fill: "#dceff3",
                        fillOpacity: 1,
                        stroke: "#000000",
                        strokeWidth: "0.132292",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    id="rect6"
                    width="21.842602"
                    height="6.8976359"
                    x="24.643946"
                    y="97.083275"
                />
                <path
                    style={{
                        display: "inline",
                        fill: "#c8d9cf",
                        fillOpacity: 1,
                        stroke: "#000000",
                        strokeWidth: "0.132292",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    d="M 0.33978148,0.34692837 H 38.042336 V 11.885242 h 5.390885 V 40.261804 H 8.6405132 V 23.328471 H 0.33978148 Z"
                    id="path66"
                />
                <path
                    id="path67"
                    style={{
                        display: "inline",
                        fill: "#f4ea7a",
                        fillOpacity: 1,
                        stroke: "#000000",
                        strokeWidth: "0.132292",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    d="m 125.44373,19.646009 v 10.54716 h 2.8298 V 19.716289 Z M 66.567727,38.293966 v 4.299479 h 3.274218 v -4.299479 z m -17.784961,0.859896 v 2.877344 h 4.820377 V 39.153862 Z M 5.2722435,41.716496 v 18.214909 l 1.0748698,0.954981 H 9.2864692 L 10.398545,59.774309 V 50.241041 H 8.4389753 V 49.265389 H 10.365472 V 41.716496 Z M 23.480434,66.219393 v 8.348845 h 11.258228 l 0.0021,-8.348845 z m -10.813293,1.774052 v 7.416602 h 6.854362 l 0.03307,-7.416602 z m -7.8253622,0.879533 v 6.321061 H 7.9113589 V 68.874012 Z M 112.88635,71.266631 v 1.781286 l -1.06608,0.05839 v 4.190441 h 2.40915 v 1.226282 h 3.83956 V 71.266626 Z M 12.510044,79.651648 v 4.564063 h 3.538802 v 11.377083 l 3.604948,-0.0062 V 79.651648 Z m -7.2822422,2.445329 v 7.70754 h 5.6415162 v -7.70599 z"
                />
                <path
                    id="path9"
                    style={{
                        display: "inline",
                        fill: "#b19ff4",
                        fillOpacity: 1,
                        stroke: "#000000",
                        strokeWidth: "0.132292",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    d="m 122.23875,70.555563 v 8.94364 h 3.28301 v -0.610815 h 3.283 l 0.002,-8.332825 z m -96.351744,9.322428 -5.17e-4,12.449369 h 9.57926 V 79.877991 Z"
                />
                <path
                    id="path6"
                    style={{
                        display: "inline",
                        fill: "#b8de95",
                        fillOpacity: 1,
                        stroke: "#000000",
                        strokeWidth: "0.132292",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    d="m 96.92453,65.17708 -4.914429,0.0026 v 16.174723 h 1.626774 v 0.766361 h -2.116149 v 4.272091 l 0.07183,-4.168738 v 5.388819 h 0.59893 v 2.189013 h 1.920296 v 1.816944 h 2.31252 v -1.693437 h 0.763778 v 1.548743 h 9.00256 v -5.18263 h -7.040926 v 1.590084 H 96.461509 V 82.172441 H 94.22547 v -0.818038 h 2.69906 z m -5.403804,21.215759 -0.02067,1.19941 0.02067,0.06201 z m 15.314834,-20.338293 -5.01778,0.0026 v 11.911418 h 5.01778 z m 12.99094,15.286923 v 0.949813 h -2.127 v 9.601648 l 5.1826,-1.67e-4 v -0.867131 h 1.75545 v -1.878955 h -1.61075 v -6.938078 h -0.78445 v -0.86713 z"
                />
                <path
                    id="path11"
                    style={{
                        display: "inline",
                        fill: "#ffa7b3",
                        fillOpacity: 1,
                        stroke: "#000000",
                        strokeWidth: "0.132292",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    d="m 111.79133,44.358195 v 10.293429 h -1.34359 v 12.599748 l 5.61413,-0.0021 v -12.91239 h 7.00267 v -3.7915 h -6.25078 v -4.1429 h -1.19734 v -2.04432 z m 9.84023,10.454143 V 69.39491 c 0,0 5.1469,-0.06471 5.2126,0 0.0657,0.06472 0,-14.582572 0,-14.582572 z"
                />
                <path
                    id="path32"
                    style={{
                        display: "inline",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "#000000",
                        strokeWidth: "0.132292",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    d="M 74.842157,1.799553 59.903534,1.802133 V 9.4409471 H 74.842157 Z M 38.057322,2.4289719 V 8.2601401 H 48.38279 V 2.4289719 Z m 39.199675,2.2939169 v 4.6653483 h 10.54716 V 4.7228888 Z m 2.705261,8.4025882 v 13.336136 l 2.414323,-0.0036 v 1.401465 H 76.274628 V 15.242143 h -4.81211 V 28.008289 H 63.954966 V 14.101128 H 61.04455 v 1.008724 H 59.390904 V 30.85256 H 97.044419 V 13.803471 h -2.728515 v 14.05599 h -8.78086 v -1.41025 l 2.298568,0.0052 V 13.125477 Z m 26.028392,1.372526 v 17.179313 l 3.22461,0.0021 v -6.250781 h 1.17409 v -2.596224 h -1.15755 v -1.35599 h 1.17408 v -2.61276 h -1.20716 V 14.498003 Z M 73.643781,36.788115 v 19.45721 H 64.73373 V 39.617916 h -5.004862 v 8.442379 h 1.824178 v 8.395353 l -7.577316,0.03049 V 52.66725 h -5.051371 v 7.015592 H 76.496836 V 36.788115 Z m 18.803503,0.182934 V 59.642534 H 106.1064 V 56.682508 H 95.646055 l -0.0072,-6.283854 h 0.84336 v -5.142839 h -0.975686 v -3.108854 h 11.228261 l 0.42995,2.067057 h -2.31511 v 8.549349 h 4.49792 v -8.483203 h -1.63711 l -0.49609,-2.182812 h 2.00091 v -5.126303 z m 29.594066,0.235128 v 11.076327 h 1.68362 v 0.935343 h 2.4908 V 37.209278 Z m -95.286697,4.843632 v 13.475147 h 2.403988 v 0.95188 h -3.758427 v 4.258654 h 10.147701 v -4.258654 h -2.23759 v -0.95188 h 2.23759 V 42.049809 Z M 40.79514,67.670468 v 21.828125 h 3.208073 V 67.670468 Z m 8.326623,9.889318 v 14.312305 c 0,0.09922 8.805664,0 8.805664,0 v -3.712435 h -3.877799 l 0.04134,-10.59987 z"
                />
                <path
                    id="rect9"
                    style={{
                        display: "inline",
                        fill: "#0065b7",
                        fillOpacity: 1,
                        stroke: "#000000",
                        strokeWidth: "0.132292",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    d="m 59.755739,67.996029 v 6.862114 h 8.030001 v 3.124873 H 64.427806 V 92.612098 L 74.910887,92.46637 V 71.383419 h -9.023222 v -3.38739 z m 18.867066,29.30002 v 1.862934 h 2.271179 v -1.862934 z"
                />
                <path
                    id="rect2"
                    style={{
                        display: "inline",
                        fill: "#909398",
                        stroke: "#000000",
                        strokeWidth: "0.0515133",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    d="m 126.39322,6.9157194 v 6.2802366 h 3.63802 V 6.9157194 Z M 50.745637,3.5210946 v 5.078243 h 6.000667 v -5.078243 z m 55.123253,3.8230225 v 2.7843259 h 5.42706 V 7.3441171 Z"
                />
            </g>
            <g
                id="layer2"
                style={{ display: "inline" }}
                transform="translate(0.00165327,-0.0019296)"
            >
                <path
                    id="rect71-3"
                    style={{
                        display: "inline",
                        fill: "#ffffff",
                        fillOpacity: "0.695946",
                        stroke: "#000000",
                        strokeWidth: "0.144965",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    d="M 38.923419,1.5442714 V 7.3625209 H 47.81745 V 1.5442714 Z m 24.437785,1.065568 V 8.4280891 H 73.611347 V 2.6099296 Z M 78.144798,3.2051519 V 9.0234011 H 88.395222 V 3.2051519 Z m 2.494938,16.4563601 v 5.84202 h 7.892945 v -5.84202 z m 39.195574,3.765803 v 5.816182 h 10.62829 v -5.816182 z m -58.776808,0.774488 v 5.842021 h 7.892945 v -5.842021 z m 43.782868,2.027266 v 5.841504 h 7.89294 v -5.841504 z m -42.401557,9.739458 v 5.84202 h 8.057906 v -5.84202 z m 29.682943,0.859896 v 5.84202 h 7.892944 v -5.84202 z m 29.082464,0.05684 v 5.84202 h 7.89243 v -5.84202 z m -72.622959,3.217374 v 5.842021 h 8.057906 V 40.102641 Z M 4.8009544,50.736101 v 5.84202 h 7.3964476 v -5.84202 z m 54.6292236,2.380733 v 5.842021 h 7.600619 v -5.842021 z m -31.734497,1.224215 v 5.841504 h 7.892666 v -5.841504 z m 83.609369,2.06654 v 5.842021 h 7.89295 v -5.842021 z m 11.44323,3.770313 v 5.84202 h 7.89294 v -5.84202 z m -81.818782,5.766573 v 5.84202 h 7.892429 v -5.84202 z M 25.920079,67.41932 v 5.842021 H 33.65058 V 67.41932 Z M 2.0424665,68.595992 v 5.842021 h 8.0579065 v -5.842021 z m 99.3407135,0.379306 v 5.84202 h 7.89294 v -5.84202 z m -88.418383,0.395324 v 5.842021 h 7.448092 v -5.842021 z m 78.231917,0.266134 v 5.842021 h 7.892945 V 69.636756 Z M 122.4067,71.86401 v 5.842021 h 7.89294 V 71.86401 Z m -10.16475,0.02584 v 5.842021 h 7.40309 V 71.88985 Z m -99.412028,8.65942 v 5.842021 h 8.057389 V 80.54927 Z m -8.814661,2.630847 v 5.842021 h 8.221609 v -5.842023 z m 44.980412,1.074868 v 5.842021 h 7.892945 v -5.842021 z m -21.665861,0.695048 v 5.842021 h 6.536552 v -5.842021 z m 39.194507,0.131775 v 5.842021 h 7.892944 v -5.842021 z m 32.411455,0.760677 v 5.842021 h 7.892946 v -5.842021 z m -16.855816,9.390641 v 5.842004 h 7.892428 v -5.842004 z"
                />
            </g>
            <g
                id="layer5"
                style={{ display: "inline" }}
                transform="translate(0.00165327,-0.0019296)"
            >
                <text
                    style={{
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: "normal",
                        fontStretch: "normal",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                    }}
                    x="120.36203"
                    y="28.465796"
                    id="text68-5-2-8-3-2-5"
                >
                    <tspan
                        id="tspan68-1-34-7-9-2-92"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="120.36203"
                        y="28.465796"
                    >
                        F10
                    </tspan>
                </text>
                <text
                    style={{
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="112.62846"
                    y="76.987099"
                    id="text68-5-2-8-3-2-19"
                >
                    <tspan
                        id="tspan68-1-34-7-9-2-1"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="112.62846"
                        y="76.987099"
                    >
                        F9
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="63.05648"
                    y="41.165794"
                    id="text68-5-2-8-3-2-4"
                >
                    <tspan
                        id="tspan68-1-34-7-9-2-9"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="63.05648"
                        y="41.165794"
                    >
                        F8
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="49.033569"
                    y="45.200687"
                    id="text68-5-2-8-3-2-34"
                >
                    <tspan
                        id="tspan68-1-34-7-9-2-7"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="49.033569"
                        y="45.200687"
                    >
                        F7
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="26.410318"
                    y="72.588379"
                    id="text68-5-2-8-3-2-8"
                >
                    <tspan
                        id="tspan68-1-34-7-9-2-5"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="26.410318"
                        y="72.588379"
                    >
                        F6
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="13.314819"
                    y="85.880371"
                    id="text68-5-2-8-3-2-3"
                >
                    <tspan
                        id="tspan68-1-34-7-9-2-4"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="13.314819"
                        y="85.880371"
                    >
                        F5
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="13.64555"
                    y="74.767868"
                    id="text68-5-2-8-3-2-17"
                >
                    <tspan
                        id="tspan68-1-34-7-9-2-0"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="13.64555"
                        y="74.767868"
                    >
                        F4
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="5.0465899"
                    y="88.195473"
                    id="text68-5-2-8-3-2-6"
                >
                    <tspan
                        id="tspan68-1-34-7-9-2-31"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="5.0465899"
                        y="88.195473"
                    >
                        F3
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="2.3346107"
                    y="73.643394"
                    id="text68-5-2-8-3-2-1"
                >
                    <tspan
                        id="tspan68-1-34-7-9-2-3"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="2.3346107"
                        y="73.643394"
                    >
                        F2
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.855",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="5.6733356"
                    y="55.815922"
                    id="text68-5-2-8-3-2"
                >
                    <tspan
                        id="tspan68-1-34-7-9-2"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.855",
                            strokeDasharray: "none",
                        }}
                        x="5.6733356"
                        y="55.815922"
                    >
                        F1
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="122.90744"
                    y="76.983757"
                    id="text68-5-2-8-3-1"
                >
                    <tspan
                        id="tspan68-1-34-7-9-8"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="122.90744"
                        y="76.983757"
                    >
                        E2
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="27.955097"
                    y="90.080635"
                    id="text68-5-0-1"
                >
                    <tspan
                        id="tspan68-1-0-6"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="27.955097"
                        y="90.080635"
                    >
                        E1
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="99.45874"
                    y="91.039749"
                    id="text68-5-2-8-9"
                >
                    <tspan
                        id="tspan68-1-34-7-4"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="99.45874"
                        y="91.039749"
                    >
                        D3
                    </tspan>
                </text>
                <text
                    style={{
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="102.17459"
                    y="74.044968"
                    id="text68-5-2-3"
                >
                    <tspan
                        id="tspan68-1-34-2"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="102.17459"
                        y="74.044968"
                    >
                        D2
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="91.800308"
                    y="74.701157"
                    id="text68-5-2-8"
                >
                    <tspan
                        id="tspan68-1-34-7"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="91.800308"
                        y="74.701157"
                    >
                        D1
                    </tspan>
                </text>
                <text
                    style={{
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="111.49192"
                    y="61.476387"
                    id="text68-5-35"
                >
                    <tspan
                        id="tspan68-1-8"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="111.49192"
                        y="61.476387"
                    >
                        C2
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="123.42043"
                    y="65.389374"
                    id="text68-5-2"
                >
                    <tspan
                        id="tspan68-1-34"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="123.42043"
                        y="65.389374"
                    >
                        C1
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="78.391289"
                    y="8.4566793"
                    id="text68-3"
                >
                    <tspan
                        id="tspan68-4"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="78.391289"
                        y="8.4566793"
                    >
                        B11
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: "normal",
                        fontStretch: "normal",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                    }}
                    x="63.607697"
                    y="7.5967846"
                    id="text68-6"
                >
                    <tspan
                        id="tspan68-77"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="63.607697"
                        y="7.5967846"
                    >
                        B10
                    </tspan>
                </text>
                <text
                    style={{
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="40.301666"
                    y="6.7104626"
                    id="text68-56"
                >
                    <tspan
                        id="tspan68-7"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="40.301666"
                        y="6.7104626"
                    >
                        B9
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="41.378681"
                    y="70.948044"
                    id="text68-5-0-5"
                >
                    <tspan
                        id="tspan68-1-0-3"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="41.378681"
                        y="70.948044"
                    >
                        B8
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="49.634388"
                    y="89.353035"
                    id="text68-5-0-4"
                >
                    <tspan
                        id="tspan68-1-0-2"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="49.634388"
                        y="89.353035"
                    >
                        B7
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="121.75928"
                    y="42.21825"
                    id="text68-5-0-9"
                >
                    <tspan
                        id="tspan68-1-0-5"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="121.75928"
                        y="42.21825"
                    >
                        B6
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="28.254217"
                    y="59.454418"
                    id="text68-5-4"
                >
                    <tspan
                        id="tspan68-1-2"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="28.254217"
                        y="59.454418"
                    >
                        B5
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="105.51656"
                    y="31.369564"
                    id="text68-5-3"
                >
                    <tspan
                        id="tspan68-1-3"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="105.51656"
                        y="31.369564"
                    >
                        B4
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="92.694023"
                    y="41.87001"
                    id="text68-5-38"
                >
                    <tspan
                        id="tspan68-1-1"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="92.694023"
                        y="41.87001"
                    >
                        B3
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="59.852425"
                    y="58.094383"
                    id="text68-5-8"
                >
                    <tspan
                        id="tspan68-1-5"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="59.852425"
                        y="58.094383"
                    >
                        B2
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="62.020752"
                    y="29.281183"
                    id="text68"
                >
                    <tspan
                        id="tspan68"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="62.020752"
                        y="29.281183"
                    >
                        B1
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="81.017754"
                    y="24.964365"
                    id="text68-5"
                >
                    <tspan
                        id="tspan68-1"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="81.017754"
                        y="24.964365"
                    >
                        B0
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="82.393112"
                    y="100.20647"
                    id="text68-5-0-0"
                >
                    <tspan
                        id="tspan68-1-0-57"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="82.393112"
                        y="100.20647"
                    >
                        A2
                    </tspan>
                </text>
                <text
                    style={{
                        display: "inline",
                        fontSize: "5.64444px",
                        fontFamily: "Roboto",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                        fontWeight: "normal",
                        fontStyle: "normal",
                        fontStretch: "normal",
                        fontVariant: "normal",
                    }}
                    x="67.440628"
                    y="90.168335"
                    id="text68-5-0"
                >
                    <tspan
                        id="tspan68-1-0"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: "Roboto",
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="67.440628"
                        y="90.168335"
                    >
                        A1
                    </tspan>
                </text>
            </g>
            {arrow && (
                <g
                    id="layer9"
                    style={{ display: "inline" }}
                    transform="translate(0.00165327,-0.0019296)"
                >
                    <path
                        id="path3-7"
                        style={{
                            color: "#000000",
                            display: "inline",
                            fill: "#ffffff",
                            fillOpacity: 1,
                            stroke: "#ffffff",
                            strokeOpacity: "0.99",
                        }}
                        d="m 80.61423,21.926137 c -2.185126,0 -3.850708,1.323814 -5.330424,2.53938 -1.418123,1.164967 -2.678239,2.207517 -4.00079,2.292366 v -1.662947 l -2.232422,2.235006 2.232422,2.232421 v -1.743562 c 1.821827,-0.07749 3.25263,-1.36835 4.6731,-2.535246 1.465053,-1.20352 2.906547,-2.298568 4.658114,-2.298568 z M 61.004574,26.63541 c -3.568885,0 -7.511602,2.054881 -10.652063,4.999695 -3.140462,2.944815 -5.494396,6.803818 -5.687508,10.593669 -0.379876,7.45507 5.502052,14.776332 12.504146,14.807365 v 1.632975 l 2.232422,-2.235006 -2.232422,-2.232422 v 1.775603 c -6.251686,-0.03226 -11.797268,-6.839066 -11.44788,-13.695805 0.172338,-3.382129 2.361861,-7.067482 5.355745,-9.87485 2.993884,-2.807369 6.774224,-4.71289 9.92756,-4.71289 z m 41.566966,0.0956 v 1.902209 c -0.75555,0.01832 -1.35293,0.204158 -1.75803,0.605648 -0.4271,0.423299 -0.55802,1.015167 -0.53744,1.597318 0.0412,1.164306 0.59478,2.495898 1.07849,3.814755 0.48371,1.318856 0.88201,2.620192 0.79065,3.405993 -0.0457,0.392902 -0.16623,0.632758 -0.44493,0.831991 -0.2787,0.199232 -0.77776,0.357601 -1.59783,0.357601 v 1.05885 c 0.95216,0 1.68131,-0.173606 2.21484,-0.555005 0.53353,-0.381399 0.81052,-0.969531 0.88057,-1.571997 0.14009,-1.204933 -0.35976,-2.557329 -0.84956,-3.892786 -0.4898,-1.335454 -0.98416,-2.659663 -1.01338,-3.486092 -0.0146,-0.413213 0.064,-0.651403 0.22273,-0.808736 0.1482,-0.146881 0.44247,-0.281723 1.01389,-0.299207 v 1.506885 l 2.23242,-2.235005 z m 10.21643,1.828312 0.0274,1.058333 c 1.42391,-0.03708 2.32749,0.367135 2.77347,1.040764 0.446,0.673627 0.51562,1.758386 -0.0977,3.295406 -1.22648,3.074037 -5.17564,7.700064 -12.92428,13.117028 -8.548013,5.975877 -25.840063,16.612406 -43.929584,13.33769 -8.983637,-1.626295 -12.123127,-4.72576 -14.921569,-7.534941 -2.798444,-2.809182 -5.344963,-5.373315 -12.482443,-5.373315 -4.496494,0 -7.207975,2.556135 -8.158158,5.154724 -0.475092,1.299292 -0.535184,2.613628 -0.14056,3.67161 0.382904,1.026561 1.289379,1.792141 2.492871,1.837097 v 1.37356 l 2.232422,-2.235006 -2.232422,-2.232422 v 2.029334 c -0.783781,-0.03704 -1.236042,-0.434098 -1.500683,-1.1436 -0.277757,-0.744663 -0.261142,-1.833054 0.142627,-2.937288 0.807534,-2.208469 3.06185,-4.459159 7.163903,-4.459159 6.895852,0 8.924704,2.241985 11.732618,5.060673 2.807912,2.818689 6.306435,6.168552 15.484326,7.830013 18.598792,3.366909 36.109989,-7.491077 44.722332,-13.511837 7.84012,-5.480918 11.92487,-10.142796 13.301,-13.591935 0.68804,-1.724571 0.70077,-3.210091 -0.002,-4.271574 -0.70279,-1.061484 -2.03948,-1.55797 -3.6835,-1.515153 z m -22.939163,8.931754 v 1.805058 c -1.92675,0.299447 -3.63621,1.287341 -5.20537,2.608627 -1.89188,1.593035 -3.6133,3.676025 -5.369177,5.736083 -3.511752,4.120119 -7.104095,8.070309 -12.179619,8.070309 v 1.05885 c 5.620095,0 9.46173,-4.306202 12.986288,-8.441345 1.762278,-2.067572 3.459538,-4.112475 5.244128,-5.615161 1.43388,-1.207381 2.90423,-2.058342 4.52375,-2.346627 v 1.591634 l 2.23242,-2.235006 z m 29.092283,0.07493 v 1.968872 c -2.35981,0.03852 -4.43663,1.804218 -6.80734,4.266407 -2.39696,2.489454 -5.12193,5.76068 -8.67027,9.021671 -7.096703,6.521983 -17.442343,13.015226 -34.96634,13.015226 -9.211475,0 -15.221725,-2.153323 -20.029785,-4.325834 -4.808061,-2.172512 -8.441196,-4.419885 -12.824024,-4.419885 v 1.056266 c 4.015382,0 7.515281,2.127214 12.386841,4.328418 4.87156,2.201205 11.089486,4.419885 20.466968,4.419885 17.786857,0 28.465597,-6.66133 35.68361,-13.294795 3.60899,-3.316733 6.36374,-6.622793 8.71678,-9.06663 2.32029,-2.409844 4.22228,-3.900172 6.04356,-3.941362 v 1.439189 l 2.23242,-2.235006 z m 10.25518,2.055689 v 1.058333 c 0.47593,0 0.71003,0.122699 0.87695,0.33228 0.16691,0.209579 0.28218,0.582474 0.26148,1.152384 -0.0414,1.139822 -0.6414,2.95171 -1.79885,5.132503 -2.31491,4.361586 -6.81176,10.250499 -13.10928,16.132866 -12.5625,11.734333 -32.279273,23.462574 -56.261677,23.523112 v -1.632459 l -2.232422,2.235006 2.232422,2.232422 v -1.778703 c 24.326564,-0.06044 44.274667,-11.934193 56.984117,-23.805782 6.37095,-5.950957 10.92722,-11.894894 13.3227,-16.408301 1.19775,-2.256704 1.86714,-4.143189 1.91978,-5.591907 0.0263,-0.724358 -0.10511,-1.367788 -0.49041,-1.851566 -0.38529,-0.483779 -1.00665,-0.730188 -1.70481,-0.730188 z m -90.556223,27.27224 v 1.728577 c -1.121941,0.01738 -2.018335,0.335431 -2.629296,0.932759 -0.628483,0.61446 -0.916273,1.477144 -0.953431,2.423625 -0.07432,1.892964 0.772494,4.222482 2.119251,6.554638 1.346756,2.332158 3.210207,4.651041 5.269446,6.408395 2.059239,1.757354 4.31989,2.978629 6.515881,2.978629 v -1.05885 c -1.792657,0 -3.879568,-1.061532 -5.828068,-2.724381 -1.948501,-1.662852 -3.75436,-3.904844 -5.041036,-6.132959 -1.286675,-2.228115 -2.036581,-4.456891 -1.976624,-5.984131 0.02998,-0.76362 0.242741,-1.326356 0.634587,-1.709456 0.378553,-0.370107 0.96628,-0.613181 1.88929,-0.629419 v 1.68 l 2.232422,-2.235005 z"
                        transform="translate(-0.00165327,0.0019296)"
                    />
                    <path
                        id="path3"
                        style={{
                            color: "#000000",
                            display: "inline",
                            fill: "#000000",
                            fillOpacity: 1,
                        }}
                        d="m 80.601696,21.908086 c -2.185126,0 -3.850708,1.323814 -5.330424,2.53938 -1.418123,1.164967 -2.678239,2.207517 -4.00079,2.292366 v -1.662947 l -2.232422,2.235006 2.232422,2.232421 V 27.80075 c 1.821827,-0.07749 3.25263,-1.36835 4.6731,-2.535246 1.465053,-1.20352 2.906547,-2.298568 4.658114,-2.298568 z M 60.99204,26.617359 c -3.568885,0 -7.511602,2.054881 -10.652063,4.999695 -3.140462,2.944815 -5.494396,6.803818 -5.687508,10.593669 -0.379876,7.45507 5.502052,14.776332 12.504146,14.807365 v 1.632975 l 2.232422,-2.235006 -2.232422,-2.232422 v 1.775603 c -6.251686,-0.03226 -11.797268,-6.839066 -11.44788,-13.695805 0.172338,-3.382129 2.361861,-7.067482 5.355745,-9.87485 2.993884,-2.807369 6.774224,-4.71289 9.92756,-4.71289 z m 41.56697,0.0956 v 1.902209 c -0.75555,0.01832 -1.35293,0.204158 -1.75803,0.605648 -0.4271,0.423299 -0.55802,1.015167 -0.53744,1.597318 0.0412,1.164306 0.59478,2.495898 1.07849,3.814755 0.48371,1.318856 0.88201,2.620192 0.79065,3.405993 -0.0457,0.392902 -0.16623,0.632758 -0.44493,0.831991 -0.2787,0.199232 -0.77776,0.357601 -1.59784,0.357601 v 1.05885 c 0.95217,0 1.68132,-0.173606 2.21485,-0.555005 0.53353,-0.381399 0.81052,-0.969531 0.88057,-1.571997 0.14009,-1.204933 -0.35976,-2.557329 -0.84956,-3.892786 -0.4898,-1.335454 -0.98416,-2.659663 -1.01338,-3.486092 -0.0146,-0.413213 0.064,-0.651403 0.22273,-0.808736 0.1482,-0.146881 0.44247,-0.281723 1.01389,-0.299207 v 1.506885 l 2.23242,-2.235005 z m 10.21643,1.828312 0.0274,1.058333 c 1.42391,-0.03708 2.32749,0.367135 2.77347,1.040764 0.446,0.673627 0.51562,1.758386 -0.0977,3.295406 -1.22648,3.074037 -5.17564,7.700064 -12.92428,13.117028 -8.548018,5.975877 -25.840067,16.612406 -43.929588,13.33769 -8.983637,-1.626295 -12.123127,-4.72576 -14.921569,-7.534941 -2.798444,-2.809182 -5.344963,-5.373315 -12.482443,-5.373315 -4.496494,0 -7.207975,2.556135 -8.158158,5.154724 -0.475092,1.299292 -0.535184,2.613628 -0.14056,3.67161 0.382904,1.026561 1.289379,1.792141 2.492871,1.837097 v 1.37356 l 2.232422,-2.235006 -2.232422,-2.232422 v 2.029334 c -0.783781,-0.03704 -1.236042,-0.434098 -1.500683,-1.1436 -0.277757,-0.744663 -0.261142,-1.833054 0.142627,-2.937288 0.807534,-2.208469 3.06185,-4.459159 7.163903,-4.459159 6.895852,0 8.924704,2.241985 11.732618,5.060673 2.807912,2.818689 6.306435,6.168552 15.484326,7.830013 18.598792,3.366909 36.109987,-7.491077 44.722336,-13.511837 7.84012,-5.480918 11.92487,-10.142796 13.301,-13.591935 0.68804,-1.724571 0.70077,-3.210091 -0.002,-4.271574 -0.70279,-1.061484 -2.03948,-1.55797 -3.6835,-1.515153 z m -22.939166,8.931754 v 1.805058 c -1.926748,0.299447 -3.63621,1.287341 -5.205367,2.608627 -1.891888,1.593035 -3.613306,3.676025 -5.369181,5.736083 -3.511752,4.120119 -7.104095,8.070309 -12.179619,8.070309 v 1.05885 c 5.620095,0 9.46173,-4.306202 12.986288,-8.441345 1.762278,-2.067572 3.459535,-4.112475 5.244124,-5.615161 1.433886,-1.207381 2.904231,-2.058342 4.523755,-2.346627 v 1.591634 l 2.232422,-2.235006 z m 29.092286,0.07493 v 1.968872 c -2.35981,0.03852 -4.43663,1.804218 -6.80734,4.266407 -2.39696,2.489454 -5.12193,5.76068 -8.67027,9.021671 -7.096707,6.521983 -17.442348,13.015226 -34.966344,13.015226 -9.211475,0 -15.221725,-2.153323 -20.029785,-4.325834 -4.808061,-2.172512 -8.441196,-4.419885 -12.824024,-4.419885 v 1.056266 c 4.015382,0 7.515281,2.127214 12.386841,4.328418 4.87156,2.201205 11.089486,4.419885 20.466968,4.419885 17.786857,0 28.465594,-6.66133 35.683614,-13.294795 3.60899,-3.316733 6.36374,-6.622793 8.71678,-9.06663 2.32029,-2.409844 4.22228,-3.900172 6.04356,-3.941362 v 1.439189 l 2.23242,-2.235006 z m 10.25518,2.055689 v 1.058333 c 0.47593,0 0.71003,0.122699 0.87695,0.33228 0.16691,0.209579 0.28218,0.582474 0.26148,1.152384 -0.0414,1.139822 -0.6414,2.95171 -1.79885,5.132503 -2.31491,4.361586 -6.81176,10.250499 -13.10928,16.132866 -12.5625,11.734333 -32.279281,23.462574 -56.261681,23.523112 v -1.632459 l -2.232422,2.235006 2.232422,2.232422 v -1.778703 c 24.326561,-0.06044 44.274671,-11.934193 56.984121,-23.805782 6.37095,-5.950957 10.92722,-11.894894 13.3227,-16.408301 1.19775,-2.256704 1.86714,-4.143189 1.91978,-5.591907 0.0263,-0.724358 -0.10511,-1.367788 -0.49041,-1.851566 -0.38529,-0.483779 -1.00665,-0.730188 -1.70481,-0.730188 z m -90.556227,27.27224 v 1.728577 c -1.121941,0.01738 -2.018335,0.335431 -2.629296,0.932759 -0.628483,0.61446 -0.916273,1.477144 -0.953431,2.423625 -0.07432,1.892964 0.772494,4.222482 2.119251,6.554638 1.346756,2.332158 3.210207,4.651041 5.269446,6.408395 2.059239,1.757354 4.31989,2.978629 6.515881,2.978629 v -1.05885 c -1.792657,0 -3.879568,-1.061532 -5.828068,-2.724381 -1.948501,-1.662852 -3.75436,-3.904844 -5.041036,-6.132959 -1.286675,-2.228115 -2.036581,-4.456891 -1.976624,-5.984131 0.02998,-0.76362 0.242741,-1.326356 0.634587,-1.709456 0.378553,-0.370107 0.96628,-0.613181 1.88929,-0.629419 v 1.68 l 2.232422,-2.235005 z"
                    />
                </g>
            )}
        </svg>
    );
};

class AccordionElement {
    title: JSX.Element;
    rows: JSX.Element;
    constructor(
        title: string,
        rows: string[],
        color: string,
        start: number,
        prefix: string
    ) {
        this.title = (
            <div style={{ display: "flex", alignItems: "center" }}>
                <div
                    style={{
                        background: color,
                        width: 10,
                        height: "1.3em",
                        display: "inline-block",
                        marginRight: 5,
                    }}
                ></div>
                {prefix}: {title}
            </div>
        );
        this.rows = this.createRows(rows, start, prefix);
    }

    private createRows = (list: string[], start: number, prefix: string) => {
        return (
            <>
                {list.map((s: string, i: number) => (
                    <TableRow>
                        <TableCell align="center">
                            {prefix}
                            {start + i}
                        </TableCell>
                        <TableCell align="center">{s}</TableCell>
                    </TableRow>
                ))}
            </>
        );
    };
}

const arrayA = ["附属図書館分室", "学生支援等S-Port"];
const arrayB = [
    "総合研究棟",
    "1号館",
    "2号館",
    "3号館",
    "4号館",
    "5号館",
    "6号館",
    "7号館",
    "8号館",
    "化学実験室",
    "次世代ものづくり人材育成センター",
];
const arrayC = ["1号館", "2号館"];
const arrayD = [
    "光創起イノベーション研究拠点",
    "情報基盤センター・創造科学技術大学院",
    "電子工学研究所",
];
const arrayE = ["生協南会館", "生協北会館"];
const arrayF = [
    "イノベーション社会連携推進機構",
    "高柳記念未来技術創造館",
    "課外活動共用施設",
    "武道場",
    "佐鳴会館",
    "体育館",
    "学生団体共用施設",
    "教職員組合",
    "共通講義等",
];

const accordionElements = [
    new AccordionElement("事務局", arrayA, "#0065B7", 1, "A"),
    new AccordionElement("工学部", arrayB, "#04BAC6", 0, "B"),
    new AccordionElement("情報学部", arrayC, "#FFA7B3", 1, "C"),
    new AccordionElement("研究所・大学院", arrayD, "#B8DE95", 1, "D"),
    new AccordionElement("生協", arrayE, "#B19FF4", 1, "E"),
    new AccordionElement("その他施設", arrayF, "#F4EA7A", 1, "F"),
];

interface FacilityAccordionProps {
    accordionElement: AccordionElement;
}

const FacilityAccordion = ({ accordionElement }: FacilityAccordionProps) => (
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
            {accordionElement.title}
        </AccordionSummary>
        <AccordionDetails>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">コード</TableCell>
                            <TableCell align="center">施設名</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{accordionElement.rows}</TableBody>
                </Table>
            </TableContainer>
        </AccordionDetails>
    </Accordion>
);

function CampusMap() {
    const [iesShowArrow, setIsShowArrow] = useState(false);
    return (
        <div className={styles.main_div}>
            <MapSvg arrow={iesShowArrow} style={{ width: "100%" }} />
            <div className={styles.usage_grid_area}>
                <span className={styles.usage_grid_area_element}>
                    <div className={styles.park_icon} />
                    駐輪場
                </span>
                <span className={styles.usage_grid_area_element}>
                    <div className={styles.bicycle_park_icon} />
                    駐車場
                </span>
            </div>
            <FormControlLabel
                control={
                    <Switch
                        checked={iesShowArrow}
                        onChange={() => setIsShowArrow(!iesShowArrow)}
                    />
                }
                label="工学部ガイドを表示"
            />

            <Divider sx={{ marginBottom: 2, marginTop: 2 }} />
            {accordionElements.map((e: AccordionElement, i) => (
                <FacilityAccordion key={i} accordionElement={e} />
            ))}
        </div>
    );
}

export default CampusMap;
