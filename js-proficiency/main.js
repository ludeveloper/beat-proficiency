
function changeText() {
    footerText = 'This is the proper footer text';
    headerText =  'This is the proper header text';
    this.headerEl = document.querySelector('h1');
    this.headerEl.textContent = headerText;
    this.footerEl = document.querySelector('footer p');
    this.footerEl.textContent = footerText;
}

const buttonHandler = {
    makeFirstChange: () => {

    },
    makeSecondChange: () => {
    
    },
    makeThirdChange: () => {
    }
}

changeText();
let headerText;
var footerText;