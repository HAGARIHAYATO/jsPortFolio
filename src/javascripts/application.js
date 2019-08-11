const infoDate = document.querySelector(".new-info");

//axios
import axios from 'axios';
axios.get('https://script.google.com/macros/s/AKfycbw3Cg2bLfJXtd5ck9KlTgzrKEDifG2MDopfcJozJujnE_8kH8o/exec')
  .then(function (response) {
    // handle success
    for(let i = 0; i < response.data.length; i++){
        let dateMonth = new Date(response.data[i].dateTime).getMonth();
        let dateYear = new Date(response.data[i].dateTime).getFullYear();
        let dataDate = new Date(response.data[i].dateTime).getDate();
        infoDate.innerHTML += `<tr>
        <td class="date">${dateYear}年${dateMonth}月${dataDate}日</td>
        <td class="contents">${response.data[i].information}</td>
        </tr>`
    }
  })
  .catch(function (error) {
    // handle error
    infoDate.innerHTML += `<tr>
        <td class="date">
            <p>通信中...</p>
        </td>
        <td class="contents">
            <p>お待ち下さい...</p>
        </td>
    </tr>`
  })
  .finally(function () {
    // always executed
  });
// ページ遷移機能
const hundle = document.querySelector(".hundle");
const view = document.querySelector(".main-container");

hundle.children[0].addEventListener("click",function num1(){
    view.children[0].style.display="block";
    view.children[1].style.display="none";
    view.children[2].style.display="none";
});
hundle.children[1].addEventListener("click",function num2(){
    view.children[0].style.display="none";
    view.children[1].style.display="block";
    view.children[2].style.display="none";
});
hundle.children[2].addEventListener("click",function num3(){
    view.children[0].style.display="none";
    view.children[1].style.display="none";
    view.children[2].style.display="block";
});
// contact機能
const screen = document.querySelector(".message-container");
const textInput = document.querySelector(".text-input");
const nameInput = document.querySelector(".name-input");
const submit = document.querySelector(".submit");

// portfolio追加
const portFolioBoard = document.querySelector(".num2-container");

axios.get('https://script.google.com/macros/s/AKfycbxosPycRtZN20PgsywESuU6D9iITnyY1r4dEtfHU8jUBuEXwLc/exec')
  .then(function (response) {
    // handle success
    for(let i = 0; i < response.data.length; i++){
        portFolioBoard.innerHTML +=
        `
        <div class="num2-item">
            <h5 class="num2-item-name">${response.data[i].name}</h5>
            <div class="num2-text">
                <a href="${response.data[i].link}" class="num2-link">${response.data[i].link}</a>
                <p class="num2-item-content">${response.data[i].body}</p>
            </div>
        </div>
        `
    }
  })
  .catch(function (error) {
    // handle error
  })
  .finally(function () {
    // always executed
  });




