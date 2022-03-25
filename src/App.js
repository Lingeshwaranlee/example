
import './App.css';
import JSONDATA from "./data.json"
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function App() {
  const[search,setsearch]=useState([]);
  const handleFilter=(event)=>{
    const searchWord = event.target.value;
    const newFilter= JSONDATA.filter((value)=>{
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if(searchWord ===""){
      setsearch([]);
    }else{
    setsearch(newFilter);
    }
  };
  return (
    <div className="App">
      <div className='search'>
      <h1>hi this lee</h1>
      <div className='searchInputs'>
      <input type="text" placeholder="search...." onChange={handleFilter}></input>
      <div className='searchIcon'>
        {search.length===0 ? <SearchIcon/> : <CloseIcon id="clearBtn"  />}
      </div>
      </div>
    {search.length !== 0 &&(
    <div className='dataResult'>  
      {search.slice(0,15).map((val,key)=>{
        return(
          <div className='appuser'>
            <p>{val.name}</p>
            </div>
            
        )
      })}
      </div>
    )
}
    </div>
    </div>
  );
}
