import React, {useState, useEffect} from "react";
import axios from 'axios';

const DrfApiFetch = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/api/foods/', {

    })
    .then((res) => {
      console.log(res.data);
      setFoods(res.data);
    })
  }, [])

  return (
    <div>
      <h1>DRF API</h1>
      <ul>
        {
          foods.map((food) => 
          <li key={food.id}>商品名:{food.name} 価格:{food.price} 評価:{food.evaluation}</li>)
        }
      </ul>
    </div>
  )
}

export default DrfApiFetch;