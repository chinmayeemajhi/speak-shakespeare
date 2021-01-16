var inputText = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outpuText = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/shakespeare.json";

function constructTranslateUrl(text){
    var translateUrl = url + "?" + "text" + "=" + text;
    return translateUrl;
};

function errorHandler(error){
    console.log("error occured: " + error);
};

function clickHandler(){
    
    var inputUrl = constructTranslateUrl(inputText.value);
    fetch(inputUrl)
    .then(Response => Response.json())
    .then(json =>{
                    var translatedText = json.contents.translated;
                    outpuText.innerText = translatedText;
                    })
    .catch(errorHandler);                

};

btnTranslate.addEventListener("click", clickHandler);