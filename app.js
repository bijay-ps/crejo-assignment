let backSideElt = document.querySelector('.back_side');
let frontSideElt = document.querySelector('.front_side');
let cardNumInput = document.querySelector('#cc-number');
let ccHolderName = document.querySelector('#cc-holder-name');
let namePlaceHolder = document.querySelector('#name-placeHolder');

let placeHolder1 = document.querySelector('#num1');
let placeHolder2 = document.querySelector('#num2');
let placeHolder3 = document.querySelector('#num3');
let placeHolder4 = document.querySelector('#num4');
let placeHolder5 = document.querySelector('#num5');
let placeHolder6 = document.querySelector('#num6');
let placeHolder7 = document.querySelector('#num7');
let placeHolder8 = document.querySelector('#num8');
let placeHolder9 = document.querySelector('#num9');
let placeHolder10 = document.querySelector('#num10');
let placeHolder11 = document.querySelector('#num11');
let placeHolder12 = document.querySelector('#num12');
let placeHolder13 = document.querySelector('#num13');
let placeHolder14 = document.querySelector('#num14');
let placeHolder15 = document.querySelector('#num15');
let placeHolder16 = document.querySelector('#num16');

let mm1PlaceHolder = document.querySelector('#mm1');
let mm2PlaceHolder = document.querySelector('#mm2');
let yy1PlaceHolder = document.querySelector('#yy1');
let yy2PlaceHolder = document.querySelector('#yy2');

let ccDate = document.querySelector('#cc-date');

let cvv = document.querySelector('#cvv');

let cvvNum = document.querySelector('.cvv-num'); 

function showCard() {
    frontSideElt.classList.add("card-hidden");
    backSideElt.classList.remove('card-hidden');
    backSideElt.classList.add('rotate');
}

function hideCard() {
    frontSideElt.classList.remove("card-hidden");
    backSideElt.classList.add('card-hidden');
    backSideElt.classList.remove('rotate');
}

const arr = ["1","2","3","4","5","6","7","8","9","0"];

