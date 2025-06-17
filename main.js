let count = document.querySelector('.count');
let pluseBtn = document.querySelector('#max');
let minusBtn = document.querySelector('#min');
let changeBy = document.querySelector('#number')

pluseBtn.addEventListener('click', () => {
    // console.log("addd")
    let counted = parseInt(count.innerText);
    // if not input any number in ChangeBy that consider 1.
    let changeByvalue = parseInt(changeBy.value) || 1;
    count.innerText = counted + changeByvalue;
    // console.log(counted)
})

minusBtn.addEventListener('click', () => {
    // console.log("min")
    let counted = parseInt(count.innerText)
    // if not input any number in ChangeBy that consider 1.
    let changeByvalue = parseInt(changeBy.value) || 1
    count.innerText = counted - changeByvalue;
    // console.log(counted)
})


let resetBtn=document.querySelector('.reset')
resetBtn.addEventListener('click',()=>{
    count.innerText=0;
})