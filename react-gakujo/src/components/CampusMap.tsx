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
            <g
                id="layer4"
                style={{ display: "inline" }}
                transform="translate(0.00165327,-0.0019296)"
            >
                <image
                    width="132.11259"
                    height="105.16164"
                    preserveAspectRatio="none"
                    id="image1"
                    x="1.5997671"
                    y="2.2717755"
                    style={{ display: "none" }}
                />
                <image
                    width="136.04741"
                    height="136.04741"
                    preserveAspectRatio="none"
                    id="image961"
                    x="-0.57892001"
                    y="-0.4835017"
                    style={{ display: "none" }}
                />
                <image
                    width="132.11259"
                    height="105.16164"
                    preserveAspectRatio="none"
                    id="image1-6"
                    x="1.5997671"
                    y="2.2717755"
                    style={{ display: "none" }}
                />
            </g>
            <image
                width="132.70702"
                height="105.7198"
                preserveAspectRatio="none"
                id="image1-8"
                x="0.63010502"
                y="1.4975604"
                style={{ display: "none" }}
            />
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
                    d="M 75.307762,0.35106257 V 9.9876842 h -7.47758 V 9.3551641 H 65.277883 V 9.9876842 H 45.668227 V 8.2472211 h -2.072742 v 1.7404631 h -0.0031 V 32.572352 h -0.126091 l -0.09922,3.224609 h 0.365869 v 4.638476 H 4.6717634 V 33.646763 H 0.34696298 l -1.788e-4,2.364 H 3.5224798 v 8.209459 L 1.1582827,46.14465 V 62.044971 H 0.34334538 l 0.00827,2.900082 H 9.4017092 c -0.04573,0.906287 -0.04115,3.29223 -0.0217,5.670971 H 7.9227277 v 1.660364 h 1.5180565 v 3.566707 H 7.0168399 v 1.797823 H 3.6439191 v 17.997868 l 5.1371542,5.255994 h 4.9273477 v -0.3514 H 8.9293842 L 3.9958356,95.496159 V 77.992318 h 3.0210043 v 4.305164 h 2.3383583 v -3.671611 h 1.8613848 v 8.841321 l 3.695382,2.134753 v 10.715615 h 0.3514 V 89.398857 l -3.697449,-2.134753 v -8.638233 h 9.82679 v 6.048727 h -1.740979 v 4.054016 h 1.740979 v 7.621757 h -0.0026 l -0.740007,3.905179 h 1.130164 l 0.727087,-3.835933 h 24.060564 v 7.571103 h 1.775085 v -7.571103 h 32.528764 v 8.371573 l 7.14375,-0.0165 v -8.355073 h 15.477097 v -3.177584 h -9.354473 v -3.077331 h -3.741891 c -0.391477,-0.550545 -0.86713,-1.180313 -0.86713,-2.230872 0,-0.612874 0.190658,-1.150492 0.398425,-1.730643 0.207768,-0.580152 0.431498,-1.202706 0.431498,-1.952853 0,-0.512886 -0.319317,-0.977891 -0.601513,-1.609721 -0.265156,-0.593677 -0.521368,-1.310407 -0.551388,-2.213818 h 42.258652 l 2.7e-4,-13.417269 H 129.9189 V 51.643539 l -1.12396,0.0057 V 35.796961 h 2.70733 l -0.006,-3.224609 H 112.1698 v -5.355746 h -1.36064 v 5.355746 h -7.9561 v -4.156336 h 3.36775 v -4.163053 h -3.53157 V 13.027808 h 8.12612 v 4.33772 h 1.23042 v -4.33772 h 10.98951 v 3.613216 h 1.3565 V 11.34419 H 104.63001 V 9.9876842 H 85.028099 V 9.4047731 H 82.4758 V 9.9876842 H 76.805345 V 0.35106257 Z M 46.328652,11.951905 h 10.155969 v 20.600293 l 0.07545,0.02015 H 46.328652 Z m 11.719698,0 h 19.184359 v 9.638171 h -1.176156 v 2.085144 h 2.299601 V 11.951905 h 4.178557 v 1.183907 H 85.0374 v -1.183907 h 4.227649 v 6.910689 h 3.315043 v -6.910689 h 7.870848 v 8.559684 h -3.397736 v 1.566829 h 3.648366 V 32.572352 H 88.015513 v -2.629297 l -7.14375,0.749308 v 1.879989 h -5.310787 v -1.723409 h -1.899109 v 1.723409 H 62.443431 V 30.83499 h -1.898592 v 1.737362 H 58.04835 Z M 47.147207,35.796961 h 9.604581 v 12.370304 0.427364 l -1.015958,1.016476 h -8.588623 z m 10.781254,0 h 12.343432 v 7.267773 h -1.736328 v -0.520898 h -1.132747 v 1.091406 h 4.489648 0.84336 v -7.838281 h 8.135937 v 4.787305 h -4.415234 v 1.455208 h 4.415234 v 4.816243 h -4.304647 l -0.10542,4.045748 h 4.410067 v 4.838465 h -4.382161 v 3.340364 h 4.382161 v 2.964677 H 64.881008 v -3.063896 h -3.208073 v 3.063896 H 52.26369 v -2.749703 h -2.480469 v 2.749703 h -2.636014 v -11.15074 h 8.642366 l 1.363225,-1.363741 h 4.198193 v -1.256255 h -3.42253 z m 30.087052,0 h 15.918927 v 1.195793 h 1.53169 v -1.195793 h 5.01055 v 6.617167 h -9.2816 v 1.65623 h -1.656234 v 1.953369 h -2.011769 v 8.150407 l 1.445387,1.44539 h 9.118836 v 6.425447 H 88.015513 V 50.200216 H 92.41111 V 46.4113 h -4.395597 z m 24.402137,0 h 7.83518 v 6.008419 h -7.83518 z m 9.08626,0 h 6.09266 v 16.023828 h -3.18741 v -1.420068 -0.766362 h -1.17047 V 48.70625 h -1.73478 z m -48.76395,4.617806 v 1.475879 h 0.913639 V 40.414767 Z M 4.6717634,41.15529 H 10.917377 V 62.044971 H 2.1003441 V 46.533256 l 2.5714193,-2.058789 z m 7.8434486,0 H 43.732945 V 62.044971 H 32.948073 v -1.315682 h -3.926892 v 1.315682 H 12.515212 Z m 99.902438,2.143022 h 7.83518 v 5.892147 h 2.70371 v 0.968416 h 0.48421 v 1.661914 h -0.45992 l -0.0217,0.72502 h 0.48163 l 3e-5,1.932699 h -3.31946 v 8.445996 h -4.56975 v 1.420585 h 0.94775 v 4.438489 h -6.44405 v -3.838525 h 0.63252 v -2.900082 h -0.63252 v -6.018754 h 0.40824 v -1.137915 h -0.40824 v -0.422713 h 1.49706 V 43.897758 h 0.86507 z m -10.32599,0.0124 h 8.38502 V 53.53231 l -2.38538,0.04703 v 1.143599 h -8.747796 l -0.919841,-0.91984 v -6.882786 h 2.011767 v -1.953369 h 1.65623 z m 22.3175,9.235095 h 3.18741 v 0.250631 h 1.03301 v 15.974219 h 1.53737 v 0.90072 h -5.60482 v -0.301274 h -1.50637 v 0.301274 h -3.13263 v -0.887801 h -2.25309 v -4.438489 h 4.09587 l -0.17776,-1.420585 h -0.73019 v -8.189164 h 3.55083 c 0,0 2e-4,-1.460126 3.7e-4,-2.189531 z m -29.776996,7.025928 v 2.47065 h 1.88774 v -2.47065 z m -82.119536,5.373318 h 8.051188 v 4.883422 h -1.028361 v 1.968872 h 1.028361 v 4.045748 h -8.051188 z m 9.649024,0 h 14.625464 v 10.898042 h -6.689515 v -1.300179 h -2.571936 v 1.300179 h -5.364013 v -5.344376 h 1.32395 v -1.968356 h -1.32395 z m 17.338476,0 h 5.654952 v 7.036263 h -5.654952 z m 7.062618,0 H 56.74507 v 11.2019 H 46.562746 Z m 11.250476,0 h 16.086357 c 0.01746,0.907004 0.400925,1.505826 0.852144,1.945617 0.458338,0.44673 0.967058,0.764208 1.30638,1.191659 l 0.0217,0.02532 2.422591,1.866553 c -0.236063,0.190132 -0.438388,0.405941 -0.606165,0.641304 -0.597625,0.838373 -0.789099,1.880502 -0.789099,2.784843 0,0.531999 -0.1032,0.864234 -0.242362,1.098125 -0.139163,0.23389 -0.320479,0.381072 -0.531234,0.521415 -0.210754,0.140343 -0.451727,0.264182 -0.659908,0.472322 -0.208181,0.20814 -0.361735,0.518385 -0.361735,0.918291 v 7.804691 h -0.533818 l 5.17e-4,2.388485 h 6.093168 v 6.638355 H 60.898305 v -6.501928 h 3.170349 v -1.688786 h -3.170349 v -8.904366 h -3.085083 z m 16.639295,0 h 6.419246 v 4.233333 c -0.753535,0.02228 -1.378504,0.195067 -1.885156,0.472322 L 76.46428,67.708191 c -0.413849,-0.50802 -0.936388,-0.830037 -1.328084,-1.211812 -0.391515,-0.3816 -0.667918,-0.792558 -0.683679,-1.551326 z m 13.562996,0 h 9.508464 v 14.14849 h -5.508708 v -1.434538 h -3.999756 z m 12.865367,0 h 7.21042 v 14.14849 h -7.21042 v -8.055322 h 0.96584 v -2.809648 h -0.96584 z M 80.871763,69.72874 v 14.486454 h -5.008996 v -7.804691 c 0,-0.278462 0.07331,-0.39941 0.201538,-0.527617 0.128232,-0.128208 0.336328,-0.24576 0.574125,-0.404109 0.237796,-0.158351 0.503999,-0.367666 0.701249,-0.699183 0.197251,-0.331516 0.318327,-0.774755 0.318327,-1.379244 0,-0.824971 0.182389,-1.759045 0.685229,-2.464449 0.482338,-0.676642 1.246174,-1.168106 2.528528,-1.207161 z m 29.183757,0.357084 h 8.88327 c 5.5e-4,3.002571 -9.1e-4,6.005144 0,9.007715 h -8.88357 v -2.088245 h 1.75958 v -3.744991 h -1.75958 z m 9.9844,0 h 3.01584 v 0.5271 h 1.50637 v -0.5271 h 5.60482 v 9.007719 h -10.12703 z m -80.539792,3.586344 h 5.654952 v 6.900871 h -5.654952 z m 7.062618,3.924825 h 12.675196 v 15.64504 h -7.140133 v -1.326017 h -1.810226 v 1.326017 h -3.724837 z m -22.980509,1.028878 h 6.824906 v 1.255738 h 1.648995 v -1.255738 h 4.730978 v 14.616162 h -4.875332 v -1.089772 h -1.653 v 1.089772 h -6.6765 z m 64.433276,1.800924 H 88.6532 c 0.0309,1.006346 0.320128,1.810911 0.60048,2.438611 0.296609,0.664098 0.554489,1.160341 0.554489,1.384928 0,0.6405 -0.191091,1.188392 -0.398426,1.767334 -0.207334,0.578943 -0.431498,1.189461 -0.431498,1.916162 0,1.002683 0.392919,1.70943 0.746725,2.230872 h -1.709457 z m -48.515385,1.837097 h 5.654952 v 9.03304 h -1.754931 v -1.826761 h -1.227832 v 1.826761 H 41.542381 L 40.83183,90.062899 h -1.331702 z m 0,8.150407 h 1.128614 l 0.712618,1.23455 h 3.81372 v 1.593184 h -5.654952 z"
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
                    d="m 88.470266,4.5857631 v 5.3776331 h 15.008254 v -8.180939 h -4.996803 v 2.8033059 z m -42.49043,7.3366859 v 20.65352 l 10.08724,-0.0031 V 11.922449 Z M 13.239199,42.687496 V 62.02275 h 8.780859 l -10e-4,-19.335254 z m 74.764945,23.97063 v 11.013282 h 3.191537 V 66.703602 Z M 60.88642,78.486345 v 6.037357 h 2.560567 v -6.037357 z m 14.971179,0.974617 v 3.836459 h 5.019332 v -3.836459 z m 23.468855,0.934827 v 4.001823 h 7.408336 v -3.985287 z m 26.660386,3.474723 v 13.369727 h 5.49786 V 83.870512 Z m -65.10042,3.390491 v 5.124752 h 2.560567 v -5.124752 z m 14.981514,0.03772 v 3.682462 h 4.817794 v -3.682462 z m -62.434432,9.118823 v 8.314734 h 11.011731 v -8.314734 z m 76.488355,0.0155 v 8.289914 h 10.549753 v -8.289914 z m -31.045134,0.0067 v 6.453854 h 16.136483 v -6.453854 z"
                />
            </g>
            <g id="layer8" transform="translate(0.00165327,-0.0019296)">
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
                    d="m 96.92453,65.17708 -4.914429,0.0026 v 16.174723 h 1.626774 v 0.766361 h -2.116149 v 4.272091 l 0.07183,-4.168738 v 5.388819 h 0.59893 v 2.189013 h 1.920296 v 1.816944 h 2.31252 v -1.693437 h 0.763778 v 1.548743 h 9.00256 v -5.18263 h -7.040926 v 1.590084 H 96.461509 V 82.172441 H 94.22547 v -0.818038 h 2.69906 z m -5.403804,21.215759 -0.02067,1.19941 0.02067,0.06201 z m 15.314834,-20.338293 -5.01778,0.0026 v 11.911418 h 5.01778 z m 1.97352,15.187703 v 5.321639 h 4.01113 l -0.007,-3.510897 h 0.69712 v -1.522388 h -0.67851 v -0.288354 z m 11.01742,0.09922 v 0.949813 h -2.127 v 8.672338 h -0.0703 v 0.929143 h 5.2529 v -0.867131 h 1.75545 v -1.878955 h -1.61075 v -6.938078 h -0.78445 v -0.86713 z"
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
                <rect
                    style={{
                        fill: "#909398",
                        stroke: "#000000",
                        strokeWidth: "0.0515133",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    id="rect2"
                    width="5.4269748"
                    height="2.7843473"
                    x="105.86895"
                    y="7.3443365"
                />
                <rect
                    style={{
                        display: "inline",
                        fill: "#909398",
                        stroke: "#000000",
                        strokeWidth: "0.0633422",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    id="rect2-3"
                    width="3.6378036"
                    height="6.2804308"
                    x="126.39333"
                    y="2.2854066"
                />
                <rect
                    style={{
                        display: "inline",
                        fill: "#909398",
                        stroke: "#000000",
                        strokeWidth: "0.0731503",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    id="rect2-6"
                    width="6.0006504"
                    height="5.0778146"
                    x="50.745838"
                    y="3.5212965"
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
                        fill: "#ffffff",
                        fillOpacity: "0.695946",
                        stroke: "#000000",
                        strokeWidth: "0.144965",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
                    }}
                    d="M 38.923419,1.5442714 V 7.3625209 H 47.81745 V 1.5442714 Z m 24.437785,1.065568 v 5.8182497 h 8.894031 V 2.6098394 Z m 14.783594,0.5953125 v 5.8182492 h 8.894031 V 3.2051519 Z m 2.494938,16.4563601 v 5.84202 h 6.536552 v -5.84202 z m 41.393864,3.648873 v 5.816182 h 9.10694 v -5.816182 z m -60.975098,0.891418 v 5.842021 h 6.536552 v -5.842021 z m 43.782868,2.027266 v 5.841504 h 6.53655 v -5.841504 z m -42.401557,9.739458 v 5.84202 h 6.536552 v -5.84202 z m 29.682943,0.859896 v 5.84202 h 6.536552 v -5.84202 z m 29.082464,0.05684 v 5.84202 h 6.53604 v -5.84202 z m -72.622959,3.217374 v 5.842021 h 6.536552 V 40.102641 Z M 4.8009544,50.736101 v 5.84202 h 6.5365516 v -5.84202 z m 54.6292236,2.380733 v 5.842021 h 6.536552 v -5.842021 z m -31.734497,1.224215 v 5.841504 h 6.536035 v -5.841504 z m 83.609369,2.06654 v 5.842021 h 6.53656 v -5.842021 z m 11.44323,3.770313 v 5.84202 h 6.53655 v -5.84202 z m -81.818782,5.766573 v 5.84202 h 6.536036 v -5.84202 z M 25.920079,67.41932 v 5.842021 h 6.536552 V 67.41932 Z M 2.0424665,68.595992 v 5.842021 h 6.5365519 v -5.842021 z m 99.3407135,0.379306 v 5.84202 h 6.53655 v -5.84202 z m -88.418383,0.395324 v 5.842021 h 6.536035 v -5.842021 z m 78.231917,0.266134 v 5.842021 h 6.536552 V 69.636756 Z M 122.4067,71.86401 v 5.842021 h 6.53655 V 71.86401 Z m -10.16475,0.02584 v 5.842021 h 6.53655 V 71.88985 Z m -99.412028,8.65942 v 5.842021 h 6.536035 V 80.54927 Z m -8.0429202,2.630847 v 5.842021 H 11.323554 V 83.180115 Z M 109.58526,83.395089 v 5.842021 h 6.53655 v -5.842021 z m -60.589587,0.859896 v 5.842021 h 6.536552 v -5.842021 z m -21.665861,0.695048 v 5.842021 h 6.536552 v -5.842021 z m 39.194507,0.131775 v 5.842021 h 6.536551 v -5.842021 z m 32.411455,0.760677 v 5.842021 h 6.536556 v -5.842021 z m -16.855816,9.390641 v 5.842004 h 6.536035 v -5.842004 z"
                />
            </g>
            <g
                id="layer5"
                style={{ display: "inline" }}
                transform="translate(0.00165327,-0.0019296)"
            >
                <text
                    style={{
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                <text
                    style={{
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                    }}
                    x="110.17437"
                    y="88.393913"
                    id="text68-5-2-8-3"
                >
                    <tspan
                        id="tspan68-1-34-7-9"
                        style={{
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontWeight: "normal",
                            fontStretch: "normal",
                            fontSize: "5.64444px",
                            fontFamily: '"MS Gothic"',
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="110.17437"
                        y="88.393913"
                    >
                        D4
                    </tspan>
                </text>
                <text
                    style={{
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.855",
                        strokeDasharray: "none",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                    }}
                    x="122.65387"
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
                            fontFamily: '"MS Gothic"',
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="122.65387"
                        y="28.465796"
                    >
                        F10
                    </tspan>
                </text>
                <text
                    style={{
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
                    }}
                    x="63.54155"
                    y="7.8944407"
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
                            fontFamily: '"MS Gothic"',
                            fill: "#000000",
                            fillOpacity: 1,
                            strokeWidth: "0.355",
                        }}
                        x="63.54155"
                        y="7.8944407"
                    >
                        B10
                    </tspan>
                </text>
                <text
                    style={{
                        fontSize: "5.64444px",
                        fontFamily: "HGPSoeiKakugothicUB",
                        fill: "#04bac6",
                        fillOpacity: 1,
                        stroke: "none",
                        strokeWidth: "0.354999",
                        strokeOpacity: 1,
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
                            fontFamily: '"MS Gothic"',
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
            </g>
            {arrow && (
                <g
                    id="layer9"
                    style={{ display: "inline" }}
                    transform="translate(0.00165327,-0.0019296)"
                >
                    <path
                        id="path15"
                        style={{
                            fill: "none",
                            fillOpacity: 1,
                            stroke: "#ffffff",
                            strokeWidth: "0.438",
                            strokeDasharray: "none",
                            strokeOpacity: 1,
                        }}
                        d="m 80.612864,22.164201 c -2.077495,0 -3.945504,1.246214 -5.777425,2.447396 -1.828534,1.198963 -3.622067,2.353216 -5.481836,2.357479 v -0.645439 l -1.695504,0.955498 1.695504,0.978751 v -0.736389 c 2.083479,-0.0041 3.95556,-1.247547 5.78466,-2.446879 1.832128,-1.201318 3.622503,-2.357479 5.474601,-2.357479 z m 24.316356,4.777486 c -6.059846,0 -13.009806,0.56717 -19.236046,1.666049 -6.226239,1.098879 -11.722087,2.715566 -14.908134,4.878772 -2.193202,1.489101 -4.534121,3.168261 -6.907072,4.88859 0.181601,-2.847793 0.336414,-5.603947 0.336414,-8.283215 h -0.552421 c 0,2.799629 -0.171838,5.696884 -0.365869,8.705412 -4.164687,3.02649 -8.442452,6.19671 -12.425598,8.983947 -3.222838,2.255207 -6.243805,4.246564 -8.818067,5.668388 -2.558287,1.413002 -4.689182,2.248945 -6.068363,2.259294 v -0.711068 l -1.695504,0.955497 1.695504,0.979269 v -0.67076 c 1.590665,-0.0097 3.74515,-0.897011 6.336047,-2.328024 2.605207,-1.438915 5.636659,-3.438827 8.867159,-5.699393 3.873532,-2.710534 8.017823,-5.776781 12.062313,-8.719365 -0.243918,3.751608 -0.505131,7.683363 -0.505912,11.861292 h -0.788583 l 0.956014,1.695503 0.978752,-1.695503 h -0.593245 c 8.17e-4,-4.324642 0.283517,-8.392904 0.535367,-12.284005 2.499199,-1.814429 4.963814,-3.585829 7.263123,-5.146973 3.045784,-2.067974 8.50476,-3.700697 14.693677,-4.792989 6.188917,-1.092292 13.115168,-1.658296 19.140444,-1.658296 z m 3.27525,5.11235 -0.97927,1.695504 h 0.69143 c -0.0272,1.591281 -1.29738,3.026149 -3.10265,4.073136 -1.825,1.058426 -4.16559,1.694987 -6.113331,1.694987 v 0.552938 c 2.066481,0 4.472751,-0.65699 6.390831,-1.769401 1.90043,-1.102175 3.35102,-2.675079 3.37757,-4.55166 h 0.69091 z m 11.30163,6.637838 v 0.704866 c -8.44306,0.02285 -16.85079,5.221358 -25.221202,10.562663 -8.388857,5.35308 -16.744637,10.851287 -24.951449,11.570353 -6.359846,0.557239 -13.23149,-0.40267 -19.456693,-1.507918 C 43.651552,58.916592 38.08497,57.66436 34.255487,57.66436 v 0.552421 c 3.707508,0 9.28542,1.239834 15.525151,2.34766 6.239729,1.107827 13.15271,2.080738 19.601904,1.51567 8.41726,-0.737505 16.815067,-6.306212 25.198979,-11.656136 8.364999,-5.337846 16.709059,-10.451227 24.924579,-10.474296 v 0.676961 l 1.69551,-0.955497 z m -29.110887,0.04289 v 0.769979 c -2.031582,0.0058 -3.988512,1.078095 -5.92677,2.638082 -1.943525,1.564225 -3.879066,3.631842 -5.857524,5.691125 -3.956917,4.118568 -8.082802,8.158675 -12.589929,8.158675 v 0.552421 c 4.832533,0 9.025069,-4.202976 12.988355,-8.328173 1.981644,-2.062598 3.907309,-4.117432 5.804813,-5.644617 1.891832,-1.522621 3.744817,-2.507149 5.581055,-2.513025 v 0.610299 l 1.695504,-0.955498 z m 33.938507,4.07417 c 0,4.009988 -2.21687,8.80102 -6.06475,13.710791 -3.84789,4.909772 -9.3151,9.938457 -15.76131,14.453381 C 89.616629,80.001965 72.811365,86.977315 57.231346,86.978849 V 86.29672 l -1.695504,0.955497 1.695504,0.978752 V 87.53127 c 15.744766,-0.0015 32.628424,-7.02551 45.594634,-16.107027 6.48381,-4.541253 11.98697,-9.597299 15.87862,-14.562936 3.89167,-4.965637 6.18154,-9.840294 6.18154,-14.052372 z m -80.457115,28.954306 -0.978751,1.695504 h 0.714685 c -0.0033,3.024509 -0.237381,6.508313 0.283703,9.287805 0.262355,1.399412 0.717738,2.630078 1.523422,3.523299 0.805682,0.893222 1.96658,1.423687 3.527433,1.423686 v -0.554488 c -1.439292,0 -2.412753,-0.458761 -3.117639,-1.240235 -0.704888,-0.781474 -1.138947,-1.911666 -1.390613,-3.254065 -0.49988,-2.666381 -0.274931,-6.133696 -0.271818,-9.186002 h 0.665592 z"
                    />
                    <path
                        id="path15-6"
                        style={{
                            fill: "#000000",
                            fillOpacity: 1,
                            stroke: "none",
                            strokeWidth: "0.137781",
                            strokeDasharray: "none",
                        }}
                        d="m 80.604596,22.154383 c -2.077495,0 -3.945504,1.246214 -5.777425,2.447396 -1.828534,1.198963 -3.622067,2.353216 -5.481836,2.357479 v -0.645439 l -1.695504,0.955498 1.695504,0.978751 v -0.736389 c 2.083479,-0.0041 3.95556,-1.247547 5.78466,-2.446879 1.832128,-1.201318 3.622503,-2.357479 5.474601,-2.357479 z m 24.316364,4.777486 c -6.059846,0 -13.009814,0.56717 -19.236054,1.666049 -6.226239,1.098879 -11.722087,2.715566 -14.908134,4.878772 -2.193202,1.489101 -4.534121,3.168261 -6.907072,4.88859 0.181601,-2.847793 0.336414,-5.603947 0.336414,-8.283215 h -0.552421 c 0,2.799629 -0.171838,5.696884 -0.365869,8.705412 -4.164687,3.02649 -8.442452,6.19671 -12.425598,8.983947 -3.222838,2.255207 -6.243805,4.246564 -8.818067,5.668388 -2.558287,1.413002 -4.689182,2.248945 -6.068363,2.259294 v -0.711068 l -1.695504,0.955497 1.695504,0.979269 v -0.67076 c 1.590665,-0.0097 3.74515,-0.897011 6.336047,-2.328024 2.605207,-1.438915 5.636659,-3.438827 8.867159,-5.699393 3.873532,-2.710534 8.017823,-5.776781 12.062313,-8.719365 -0.243918,3.751608 -0.505131,7.683363 -0.505912,11.861292 H 61.94682 l 0.956014,1.695503 0.978752,-1.695503 h -0.593245 c 8.17e-4,-4.324642 0.283517,-8.392904 0.535367,-12.284005 2.499199,-1.814429 4.963814,-3.585829 7.263123,-5.146973 3.045784,-2.067974 8.50476,-3.700697 14.693677,-4.792989 6.188917,-1.092292 13.115176,-1.658296 19.140452,-1.658296 z m 3.27525,5.11235 -0.97927,1.695504 h 0.69143 c -0.0272,1.591281 -1.29738,3.026149 -3.10265,4.073136 -1.825,1.058426 -4.16559,1.694987 -6.113339,1.694987 v 0.552938 c 2.066489,0 4.472759,-0.65699 6.390839,-1.769401 1.90043,-1.102175 3.35102,-2.675079 3.37757,-4.55166 h 0.69091 z m 11.30163,6.637838 v 0.704866 c -8.44306,0.02285 -16.85079,5.221358 -25.22121,10.562663 -8.388857,5.35308 -16.744637,10.851287 -24.951449,11.570353 -6.359846,0.557239 -13.23149,-0.40267 -19.456693,-1.507918 -6.225204,-1.105247 -11.791786,-2.357479 -15.621269,-2.357479 v 0.552421 c 3.707508,0 9.28542,1.239834 15.525151,2.34766 6.239729,1.107827 13.15271,2.080738 19.601904,1.51567 8.41726,-0.737505 16.815067,-6.306212 25.198979,-11.656136 8.365007,-5.337846 16.709067,-10.451227 24.924587,-10.474296 v 0.676961 l 1.69551,-0.955497 z m -29.110895,0.04289 v 0.769979 c -2.031582,0.0058 -3.988512,1.078095 -5.92677,2.638082 -1.943525,1.564225 -3.879066,3.631842 -5.857524,5.691125 -3.956917,4.118568 -8.082802,8.158675 -12.589929,8.158675 v 0.552421 c 4.832533,0 9.025069,-4.202976 12.988355,-8.328173 1.981644,-2.062598 3.907309,-4.117432 5.804813,-5.644617 1.891832,-1.522621 3.744817,-2.507149 5.581055,-2.513025 v 0.610299 l 1.695504,-0.955498 z m 33.938515,4.07417 c 0,4.009988 -2.21687,8.80102 -6.06475,13.710791 -3.84789,4.909772 -9.3151,9.938457 -15.76131,14.453381 -12.891039,9.028858 -29.696303,16.004208 -45.276322,16.005742 v -0.682129 l -1.695504,0.955497 1.695504,0.978752 v -0.699699 c 15.744766,-0.0015 32.628424,-7.02551 45.594642,-16.107027 6.48381,-4.541253 11.98697,-9.597299 15.87862,-14.562936 3.89167,-4.965637 6.18154,-9.840294 6.18154,-14.052372 z m -80.457123,28.954306 -0.978751,1.695504 h 0.714685 c -0.0033,3.024509 -0.237381,6.508313 0.283703,9.287805 0.262355,1.399412 0.717738,2.630078 1.523422,3.523299 0.805682,0.893222 1.96658,1.423687 3.527433,1.423686 v -0.554488 c -1.439292,0 -2.412753,-0.458761 -3.117639,-1.240235 -0.704888,-0.781474 -1.138947,-1.911666 -1.390613,-3.254065 -0.49988,-2.666381 -0.274931,-6.133696 -0.271818,-9.186002 h 0.665592 z"
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
    "ナノデバイス作製・評価センター",
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
