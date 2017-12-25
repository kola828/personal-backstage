import axios from 'axios';

const addArt=(params)=>axios({
  method: 'POST',
  url: '/api/atr/test',
});


export {addArt,}