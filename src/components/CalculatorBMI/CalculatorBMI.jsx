import './CalculatorBMI.css'
import InputRadio from '../InputRadio/InputRadio/'
import Input from '../Input/Input/'

const CalculatorBMI = () => {
  

  return (
    <div className='calculator-bmi'>
      <h3>Enter your details below</h3>
      <InputRadio/>
      <div className="wrapper-input">
        <Input label={'Height'} placeholder={'cm'}/>
        <Input label={'Weight'} placeholder={'kg'}/>
      </div>
    </div>
  )
}

export default CalculatorBMI