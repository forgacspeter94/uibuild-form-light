console.log ('Hello World');

function textComponent (){
    return `
    <h1> Visszajelzés </h1>
    <input type="text" class="text" placeholder="Tárgy">
    <div class="input">
    <textarea cols="30" rows="10" placeholder="Megjegyzés"></textarea>
    </div>
    <div class="checkboxflex">
        <input type="checkbox" class = 'checkbox' name="Adatkezelés">
        <label for="AdataKezelés">Elolvastam és elfogadom az  <a href="#" class= "data-link">Adatkezelési Tájékoztatót</a>.</div></label>
    </div>
    <div class ="button-container">
        <button>MENTÉS</button>
    </div>
    `
}

function init(){
    const root = document.querySelector('#root');
    
    root.insertAdjacentHTML('beforeend', textComponent());
}

init()