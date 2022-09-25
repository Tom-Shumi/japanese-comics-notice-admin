javascript:(()=>{navigator.clipboard.writeText(document.getElementById('detailBulletsWrapper_feature_div').querySelector('li:nth-child(1)').firstElementChild.lastElementChild.textContent.trim()).then(()=>console.log("")).catch(e=>alert('エラー！ '+e.message));})();console.log(document.getElementById('detailBulletsWrapper_feature_div').querySelector('li:nth-child(1)').firstElementChild.lastElementChild.textContent.trim());console.log(document.getElementById('productTitle').textContent.trim());console.log(document.getElementById('detailBulletsWrapper_feature_div').querySelector('li:nth-child(3)').firstElementChild.lastElementChild.textContent.trim());


// source
javascript:(()=>{
    navigator.clipboard.writeText(document.getElementById('detailBulletsWrapper_feature_div').querySelector('li:nth-child(1)').firstElementChild.lastElementChild.textContent.trim())
        .then(()=>console.log(""))
        .catch(e=>alert('エラー！ '+e.message));})();
    console.log(document.getElementById('detailBulletsWrapper_feature_div').querySelector('li:nth-child(1)').firstElementChild.lastElementChild.textContent.trim());
    console.log(document.getElementById('productTitle').textContent.trim());
    console.log(document.getElementById('detailBulletsWrapper_feature_div').querySelector('li:nth-child(3)').firstElementChild.lastElementChild.textContent.trim());