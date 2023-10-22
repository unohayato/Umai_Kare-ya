import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import ButtonAppBar from '../components/Header';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '../Font.css';

const CurryShop = () => {
  const [shops, setShops] = useState([]);

  const navigate = useNavigate();

  // 店の詳細ページへの遷移をハンドルする関数
  const handleShopClick = (shopId) => {
    navigate(`/${shopId}/foods`);
  };

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
      <ButtonAppBar />
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
        <Paper 
          key={shop.id} 
          elevation={3} 
          sx={{ padding: 2 }} // paddingはコンテンツに合わせて調整
          onClick={() => handleShopClick(shop.id)} // ここでクリックイベントを追加
          style={{ cursor: 'pointer' }} // マウスカーソルをポインターに変更
        >
          <div>店名: {shop.name}</div>
          <div>住所: {shop.address}</div>
        </Paper>
      ))}
    </Box>
    </div>
  )
}

export default CurryShop;