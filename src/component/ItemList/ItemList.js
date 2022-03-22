import './ItemList.css';
import {Item} from "../Item/Item";

export function ItemList({items, setItems}) {

    function handleClearClick() {
        setItems([])
    }

    return (
      <div id="containerList">
          {items.map(item => <Item key={item.id} item={item} items={items} setItems={setItems} />)}
          <button id="clear" onClick={handleClearClick}>Clear Item</button>
      </div>
    );
}