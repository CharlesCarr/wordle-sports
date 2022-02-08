// const boxList = [...document.querySelectorAll('.use-keyboard-input')];

// boxList.forEach((element) => {
    

//     element.value = boxList.indexOf(element) + 1;

//     console.log(element.value);
// });


const move = (field, autoMove) => {

    if (field.value.length >= field.maxLength) {
        document.getElementById(autoMove).focus();
    }

}
