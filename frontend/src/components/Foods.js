import React, { useState, useEffect } from "react";
import axios from 'axios';

import ButtonAppBar from '../components/Header';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '../Font.css';


const Foods = ({ shopId }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost/api/foods/?curry_shop=${shopId}`)
      .then(res => {
        console.log(res.data);
        setFoods(res.data);
      })
      .catch(error => {
        console.error("There was an error fetching the foods!", error);
      });
  }, [shopId]);

  return (
    <div>
      <ButtonAppBar />
      <div className="title">
        <h1>食べたメニュー一覧</h1>
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
        {foods.map((food) => (
          <Paper 
            key={food.id} 
            elevation={3} 
            sx={{ padding: 2 }} // paddingはコンテンツに合わせて調整
            onClick={() => handleShopClick(food.id)} // ここでクリックイベントを追加
            style={{ cursor: 'pointer' }} // マウスカーソルをポインターに変更
          >
            <div>メニュー名: {food.name}</div>
            <div>値段: {food.price}</div>
            <div>うまさ: {food.evaluation_display}</div>
          </Paper>
        ))}
      </Box>
    </div>
  );
};

export default Foods;
