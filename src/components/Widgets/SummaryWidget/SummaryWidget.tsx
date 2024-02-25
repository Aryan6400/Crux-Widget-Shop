import { Divider } from '@mui/material';
import './SummaryWidget.css'

interface Summary {
    color: string | null;
    text: string | null;
}

interface WidgetProps {
    data: Summary;
    multiple: boolean;
}

function SummaryWidget({ data, multiple }: WidgetProps) {

    return (
        <div style={{gap: multiple ? "8px" : "20px", borderRadius: multiple ? "0px 15px 15px 0px" : "15px"}} className={`summary-box ${data.color=="1" ? "summary-box-black" : ""} ${data.color=="3" ? "summary-box-blue" : ""}`}>
            <div className='summary-box-header'>
                <div style={{display:"flex", gap:"5px", alignItems:"center"}}>
                    <span style={{fontSize:"11px", fontWeight:"600px", lineHeight:"18px",letterSpacing:"0em", color: data.color=="2"?"#B5B5B5":"#F4F4F4"}}>Today</span>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0387 0.137077C7.22147 0.319836 7.22147 0.616163 7.0387 0.798923L3.9187 3.91892C3.83094 4.00669 3.7119 4.056 3.58778 4.056C3.46365 4.056 3.34461 4.00669 3.25685 3.91892L0.136899 0.798922C-0.0459328 0.616163 -0.0459328 0.319836 0.136899 0.137077C0.319627 -0.0456927 0.615923 -0.0456927 0.798652 0.137077L3.58778 2.92615L6.37685 0.137077C6.55962 -0.0456924 6.85593 -0.0456924 7.0387 0.137077Z" fill="#B5B5B5" />
                    </svg>
                </div>
                <div style={{display:"flex", gap:"3px", alignItems:"center"}}>
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
            {multiple && <Divider />}
            <div className={`summary-content ${data.color!="2" ? "summary-content-blue-black" : ""}`}>
                {data.text}
            </div>
        </div>
    );
}

export default SummaryWidget;
