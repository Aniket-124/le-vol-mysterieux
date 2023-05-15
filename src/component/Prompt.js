import React, { useState } from 'react';



const Prompt = ({len=1}) => {
  const [fields, setFields] = useState(
    Array.from({ length: len }, (_, index) => ({ id: index + 1, value: '' }))
  );

    
    const handleChange = (id, value) => {
      const updatedFields = fields.map(field =>
        field.id === id ? { ...field, value } : field
      );
      setFields(updatedFields);
    };

    if(fields)
    {
      console.log(fields)
    }
  
  return (
    <div className='promptBox'>

      <div style={{fontFamily:'monospace',fontSize:"30px"}}>Enter Your Answer</div>
      
      <div className='submitPrompt'>
        {fields.map(field => (
        <div className='promptWrite' key={field.id}>
          <input
            type="text"
            pattern="[A-Za-z0-9].{1}"
            maxLength="1"
            value={field.value}
            onChange={ e =>  handleChange(field.id, e.target.value)}
          />
     </div>
      ))}
        </div>
      
      <div className='submitBtn'>
        <button className='btn button-animation'>Submit</button>
      </div>
    </div>
  )
}

export default Prompt