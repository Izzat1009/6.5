import React, { useEffect, useState } from "react";
import { request } from "../../api";
import "./products.css"
import Loading from "../loading/Loading";


const Products = () => {
  const limit = 4
  const [text, setText] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [categories, setCategories] = useState(null)
  const [oneItem, setOneItem] = useState(null)
  
  useEffect(()=>{
    request
    .get("/products/category-list")
    .then(res => {
      setCategories(["all", ...res.data])
      
    })
  })

  useEffect(() => {
    setLoading(true);
    request
      .get("/products", {
       params:{
        limit,
        skip: count * limit

       }
      })

      .then((res) => {
        setProducts([...products, ...res.data.products])
        setTotal(res.data.total)
  })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [count]);
  return (
    <div>
       <div className='flex container mx-auto py-5 overflow-auto gap-4'>
        {
          categories?.map((item)=> (
            <div className='max-w-[1200px] px-4 py-1 bg-slate-200 rounded-md cursor-pointer mx-auto whitespace-nowrap text-[16px] transition-[0.3s] select-none hover:bg-slate-400' key={item}>{item}</div>
          ))
        }
       </div>
      <div className="grids">
        {products?.map((product) => (
          <div key={product.id} className="grid__items">
            <img
              src={product.thumbnail}
              className="grid__img"
              alt={product.title}
              onClick={()=> setOneItem(product)}
            />
            <h2 className="grid__title">{product.title}</h2>
          </div>
        ))}
      </div>
      {loading && <Loading count={limit} />}
        
        {
          total > limit * (count + 1 ) &&
          <button className="block mx-auto mt-4 " onClick={()=> setCount(count+1)}>See more</button>
          
        }
        {
          oneItem &&
          <>
          <div className="fixed top-0 left-0 w-full h-screen bg-[#0005]"></div>
          <div className="rounded-md fixed top-[50%] left-[50%] bg-white w-[700px] min-h-[300px] translate-x-[-50%] translate-y-[-50%]">
            <img className='rounded-md mx-auto' src={oneItem.thumbnail} alt="" />
            <h2 className="mx-auto w-[600px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, consequatur animi? Rerum maiores tempore quaerat molestiae cumque, eligendi consectetur amet quas possimus consequatur, eius quae quibusdam optio in nam dignissimos?
            Officiis exercitationem fugit accusantium optio. Iusto soluta consequatur, nam sint dicta optio illum distinctio nihil fugiat fugit magni id facere quas eius suscipit quo eum, autem ullam, omnis mollitia labore.</h2>
            <button onClick={()=> setOneItem(null)}>Close</button>
          </div>
          </>
        }
    </div>
  );
};

export default Products;
