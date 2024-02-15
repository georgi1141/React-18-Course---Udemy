import { useDeleteItem, useToggler } from "./util/reactQueryCustomHooks/costomHooks";


const SingleItem = ({ item }) => {

  const toggleCkeckbox = useToggler()
  const deleteTask = useDeleteItem()

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.isDone}
        onChange={() => toggleCkeckbox(item)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => deleteTask(item)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
