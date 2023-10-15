import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <div variant="h6" component="div" sx={{ flexGrow: 1 }}>
          うまいカレー屋
        </div>      
        </Toolbar>
      </AppBar>
    </Box>
  );
}
