
import './InputRadio.css'
function InputRadio({onChange,checkedMetric,  checkedImperial}) {
 
  return (
    <div className='input-radio'>
      <label>
        <input
          type="radio"
          name="options"
          value="metric"
          checked={checkedMetric}
          onChange={onChange}
        />
        Metric
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="options"
          value="imperial"
          checked={checkedImperial}
          onChange={onChange}
        />
       Imperial
      </label>
    </div>
  );
}
export default InputRadio;