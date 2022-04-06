import { useState, createContext } from 'react'
import style from './Table.module.css'

const TableContext = createContext()

function TableProvider({ children }) {
    const [ display1, setDisplay1 ] = useState('')
    const [ display2, setDisplay2 ] = useState('')
    const [ display3, setDisplay3 ] = useState('')
    const [ display4, setDisplay4 ] = useState('')
    const [ display5, setDisplay5 ] = useState('')
    const [ ships, setShips ] = useState([])
    const [ hitItems, setHitItems ] = useState([])
    
    const StartGame = (props) => {
        setShips(props)
        setHitItems([...props[0], ...props[1], ...props[2], ...props[3], ...props[4]])
        setDisplay1(style.hidden)
        setDisplay2(style.hidden)
        setDisplay3(style.hidden)
        setDisplay4(style.hidden)
        setDisplay5(style.hidden)
    }

    const ShowShip = [
        () => { setDisplay1('') },
        () => { setDisplay2('') },
        () => { setDisplay3('') },
        () => { setDisplay4('') },
        () => { setDisplay5('') }
    ]

    const value = { ships, hitItems, display1, display2, display3, display4, display5, ShowShip, StartGame }
    
    // useEffect(() => {
    //     console.log(style.hidden)
    // })

    return (
        <TableContext.Provider value={value}>
            {children}
        </TableContext.Provider>
    )
}

export { TableContext, TableProvider }