cardNumInput.addEventListener('input', function(e) {
    e.stopPropagation();
    const valLength = e.target.value.length;
    const val = e.data;
    if(e.inputType === 'insertText') {
        inputData(e.data, valLength)
    } else if(e.inputType === 'deleteContentBackward' || e.inputType === 'deleteContentForward') {
        const valStrLen = `${cardNumInput.value}`.length;
        if(valStrLen === 0) {
            placeHolder1.style.backgroundColor = '#fff';
            placeHolder1.style.width = '15px';
            placeHolder1.innerText = null;

            placeHolder2.style.backgroundColor = '#fff';
            placeHolder2.style.width = '15px';
            placeHolder2.innerText = null;

            placeHolder3.style.backgroundColor = '#fff';
            placeHolder3.style.width = '15px';
            placeHolder3.innerText = null;

            placeHolder4.style.backgroundColor = '#fff';
            placeHolder4.style.width = '15px';
            placeHolder4.innerText = null;

            placeHolder5.style.backgroundColor = '#fff';
            placeHolder5.style.width = '15px';
            placeHolder5.innerText = null;

            placeHolder6.style.backgroundColor = '#fff';
            placeHolder6.style.width = '15px';
            placeHolder6.innerText = null;

            placeHolder7.style.backgroundColor = '#fff';
            placeHolder7.style.width = '15px';
            placeHolder7.innerText = null;

            placeHolder8.style.backgroundColor = '#fff';
            placeHolder8.style.width = '15px';
            placeHolder8.innerText = null;

            placeHolder9.style.backgroundColor = '#fff';
            placeHolder9.style.width = '15px';
            placeHolder9.innerText = null;

            placeHolder10.style.backgroundColor = '#fff';
            placeHolder10.style.width = '15px';
            placeHolder10.innerText = null;

            placeHolder11.style.backgroundColor = '#fff';
            placeHolder11.style.width = '15px';
            placeHolder11.innerText = null;

            placeHolder12.style.backgroundColor = '#fff';
            placeHolder12.style.width = '15px';
            placeHolder12.innerText = null;

            placeHolder13.style.backgroundColor = '#fff';
            placeHolder13.style.width = '15px';
            placeHolder13.innerText = null;

            placeHolder14.style.backgroundColor = '#fff';
            placeHolder14.style.width = '15px';
            placeHolder14.innerText = null;

            placeHolder15.style.backgroundColor = '#fff';
            placeHolder15.style.width = '15px';
            placeHolder15.innerText = null;

            placeHolder16.style.backgroundColor = '#fff';
            placeHolder16.style.width = '15px';
            placeHolder16.innerText = null;
        }

        if(valStrLen === 1) {
            placeHolder2.style.backgroundColor = '#fff';
            placeHolder2.style.width = '15px';
            placeHolder2.innerText = null;

            placeHolder3.style.backgroundColor = '#fff';
            placeHolder3.style.width = '15px';
            placeHolder3.innerText = null;

            placeHolder4.style.backgroundColor = '#fff';
            placeHolder4.style.width = '15px';
            placeHolder4.innerText = null;

            placeHolder5.style.backgroundColor = '#fff';
            placeHolder5.style.width = '15px';
            placeHolder5.innerText = null;

            placeHolder6.style.backgroundColor = '#fff';
            placeHolder6.style.width = '15px';
            placeHolder6.innerText = null;

            placeHolder7.style.backgroundColor = '#fff';
            placeHolder7.style.width = '15px';
            placeHolder7.innerText = null;

            placeHolder8.style.backgroundColor = '#fff';
            placeHolder8.style.width = '15px';
            placeHolder8.innerText = null;

            placeHolder9.style.backgroundColor = '#fff';
            placeHolder9.style.width = '15px';
            placeHolder9.innerText = null;

            placeHolder10.style.backgroundColor = '#fff';
            placeHolder10.style.width = '15px';
            placeHolder10.innerText = null;

            placeHolder11.style.backgroundColor = '#fff';
            placeHolder11.style.width = '15px';
            placeHolder11.innerText = null;

            placeHolder12.style.backgroundColor = '#fff';
            placeHolder12.style.width = '15px';
            placeHolder12.innerText = null;

            placeHolder13.style.backgroundColor = '#fff';
            placeHolder13.style.width = '15px';
            placeHolder13.innerText = null;

            placeHolder14.style.backgroundColor = '#fff';
            placeHolder14.style.width = '15px';
            placeHolder14.innerText = null;

            placeHolder15.style.backgroundColor = '#fff';
            placeHolder15.style.width = '15px';
            placeHolder15.innerText = null;

            placeHolder16.style.backgroundColor = '#fff';
            placeHolder16.style.width = '15px';
            placeHolder16.innerText = null;
        }

        if(valStrLen === 2) {
            placeHolder3.style.backgroundColor = '#fff';
            placeHolder3.style.width = '15px';
            placeHolder3.innerText = null;

            placeHolder4.style.backgroundColor = '#fff';
            placeHolder4.style.width = '15px';
            placeHolder4.innerText = null;

            placeHolder5.style.backgroundColor = '#fff';
            placeHolder5.style.width = '15px';
            placeHolder5.innerText = null;

            placeHolder6.style.backgroundColor = '#fff';
            placeHolder6.style.width = '15px';
            placeHolder6.innerText = null;

            placeHolder7.style.backgroundColor = '#fff';
            placeHolder7.style.width = '15px';
            placeHolder7.innerText = null;

            placeHolder8.style.backgroundColor = '#fff';
            placeHolder8.style.width = '15px';
            placeHolder8.innerText = null;

            placeHolder9.style.backgroundColor = '#fff';
            placeHolder9.style.width = '15px';
            placeHolder9.innerText = null;

            placeHolder10.style.backgroundColor = '#fff';
            placeHolder10.style.width = '15px';
            placeHolder10.innerText = null;

            placeHolder11.style.backgroundColor = '#fff';
            placeHolder11.style.width = '15px';
            placeHolder11.innerText = null;

            placeHolder12.style.backgroundColor = '#fff';
            placeHolder12.style.width = '15px';
            placeHolder12.innerText = null;

            placeHolder13.style.backgroundColor = '#fff';
            placeHolder13.style.width = '15px';
            placeHolder13.innerText = null;

            placeHolder14.style.backgroundColor = '#fff';
            placeHolder14.style.width = '15px';
            placeHolder14.innerText = null;

            placeHolder15.style.backgroundColor = '#fff';
            placeHolder15.style.width = '15px';
            placeHolder15.innerText = null;

            placeHolder16.style.backgroundColor = '#fff';
            placeHolder16.style.width = '15px';
            placeHolder16.innerText = null;
        }

        if(valStrLen === 3) {
            
            placeHolder4.style.backgroundColor = '#fff';
            placeHolder4.style.width = '15px';
            placeHolder4.innerText = null;

            placeHolder5.style.backgroundColor = '#fff';
            placeHolder5.style.width = '15px';
            placeHolder5.innerText = null;

            placeHolder6.style.backgroundColor = '#fff';
            placeHolder6.style.width = '15px';
            placeHolder6.innerText = null;

            placeHolder7.style.backgroundColor = '#fff';
            placeHolder7.style.width = '15px';
            placeHolder7.innerText = null;

            placeHolder8.style.backgroundColor = '#fff';
            placeHolder8.style.width = '15px';
            placeHolder8.innerText = null;

            placeHolder9.style.backgroundColor = '#fff';
            placeHolder9.style.width = '15px';
            placeHolder9.innerText = null;

            placeHolder10.style.backgroundColor = '#fff';
            placeHolder10.style.width = '15px';
            placeHolder10.innerText = null;

            placeHolder11.style.backgroundColor = '#fff';
            placeHolder11.style.width = '15px';
            placeHolder11.innerText = null;

            placeHolder12.style.backgroundColor = '#fff';
            placeHolder12.style.width = '15px';
            placeHolder12.innerText = null;

            placeHolder13.style.backgroundColor = '#fff';
            placeHolder13.style.width = '15px';
            placeHolder13.innerText = null;

            placeHolder14.style.backgroundColor = '#fff';
            placeHolder14.style.width = '15px';
            placeHolder14.innerText = null;

            placeHolder15.style.backgroundColor = '#fff';
            placeHolder15.style.width = '15px';
            placeHolder15.innerText = null;

            placeHolder16.style.backgroundColor = '#fff';
            placeHolder16.style.width = '15px';
            placeHolder16.innerText = null;
        }

        if(valStrLen === 4) {
            
            placeHolder5.style.backgroundColor = '#fff';
            placeHolder5.style.width = '15px';
            placeHolder5.innerText = null;

            placeHolder6.style.backgroundColor = '#fff';
            placeHolder6.style.width = '15px';
            placeHolder6.innerText = null;

            placeHolder7.style.backgroundColor = '#fff';
            placeHolder7.style.width = '15px';
            placeHolder7.innerText = null;

            placeHolder8.style.backgroundColor = '#fff';
            placeHolder8.style.width = '15px';
            placeHolder8.innerText = null;

            placeHolder9.style.backgroundColor = '#fff';
            placeHolder9.style.width = '15px';
            placeHolder9.innerText = null;

            placeHolder10.style.backgroundColor = '#fff';
            placeHolder10.style.width = '15px';
            placeHolder10.innerText = null;

            placeHolder11.style.backgroundColor = '#fff';
            placeHolder11.style.width = '15px';
            placeHolder11.innerText = null;

            placeHolder12.style.backgroundColor = '#fff';
            placeHolder12.style.width = '15px';
            placeHolder12.innerText = null;

            placeHolder13.style.backgroundColor = '#fff';
            placeHolder13.style.width = '15px';
            placeHolder13.innerText = null;

            placeHolder14.style.backgroundColor = '#fff';
            placeHolder14.style.width = '15px';
            placeHolder14.innerText = null;

            placeHolder15.style.backgroundColor = '#fff';
            placeHolder15.style.width = '15px';
            placeHolder15.innerText = null;

            placeHolder16.style.backgroundColor = '#fff';
            placeHolder16.style.width = '15px';
            placeHolder16.innerText = null;
        }

        if(valStrLen === 5) {
            
            placeHolder6.style.backgroundColor = '#fff';
            placeHolder6.style.width = '15px';
            placeHolder6.innerText = null;

            placeHolder7.style.backgroundColor = '#fff';
            placeHolder7.style.width = '15px';
            placeHolder7.innerText = null;

            placeHolder8.style.backgroundColor = '#fff';
            placeHolder8.style.width = '15px';
            placeHolder8.innerText = null;

            placeHolder9.style.backgroundColor = '#fff';
            placeHolder9.style.width = '15px';
            placeHolder9.innerText = null;

            placeHolder10.style.backgroundColor = '#fff';
            placeHolder10.style.width = '15px';
            placeHolder10.innerText = null;

            placeHolder11.style.backgroundColor = '#fff';
            placeHolder11.style.width = '15px';
            placeHolder11.innerText = null;

            placeHolder12.style.backgroundColor = '#fff';
            placeHolder12.style.width = '15px';
            placeHolder12.innerText = null;

            placeHolder13.style.backgroundColor = '#fff';
            placeHolder13.style.width = '15px';
            placeHolder13.innerText = null;

            placeHolder14.style.backgroundColor = '#fff';
            placeHolder14.style.width = '15px';
            placeHolder14.innerText = null;

            placeHolder15.style.backgroundColor = '#fff';
            placeHolder15.style.width = '15px';
            placeHolder15.innerText = null;

            placeHolder16.style.backgroundColor = '#fff';
            placeHolder16.style.width = '15px';
            placeHolder16.innerText = null;
        }

        if(valStrLen === 6) {
            
            placeHolder7.style.backgroundColor = '#fff';
            placeHolder7.style.width = '15px';
            placeHolder7.innerText = null;

            placeHolder8.style.backgroundColor = '#fff';
            placeHolder8.style.width = '15px';
            placeHolder8.innerText = null;

            placeHolder9.style.backgroundColor = '#fff';
            placeHolder9.style.width = '15px';
            placeHolder9.innerText = null;

            placeHolder10.style.backgroundColor = '#fff';
            placeHolder10.style.width = '15px';
            placeHolder10.innerText = null;

            placeHolder11.style.backgroundColor = '#fff';
            placeHolder11.style.width = '15px';
            placeHolder11.innerText = null;

            placeHolder12.style.backgroundColor = '#fff';
            placeHolder12.style.width = '15px';
            placeHolder12.innerText = null;

            placeHolder13.style.backgroundColor = '#fff';
            placeHolder13.style.width = '15px';
            placeHolder13.innerText = null;

            placeHolder14.style.backgroundColor = '#fff';
            placeHolder14.style.width = '15px';
            placeHolder14.innerText = null;

            placeHolder15.style.backgroundColor = '#fff';
            placeHolder15.style.width = '15px';
            placeHolder15.innerText = null;

            placeHolder16.style.backgroundColor = '#fff';
            placeHolder16.style.width = '15px';
            placeHolder16.innerText = null;
        }

        if(valStrLen === 7) {
            
            placeHolder8.style.backgroundColor = '#fff';
            placeHolder8.style.width = '15px';
            placeHolder8.innerText = null;

            placeHolder9.style.backgroundColor = '#fff';
            placeHolder9.style.width = '15px';
            placeHolder9.innerText = null;

            placeHolder10.style.backgroundColor = '#fff';
            placeHolder10.style.width = '15px';
            placeHolder10.innerText = null;

            placeHolder11.style.backgroundColor = '#fff';
            placeHolder11.style.width = '15px';
            placeHolder11.innerText = null;

            placeHolder12.style.backgroundColor = '#fff';
            placeHolder12.style.width = '15px';
            placeHolder12.innerText = null;

            placeHolder13.style.backgroundColor = '#fff';
            placeHolder13.style.width = '15px';
            placeHolder13.innerText = null;

            placeHolder14.style.backgroundColor = '#fff';
            placeHolder14.style.width = '15px';
            placeHolder14.innerText = null;

            placeHolder15.style.backgroundColor = '#fff';
            placeHolder15.style.width = '15px';
            placeHolder15.innerText = null;

            placeHolder16.style.backgroundColor = '#fff';
            placeHolder16.style.width = '15px';
            placeHolder16.innerText = null;
        }

        if(valStrLen === 8) {
            
            placeHolder9.style.backgroundColor = '#fff';
            placeHolder9.style.width = '15px';
            placeHolder9.innerText = null;

            placeHolder10.style.backgroundColor = '#fff';
            placeHolder10.style.width = '15px';
            placeHolder10.innerText = null;

            placeHolder11.style.backgroundColor = '#fff';
            placeHolder11.style.width = '15px';
            placeHolder11.innerText = null;

            placeHolder12.style.backgroundColor = '#fff';
            placeHolder12.style.width = '15px';
            placeHolder12.innerText = null;

            placeHolder13.style.backgroundColor = '#fff';
            placeHolder13.style.width = '15px';
            placeHolder13.innerText = null;

            placeHolder14.style.backgroundColor = '#fff';
            placeHolder14.style.width = '15px';
            placeHolder14.innerText = null;

            placeHolder15.style.backgroundColor = '#fff';
            placeHolder15.style.width = '15px';
            placeHolder15.innerText = null;

            placeHolder16.style.backgroundColor = '#fff';
            placeHolder16.style.width = '15px';
            placeHolder16.innerText = null;
        }

        if(valStrLen === 9) {
            
            placeHolder10.style.backgroundColor = '#fff';
            placeHolder10.style.width = '15px';
            placeHolder10.innerText = null;

            placeHolder11.style.backgroundColor = '#fff';
            placeHolder11.style.width = '15px';
            placeHolder11.innerText = null;

            placeHolder12.style.backgroundColor = '#fff';
            placeHolder12.style.width = '15px';
            placeHolder12.innerText = null;

            placeHolder13.style.backgroundColor = '#fff';
            placeHolder13.style.width = '15px';
            placeHolder13.innerText = null;

            placeHolder14.style.backgroundColor = '#fff';
            placeHolder14.style.width = '15px';
            placeHolder14.innerText = null;

            placeHolder15.style.backgroundColor = '#fff';
            placeHolder15.style.width = '15px';
            placeHolder15.innerText = null;

            placeHolder16.style.backgroundColor = '#fff';
            placeHolder16.style.width = '15px';
            placeHolder16.innerText = null;
        }

        if(valStrLen === 10) {
            
            placeHolder11.style.backgroundColor = '#fff';
            placeHolder11.style.width = '15px';
            placeHolder11.innerText = null;

            placeHolder12.style.backgroundColor = '#fff';
            placeHolder12.style.width = '15px';
            placeHolder12.innerText = null;

            placeHolder13.style.backgroundColor = '#fff';
            placeHolder13.style.width = '15px';
            placeHolder13.innerText = null;

            placeHolder14.style.backgroundColor = '#fff';
            placeHolder14.style.width = '15px';
            placeHolder14.innerText = null;

            placeHolder15.style.backgroundColor = '#fff';
            placeHolder15.style.width = '15px';
            placeHolder15.innerText = null;

            placeHolder16.style.backgroundColor = '#fff';
            placeHolder16.style.width = '15px';
            placeHolder16.innerText = null;
        }

        if(valStrLen === 11) {
            
            placeHolder12.style.backgroundColor = '#fff';
            placeHolder12.style.width = '15px';
            placeHolder12.innerText = null;

            placeHolder13.style.backgroundColor = '#fff';
            placeHolder13.style.width = '15px';
            placeHolder13.innerText = null;

            placeHolder14.style.backgroundColor = '#fff';
            placeHolder14.style.width = '15px';
            placeHolder14.innerText = null;

            placeHolder15.style.backgroundColor = '#fff';
            placeHolder15.style.width = '15px';
            placeHolder15.innerText = null;

            placeHolder16.style.backgroundColor = '#fff';
            placeHolder16.style.width = '15px';
            placeHolder16.innerText = null;
        }

        if(valStrLen === 12) {
            
            placeHolder13.style.backgroundColor = '#fff';
            placeHolder13.style.width = '15px';
            placeHolder13.innerText = null;

            placeHolder14.style.backgroundColor = '#fff';
            placeHolder14.style.width = '15px';
            placeHolder14.innerText = null;

            placeHolder15.style.backgroundColor = '#fff';
            placeHolder15.style.width = '15px';
            placeHolder15.innerText = null;

            placeHolder16.style.backgroundColor = '#fff';
            placeHolder16.style.width = '15px';
            placeHolder16.innerText = null;
        }

        if(valStrLen === 13) {
            
            placeHolder14.style.backgroundColor = '#fff';
            placeHolder14.style.width = '15px';
            placeHolder14.innerText = null;

            placeHolder15.style.backgroundColor = '#fff';
            placeHolder15.style.width = '15px';
            placeHolder15.innerText = null;

            placeHolder16.style.backgroundColor = '#fff';
            placeHolder16.style.width = '15px';
            placeHolder16.innerText = null;
        }

        if(valStrLen === 14) {
            
            placeHolder15.style.backgroundColor = '#fff';
            placeHolder15.style.width = '15px';
            placeHolder15.innerText = null;

            placeHolder16.style.backgroundColor = '#fff';
            placeHolder16.style.width = '15px';
            placeHolder16.innerText = null;
        }

        if(valStrLen === 15) {
            
            placeHolder16.style.backgroundColor = '#fff';
            placeHolder16.style.width = '15px';
            placeHolder16.innerText = null;
        }

    }
})

