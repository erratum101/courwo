const rangeThumbMr = document.getElementById('range-thumb-mr');
const rangeNumberMr = document.getElementById('range-number-mr');
const rangeLineMr = document.getElementById('range-line-mr');
const rangeInputMr = document.getElementById('range-input-mr');

const updateRangeSliderMr = () => {
    rangeNumberMr.textContent = rangeInputMr.value;
    const thumbPosition = (rangeInputMr.value / rangeInputMr.max);
    const space = rangeInputMr.offsetWidth - rangeThumbMr.offsetWidth;
    rangeThumbMr.style.left = (thumbPosition * space) + 'px';
    rangeLineMr.style.width = rangeInputMr.value + '%';
}
rangeInputMr.addEventListener('input', updateRangeSliderMr);
updateRangeSliderMr();
