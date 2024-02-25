import './Home.css'
import jsonData from "../../utils/data.json"
import DataWidget from '../Widgets/DataWidget/DataWidget';
import GraphWidget from '../Widgets/GraphWidget/GraphWidget';
import SummaryWidget from '../Widgets/SummaryWidget/SummaryWidget';
import { useData } from '../../context/DataContext';
import { useEffect } from 'react';

interface WidgetData {
    type: string;
    multiple: string;
    graph: any;
    data: any;
    summary: any;
}

function Home() {
    const { data, setData } = useData();

    useEffect(() => {
        setData(jsonData)
        let temp = localStorage.getItem("CruxWidgetData")
        if (temp) {
            temp = JSON.parse(temp)
            if (!temp || temp.length === 0) localStorage.setItem("CruxWidgetData", JSON.stringify(jsonData))
            else setData(temp)
        }
        else localStorage.setItem("CruxWidgetData", JSON.stringify(jsonData))
    }, [])

    return (
        <div className="home">
            {data.map((item: WidgetData, index: number) => {
                let areaClass="area"
                if(index<13) areaClass=areaClass+`${index+1}`
                else areaClass=areaClass+0

                if (item.multiple == "true") {
                    return (
                        <div className={`combined-widget ${areaClass}`}>
                            <GraphWidget key={index} data={item.graph} multiple={true} />
                            <DataWidget key={index} data={item.data} multiple={true} />
                            <SummaryWidget key={index} data={item.summary} multiple={true} />
                        </div>
                    )
                }
                else if(item.type=="1") return <div className={areaClass}><DataWidget key={index} data={item.data} multiple={false} /></div>
                else if(item.type=="2") return <div className={areaClass}><GraphWidget key={index} data={item.graph} multiple={false} /></div>
                else if(item.type=="3") return <div className={areaClass}><SummaryWidget key={index} data={item.summary} multiple={false} /></div>
            })}
        </div>
    );
}

export default Home;
