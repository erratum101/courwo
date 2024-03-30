const rangeThumbTp = document.getElementById('range-thumb-tp');
const rangeNumberTp  = document.getElementById('range-number-tp');
const rangeLineTp  = document.getElementById('range-line-tp');
const rangeInputTp  = document.getElementById('range-input-tp');

const updateRangeSliderTp  = () => {
    rangeNumberTp .textContent = rangeInputTp .value;
    const thumbPosition = (rangeInputTp .value / rangeInputTp .max);
    const space = rangeInputTp .offsetWidth - rangeThumbTp .offsetWidth;
    rangeThumbTp .style.left = (thumbPosition * space) + 'px';
    rangeLineTp .style.width = rangeInputTp .value + '%';
}
rangeInputTp .addEventListener('input', updateRangeSliderTp );
updateRangeSliderTp ();
