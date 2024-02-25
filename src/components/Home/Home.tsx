import './Home.css'
import jsonData from "../../utils/data.json"
import DataWidget from '../Widgets/DataWidget/DataWidget';
import GraphWidget from '../Widgets/GraphWidget/GraphWidget';
import SummaryWidget from '../Widgets/SummaryWidget/SummaryWidget';
import { useData } from '../../context/DataContext';
import { useEffect } from 'react';
import CryptoJS from "crypto-js";
const secret=process.env.REACT_APP_SECRET

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
        // If any widget data pre exists in localstorage, use that. Otherwise use the json data and add that in localstorage
        if (temp) {
            // Crypto-js used for encryption
            const bytes = CryptoJS.AES.decrypt(temp, secret);
            temp = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            if (!temp || temp.length === 0) {
                let stringData = JSON.stringify(jsonData)
                const encryptedData = CryptoJS.AES.encrypt(stringData, secret).toString()
                localStorage.setItem("CruxWidgetData", encryptedData)
            }
            else {
                setData(temp)
            }
        }
        else {
            let stringData = JSON.stringify(jsonData)
            const encryptedData = CryptoJS.AES.encrypt(stringData, secret).toString()
            localStorage.setItem("CruxWidgetData", encryptedData)
        }
    }, [])

    return (
        <div className="home">
            {data.map((item: WidgetData, index: number) => {
                // To assign the widgets an area class so that they can fit in the grid
                let areaClass = "area"
                if (index < 13) areaClass = areaClass + `${index + 1}`
                else areaClass = areaClass + 0

                if (item.multiple == "true") {
                    return (
                        <div className={`combined-widget ${areaClass}`}>
                            <GraphWidget key={index} data={item.graph} multiple={true} />
                            <DataWidget key={index} data={item.data} multiple={true} />
                            <SummaryWidget key={index} data={item.summary} multiple={true} />
                        </div>
                    )
                }
                else if (item.type == "1") return <div className={areaClass}><DataWidget key={index} data={item.data} multiple={false} /></div>
                else if (item.type == "2") return <div className={areaClass}><GraphWidget key={index} data={item.graph} multiple={false} /></div>
                else if (item.type == "3") return <div className={areaClass}><SummaryWidget key={index} data={item.summary} multiple={false} /></div>
            })}
        </div>
    );
}

export default Home;