cardNumInput.addEventListener('blur', function(e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
})

function inputData(data, valLength) {
    const index = arr.indexOf(data);
    if(index === -1) {
        e.target.value = null;
        return;
    } else {
        // const data = e.data;
        if(valLength === 1) {
            placeHolder1.style.backgroundColor = 'transparent'
            placeHolder1.style.width = '10px';
            placeHolder1.innerText = data;
        }
        if(valLength === 2) {
            placeHolder2.style.backgroundColor = 'transparent'
            placeHolder2.style.width = '10px';
            placeHolder2.innerText = data;
        }
        if(valLength === 3) {
            placeHolder3.style.backgroundColor = 'transparent'
            placeHolder3.style.width = '10px';
            placeHolder3.innerText = data;
        }
        if(valLength === 4) {
            placeHolder4.style.backgroundColor = 'transparent'
            placeHolder4.style.width = '10px';
            placeHolder4.innerText = data;
            // cardNumInput.innerText = `${}`
        }
        if(valLength === 5) {
            placeHolder5.style.backgroundColor = 'transparent'
            placeHolder5.style.width = '10px';
            placeHolder5.innerText = data.trim();
        }
        if(valLength === 6) {
            placeHolder6.style.backgroundColor = 'transparent'
            placeHolder6.style.width = '10px';
            placeHolder6.innerText = data;
        }
        if(valLength === 7) {
            placeHolder7.style.backgroundColor = 'transparent'
            placeHolder7.style.width = '10px';
            placeHolder7.innerText = data;
        }
        if(valLength === 8) {
            placeHolder8.style.backgroundColor = 'transparent'
            placeHolder8.style.width = '10px';
            placeHolder8.innerText = data;
        }
        if(valLength === 9) {
            placeHolder9.style.backgroundColor = 'transparent'
            placeHolder9.style.width = '10px';
            placeHolder9.innerText = data;
        }
        if(valLength === 10) {
            placeHolder10.style.backgroundColor = 'transparent'
            placeHolder10.style.width = '10px';
            placeHolder10.innerText = data;
        }
        if(valLength === 11) {
            placeHolder11.style.backgroundColor = 'transparent'
            placeHolder11.style.width = '10px';
            placeHolder11.innerText = data;
        }
        if(valLength === 12) {
            placeHolder12.style.backgroundColor = 'transparent'
            placeHolder12.style.width = '10px';
            placeHolder12.innerText = data;
        }
        if(valLength === 13) {
            placeHolder13.style.backgroundColor = 'transparent'
            placeHolder13.style.width = '10px';
            placeHolder13.innerText = data;
        }
        if(valLength === 14) {
            placeHolder14.style.backgroundColor = 'transparent'
            placeHolder14.style.width = '10px';
            placeHolder14.innerText = data;
        }
        if(valLength === 15) {
            placeHolder15.style.backgroundColor = 'transparent'
            placeHolder15.style.width = '10px';
            placeHolder15.innerText = data;
        }
        if(valLength === 16) {
            placeHolder16.style.backgroundColor = 'transparent'
            placeHolder16.style.width = '10px';
            placeHolder16.innerText = data;
        }
    }
}

