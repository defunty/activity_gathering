import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [blogData, setBlogData] = useState(false);

  const fetchData = () => {
    console.log('fetch');
    let fetchDataArray = [];
    fetchDataArray.push(
      <div key={1}>test</div>
    )
    setBlogData(fetchDataArray);
  }
  return(
    <div>
      <button onClick={ () => { fetchData(); } }>フェッチデータ</button>
      { blogData ? <div>{ blogData }</div> : <div>Nothing</div> }
    </div>
  );
}

export default App;
