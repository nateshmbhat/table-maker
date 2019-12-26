import React, { createContext } from 'react'
import { Constants } from '../../Constants';



export const TableContext = createContext({ cols: 0 , rows :0,
    startColumn : 0,
    startRow : 0,
    selectedRow: 0, 
    selectedColumn:0,
    setSelectedRow:(v:number)=>{},
    setSelectedColumn:(v:number)=>{},
});
