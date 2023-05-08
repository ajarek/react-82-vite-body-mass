import { useState } from 'react';
import './InputRadio.css'
function InputRadio() {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='input-radio'>
      <label>
        <input
          type="radio"
          name="options"
          value="metric"
          checked={selectedOption === 'metric'}
          onChange={handleOptionChange}
        />
        Metric
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="options"
          value="imperial"
          checked={selectedOption === 'imperial'}
          onChange={handleOptionChange}
        />
       Imperial
      </label>
    </div>
  );
}
export default InputRadio;