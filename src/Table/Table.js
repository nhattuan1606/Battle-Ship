import { useContext } from "react"
import Row from "./Row"
import FirstRow from "./FirstRow"
import style from './Table.module.css'
import { TableContext } from './TableContext'

const ship = [
    {col: 0, row: 0, maxRow: 5, maxCol: 9, lenShip: 5},
    {col: 1, row: 0, maxRow: 6, maxCol: 9, lenShip: 4},
    {col: 2, row: 0, maxRow: 7, maxCol: 9, lenShip: 3},
    {col: 3, row: 0, maxRow: 7, maxCol: 9, lenShip: 3},
    {col: 4, row: 0, maxRow: 8, maxCol: 9, lenShip: 2}
]

const row = ['4.2vw', '8.6vw', '13vw', '17.4vw', '21.8vw', 
            '26.2vw', '30.6vw', '35vw', '39.4vw', '43.8vw']
const col = ['5.2vw', '9.6vw', '14vw', '18.4vw', '22.8vw', 
            '27.2vw', '31.6vw', '36vw', '40.4vw', '44.8vw']
const dif = [5, 6, 7, 7, 8]
const rowID = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K']

function Table() {
    const context = useContext(TableContext)

    const handlePressShip = (e) => {
        const num = e.target.tabIndex
        // console.log(e.target.tabIndex)
        if (e.keyCode === 82) {
            if (e.target.style.transform === '') {
                // Xoay thuyền sang ngang
                e.target.style.transform = 'rotate(-90deg)'

                // max là chỉ số tối đa của ô đầu theo cột
                const max = dif[num]

                // Đặt lại maxCol và maxRow phù hợp
                ship[num].maxCol = max
                ship[num].maxRow = 9

                // Nếu ô đầu hiện tại quá max thì đặt lại = max
                if (ship[num].col > max) {
                    ship[num].col = max
                    e.target.style.left = col[max]
                }
            } else {
                // Xoay thuyền sang dọc
                e.target.style.transform = ''

                // max là chỉ số tối đa của ô đầu theo hàng
                const max = dif[num]

                // Đặt lại maxCol và maxRow phù hợp
                ship[num].maxCol = 9
                ship[num].maxRow = max

                // Nếu ô đầu hiện tại quá max thì đặt lại = max
                if (ship[num].row > max) {
                    ship[num].row = max
                    e.target.style.top = row[max]
                }
            }
        } else if (e.keyCode === 39 && ship[num].col !== ship[num].maxCol) {        // Phím sang phải
            e.target.style.left = col[++ship[num].col]
        } else if (e.keyCode === 37 && ship[num].col !== 0) {              // Phím sang trái
            e.target.style.left = col[--ship[num].col]
        } else if (e.keyCode === 40 && ship[num].row !== ship[num].maxRow) {        // Phím xuống
            e.target.style.top = row[++ship[num].row]
        } else if (e.keyCode === 38 && ship[num].row !== 0) {              // Phím lên
            e.target.style.top = row[--ship[num].row]
        }
    }

    const handleClickShip = (e) => {
        e.target.style.backgroundColor = 'rgba(167, 204, 63, 0.9)'
        e.target.onkeydown = handlePressShip
    }

    const handleBlurShip = (e) => {
        e.target.style.backgroundColor = 'rgba(231, 99, 99, 0.9)'
        e.target.onkeydown = () => {}
    }

    const handleStart = () => {
        const listShip = []
        for (let i=0; i<5; i++) {
            const tmpShip = []

            if (ship[i].maxRow !== 9) {         // Tức là khi thuyền dọc. ID cột là cố định
                // ID của cột
                const cid = ship[i].col + 1
    
                // j là id của hàng. Khi đặt dọc thì id hàng tăng dần
                let j = ship[i].row
                const end = j + ship[i].lenShip
                for (; j<end; j++) {
                    tmpShip.push(`${rowID[j]}${cid}`)
                }
            } else {                            // Khi thuyền ngang. ID hàng là cố định
                // ID của hàng
                const rid = rowID[ship[i].row]
    
                // j là id của hàng. Khi đặt dọc thì id hàng tăng dần
                let j = ship[i].col + 1
                const end = j + ship[i].lenShip
                for (; j<end; j++) {
                    tmpShip.push(`${rid}${j}`)
                }
            }

            listShip.push(tmpShip)
        }
        
        // const hitItems = [...listShip[0], ...listShip[1], ...listShip[2], ...listShip[3], ...listShip[4]]
        // console.log(listShip)
        context.StartGame(listShip)
    }

    return (
        <div className={style.table}>
            <div 
                id="1"
                tabIndex={0}
                className={`${style.ship5} ${style.ship} ${context.display1}`}
                onClick={handleClickShip}
                onBlur={handleBlurShip}
            />
            <div 
                tabIndex={1}
                className={`${style.ship4} ${style.ship} ${context.display2}`}
                onClick={handleClickShip}
                onBlur={handleBlurShip}
            />
            <div
                tabIndex={2}
                className={`${style.ship3} ${style.ship} ${style.ship31} ${context.display3}`}
                onClick={handleClickShip}
                onBlur={handleBlurShip}
            />
            <div
                tabIndex={3}
                className={`${style.ship3} ${style.ship} ${style.ship33} ${context.display4}`}
                onClick={handleClickShip}
                onBlur={handleBlurShip}
            />
            <div 
                tabIndex={4}
                className={`${style.ship2} ${style.ship} ${context.display5}`}
                onClick={handleClickShip}
                onBlur={handleBlurShip}
            />
            <FirstRow />
            <Row idrow='A' />
            <Row idrow='B' />
            <Row idrow='C' />
            <Row idrow='D' />
            <Row idrow='E' />
            <Row idrow='F' />
            <Row idrow='G' />
            <Row idrow='H' />
            <Row idrow='I' />
            <Row idrow='K' />
            <div className={style.divButton}>
                <button className={style.button} onClick={handleStart}>Start</button>
            </div>
        </div>
    )
}

export default Table