ccHolderName.addEventListener('input', function(e) {
    if(e.target.value) {
        namePlaceHolder.innerText = e.target.value;
    } else {
        namePlaceHolder.innerText = 'YOUR NAME HERE'
    }
})

ccDate.addEventListener('input', function(e) {
    e.stopPropagation();
    const valLength = e.target.value.length;
    const val = e.data;
    if(e.inputType === 'insertText') {
        inputDate(e, valLength)
    } else if(e.inputType === 'deleteContentBackward' || e.inputType === 'deleteContentForward') {
        const valStrLen = `${cardNumInput.value}`.length;
        if(valStrLen === 0) {
            mm1PlaceHolder.style.backgroundColor = '#fff';
            mm1PlaceHolder.style.width = '15px';
            mm1PlaceHolder.innerText = null;

            mm2PlaceHolder.style.backgroundColor = '#fff';
            mm2PlaceHolder.style.width = '15px';
            mm2PlaceHolder.innerText = null;

            yy1PlaceHolder.style.backgroundColor = '#fff';
            yy1PlaceHolder.style.width = '15px';
            yy1PlaceHolder.innerText = null;

            yy2PlaceHolder.style.backgroundColor = '#fff';
            yy2PlaceHolder.style.width = '15px';
            yy2PlaceHolder.innerText = null;
        }

        if(valStrLen === 1) {
            
            mm2PlaceHolder.style.backgroundColor = '#fff';
            mm2PlaceHolder.style.width = '15px';
            mm2PlaceHolder.innerText = null;

            yy1PlaceHolder.style.backgroundColor = '#fff';
            yy1PlaceHolder.style.width = '15px';
            yy1PlaceHolder.innerText = null;

            yy2PlaceHolder.style.backgroundColor = '#fff';
            yy2PlaceHolder.style.width = '15px';
            yy2PlaceHolder.innerText = null;
        }

        if(valStrLen === 2) {

            yy1PlaceHolder.style.backgroundColor = '#fff';
            yy1PlaceHolder.style.width = '15px';
            yy1PlaceHolder.innerText = null;

            yy2PlaceHolder.style.backgroundColor = '#fff';
            yy2PlaceHolder.style.width = '15px';
            yy2PlaceHolder.innerText = null;
        }

    }
})

