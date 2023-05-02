import { COLUMNS } from "./columns"
import MOCK_DATA from "../assets/MOCK_DATA.json"
import { useTable } from "react-table"
import { useMemo } from "react"
import './table.css'
import { TableContainer, TableWrapper } from "../styles/components/Table"
const Table = () => {

    interface IColumn{
        Header:string,
        accessor:string
    }
    
    const columns:IColumn[] = useMemo(()=> COLUMNS, [])
    const data = useMemo(()=> MOCK_DATA, [])

    const tableInstance = useTable<IColumn | any>({
        columns,
        data
    })

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance
  return (
    <>
    <TableWrapper>
        <TableContainer>
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup)=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column)=>(
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
            ))}  
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row)=>{
                prepareRow(row)
                return(
                    <tr {...row.getRowProps()}>
                        {
                            row.cells.map((cell)=>{
                               return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>

                            })
                        }
                </tr>
                )
            })}
            
        </tbody>
    </table>
    </TableContainer>
    </TableWrapper>
    </>
  )
}

export default Table