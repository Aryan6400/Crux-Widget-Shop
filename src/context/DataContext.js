import { createContext, useContext, useEffect, useState } from "react";
import jsonData from "../utils/data.json"
import CryptoJS from "crypto-js";
const secret = process.env.REACT_APP_SECRET
const DataContext = createContext();

function DataProvider({children}){
    const [data, setData] = useState(jsonData);

    useEffect(()=>{
        let dataString = localStorage.getItem("CruxWidgetData")
        if(dataString){
            const bytes = CryptoJS.AES.decrypt(dataString, secret);
            let localData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            if(localData && localData.length>0) setData(localData)
        }
    },[])

    return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    return useContext(DataContext);
}

export default DataProvider;