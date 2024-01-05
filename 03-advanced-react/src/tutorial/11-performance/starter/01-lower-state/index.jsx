import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import Button from './Button';
const LowerState = () => {
  const [people, setPeople] = useState(data);
 

  return (
    <section>
      <Button/>
      <List people={people} />
    </section>
  );
};
export default LowerState;