//declares api key variable
const apiKey = "i9u5FoDahfPMI2LFAipRD3KXJ45afk0f"
async function giphySearch(event){
  event.preventDefault();
  //variable 
  const giphyResultsDiv = document.getElementById('giphy-results')
  //sets the value of the serach term
  const searchTerm = document.querySelector('input[name="search-term"]').value;
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}`);
  const giphyData = await response.json();
  //clears results before displaying new results
  giphyResultsDiv.innerHTML = "";
  for(let i = 0; i < giphyData.data.length; i++){
    const url = giphyData.data[i].images.fixed_width.url;
    const image = document.createElement('img');
    image.setAttribute('src', url);
    giphyResultsDiv.appendChild(image);
  }
}
//adds ecent listener to search form submit button
document.querySelector("#search-form").addEventListener("submit", giphySearch)