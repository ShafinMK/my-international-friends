

const callApi = ()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res=> res.json())
    .then(result => getFriend(result))
}
callApi();


const getFriend = (result)=>{
    console.log(result.results);
    let friends = result.results;

    for(let friend of friends){
        console.log(friend.email);

        let div = document.createElement('div');

        div.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${friend.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${friend.name.first} ${friend.name.last}</h5>
          <p class="card-text">Email: ${friend.email}
          Gender: ${friend.gender}\n
          Address: ${friend.location.city}, ${friend.location.state}, ${friend.location.country}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
      let cards = document.getElementById('cards');
      cards.appendChild(div);
    }
}