import React from 'react'
import CountryInfo from './CountryInfo'

const List = ({ countries, newfilter,showC }) => {


    const filtered = countries.filter(country =>
      country.name.toUpperCase().includes(newfilter.toUpperCase())
    );


  
    const listLength = filtered.length;
    console.log(filtered);
    if(newfilter===''){
          return <div />
    }
    else{

     if (listLength >= 10) {
      return <div>Too many matches, specify another letter(s)</div>;
    }
  
    else if (listLength > 1 && listLength < 10) {
      return filtered.map(country => (
        <div key={country.name}>
          {country.name}<button value={country.name} onClick={showC}>show</button> 
        </div>
      ));
    } 
    else if(listLength===1){
      return (
        <div>
          <CountryInfo country={filtered[0]} />
        </div>
      );
    }
    else{
        return <div>Result doesn't exist.Check your spelling and try again!</div >
    }
}
  };
export default List  