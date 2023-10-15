import React, {useState, useEffect} from "react";
import axios from 'axios';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

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
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128, // またはコンテンツに合わせてサイズを調整
            height: 128, // またはコンテンツに合わせてサイズを調整
          },
        }}
      >
        {foods.map((food) => (
          <Paper key={food.id} elevation={3} sx={{ padding: 2 }}> {/* paddingはコンテンツに合わせて調整 */}
            <div>商品名: {food.name}</div>
            <div>価格: {food.price}</div>
            <div>評価: {food.evaluation}</div>
          </Paper>
        ))}
      </Box>
    </div>
  )
}

export default DrfApiFetch;