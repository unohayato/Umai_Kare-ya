import React, {useState, useEffect} from "react";
import axios from 'axios';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '../Font.css';

const CurryShop = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/api/curry_shops/', {

    })
    .then((res) => {
      console.log(res.data);
      setShops(res.data);
    })
  }, [])

  return (
    <div>
      <div className="title">
        <h1>うまいカレー屋一覧</h1>
      </div>
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
        {shops.map((shop) => (
          <Paper key={shop.id} elevation={3} sx={{ padding: 2 }}> {/* paddingはコンテンツに合わせて調整 */}
            <div>店名: {shop.name}</div>
            <div>住所: {shop.address}</div>
            <div>食べたもの: {shop.foods}</div>
          </Paper>
        ))}
      </Box>
    </div>
  )
}

export default CurryShop;