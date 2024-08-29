
function Input({ label, invalid, inputId, ...props }) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow";

  if (invalid) {
    labelClasses += " text-red-400";
    inputClasses += " text-red-500 bg-red-200 border-red-600";
  } else {
    labelClasses += " text-stone-300";
    inputClasses += " text-gray-700 bg-stone-300";
  }

  return (
    <p>
      <label className={labelClasses} htmlFor={inputId} >{label}</label>
      <input className={inputClasses} id={inputId} {...props} />
    </p>
    
  )
}

export default Input;