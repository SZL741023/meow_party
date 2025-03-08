function Input({register, errors, id, type, labelText, rules}){
  return(
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{labelText}</label>
      <input type={type} className={`form-control ${errors[id] && 'is-invalid'}`} id={id} name={id} 
      {...register(id, rules)} />
      {errors[id] && <div className='invalid-feedback'>{errors?.[id]?.message}</div>}
    </div>
  )
}

export default Input