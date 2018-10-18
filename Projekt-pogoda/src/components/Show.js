import React from 'react';

const Show = props => (
    <div id='show-weather'>   
        <div className='weather-container'>
            <div className='lleft'>
            
                {props.country && props.city &&<span> Lokalizacja: {props.city}, {props.country} </span> }
                {props.temperature && <span> Temperatura: {props.temperature} &deg; </span>}
                {props.visibility &&  <span> Widoczność: {props.visibility} km </span>}
                
                {props.humidity &&  <span> Wilgotność: {props.humidity} % </span> }
                {props.pressure &&  <span> Ciśnienie: {props.pressure} Hpa</span>}
                {props.error && <span id='color-span-error'> {props.error}</span>}
            </div>

            <div className='rright'>
                {props.description && <span> Pogoda: {props.description }</span>}
                {props.wind &&  <span> Wiatr: {props.wind} km/h </span>} 
                {props.sunrise && <span> Wschód słonca: {props.sunrise} </span>}
                {props.sunset &&  <span> Zachód słonca:  {props.sunset} </span>}
                {props.cityId &&  <span> ID miasta: {props.cityId} </span> }
                
            
            </div>
        </div>
        
        <div className='cities'>
          <a href='./miasta.txt' download>Lista miast, kliknij by pobrać.</a>
        </div>
        
    </div>
    
);



export default Show;