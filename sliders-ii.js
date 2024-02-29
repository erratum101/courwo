const rangeThumb = document.getElementById('range-thumb-ii');
const rangeNumber = document.getElementById('range-number-ii');
const rangeLine = document.getElementById('range-line-ii');
const rangeInput = document.getElementById('range-input-ii');

const updateRangeSlider2 = () => {
    rangeNumber.textContent = rangeInput.value;
    const thumbPosition = (rangeInput.value / rangeInput.max);
    const space = rangeInput.offsetWidth - rangeThumb.offsetWidth;
    rangeThumb.style.left = (thumbPosition * space) + 'px';
    rangeLine.style.width = rangeInput.value + '%';
}
rangeInput.addEventListener('input', updateRangeSlider2);
updateRangeSlider2();
