import { useState } from 'react';

function InputForm(props) {
  const { placeholder, type, className } = props;

  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
      <input
        className={className}
        type={type} 
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
  )
}

export default InputForm;