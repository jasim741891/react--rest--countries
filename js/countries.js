const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = countries => {
    // console.log(countries[0])
    const container = document.getElementById("countries")
    const countriesHtml = countries.map(country => getCountriesHtml(country));
    container.innerHTML = countriesHtml.join(' ')
    console.log(countriesHtml[0])
}
const getCountriesHtml = country => {
    return `
    <div class="country">
    <h2>${country.name}</h2>
    <h4> capital:${country.capital}</h4>
    <img src="${country.flag}">
    </div>`
}
loadCountries()