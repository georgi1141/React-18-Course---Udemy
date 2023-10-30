import { useState } from 'react';



const ShortCircuitOverview = () => {

  const [value1,seValue1] = useState('Georgi')
const [value2,seValue2] = useState('')


  return <h2>
    {value2 && 'Hi'}
    </h2>;
};
export default ShortCircuitOverview;
