import React from 'react'
import CountryInfo from './CountryInfo'


const List = ({ countries, newfilter }) => {
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
          {country.name}
          
        </div>
      ));
    } 
    else {
      return (
        <div>
          <CountryInfo country={filtered[0]} />
        </div>
      );
    }
}
  };
export default List