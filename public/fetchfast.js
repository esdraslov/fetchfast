let fetchfasttags=document.querySelectorAll('fetchfast');
let infos;
let pkeys;
fetchfasttags.forEach((fetchtag) => {
    fetch(fetchtag.getAttribute('src'))
        .then(datas => datas.json())
        .then(data => fetchfast(data,fetchtag));
});
function fetchfast(data,child){
    if(child.getAttribute('type')=='siter'){
        let title=document.querySelector('title');
        title.innerHTML=data.title||data.name;
    }else if(child.getAttribute('type')=='bank'){
        infos=data.bank.infos
        pkeys=data.bank.privateKeys
    }
}