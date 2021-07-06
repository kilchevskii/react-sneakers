import React, { useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer/index";
import AppContext from "./context";
import Orders from "./pages/Orders";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    async function fetchData() {
      // TODO: Сделать try catch + Promise.all
      try {
        const [cartResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://api.fake.rest/80dd1fe1-77ac-4857-8f98-e3437fff27a0/items"),
            axios.get("https://api.fake.rest/80dd1fe1-77ac-4857-8f98-e3437fff27a0/favorites"),
            axios.get("https://api.fake.rest/80dd1fe1-77ac-4857-8f98-e3437fff27a0/cart"),
          ]);
        // const cartResponse = await axios.get("https://60dec4a4abbdd9001722d024.mockapi.io/cart");
        // const favoritesResponse = await axios.get("https://60dec4a4abbdd9001722d024.mockapi.io/favorites");
        // const itemsResponse = await axios.get("https://60dec4a4abbdd9001722d024.mockapi.io/items");

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных ;(");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://api.fake.rest/80dd1fe1-77ac-4857-8f98-e3437fff27a0/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://api.fake.rest/80dd1fe1-77ac-4857-8f98-e3437fff27a0/cart",
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Не удалось добавить в корзину");
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://api.fake.rest/80dd1fe1-77ac-4857-8f98-e3437fff27a0/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert("Ошибка при удалении из корзины");
      console.error(error);
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://api.fake.rest/80dd1fe1-77ac-4857-8f98-e3437fff27a0/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://api.fake.rest/80dd1fe1-77ac-4857-8f98-e3437fff27a0/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        setCartOpened,
        setCartItems,
        onAddToCart,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

        <Header onClickCart={() => setCartOpened(true)} />

        <Route path={process.env.PUBLIC_URL + '/'} exact component={Home}>
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />
        </Route>

        <Route path={process.env.PUBLIC_URL + '/favorites'} exact>
          <Favorites />
        </Route>

        <Route path={process.env.PUBLIC_URL + '/orders'} exact >
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
