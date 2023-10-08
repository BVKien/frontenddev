import Header from './Header01';
import AddItem from './AddItem';
import SerachItem from './SerachItem';
import Content01 from './Content01';
import Footer01 from './Footer01';
import { useState } from 'react';

/*
- can write any js
- {}: render - ex: <p>{[1, 2, 3]}</p>
- ctrl + tab
- shift + tab
*/

function App() {
  // object - same like seesion but local storage
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));

  // initialize an object to perform the action of the functions 
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  // set and save item 
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }

  // add item
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  // function handleCheck
  const handleCheck = (id) => {
    //console.log(`key: ${id}`)
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(listItems);
  }

  // function handelDelete
  const handelDelete = (id) => {
    //console.log(id)
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  // function handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    //console.log(newItem);
    // addItem
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title='header Van Kien dep trai vai dai' />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SerachItem
        search={search}
        setSearch={setSearch}
      />
      <Content01
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handelDelete={handelDelete}
      />
      <Footer01
        length={items.length}
      />
    </div>
  );
}

export default App;

/*
  // object - fixed data
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "anh Kien dep trai vai"
    },
    {
      id: 2,
      checked: false,
      item: "item 2"
    },
    {
      id: 3,
      checked: false,
      item: "item 3"
    }
  ]);
  */