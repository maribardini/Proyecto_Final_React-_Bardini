import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import NavigationBar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Contact from './components/Contact/Contact';
import CartContextProvider from './context/CartContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from './db/firebase-config';



function App() {
  const [items, setItems] = useState ([])
  const itemsCollectionRef = collection(getFirestore(), "items")

  const getItems = async () => {
    const itemsCollection = await getDocs (itemsCollectionRef)
    setItems(itemsCollection.docChanges.map((doc) => ({...doc.data(), id: doc.id}))
    );
  };


  useEffect (() => {
    getItems()
  }, []);

  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className='container App'>
          <div className='row d-flex justify-content-between align-items-end'>
            <div className='col'>
              <NavigationBar/>
            </div>
          </div>
          <h1 className='titulo my-3'>Tienda de Bebidas</h1>
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
              <Route path='/detail/:detailId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>} />
              <Route path='/contacto' element={<Contact/>} />
              <Route path="/*" element={<Navigate to='/'/>}/>
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
