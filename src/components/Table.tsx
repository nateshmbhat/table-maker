import React, { useState, createContext } from 'react'
import { TableContext } from './Context/TableContext'



export const RowHeader = () => {
    return <div className='rowHeader text-center'
        style={{
            gridArea: '1/1/2/1000',
            display: 'flex',
            justifyContent: 'center',
        }}
    >
        <h2 contentEditable>Knapsack Capacity</h2>
    </div>
}

export const ColumnHeader = () => {
    return <div contentEditable className='columnHeader text-center'
        style={{
            gridArea: '2/1/auto-fill/2',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            border: '1px ridge black'
        }}
    >
        <h2 style={{padding:'10px'}} >Items</h2>
    </div>
}


export const DataTable = () => {
    const tableData = React.useContext(TableContext);

    return <div
        style={{
            display: 'grid',
            minWidth: 'fit-content',
            gridTemplateColumns: `repeat(${tableData.cols},minmax(50px,800px))`,
            overflow: 'auto',
        }}
    >
        {Array(tableData.cols*tableData.rows).fill(0).map((v, i) => <DataBlock sequenceNumber={i} />)}

    </div>
}

const DataBlock = ({ sequenceNumber }: { sequenceNumber: number }) => {
    const tableData = React.useContext(TableContext);
    const col = sequenceNumber % tableData.cols;
    const row = Math.floor(sequenceNumber / tableData.cols);

    const dataVal = row>0?row- tableData.startRow :col - tableData.startColumn ;
    const headerBlocFlag =  row<tableData.startRow||col<tableData.startColumn ; 

    return <div 

    onClick={
        ()=>{
            tableData.setSelectedColumn(col) ; 
            tableData.setSelectedRow(row) ; 
        }
    }

    className={`text-center table-block
   
    ${
        headerBlocFlag?'header-block':
        // tableData.selectedColumn===col&&tableData.selectedRow===row?'selected-block':
        tableData.selectedRow===row?'selected-row':
        tableData.selectedColumn===col?'selected-column':
        'data-block'}
        `} 
        
        
        >
        {
            headerBlocFlag && <h3 contentEditable>{dataVal>=0?dataVal:''}
            </h3> 
            || <p contentEditable></p>
        }
    </div>;
}
