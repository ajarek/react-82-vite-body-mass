import './Input.css'


const Input = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input type="number" value={value} onChange={onChange} placeholder={placeholder}  required />
    </div>
  );
};

export default Input;



