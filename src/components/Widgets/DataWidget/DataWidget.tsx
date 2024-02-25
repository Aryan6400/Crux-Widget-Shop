import { Divider } from '@mui/material';
import './DataWidget.css'

interface Data {
    color: string | null;
    toggleType: string | null;
    labels: any[];
    data: any[][];
}

interface WidgetProps {
    data: Data;
    multiple: boolean;
}

function DataWidget({ data, multiple }: WidgetProps) {

    const getLabel = (text: string) => {
        if (text.length <= 9) return text
        else return text.slice(0, 9) + "..."
    }

    return (
        <div className={`data-widget-box ${data.color=="1" ? "data-widget-box-black" : ""} ${data.color=='3' ? "data-widget-box-blue" : ""}`} style={{ borderRadius: multiple ? "0px" : "15px" }}>
            <div className='data-widget-header'>
                {data.toggleType == "2" ? <div className='toggle-options'>
                    <span className={`toggle-text toggle-text-active ${data.color=="1" ? "toggle-text-black toggle-text-active-black" : ""} ${data.color=='3' ? "toggle-text-blue toggle-text-active-black" : ""}`}>7d</span>
                    <span className={`toggle-text ${data.color=="1" ? "toggle-text-black" : ""} ${data.color=='3' ? "toggle-text-blue" : ""}`}>14d</span>
                    <span className={`toggle-text ${data.color=="1" ? "toggle-text-black" : ""} ${data.color=='3' ? "toggle-text-blue" : ""}`}>30d</span>
                </div> : <div>
                    <span style={{ fontSize: "11px", fontWeight: "600", lineHeight: "18px", letterSpacing: "0em", textAlign: "left", color: "#F4F4F4" }}>Today</span>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0387 0.137077C7.22147 0.319836 7.22147 0.616163 7.0387 0.798923L3.9187 3.91892C3.83094 4.00669 3.7119 4.056 3.58778 4.056C3.46365 4.056 3.34461 4.00669 3.25685 3.91892L0.136899 0.798922C-0.0459328 0.616163 -0.0459328 0.319836 0.136899 0.137077C0.319627 -0.0456927 0.615923 -0.0456927 0.798652 0.137077L3.58778 2.92615L6.37685 0.137077C6.55962 -0.0456924 6.85593 -0.0456924 7.0387 0.137077Z" fill="#EBEBEB" />
                    </svg>
                </div>}

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
            {data.toggleType=="2" && <svg width="50" height="4" viewBox="0 0 50 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2H50" stroke="#5E5ADB" stroke-width="3" />
            </svg>}
            <svg className='line-svg' width="188" height="2" viewBox="0 0 188 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1L188 1" stroke="#E1E1E1" />
            </svg>
            <div className='data-table'>
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", maxWidth: "90px", textWrap: "nowrap", overflowX: "hidden", padding: "10px 0" }}>
                    {data.labels.map((item, index) => {
                        return <div className={`data-labels ${data.color!="2" ? "data-labels-blue-black" : ""} ${index == 0 ? "head-label" : ""} ${index == 0 && data.color!="2" ? "head-label-blue-black" : ""} ${index == data.labels.length - 1 ? "end-label" : ""} ${index == data.labels.length - 1 && data.color!="2" ? "end-label-blue-black" : ""}`} key={index}>{getLabel(item)}</div>
                    })}
                </div>
                <Divider orientation='vertical' style={{height:"inherit"}} className={`vertical-divider ${data.color!="2" ? "vertical-divider-blue-black" : ""}`} />
                <div style={{ display: "flex", gap: "10px" }}>
                    {data.data.map((row, index) => {
                        return <>
                            <div key={index} style={{ display: "flex", flexDirection: "column", padding: "10px 0", gap: "2px" }}>
                                {row.map((el, index2) => {
                                    return <div className={`data-fields ${data.color!="2" ? "data-fields-blue-black" : ""} ${index2 == 0 ? "top-field" : ""} ${index2 == 0 && data.color!="2" ? "top-field-blue-black" : ""} ${index2 == row.length - 1 ? "end-field" : ""} ${index2 == row.length - 1 && data.color!="2" ? "end-field-blue-black" : ""}`} key={index2}>{el}</div>
                                })}
                            </div>
                            {index != data.data.length - 1 && <Divider orientation='vertical' className={`vertical-divider ${data.color!="2" ? "vertical-divider-blue-black" : ""}`} />}
                        </>
                    })}
                </div>
            </div>
        </div>
    );
}

export default DataWidget;
