import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchOneProduct } from "../../store/Products/productThunk";

function ListProduct (props:any){
  const dispatch = useDispatch<AppDispatch>();
  const idProduct:any = props.data._id;
  
    function handleFavorite(){
        window.alert("Cho vui thôi chứ cái này không có làm!!!")
    }
    function handleSetStateProduct(){
      dispatch(fetchOneProduct(idProduct))
    }
    return(
        <>
        <ul key={props.data._id} >
            <button onClick={handleSetStateProduct}>
            <Link href={`/product/${props.data._id}`} >
              Product Name: {props.data.productname}
            </Link>
            </button>
            <li>Product Price: {props.data.price} $</li>
            <li>Product Sale: {props.data.saleprice} $</li>
            {props.data.status?<button>Buy now</button>:<button onClick={handleFavorite}>Favourite</button>}
            <hr/>
          </ul>
        </>
    );
}
export default ListProduct;