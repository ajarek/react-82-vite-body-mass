import { useState } from 'react'
import './CalculatorBMI.css'
import InputRadio from '../InputRadio/InputRadio/'
import Input from '../Input/Input/'
import Result from '../Result/Result/'

const CalculatorBMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [selectedOption, setSelectedOption] = useState('metric');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleHeight = event => {
    setHeight(event.target.value);
  };

  const handleWeight = event => {
    setWeight(event.target.value);
  };
  
  return (
    <div className='calculator-bmi'>
      <h3>Enter your details below</h3>
      <InputRadio onChange={handleOptionChange} checkedMetric={selectedOption === 'metric'} checkedImperial={selectedOption === 'imperial'} />
      <div className="wrapper-input">
        <Input label={'Height'} placeholder={selectedOption==='metric'?'cm':'ft'} onChange={handleHeight}/>
        <Input label={'Weight'} placeholder={selectedOption==='metric'?'kg':'st'} onChange={handleWeight}/>
      </div>
      {height&&weight ? <Result info={`Your BMI is ${selectedOption==='metric'?((weight*10000)/(height*height)).toFixed(2):((weight*6.35)/(height*0.3*height*0.3)).toFixed(2)}`} text={'Your BMI suggests you`re healthy weight. Your ideal weight is between 63.3kgs-85.2kgs'}/>:
      <Result info={'Welcome!'} text={'Enter your height and weight and you`ll see your BMI result here '}/>
    }
    </div>
  )
}

export default CalculatorBMI

//1ft=0.3048m 1m=3,28ft
//1st= 6.35029318kg 1kg=0.158st