import Header from './Header01';
import AddItem from './AddItem';
import SerachItem from './SerachItem';
import Content01 from './Content01';
import Footer01 from './Footer01';
import { useState, useEffect } from 'react';

/*
- can write any js
- {}: render - ex: <p>{[1, 2, 3]}</p>
- ctrl + tab
- shift + tab
*/

function App() {
  // url
  const API_URL = 'http://localhost:3500/items';

  // object - same like seesion but local storage
  const [items, setItems] = useState([]);

  // initialize an object to perform the action of the functions 
  const [newItem, setNewItem] = useState([]);
  const [search, setSearch] = useState('')

  // fetch ~ constructors
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // user effect - to change and use replace for setitems i guess
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw Error('Did not recieve expected data.')
        const listItems = await response.json()
        //console.log(listItems)
        setItems(listItems)
        setFetchError(null)
      } catch (error) {
        //console.log(error.message)
        setFetchError(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    // set timeout
    setTimeout(() => {
      // async 
      (async () => await fetchItems())()
    }, 2000)
  }, [])

  // // set and save item 
  // const setAndSaveItems = (newItems) => {
  //   setItems(newItems);
  // }

  // add item
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  // function handleCheck
  const handleCheck = (id) => {
    //console.log(`key: ${id}`)
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }

  // function handelDelete
  const handelDelete = (id) => {
    //console.log(id)
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
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
      <Header title='header Van Kien dep trai vai lua' />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SerachItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading Items...</p>}
        {/* Show message */}
        {fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading &&
          <Content01
            items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handelDelete={handelDelete}
          />}
      </main>
      <Footer01
        length={items.length}
      />
    </div>
  );
}

export default App;
