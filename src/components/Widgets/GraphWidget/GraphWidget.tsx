import { Divider } from '@mui/material';
import BarGraph from '../../Graphs/BarGraph';
import LineGraph from '../../Graphs/LineGraph';
import PieGraph from '../../Graphs/PieGraph';
import './GraphWidget.css'

interface Graph {
    color: string | null;
    type: string | null;
    data: any[];
    barScale: string | null;
    showAxisLabels: string | null;
    showLegend: string | null;
    legendData: any[];
}

interface WidgetProps {
    data: Graph;
    multiple: boolean;
}

function GraphWidget({ data, multiple }: WidgetProps) {
    const lineColors = ["#FB8181", "#5E5ADB", "#54D787", "#82D1DB", "#F0AB24"]

    return (
        <div style={{ borderRadius: multiple ? "15px 0px 0px 15px" : "15px" }} className={`graph-widget-box ${data.color=="1" ? "graph-widget-box-black" : ""} ${data.color=="3" ? "graph-widget-box-blue" : ""}`}>
            <div className='graph-widget-header'>
                <div className='toggle-options'>
                    <span className={`toggle-text toggle-text-active ${data.color=="1" ? "toggle-text-black toggle-text-active-black" : ""} ${data.color=='3' ? "toggle-text-blue toggle-text-active-black" : ""}`}>7d</span>
                    <span className={`toggle-text ${data.color=="1" ? "toggle-text-black" : ""} ${data.color=='3' ? "toggle-text-blue" : ""}`}>14d</span>
                    <span className={`toggle-text ${data.color=="1" ? "toggle-text-black" : ""} ${data.color=='3' ? "toggle-text-blue" : ""}`}>30d</span>
                </div>
                <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                    </svg>
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                    </svg>
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
                    </svg>
                </div>
            </div>
            <svg width="50" height="4" viewBox="0 0 50 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2H50" stroke="#5E5ADB" stroke-width="3" />
            </svg>


            <div className='widget-graph'>
                {data.type == "1" && <BarGraph data={data.data} scale={data.barScale} color={data.color} />}
                {data.type == "2" && <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <LineGraph data={data.data} showAxisLabels={data.showAxisLabels} color={data.color} />
                    {data.showLegend == "true" && <div style={{marginBottom:"20px", display:"flex", flexDirection:"column", gap:"20px"}}>
                        <svg width="154" height="2" viewBox="0 0 154 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H153" stroke="#727272" stroke-linecap="round" />
                        </svg>
                        <div className='lineChart-legend'>
                            {data.legendData.map((item, index) => {
                                return <div style={{display:"flex", justifyContent:"flex-start", gap:"5px", alignItems:"center"}}>
                                    <svg width="3" height="27" viewBox="0 0 3 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.216797" width="3" height="26" rx="1" fill={lineColors[index]} />
                                    </svg>
                                    <div style={{display:"flex",flexDirection:"column"}}>
                                        <span className={`line-legend-title ${data.color!="2" ? "line-legend-title-blue-black" : ""}`}>{item.title}</span>
                                        <span className={`line-legend-data ${data.color!="2" ? "line-legend-data-blue-black" : ""}`}>{item.data}</span>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>}
                </div>}
                {data.type == "3" && <>
                    <PieGraph data={data.data} color={data.color} />
                    {data.showLegend == "true" && <div className='piechart-legend'>
                        <span>{data.legendData[0].title}</span>
                        <span>{data.legendData[0].data}</span>
                    </div>}
                </>}
            </div>
        </div>
    );
}

export default GraphWidget;
