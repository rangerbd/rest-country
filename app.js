fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => {
    
    const countries=document.getElementById('countri');

    for (let i = 0; i < data.length; i++) {
        const country = data[i];
        
        const div=document.createElement('div');
        div.className='country';

        const countryInfo = `
            <h3 class="country-name"> ${country.name.common} </h3>
            <p> ${country.capital}</p>
            <button onclick="displaycountryDetail('${country.name.common}')"> details</button>
        `;

       div.innerHTML=countryInfo;
        countries.appendChild(div);
        
    }

})

const displaycountryDetail = common =>{
    const url = 'https://restcountries.com/v3.1/name/'+common;
    fetch(url)
   .then(res => res.json())
   .then(data => countryDetail(data[0]))
    
   const countryDetail = country =>{
        console.log(country)
       const countryDiv=document.getElementById('countryDiv');
       countryDiv.innerHTML= `
         <h1> ${country.population} </h1>
       <h1> ${country.name.official} </h1>
      <h1> ${country.name.common} </h1>
      <img src="${country.flags.png}"> </img>

       `
   }
}