function inputDate(e, valLength) {
    const data = e.data;
    const index = arr.indexOf(data);
    if(index === -1) {
        e.target.value = null;
        return;
    } else {
        if(valLength === 1) {
            mm1PlaceHolder.style.backgroundColor = 'transparent'
            mm1PlaceHolder.style.width = '10px';
            mm1PlaceHolder.innerText = data;
        }
        if(valLength === 2) {
            mm2PlaceHolder.style.backgroundColor = 'transparent'
            mm2PlaceHolder.style.width = '10px';
            mm2PlaceHolder.innerText = data;
            e.target.value = `${e.target.value} / `;
        }
        if(valLength === 6) {
            yy1PlaceHolder.style.backgroundColor = 'transparent'
            yy1PlaceHolder.style.width = '10px';
            yy1PlaceHolder.innerText = data;
        }
        if(valLength === 7) {
            yy2PlaceHolder.style.backgroundColor = 'transparent'
            yy2PlaceHolder.style.width = '10px';
            yy2PlaceHolder.innerText = data;
        }
    }
}

cvv.addEventListener('input', function(e) {
    const index = arr.indexOf(e.data);
    if(e.inputType === 'insertText') {
        if(index === -1) {
            e.data = null;
            return;
        } else {
            cvvNum.innerText = e.target.value;
        }
    } else if(e.inputType === 'deleteContentBackward' || e.inputType === 'deleteContentForward') {
        cvvNum.innerText = e.target.value;
    }
})