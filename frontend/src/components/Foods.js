import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ButtonAppBar from '../components/Header';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import '../Font.css';


const Foods = () => {
  const [foods, setFoods] = useState([]);
  const { shopId } = useParams();

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
