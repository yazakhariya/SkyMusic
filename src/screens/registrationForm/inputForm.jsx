function InputForm({ placeholder, type, className, onChange, ref, value }) {
  return (
      <input
        value={value}
        className={className}
        type={type} 
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        required
      />
  )
}

export default InputForm;