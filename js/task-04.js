const counterValue = {
    value: 0,
}


const valueOfButtonRef = document.querySelector('#value');

const decrementButtonRef = document.querySelector('[data-action="decrement"]');
// console.log(decrementButtonRef);

const incrementButtonRef = document.querySelector('[data-action="increment"]');
// console.log(incrementButtonRef);

decrementButtonRef.addEventListener('click', function () {
    counterValue.value -= 1;

    valueOfButtonRef.textContent = counterValue.value;
});
incrementButtonRef.addEventListener('click', function () {
    counterValue.value += 1;

    valueOfButtonRef.textContent = counterValue.value;
})