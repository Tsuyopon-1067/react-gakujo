import { CSSProperties } from "styled-components";
import styles from "./CampusMap.module.css";

interface PropsType {
	style?: CSSProperties;
	color?: string;
}

const MapSvg = (props: PropsType) => {
	return (
		<svg width="498.327" height="397.327" viewBox="0 0 131.849 105.126" style={props.style ? props.style : undefined}>
			<path style={{ display: 'inline', fill: '#f8f7f7', fillOpacity: 1, stroke: '#000', strokeWidth: '.351', strokeDasharray: 'none', strokeOpacity: 1 }} d="M.176.175h131.498V104.95H.176z" />
			<g style={{ display: 'inline' }}>
				<path style={{ color: '#000', fill: '#d8e0e7', stroke: '#000', strokeWidth: '.0529167', strokeDasharray: 'none', strokeOpacity: 1 }} d="M76.523 2.29v9.637h-7.478v-.633h-2.552v.633h-19.61v-1.74h-2.072v1.74h-.003v22.585h-.126l-.1 3.224h.366v4.639H5.887v-6.789H1.562v2.364h3.176v8.21l-2.365 1.924v15.9H1.56l.008 2.9h9.05c-.046.907-.041 3.293-.022 5.671H9.138v1.66h1.518v3.567H8.232v1.798H4.86v17.998l5.137 5.256h4.928v-.351h-4.78l-4.933-5.048V79.932h3.021v4.305h2.338v-3.672h1.862v8.841l3.695 2.135v10.716h.352V91.338l-3.698-2.135v-8.638h9.827v6.049h-1.741v4.054h1.74v7.622h-.002l-.74 3.905h1.13l.728-3.836h24.06v7.571h1.775v-7.571h32.529v8.371l7.144-.016v-8.355h15.477V95.18h-9.355v-3.077h-3.742c-.391-.55-.867-1.18-.867-2.23 0-.614.191-1.151.399-1.732.208-.58.431-1.202.431-1.952 0-.513-.32-.978-.601-1.61-.265-.594-.522-1.31-.552-2.214h42.259V68.949h-1.546V53.583l-1.124.005V37.736h2.707l-.006-3.224h-19.326v-5.356h-1.36v5.356h-7.957v-4.157h3.368v-4.163h-3.532V14.967h8.127v4.338h1.23v-4.338h10.99v3.613h1.356v-5.297h-19.762v-1.356H86.243v-.583h-2.552v.583h-5.67V2.29Zm-28.98 11.601H57.7v20.6l.075.02H47.544Zm11.72 0h19.185v9.638h-1.176v2.085h2.3V13.891h4.178v1.184h2.503v-1.184h4.227v6.91h3.315v-6.91h7.871v8.56h-3.398v1.567h3.649v10.494H89.23v-2.63l-7.144.75v1.88h-5.31v-1.724h-1.9v1.724H63.66v-1.738H61.76v1.738h-2.496Zm-10.9 23.845h9.604v12.798l-1.016 1.016h-8.589zm10.78 0h12.344v7.268h-1.736v-.52h-1.133v1.09h5.333v-7.838h8.136v4.788h-4.415v1.455h4.415v4.816h-4.305l-.105 4.046h4.41v4.838h-4.382v3.34h4.382v2.965h-15.99V60.92h-3.209v3.064h-9.41v-2.75h-2.48v2.75h-2.636v-11.15h8.643l1.363-1.364h4.198v-1.257h-3.422zm30.088 0h15.919v1.196h1.531v-1.196h5.01v6.617h-9.28v1.657h-1.657v1.953h-2.012v8.15l1.446 1.446h9.119v6.425H89.23V52.14h4.395v-3.788h-4.395zm24.402 0h7.835v6.009h-7.835zm9.086 0h6.093V53.76h-3.188v-2.186h-1.17v-.929h-1.735zm-48.764 4.618v1.476h.914v-1.476Zm-68.068.74h6.246v20.89H3.316V48.472l2.571-2.058zm7.843 0h31.218v20.89H34.163V62.67h-3.927v1.315H13.73Zm99.903 2.144h7.835v5.892h2.704v.968h.484v1.662h-.46l-.022.725h.482v1.933h-3.32v8.446h-4.57v1.42h.949v4.439h-6.445v-3.839h.633v-2.9h-.633v-6.019h.409v-1.137h-.409v-.423h1.498V45.837h.865zm-10.326.012h8.385v10.222l-2.385.047v1.143h-8.748l-.92-.92V48.86h2.012v-1.954h1.656zm22.317 9.235h3.188v.25h1.033V70.71h1.537v.9h-5.605v-.3h-1.506v.3h-3.133v-.887h-2.253v-4.439h4.096l-.178-1.42h-.73v-8.19h3.551v-2.189zm-29.777 7.026v2.47h1.888v-2.47zm-82.12 5.373h8.052v4.884h-1.028v1.969h1.028v4.045h-8.051zm9.65 0h14.625v10.898h-6.69v-1.3h-2.571v1.3h-5.364v-5.344H24.7V70.47h-1.324zm17.338 0h5.655v7.037h-5.655zm7.063 0H57.96v11.202H47.778Zm11.25 0h16.087c.017.907.4 1.506.852 1.946.458.447.967.764 1.306 1.192l.022.025 2.423 1.866c-.236.19-.439.406-.607.642-.597.838-.789 1.88-.789 2.785 0 .532-.103.864-.242 1.098-.14.234-.32.38-.531.521-.211.14-.452.264-.66.472a1.273 1.273 0 0 0-.362.919v7.804h-.534v2.389h6.094v6.638H62.114V88.68h3.17v-1.688h-3.17v-8.905h-3.086zm16.64 0h6.419v4.234c-.754.022-1.379.195-1.885.472l-2.523-1.943c-.413-.508-.936-.83-1.328-1.211-.391-.382-.668-.793-.683-1.552zm13.563 0h9.508v14.149H93.23v-1.435h-4zm12.865 0h7.21v14.149h-7.21v-8.056h.966v-2.81h-.966zm-20.009 4.784v14.486h-5.009V78.35c0-.279.073-.4.202-.528.128-.128.336-.246.574-.404.237-.158.504-.368.7-.7.198-.33.32-.774.32-1.378 0-.825.182-1.76.684-2.465.483-.677 1.247-1.168 2.529-1.207zm29.184.357h8.883v9.008h-8.884v-2.088h1.76V75.2h-1.76zm9.984 0h3.016v.527h1.506v-.527h5.605v9.008h-10.127zm-80.54 3.586h5.655v6.901h-5.655zm7.063 3.925h12.675v15.645h-7.14v-1.326h-1.81v1.326h-3.725zm-22.98 1.03h6.824v1.255h1.65v-1.256h4.73v14.616h-4.875v-1.09h-1.653v1.09h-6.676zm64.433 1.8h.637c.031 1.006.32 1.81.6 2.439.298.664.555 1.16.555 1.385 0 .64-.19 1.188-.398 1.767-.207.579-.432 1.19-.432 1.916 0 1.003.393 1.71.747 2.23h-1.71zm-48.516 1.837h5.655v9.033h-1.755V91.41h-1.227v1.827h-.63l-.711-1.234h-1.332zm0 8.15h1.129l.713 1.235h3.813v1.593h-5.655z" transform="translate(-1.214 -1.941)" />
			</g>
			<g style={{ display: 'inline' }}>
				<path style={{ display: 'inline', fill: '#474a4d', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} d="M89.685 6.525v5.378h9.353V6.525Zm-42.49 7.337v20.653l10.087-.003v-20.65Zm-32.74 30.765v19.335h8.78V44.627zm74.764 23.97v11.014h3.192V68.643ZM62.102 80.426v6.037h2.56v-6.037zm14.97.974v3.837h5.02V81.4zm23.47.935v4.002h7.408v-3.985zm26.66 3.475v13.37h5.498V85.81Zm-65.1 3.39v5.125h2.56V89.2Zm14.981.038v3.682h4.818v-3.682ZM14.65 98.357v8.315H25.66v-8.315zm76.488.015v8.29h10.55v-8.29zm-31.045.007v6.454h16.136v-6.454z" transform="translate(-1.214 -1.941)" />
			</g>
			<path style={{ display: 'inline', fill: '#909398', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} d="M113.754 18.504v9.724h2.067v6.3l9.79.017v-16.04ZM5.864 25.346v17.069h3.94v-17.07ZM24.04 43.12v20.844h1.87v-6.087h1.666V43.121Zm105.996 2.05v4.682h2.171v-4.681ZM1.554 51.66v9.045h4.449V51.66Zm129.604 2.089v15.179h1.065v-15.18Z" transform="translate(-1.214 -1.941)" />
			<g style={{ display: 'inline' }}>
				<path style={{ display: 'inline', fill: '#dceff3', fillOpacity: 1, stroke: '#000', strokeWidth: '.132292', strokeDasharray: 'none', strokeOpacity: 1 }} d="M25.859 99.023h21.843v6.898H25.859z" transform="translate(-1.214 -1.941)" />
				<path style={{ display: 'inline', fill: '#c8d9cf', fillOpacity: 1, stroke: '#000', strokeWidth: '.132292', strokeDasharray: 'none', strokeOpacity: 1 }} d="M1.555 2.286h37.703v11.538h5.39v28.377H9.856V25.268H1.555Z" transform="translate(-1.214 -1.941)" />
				<path style={{ display: 'inline', fill: '#f4ea7a', fillOpacity: 1, stroke: '#000', strokeWidth: '.132292', strokeDasharray: 'none', strokeOpacity: 1 }} d="M126.659 21.585v10.547h2.83V21.656ZM67.783 40.233v4.3h3.274v-4.3zm-17.785.86v2.877h4.82v-2.877Zm-43.51 2.563V61.87l1.074.955h2.94l1.112-1.112V52.18h-1.96v-.975h1.927v-7.55Zm18.208 24.503v8.348h11.258l.002-8.348zm-10.814 1.774v7.416h6.855l.033-7.416zm-7.825.88v6.32h3.07v-6.32Zm108.045 2.393v1.781l-1.067.059v4.19h2.41v1.226h3.84v-7.256zM13.725 81.59v4.564h3.54v11.377l3.604-.006V81.59Zm-7.282 2.445v7.708h5.642v-7.706z" transform="translate(-1.214 -1.941)" />
				<path style={{ display: 'inline', fill: '#b19ff4', fillOpacity: 1, stroke: '#000', strokeWidth: '.132292', strokeDasharray: 'none', strokeOpacity: 1 }} d="M123.454 72.495v8.943h3.283v-.61h3.283l.002-8.333zm-96.352 9.322v12.45h9.579v-12.45Z" transform="translate(-1.214 -1.941)" />
				<path style={{ display: 'inline', fill: '#b8de95', fillOpacity: 1, stroke: '#000', strokeWidth: '.132292', strokeDasharray: 'none', strokeOpacity: 1 }} d="m98.14 67.116-4.915.003v16.175h1.627v.766h-2.116v4.272l.072-4.169v5.39h.599v2.188h1.92v1.817h2.313v-1.693h.763v1.548h9.003v-5.182h-7.041v1.59h-2.688v-5.71H95.44v-.817h2.699zm-5.404 21.216-.02 1.2.02.061zm15.315-20.338-5.018.002v11.912h5.018zm1.973 15.187v5.322h4.011l-.007-3.51h.698V83.47h-.679v-.289zm11.018.1v.95h-2.127v8.672h-.07v.929h5.252v-.867h1.756v-1.88h-1.611v-6.937h-.784v-.867z" transform="translate(-1.214 -1.941)" />
				<path style={{ display: 'inline', fill: '#ffa7b3', fillOpacity: 1, stroke: '#000', strokeWidth: '.132292', strokeDasharray: 'none', strokeOpacity: 1 }} d="M113.007 46.297v10.294h-1.344v12.6l5.614-.002V56.276h7.003v-3.791h-6.251v-4.143h-1.197v-2.045zm9.84 10.455v14.582s5.147-.065 5.212 0c.066.065 0-14.582 0-14.582z" transform="translate(-1.214 -1.941)" />
				<path style={{ display: 'inline', fill: '#04bac6', fillOpacity: 1, stroke: '#000', strokeWidth: '.132292', strokeDasharray: 'none', strokeOpacity: 1 }} d="M76.057 3.739 61.12 3.74v7.64h14.938Zm-36.784.63v5.83h10.325V4.37Zm39.2 2.293v4.665h10.546V6.662Zm2.704 8.403V28.4l2.415-.004V29.8H77.49V17.18h-4.812v12.767H65.17V16.04h-2.91v1.01h-1.654v15.742H98.26v-17.05H95.53V29.8h-8.78v-1.41l2.298.005v-13.33Zm26.029 1.372v17.18l3.224.002v-6.251h1.175v-2.596h-1.158v-1.356h1.174v-2.613h-1.207v-4.366Zm-32.347 22.29v19.458h-8.91V41.557h-5.005V50h1.824v8.395l-7.577.03v-3.819H50.14v7.016h27.572V38.727Zm18.803.183v22.672h13.66v-2.96h-10.46l-.008-6.284h.843v-5.143h-.975v-3.109h11.228l.43 2.067h-2.315v8.55h4.498v-8.484h-1.637l-.496-2.182h2V38.91zm29.595.235v11.077h1.683v.935h2.491V39.15ZM27.97 43.99v13.475h2.404v.952h-3.759v4.259h10.148v-4.259h-2.237v-.952h2.237V43.99Zm14.04 25.62v21.829h3.208V69.61Zm8.327 9.89v14.312c0 .1 8.806 0 8.806 0V90.1h-3.878l.041-10.6z" transform="translate(-1.214 -1.941)" />
				<path style={{ display: 'inline', fill: '#0065b7', fillOpacity: 1, stroke: '#000', strokeWidth: '.132292', strokeDasharray: 'none', strokeOpacity: 1 }} d="M60.971 69.935v6.862h8.03v3.125h-3.358v14.63l10.483-.146V73.323h-9.023v-3.388zm18.867 29.3v1.863h2.271v-1.863z" transform="translate(-1.214 -1.941)" />
				<path style={{ display: 'inline', fill: '#909398', stroke: '#000', strokeWidth: '.0394255', strokeDasharray: 'none', strokeOpacity: 1 }} d="M100.436 6.612h4.433v4.644h-4.433z" transform="translate(-1.214 -1.941)" />
				<path style={{ fill: '#909398', stroke: '#000', strokeWidth: '.0515133', strokeDasharray: 'none', strokeOpacity: 1 }} d="M107.084 9.284h5.427v2.784h-5.427z" transform="translate(-1.214 -1.941)" />
				<path style={{ display: 'inline', fill: '#909398', stroke: '#000', strokeWidth: '.0731503', strokeDasharray: 'none', strokeOpacity: 1 }} d="M51.961 5.461h6.001v5.078h-6.001z" transform="translate(-1.214 -1.941)" />
			</g>
			<g style={{ display: 'inline' }}>
				<path style={{ fill: '#fff', fillOpacity: '.695946', stroke: '#000', strokeWidth: '.144965', strokeDasharray: 'none', strokeOpacity: 1 }} d="M40.139 3.484v5.818h8.894V3.484Zm24.437 1.065v5.818h8.894V4.55Zm14.784.595v5.819h8.894V5.144Zm2.495 16.457v5.842h6.537V21.6zm41.394 3.649v5.816h9.107V25.25Zm-60.975.891v5.842h6.536v-5.842Zm43.783 2.027v5.842h6.536v-5.842zm-42.402 9.74v5.842h6.537v-5.842zm29.683.86v5.842h6.537v-5.842zm29.082.056v5.843h6.536v-5.843Zm-72.623 3.218v5.842h6.537v-5.842ZM6.017 52.675v5.842h6.536v-5.842zm54.628 2.381v5.842h6.537v-5.842zM28.911 56.28v5.842h6.536V56.28zm83.61 2.067v5.842h6.536v-5.842zm11.442 3.77v5.842h6.537v-5.842zm-81.818 5.767v5.842h6.536v-5.842zm-15.01 1.475V75.2h6.537v-5.842ZM3.258 70.535v5.842h6.536v-5.842zm99.34.38v5.842h6.537v-5.842zm-88.418.395v5.842h6.536V71.31zm78.232.266v5.842h6.536v-5.842zm31.21 2.227v5.842h6.536v-5.842zm-10.165.026v5.842h6.537V73.83zm-99.412 8.66v5.842h6.536v-5.842zm-8.043 2.63v5.842h6.537V85.12Zm104.798.215v5.842h6.537v-5.842zm-60.59.86v5.842h6.537v-5.842Zm-21.665.695v5.842h6.537V86.89Zm39.195.132v5.842h6.536v-5.842zm32.411.76v5.843h6.537v-5.842zm-16.856 9.391v5.842h6.536v-5.842z" transform="translate(-1.214 -1.941)" />
			</g>
			<g style={{ display: 'inline' }}>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="82.233" y="26.904" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="82.233" y="26.904">B0</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="29.469" y="61.394" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="29.469" y="61.394">B5</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="61.068" y="60.034" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="61.068" y="60.034">B2</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="106.732" y="33.309" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="106.732" y="33.309">B4</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="68.656" y="92.108" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="68.656" y="92.108">A1</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="83.608" y="102.146" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="83.608" y="102.146">A2</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="29.17" y="92.02" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="29.17" y="92.02">E1</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="50.85" y="91.292" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="50.85" y="91.292">B7</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="122.975" y="44.157" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="122.975" y="44.157">B6</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="42.594" y="72.887" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="42.594" y="72.887">B8</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="124.636" y="67.329" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="124.636" y="67.329">C1</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="93.016" y="76.64" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="93.016" y="76.64">D1</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="100.674" y="92.979" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="100.674" y="92.979">D3</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="111.39" y="90.333" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="111.39" y="90.333">D4</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="124.123" y="78.923" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="124.123" y="78.923">E2</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.855', strokeDasharray: 'none', strokeOpacity: 1 }} x="6.889" y="57.755" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.855', strokeDasharray: 'none' }} x="6.889" y="57.755">F1</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="3.55" y="75.583" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="3.55" y="75.583">F2</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="6.262" y="90.135" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="6.262" y="90.135">F3</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="14.53" y="87.82" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="14.53" y="87.82">F5</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="14.861" y="76.707" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="14.861" y="76.707">F4</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="27.626" y="74.528" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="27.626" y="74.528">F6</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="50.249" y="47.14" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="50.249" y="47.14">F7</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="64.272" y="43.105" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="64.272" y="43.105">F8</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="123.869" y="30.405" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="123.869" y="30.405">F10</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="113.844" y="78.926" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="113.844" y="78.926">F9</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="103.39" y="75.984" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="103.39" y="75.984">D2</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="112.707" y="63.416" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="112.707" y="63.416">C2</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="93.909" y="43.809" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="93.909" y="43.809">B3</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="63.236" y="31.22" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="63.236" y="31.22">B1</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="41.517" y="8.65" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="41.517" y="8.65">B9</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="64.757" y="9.834" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="64.757" y="9.834">B10</tspan>
				</text>
				<text style={{ fontSize: '5.64444px', fontFamily: 'HGPSoeiKakugothicUB', fill: '#04bac6', fillOpacity: 1, stroke: 'none', strokeWidth: '.354999', strokeOpacity: 1 }} x="79.607" y="10.396" transform="translate(-1.214 -1.941)">
					<tspan style={{ fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, fontStretch: 'normal', fontSize: '5.64444px', fontFamily: '"MS Gothic"', InkscapeFontSpecification: '"MS Gothic"', fill: '#000', fillOpacity: 1, strokeWidth: '.355' }} x="79.607" y="10.396">B11</tspan>
				</text>
			</g>
		</svg>
	)
}

function CampusMap() {
	return (
		<div className={styles.main_div}>
			<MapSvg style={{ width: "100%" }} />
		</div>
	);
}

export default CampusMap;