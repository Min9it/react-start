import { useEffect, useState } from "react";

function CoinApp() {
  const [loading, setloading] = useState(true);
  const [coinList, setCoinList] = useState([]);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((data) => {
        setCoinList(data);
        setloading(false);
      });
  }, []);

  const onChange = (event) => {
    setBudget(event.target.value);
  };

  const changeSelect = (event) => {
    const price = event.target.value.replaceAll(/[^0-9|.]/g, "");
    console.log(budget / price);
  };
  return (
    <div>
      <h1>The Coin Tracker!</h1>

      <div>
        <label>My Budget $</label>
        <input type="number" onChange={onChange} value={budget} />
      </div>

      <div>
        <span></span>
      </div>

      <div>
        {loading ? <strong>Loading...</strong> : null}
        {coinList.length > 0 ? (
          <select onChange={changeSelect}>
            {coinList.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
              </option>
            ))}
          </select>
        ) : null}
      </div>
    </div>
  );
}

export default CoinApp;
