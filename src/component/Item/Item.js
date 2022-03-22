import './Item.css';
import {useState} from "react";

export function Item({item, items, setItems}) {

    const [name, setName] = useState(item.name)

    function handleChangeNameClick(e) {
        e.target.parentElement.previousElementSibling.remove();

        let itemContainer = e.target.parentElement.parentElement;
        let input = document.createElement('input');
        input.value = name.toString();
        input.type = "text";
        input.style.width = "85%";
        itemContainer.prepend(input);
        input.addEventListener('keydown', (e)=> {
            if (e.key === "Enter") {
                if (input.value) {
                    setName(input.value);
                    input.remove();
                    let p = document.createElement('p');
                    p.className = 'titleList';
                    p.innerHTML = input.value;
                    itemContainer.prepend(p);
                }
            }
        })
    }

    function handleRemoveItemClick() {
        items.splice(item.id, 1);
        setItems([...items]);
        console.log(items)
    }

    function handleCheckItemClick(e) {
        if (name.charAt(name.length-1) === "-") {
            e.target.parentElement.previousElementSibling.className = "titleList";
            setName(name.slice(0, name.length-1));
            localStorage.setItem(item.id, name.slice(0, name.length-1));
        }
        else {
            e.target.parentElement.previousElementSibling.className = "titleList checked";
            setName(name+'-');
            localStorage.setItem(item.id, item.name+'-');
        }
    }

    return (
      <div className="lineList">
          <p className="titleList">{name}</p>
          <div className="icon">
              <i className="far fa-check-circle" aria-hidden="true" onClick={handleCheckItemClick} />
              <i className="far fa-edit" aria-hidden="true" onClick={handleChangeNameClick} />
              <i className="far fa-times-circle" aria-hidden="true" onClick={handleRemoveItemClick} />
          </div>
      </div>
    );
}