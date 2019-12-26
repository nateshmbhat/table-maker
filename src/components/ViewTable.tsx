import React,{useState} from 'react'
import { Constants } from '../Constants';
import { TableContext } from './Context/TableContext';
import { RowHeader, ColumnHeader, DataTable } from './Table';


const ViewTable = () => {
    const [selectedRow, setselectedRow] = useState(-1);
    const [selectedColumn, setselectedColumn] = useState(-1);

    return (
        <>
            <TableContext.Provider value={{ 
                startColumn:2,
                startRow:1,
                selectedRow:selectedRow,
                selectedColumn:selectedColumn,
                setSelectedColumn : setselectedColumn,
                setSelectedRow:setselectedRow,
                cols: Constants.defaultColumns, rows : Constants.defaultRows }}>

                <div
                    className='gridTable'
                    style={{
                        display: 'grid',
                        border: '1px ridge black',
                        margin: '10px',
                    }
                    }
                >
                    <RowHeader />
                    <ColumnHeader />
                    <DataTable />

                </div>
            </TableContext.Provider>
        </>

    );
}


export default ViewTable ; 