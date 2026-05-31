const FieldSelect = ({
   options,
   ...props
}) => {

   return (

      <select {...props}>

         {options.map(item => (
            <option
               key={item.value}
               value={item.value}
            >
               {item.label}
            </option>
         ))}

      </select>

   )
}

export default FieldSelect;