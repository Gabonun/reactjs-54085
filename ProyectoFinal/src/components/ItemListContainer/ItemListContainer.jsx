import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import db from "../../db/db";
import "./ItemListContainer.css"

const ItemListContainer = ({saludo}) => {
  const [products, setProducts] = useState([]);
  const {idCategory} = useParams();
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const dataDb = await getDocs(collection(db, "products"));

    const data = dataDb.docs.map((productDb) => {
      return {id: productDb.id, ...productDb.data()};
    });

    setProducts(data);
    setLoading(false)
  };

  const getProductsByCategory = async () => {
    const q = query(
      collection (db, "products"),
      where ("category", "==", idCategory)
    );

    const dataDb = await getDocs(q);

    const data = dataDb.docs.map((productDb) => {
      return {id: productDb.id, ...productDb.data()};
    });

    setProducts(data);
    setLoading(false)
  };

  useEffect(() => {
    if (idCategory){
      getProductsByCategory();
    }else{
      getProducts();
    }
  }, [idCategory]);

  return (
    <div className="item-list-container">
        <h2 className="title-items">{saludo}</h2>
        {loading ? (
          <div>Cargando...</div>
        ) : (
          <ItemList products={products}/>
        )}
    </div>
  );
};

export default ItemListContainer;