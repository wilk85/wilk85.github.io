import React from 'react';


const Data = props => (
    <form onSubmit={props.getWeather}>
        <input  type='text' name='city' placeholder='Wpisz miasto'/>

        <input  type='text' name='country' placeholder='Wpisz kraj' />

        <button className='btn-primary'>Pobierz</button>
    </form>
);  
     
export default Data;