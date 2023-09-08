import React, { useState } from 'react';

// en funksjon for form
function Form() {
  // her conste jeg ordene jeg skal bruke
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState(''); 

  // lager event
  const handleSubmit = (event) => {
    // oppdatere uten of måtte refresch siden
    event.preventDefault();
    // for og vise det i consoleen
    console.log(inputValue);
    // for og kunne sette det inn i en <p> tag
    setOutputValue(inputValue); 
    // sette det til ingenting og vise
    setInputValue(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      // velger type
        type="text"
        // gjør at value blir til inputValue
        value={inputValue}
        // denne vente og og vil forande event til target.value
        onChange={(event) => setInputValue(event.target.value)}
        // her er placeholderen som jeg han velgt hva som skal så inni
        placeholder="Skriv inn noe!"
      />
      {/* lager knappen */}
      <button type="submit">Send</button>
      <p>{outputValue}</p> {/* Rendrer outputValue som en <p> */}
    </form>
  );
}

export default Form;
