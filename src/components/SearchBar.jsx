import React, {useState} from 'react';
import styled from "styled-components";
import OutFSearch from '../static/images/outf_search_icon.png'
import OnFSearch from '../static/images/onf_search_icon.png'

const SearchBar = () => {

    const [focused, setFocused] = useState(false);

    return (
            <StyCon 
               style = {{ border: focused && '1px solid rgba(0, 195, 204, 1)' }}
               className='SearchInput'
            >
            <button onClick={()=>{alert("Hey")}}>
                <img src={focused ?OnFSearch: OutFSearch} alt="Liner Logo"/>     
            </button>   
            <input
                style = {{ caretColor: focused && 'rgba(0, 195, 204, 1)' }}
                placeholder='Search keyword'
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            ></input>  
            </StyCon>   
    );
};

export default SearchBar;

const StyCon = styled.div`

    &:hover{
       border: 1px solid rgba(149, 156, 166, 1); 
    }

    &:focus-within{
        border: 1px solid rgba(0, 195, 204, 1); 
    }

    height: 48px;
    width: 560px;

    border: 1px solid rgba(194, 198, 206, 1); 
    border-radius: 1000px;
    display: flex;

    button{
     border: none;
     margin: auto 17.49px;
     background-color: transparent;
    }

    input{
     border: none;
     outline: none;
     width: 80%;
     font-size: 16px;
    }

`