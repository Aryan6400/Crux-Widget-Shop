import { createContext, useContext, useEffect, useState } from "react";
import jsonData from "../utils/data.json"

const DataContext = createContext();

function DataProvider({children}){
    const [data, setData] = useState(jsonData);

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("CruxWidgetData"))
        if(data && data.length>0){
            setData(data)
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