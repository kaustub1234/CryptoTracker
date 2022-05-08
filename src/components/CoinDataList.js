import { React, useState } from 'react'
import './CoinDataList.css'
import MoreDetails from './MoreDetails'

const CoinDataList = (props) => {
    const [modalIsVisisble, setModalIsVisisble] = useState(false);
    const detailsClickHandler = () => {
        setModalIsVisisble(true)
    }

    const ClickHandler = () => {
        setModalIsVisisble(false)
    }

    return (
        <div className='coin-container'>
            {modalIsVisisble && <MoreDetails onClicked={ClickHandler} ele={props.element} />}
            <div className='coin'>
                <span style={{ 'marginRight': '10px' }}>{props.rank}.</span>
                <img src={props.image} alt="logo" />
                <span>{props.name}</span>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>₹ {props.price}</p>
                <p className='coin-volume'>₹ {props.volume.toLocaleString()}</p>
            </div>
            <button onClick={detailsClickHandler}>More detail</button>
        </div>
    )
}

export default CoinDataList