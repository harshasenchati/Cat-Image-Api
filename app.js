const URL='https://api.thecatapi.com/v1/images/search?limit=10';

const getImages = async ()=>{
  console.log("initiated");
  const response= await fetch(URL);
  const data=await response.json();
  data.forEach((cat)=>{
    const imgElement=document.createElement('div');
    imgElement.style.height="300px";
    imgElement.style.width="300px";
    imgElement.style.backgroundImage='url(' + cat.url + ')';
    imgElement.style.backgroundSize="cover";
    imgElement.style.border="2px solid black";
    const maindiv=document.querySelector(".maindiv");
    maindiv.appendChild(imgElement);
  })
}
const imageClear = () => {
  cleardiv=document.querySelector(".maindiv");
  cleardiv.innerHTML='';
}