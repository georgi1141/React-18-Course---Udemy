import SingleItem from './SingleItem';
import { useFetchItems } from './util/reactQueryCustomHooks/costomHooks';


const Items = () => {

const {isLoading,data,isError} = useFetchItems()

if(isLoading){
  return <>Loading...</>
}

if(isError){
  return <>There was an error!</>
}

  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
