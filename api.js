const baseUrl="http://localhost:3001";

function getItems(){
    return fetch ( `${baseUrl}/items`).then((res) => {
  return res.ok
  ? res.json()
  : Promise.reject(`Error: ${res.status}`);
    }) 
}

function addItem({name,imageUrl,weather}){
    return fetch ( `${baseUrl}/items`, {
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify({name,imageUrl,weather})
    }).then((res) => {
  return res.ok
  ? res.json()
  : Promise.reject(`Error: ${res.status}`);
    }) 
}

function deleteItem({id}){
    return fetch ( `${baseUrl}/items/${id}`, {
      method: "DELETE",
      headers:{
        "content-type": "application/json"
      },
    }).then((res) => {
  return res.ok
  ? res.json()
  : Promise.reject(`Error: ${res.status}`);
    }) 
}

export {getItems,addItem,deleteItem};