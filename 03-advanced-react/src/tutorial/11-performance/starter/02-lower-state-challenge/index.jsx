import { useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import Form from "./Form";


const LowerStateChallenge = () => {


	const [people, setPeople] = useState(data);
	 

	return (
		<section>
			<Form people={people} setPeople={setPeople}/>
			<List people={people} />
		</section>
	);
};
export default LowerStateChallenge;