// チャット入力
// nameがmasterなら左側に出力それ以外なら右側に出力
// textが空なら表示されない
submit.addEventListener("click",async (evt)=>{
    if(textInput.value !== ''){
        await axios.post('https://script.google.com/macros/s/AKfycbxBjok29e-9FOoW-sAAIw9ZV2Sh8vc6-L0nY6oEn5uEdXKenwZk/exec', {
          name: nameInput.value,
          comment: textInput.value
        }, {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
          .then(response => {
            console.log(response.data)
          }).catch(error => {
            console.log(error);
            screen.innerHTML += (
            '</p></div><div class="output-text"><p class="ot">'
                    + "通信環境に移動してください..." + '</p></div></div>')
          });
        textInput.value = "";
        nameInput.value = "";
        await axios.get('https://script.google.com/macros/s/AKfycbxBjok29e-9FOoW-sAAIw9ZV2Sh8vc6-L0nY6oEn5uEdXKenwZk/exec')
              .then(function (response) {
                　　// handle success
                　　let ln = (response.data.length -1)
                    if(response.data[ln].name === 'master'){
                        screen.innerHTML += ('<div class="master-comment"><div class="output-name"><p class="on">'
                        + response.data[ln].name + '</p></div><div class="output-text"><p class="ot">'
                        + response.data[ln].comment + '</p></div></div>');
                    }else if(response.data[ln].name === ''){
                        screen.innerHTML += ('<div class="comment"><div class="output-name"><p class="on">'
                        + 'user' + '</p></div><div class="output-text"><p class="ot">'
                        + response.data[ln].comment + '</p></div></div>');
                    }else{
                        screen.innerHTML += ('<div class="comment"><div class="output-name"><p class="on">'
                        + response.data[ln].name + '</p></div><div class="output-text"><p class="ot">'
                        + response.data[ln].comment + '</p></div></div>');
                    }
              })
        }
});

// エンターキーでも発火
window.addEventListener("keypress",async (evt)=>{
    if(evt.key === 'Enter'){
        if(textInput.value !== ''){
            await axios.post('https://script.google.com/macros/s/AKfycbxBjok29e-9FOoW-sAAIw9ZV2Sh8vc6-L0nY6oEn5uEdXKenwZk/exec', {
          name: nameInput.value,
          comment: textInput.value
        }, {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
          .then(response => {
            console.log(response.data)
          }).catch(error => {
            console.log(error);
          });
        textInput.value = "";
        nameInput.value = "";
        await axios.get('https://script.google.com/macros/s/AKfycbxBjok29e-9FOoW-sAAIw9ZV2Sh8vc6-L0nY6oEn5uEdXKenwZk/exec')
              .then(function (response) {
                　　// handle success
                　　let ln = (response.data.length -1)
                    if(response.data[ln].name === 'master'){
                        screen.innerHTML += ('<div class="master-comment"><div class="output-name"><p class="on">'
                        + response.data[ln].name + '</p></div><div class="output-text"><p class="ot">'
                        + response.data[ln].comment + '</p></div></div>');
                    }else if(response.data[ln].name === ''){
                        screen.innerHTML += ('<div class="comment"><div class="output-name"><p class="on">'
                        + 'user' + '</p></div><div class="output-text"><p class="ot">'
                        + response.data[ln].comment + '</p></div></div>');
                    }else{
                        screen.innerHTML += ('<div class="comment"><div class="output-name"><p class="on">'
                        + response.data[ln].name + '</p></div><div class="output-text"><p class="ot">'
                        + response.data[ln].comment + '</p></div></div>');
                    }
              })
        }
    }
});

// get success
// このgetがreloadしないと取ってこれない
axios.get('https://script.google.com/macros/s/AKfycbxBjok29e-9FOoW-sAAIw9ZV2Sh8vc6-L0nY6oEn5uEdXKenwZk/exec')
.then(function (response) {
    // handle success
    for(let i = 0; i < response.data.length; i++){
        if(response.data[i].name === 'master'){
            screen.innerHTML += ('<div class="master-comment"><div class="output-name"><p class="on">'
            + response.data[i].name + '</p></div><div class="output-text"><p class="ot">'
            + response.data[i].comment + '</p></div></div>');
        }else if(response.data[i].name === ''){
            screen.innerHTML += ('<div class="comment"><div class="output-name"><p class="on">'
            + 'user' + '</p></div><div class="output-text"><p class="ot">'
            + response.data[i].comment + '</p></div></div>');
        }else{
            screen.innerHTML += ('<div class="comment"><div class="output-name"><p class="on">'
            + response.data[i].name + '</p></div><div class="output-text"><p class="ot">'
            + response.data[i].comment + '</p></div></div>');
        }
    }
})
.catch(function (error) {
    // handle error
    screen.innerHTML += (
    '</p></div><div class="output-text"><p class="ot">'
            + "通信環境に移動してください..." + '</p></div></div>')
    })
.finally(function () {
// always executed
});