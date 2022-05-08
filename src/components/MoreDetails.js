import React from 'react'
import ReactDOM from 'react-dom'
import './MoreDetail.css'

const BackDrop = (props) => {
    return (
        <>
            <div onClick={props.clicked} className='backdrop'></div>
        </>
    )
}


const Modal = (props) => {
    return (
        <div>
            <div className="coinPage-Info">
                <h1>{props.name}</h1>
                <img src={props.image} alt="Icon" className="coinPage-Icon" />
                <div className="coinPage-Data">
                    <div className="coinPage-Row">
                        <h3 className="coinPage-RowHeader">Symbol:</h3>
                        <h3 className="coinPage-RowData">{props.symbol}</h3>
                    </div>
                    <div className="coinPage-Row">
                        <h3 className="coinPage-RowHeader">Current Price:</h3>
                        <h3 className="coinPage-RowData">
                            ₹ {props.price.toLocaleString()}
                        </h3>
                    </div>
                    <div className="coinPage-Row">
                        <h3 className="coinPage-RowHeader">Market Cap:</h3>
                        <h3 className="coinPage-RowData">
                            ₹ {props.volume.toLocaleString()}
                        </h3>
                    </div>
                    <div className="coinPage-Row">
                        <h3 className="coinPage-RowHeader">Total Volume:</h3>
                        <h3 className="coinPage-RowData">
                            ₹ {props.totalVolume.toLocaleString()}
                        </h3>
                    </div>
                    <div className="coinPage-Row">
                        <h3 className="coinPage-RowHeader">24hr High:</h3>
                        <h3 className="coinPage-RowData green">
                            ₹ {props.high_24.toLocaleString()}
                        </h3>
                    </div>
                    <div className="coinPage-Row">
                        <h3 className="coinPage-RowHeader">24hr Low:</h3>
                        <h3 className="coinPage-RowData red">
                            ₹ {props.low_24.toLocaleString()}
                        </h3>
                    </div>
                </div>
                <div onClick={props.clicked} className="coinPage-RouteButton">Go back</div>
            </div>
        </div>
    )
}


const MoreDetails = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<BackDrop clicked={props.onClicked} />, document.getElementById('backdrop'))}
            {ReactDOM.createPortal(
                <Modal
                    name={props.ele.name}
                    image={props.ele.image}
                    symbol={props.ele.symbol}
                    volume={props.ele.market_cap}
                    totalVolume={props.ele.total_volume}
                    price={props.ele.current_price}
                    high_24={props.ele.high_24h}
                    low_24={props.ele.low_24h}
                    rank={props.ele.market_cap_rank}
                    clicked={props.onClicked}
                />,
                document.getElementById('modal'))
            }
        </>
    )
}

export default MoreDetails