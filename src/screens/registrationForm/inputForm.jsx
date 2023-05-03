function InputForm({ placeholder, type, className, onChange, ref }) {
  return (
      <input
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