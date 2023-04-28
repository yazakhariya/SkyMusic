function InputForm({ placeholder, type, className, onChange }) {
  return (
      <input
        className={className}
        type={type} 
        onChange={onChange}
        placeholder={placeholder}
        required
      />
  )
}

export default InputForm;