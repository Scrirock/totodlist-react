import './AddItem.css';
import {useState} from "react";

export function AddItem({items, setItems}) {

    const [todo, setTodo] = useState('')

    function handleAddItemClick(e) {
        let value = e.target.previousElementSibling.value;
        if (value.length > 0) {
            setTodo(value);
            items.push({id:items.length, name:todo});
            setItems([...items]);
        }
        e.target.previousElementSibling.value = '';
    }

    return (
    <div id="input">
      <input type="text" placeholder="Name..." id="nameList" onChange={e => setTodo(e.target.value)} />
      <input type="submit" value="Add Item" onClick={handleAddItemClick} />
    </div>
    );
}