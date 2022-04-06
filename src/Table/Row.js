import { useContext } from 'react'
import style from './Table.module.css'
import { TableContext } from './TableContext'

// const hitItems = ['E6', 'E7', 'E8', 'A5', 'B5', 'G9', 'H9', 'I9', 'A1', 
//                 'B1', 'C1', 'D1', 'K1', 'K2', 'K3', 'K4', 'K5']
// const hitItems = ['K1', 'K2', 'K3', 'K4', 'K5', 'A1', 'B1', 'C1', 'D1', 
//                 'E6', 'E7', 'E8', 'G9', 'H9', 'I9', 'A5', 'B5']
// const listOfShip = [
//     ['K1', 'K2', 'K3', 'K4', 'K5'],
//     ['A1', 'B1', 'C1', 'D1'], 
//     ['E6', 'E7', 'E8'], 
//     ['G9', 'H9', 'I9'], 
//     ['A5', 'B5'], 
// ]

function Row({ idrow }) {
    const context = useContext(TableContext)

    // Trả về số thứ tự của thuyền trong mảng context.ships
    const NumberOfShip = (indexOfHitItems) => {
        if (indexOfHitItems < 5) return 0
        if (indexOfHitItems < 9) return 1
        if (indexOfHitItems < 12) return 2
        if (indexOfHitItems < 15) return 3
        return 4
    }
    
    // Xóa vị trí đã bị bắn trong mảng context.ships.
    // Nếu hitItem của thuyền bị bắn hết thì hiện thuyền
    const RemoveHitItems = (id) => {
        const num = NumberOfShip(context.hitItems.indexOf(id))

        // Xóa ô vừa bị bắn khỏi ds hitItems của thuyển
        context.ships[num].splice(context.ships[num].indexOf(id), 1)

        // Nếu thuyền không còn hitItems nào thì hiện thuyền lên
        if (context.ships[num].length === 0) {
            context.ShowShip[num]()
        }
    }
    
    const handleClickDiv = (e) => {
        // Lấy ra vị trí của ô vừa bắn (VD: A1)
        const id = `${idrow}${e.target.getAttribute('idcolumn')}`

        // Ktra xem ô vừa bắn có trúng k
        if (context.hitItems.includes(id)) {
            e.target.style.backgroundImage = "url('hit.png')"
            e.target.style.backgroundColor = "rgba(231, 99, 99, 0.9)"
            RemoveHitItems(id)
        } else {
            e.target.style.backgroundImage = "url('miss.png')"
        }
        // console.log(idrow, e.target.getAttribute('idcolumn'))
    }

    return (
        <>
            <div className={style.first}>{idrow}</div>
            <div className={style.box} idcolumn="1" onClick={handleClickDiv}></div>
            <div className={style.box} idcolumn='2' onClick={handleClickDiv}></div>
            <div className={style.box} idcolumn='3' onClick={handleClickDiv}></div>
            <div className={style.box} idcolumn='4' onClick={handleClickDiv}></div>
            <div className={style.box} idcolumn='5' onClick={handleClickDiv}></div>
            <div className={style.box} idcolumn='6' onClick={handleClickDiv}></div>
            <div className={style.box} idcolumn='7' onClick={handleClickDiv}></div>
            <div className={style.box} idcolumn='8' onClick={handleClickDiv}></div>
            <div className={style.box} idcolumn='9' onClick={handleClickDiv}></div>
            <div className={style.box} idcolumn='10' onClick={handleClickDiv}></div>
        </>
    )
}

export default Row