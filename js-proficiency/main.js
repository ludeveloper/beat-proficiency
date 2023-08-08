
function changeText() {
    footerText = 'This is the proper footer text';
    headerText =  'This is the proper header text';
    this.headerEl = document.querySelector('h1');
    this.headerEl.textContent = headerText;
    this.footerEl = document.querySelector('footer p');
    this.footerEl.textContent = footerText;
    
   
}

document.getElementById('copyFirstObject').addEventListener('copyFirstObject',buttonHandler.makeFirstChange)


const buttonHandler = {
    makeFirstChange: () => {
        const theFirstObject = document.getElementById('theFirstObject');
        const theFirstObjectCopy =theFirstObject;
        const target = document.getElementById('target')
    },
    makeSecondChange: () => {
    
    },
    makeThirdChange: () => {
    }
}

changeText();
var headerText;
var footerText;