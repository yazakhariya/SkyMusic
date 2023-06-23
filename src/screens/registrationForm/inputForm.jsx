function InputForm({ placeholder, type, className, onChange, ref, value, onBlur, name }) {
  return (
      <input
        value={value}
        className={className}
        type={type} 
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        required
        onBlur={onBlur}
        name={name}
      />
  )
}

export default InputForm;