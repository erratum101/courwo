const rangeThumb = document.getElementById('range-thumb-mr');
const rangeNumber = document.getElementById('range-number-mr');
const rangeLine = document.getElementById('range-line-mr');
const rangeInput = document.getElementById('range-input-mr');

const updateRangeSlider = () => {
    rangeNumber.textContent = rangeInput.value;
    const thumbPosition = (rangeInput.value / rangeInput.max);
    const space = rangeInput.offsetWidth - rangeThumb.offsetWidth;
    rangeThumb.style.left = (thumbPosition * space) + 'px';
    rangeLine.style.width = rangeInput.value + '%';
}
rangeInput.addEventListener('input', updateRangeSlider);
updateRangeSlider();
