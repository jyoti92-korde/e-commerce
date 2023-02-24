import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Products from './component/Product';
import Details from './component/Details';
import EditProduct from './component/EditProduct';
import AddProduct from './component/AddProduct';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Products />}></Route>
                        <Route path="/Details/:id" element={<Details />}></Route>
                        <Route path="/AddProduct" element={<AddProduct />}></Route>
                        <Route path="/EditProduct/:id" element={<EditProduct />}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;