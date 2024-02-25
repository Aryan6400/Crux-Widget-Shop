import Modal from 'react-modal'
import './CreateModal.css'
import {  Button } from '@mui/material'
import { useState } from 'react'
import HistoryIcon from '@mui/icons-material/History'
import CloseIcon from '@mui/icons-material/Close'
import background from "../../icons/background.png"
import { useData } from '../../context/DataContext'
import DataWidget from '../Widgets/DataWidget/DataWidget'
import GraphWidget from '../Widgets/GraphWidget/GraphWidget'
import SummaryWidget from '../Widgets/SummaryWidget/SummaryWidget'
import { initialData, lineData, barData, pieData } from '../../utils/dummy'
const secret=process.env.REACT_APP_SECRET

interface CreateModalProps {
    open: boolean;
    toggle: () => void;
}

interface WidgetState {
    type: string;
    multiple: string;
    graph: {
        type: string | null;
        color: string | null;
        data: any[];
        barScale: string | null;
        showAxisLabels: string | null;
        showLegend: string | null;
        legendData: any[];
    };
    summary: {
        color: string | null;
        text: string | null;
    };
    data: {
        color: string | null;
        toggleType: string | null;
        labels: any[];
        data: any[][];
    };
}

function CreateModal({ open, toggle }: CreateModalProps) {
    const [graph, setGraph] = useState(1)
    const [type, setType] = useState(1)
    const [color, setColor] = useState(2)
    const { data, setData } = useData()

    const [newWidget, setNewWidget] = useState<WidgetState>(initialData)

    const changeColor = (el: number) => {
        setColor(el)
        if (type == 1) {
            setNewWidget(prev => {
                let temp = prev
                temp.data.color = `${el}`
                return temp
            })
        }
        else if (type == 2) {
            setNewWidget(prev => {
                let temp = prev
                temp.graph.color = `${el}`
                return temp
            })
        }
        else {
            setNewWidget(prev => {
                let temp = prev
                temp.summary.color = `${el}`
                return temp
            })
        }
    }

    const changeType = (el: number) => {
        setType(el)
        setColor(2)
        setNewWidget(prev => {
            let temp = prev
            temp.type = `${el}`
            return temp
        })
    }

    const changeGraph = (el: number) => {
        setGraph(el)
        if (el == 1) {
            setNewWidget(prev => {
                return {
                    ...prev,
                    graph: {
                        ...prev.graph,
                        type: `${el}`,
                        data: barData
                    }
                }
            })
        }
        else if (el == 2) {
            setNewWidget(prev => {
                return {
                    ...prev,
                    graph: {
                        ...prev.graph,
                        type: `${el}`,
                        data: lineData
                    }
                }
            })
        }
        else {
            setNewWidget(prev => {
                return {
                    ...prev,
                    graph: {
                        ...prev.graph,
                        type: `${el}`,
                        data: pieData
                    }
                };
            })
        }
    }

    const closeModal = () => {
        setColor(2)
        setGraph(1)
        setType(1)
        toggle()
    }

    const createNewWidget = () => {
        const newData = [...data, newWidget]
        setData(newData)
        let stringData = JSON.stringify(newData)
        const encryptedData = CryptoJS.AES.encrypt(stringData, secret).toString()
        localStorage.setItem("CruxWidgetData", encryptedData)
        closeModal()
    }

    return (
        <Modal
            isOpen={open}
            style={{
                content: {
                    margin: 'auto',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: "15px",
                    borderRadius: "12px",
                    boxShadow: '0px 20px 24px -4px #10182814',
                    maxWidth: '900px',
                    height: '510px',
                    zIndex: "10",
                    padding: "52px 30px 30px"
                },
            }}
        >
            <img src={background} className='background' />
            <div className='create-widget-top'>
                <div className='top-left-container'>
                    <div className='widget-icon'>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.10001 1.45004H1.45001V10H8.10001V1.45004Z" stroke="#5E5ADB" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.10001 1.80005H1.45001V6.55005H8.10001V1.80005Z" stroke="#5E5ADB" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.54972 1.45013H1.89972V6.20013H8.54972V1.45013Z" stroke="#5E5ADB" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.54972 1.00006H1.89972V9.55006H8.54972V1.00006Z" stroke="#5E5ADB" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        <span style={{ fontSize: "22px", fontWeight: "600", lineHeight: "28px", letterSpacing: "0em", textAlign: "left", color: "#5E5ADB" }}>Create Widget</span>
                        <span style={{ fontSize: "14px", fontWeight: "400", lineHeight: "20px", letterSpacing: "0em", textAlign: "left", color: "#888891" }}>Manage the glossary of terms in your Database.</span>
                    </div>
                </div>
                <div className='input-field'>
                    <input placeholder='Title of widget' style={{ border: "0px" }} />
                    <CloseIcon style={{ color: "#A0A0A0" }} />
                </div>
            </div>

            <svg width="1060" height="2" viewBox="0 0 1060 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-35 1L1060 1.0001" stroke="#E1E1E1" stroke-linecap="round" />
            </svg>

            <div className='create-widget-bottom'>

                <div className='widget-panel'>
                    <div className='panel-el panel-el-1'>
                        <span style={{ fontSize: "18px", lineHeight: "14px", letterSpacing: "0em", textAlign: "left", fontWeight: "600", color: "#5E5ADBB2", position: "absolute", top: "20px", left: "20px" }}>1 x 1</span>
                    </div>
                    <div className='panel-el panel-el-2'>
                        <div className='zoom-in-out'>
                            <div className='zoom-value'>
                                100%
                            </div>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 13L10.1 10.1M6.33333 4.33333V8.33333M4.33333 6.33333H8.33333M11.6667 6.33333C11.6667 9.27885 9.27885 11.6667 6.33333 11.6667C3.38781 11.6667 1 9.27885 1 6.33333C1 3.38781 3.38781 1 6.33333 1C9.27885 1 11.6667 3.38781 11.6667 6.33333Z" stroke="#7B7B7B" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg width="2" height="22" viewBox="0 0 2 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L1.00002 21" stroke="#D7D7D7" stroke-linecap="round" />
                            </svg>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 13L10.1 10.1M4.33333 6.33333H8.33333M11.6667 6.33333C11.6667 9.27885 9.27885 11.6667 6.33333 11.6667C3.38781 11.6667 1 9.27885 1 6.33333C1 3.38781 3.38781 1 6.33333 1C9.27885 1 11.6667 3.38781 11.6667 6.33333Z" stroke="#7B7B7B" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className='panel-el panel-el-3'></div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                        <span>Reusability Score</span>
                        {type == 1 && <DataWidget multiple={false} data={newWidget.data} />}
                        {type == 2 && <GraphWidget multiple={false} data={newWidget.graph} />}
                        {type == 3 && <SummaryWidget multiple={false} data={newWidget.summary} />}
                    </div>
                    <div className='panel-el panel-el-4'></div>
                    <div className='panel-el panel-el-5'></div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", position: "absolute", bottom: "20px", left: "28%" }}>
                        <div onClick={() => changeColor(1)} className={`color-btn ${color == 1 ? "active-color" : ""}`} style={{ backgroundColor: "#282828" }}></div>
                        <div onClick={() => changeColor(2)} className={`color-btn ${color == 2 ? "active-color" : ""}`} style={{ backgroundColor: "#FFFFFF" }}></div>
                        <div onClick={() => changeColor(3)} className={`color-btn ${color == 3 ? "active-color" : ""}`} style={{ backgroundColor: "#5E5ADB" }}></div>
                    </div>
                </div>
                <div className='components-panel'>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        <span style={{ fontSize: "13px", fontWeight: "500", lineHeight: "14px", letterSpacing: "0.02em", textAlign: "left", color: "#2B2B2B59" }}>COMPONENTS</span>

                        <div onClick={() => changeType(1)} className={`data ${type == 1 ? "active-type" : ""}`}>
                            <span className='title'>Data</span>
                            <span className='desc'>Random Description</span>
                        </div>

                        <div onClick={() => changeType(2)} className={`graph ${type == 2 ? "active-type" : ""}`}>
                            <span className='title'>Graph</span>
                            <span className='desc'>Random Description</span>
                            <div className='graph-options'>
                                <div onClick={() => changeGraph(1)} className={`graph-toggle-btns ${graph == 1 ? "active-graph-btn" : ""}`}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.66678 1.91663C3.66678 0.950128 4.45028 0.166626 5.41678 0.166626H6.58345C7.54994 0.166626 8.33345 0.950128 8.33345 1.91663V2.59954C8.5159 2.53505 8.71224 2.49996 8.91678 2.49996H10.0834C11.0499 2.49996 11.8334 3.28346 11.8334 4.24996V10.0833C11.8334 11.0498 11.0499 11.8333 10.0834 11.8333H1.91678C0.95028 11.8333 0.166779 11.0498 0.166779 10.0833V6.58329C0.166779 5.6168 0.95028 4.83329 1.91678 4.83329H3.08345C3.28798 4.83329 3.48432 4.86838 3.66678 4.93287V1.91663ZM4.83345 10.6666H7.16678V1.91663C7.16678 1.59446 6.90561 1.33329 6.58345 1.33329H5.41678C5.09461 1.33329 4.83345 1.59446 4.83345 1.91663V10.6666ZM8.33345 10.6666H10.0834C10.4056 10.6666 10.6668 10.4055 10.6668 10.0833V4.24996C10.6668 3.92779 10.4056 3.66663 10.0834 3.66663H8.91678C8.59461 3.66663 8.33345 3.92779 8.33345 4.24996V10.6666ZM3.66678 10.6666V6.58329C3.66678 6.26113 3.40561 5.99996 3.08345 5.99996H1.91678C1.59461 5.99996 1.33345 6.26113 1.33345 6.58329V10.0833C1.33345 10.4055 1.59461 10.6666 1.91678 10.6666H3.66678Z" fill="#71717A" />
                                    </svg>
                                </div>
                                <div onClick={() => changeGraph(2)} className={`graph-toggle-btns ${graph == 2 ? "active-graph-btn" : ""}`}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91678 1.33329C1.59461 1.33329 1.33345 1.59446 1.33345 1.91663V10.0833C1.33345 10.4055 1.59461 10.6666 1.91678 10.6666H10.0834C10.4056 10.6666 10.6668 10.4055 10.6668 10.0833V1.91663C10.6668 1.59446 10.4056 1.33329 10.0834 1.33329H1.91678ZM0.166779 1.91663C0.166779 0.950128 0.95028 0.166626 1.91678 0.166626H10.0834C11.0499 0.166626 11.8334 0.950128 11.8334 1.91663V10.0833C11.8334 11.0498 11.0499 11.8333 10.0834 11.8333H1.91678C0.95028 11.8333 0.166779 11.0498 0.166779 10.0833V1.91663ZM9.32926 3.83748C9.55706 4.06529 9.55706 4.43463 9.32926 4.66244L7.57926 6.41244C7.46986 6.52183 7.32149 6.58329 7.16678 6.58329H5.07507L3.49592 8.16244C3.26812 8.39024 2.89877 8.39024 2.67097 8.16244C2.44316 7.93463 2.44316 7.56529 2.67097 7.33748L4.42097 5.58748C4.53036 5.47808 4.67874 5.41663 4.83345 5.41663H6.92515L8.5043 3.83748C8.73211 3.60967 9.10145 3.60967 9.32926 3.83748Z" fill="#71717A" />
                                    </svg>
                                </div>
                                <div onClick={() => changeGraph(3)} className={`graph-toggle-btns ${graph == 3 ? "active-graph-btn" : ""}`}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.41653 1.3694C3.11452 1.65645 1.3332 3.62018 1.3332 5.99996C1.3332 8.57729 3.42254 10.6666 5.99987 10.6666C7.07828 10.6666 8.07126 10.3008 8.86149 9.68654L5.58739 6.41244C5.47799 6.30304 5.41653 6.15467 5.41653 5.99996V1.3694ZM6.5832 1.36989V5.12055L10.0386 3.66196C9.85225 3.34001 9.62771 3.04093 9.36952 2.77145C9.32471 2.72469 9.27894 2.67886 9.23223 2.634C9.10851 2.5152 8.97788 2.40286 8.84075 2.29764C8.18112 1.79149 7.40124 1.47295 6.5832 1.36989ZM10.4923 4.7368L7.02519 6.20033L9.6863 8.86143C10.0662 8.37195 10.3461 7.81007 10.5075 7.20778C10.6135 6.81215 10.6665 6.40606 10.6665 5.99996C10.6665 5.59386 10.6135 5.18777 10.5075 4.79214C10.5026 4.77365 10.4975 4.7552 10.4923 4.7368ZM11.8332 5.99996C11.8332 9.22162 9.22153 11.8333 5.99987 11.8333C2.77821 11.8333 0.166534 9.22162 0.166534 5.99996C0.166534 2.7783 2.77821 0.166626 5.99987 0.166626C7.56748 0.166626 8.99067 0.784979 10.0388 1.79108C10.0677 1.81882 10.0963 1.84685 10.1247 1.87517C10.1656 1.91615 10.206 1.95773 10.2458 1.9999C11.23 3.04424 11.8332 4.45166 11.8332 5.99996Z" fill="#71717A" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => changeType(3)} className={`summary ${type == 3 ? "active-type" : ""}`}>
                            <span className='title'>Summary</span>
                            <span className='desc'>Random Description</span>
                        </div>
                    </div>
                    <div className='component-panel-btns'>
                        <Button className='undo-btn'><HistoryIcon /></Button>
                        <Button onClick={closeModal} className='cancel-btn'>Cancel</Button>
                        <Button onClick={createNewWidget} className='save-btn'>Save</Button>
                    </div>
                </div>
            </div>
            <CloseIcon onClick={closeModal} style={{ position: "absolute", right: "30", top: "20", cursor: "pointer" }} />
        </Modal>
    );
}

export default CreateModal
