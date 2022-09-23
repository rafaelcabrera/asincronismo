const API = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '788695ae2cmshaad7e1fbc25e307p1cec23jsnd92d5dec8726',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};
const content = null || document.getElementById('content');

// fetch(API, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

async function fetchData(urlApi) {
    const response = await fetch(urlApi,options)
    const data = await response.json();
    return data;
}

(async ()=>{
    try{
        const response = await fetchData(API);
        let view = `${response.data.map(coin => `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${coin.sponse.data.coins.iconUrl}" alt="" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${response.data.coins}
          </h3>
        </div>
      </div>
      `).slice(0,4).join('')}}
      `;
      content.innerHTML = view;
    }
    catch(error)
    {
        console.log(error);
    }
})(); //funcion que se llama automaticamente