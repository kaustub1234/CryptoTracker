import './App.css';
import { useState, useEffect, useCallback } from 'react'
import CoinDataList from './components/CoinDataList';
import Loading from './components/Loading';
import ErrorMsg from './components/ErrorMsg';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [coinData, setCoinData] = useState([]);
  const [isError, setIsError] = useState(false);


  const fetchCoinsInfo = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      if (!response.ok) {
        throw new Error('Ops something went wrong!!! pls reload ↻ and try again')
      }
      const data = await response.json()
      console.log(data);
      setCoinData(data);
      setIsLoading(false)
    } catch (error) {
      setIsError(true)
    }
  }, [])

  useEffect(() => {
    fetchCoinsInfo()
  }, [fetchCoinsInfo]);

  const SearchChangeHandler = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coinData.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="App">
      {isLoading && !isError && <Loading/>}
      {isLoading && isError && <ErrorMsg/>}
      {!isLoading && !isError && <div className='Search_bar'>
        <input value={search} onChange={SearchChangeHandler} placeholder='Search coins here...' type='text' />
        <button>Search</button>
      </div>}
      {!isLoading && !isError && <div className='CoinList'>
        {
          filteredCoins.map((ele) =>
            <CoinDataList
              element={ele}
              key={ele.id}
              name={ele.name}
              image={ele.image}
              symbol={ele.symbol}
              volume={ele.market_cap}
              price={ele.current_price}
              rank={ele.market_cap_rank}
            />
          )
        }
      </div>}
    </div>
  );
}

export default App;
