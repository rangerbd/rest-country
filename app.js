fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => {
    console.log(data);
    const countries=document.getElementById('countri');

    for (let i = 0; i < data.length; i++) {
        const country = data[i];
        console.log(country.name.common)
        const div=document.createElement('div');
        div.className='country';

        const countryInfo = `
            <h3 class="country-name"> ${country.name.common} </h3>
            <p> ${country.capital}</p>
            <button> click me</button>
        `;

       div.innerHTML=countryInfo;
        countries.appendChild(div);
        
    }
})