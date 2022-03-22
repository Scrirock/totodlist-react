import './App.css';
import {AddItem} from "../AddItem/AddItem";
import {ItemList} from "../ItemList/ItemList";
import {useState} from "react";

export default function App() {

    const [items, setItems] = useState([]);

    return (
      <>
        <h1>To Do List</h1>
        <AddItem items={items} setItems={setItems} />
        <ItemList items={items} setItems={setItems} />
      </>
    );
}