import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchOneProduct } from "../../store/Products/productThunk";

function ListProductOwner (props:any){
    const dispatch = useDispatch<AppDispatch>();
    const idProduct:any = props.data._id;
    const user:any = props.user;
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
            <Link href={`/${user}/productOwner/${props.data._id}`} >
              Product Name: {props.data.productname}
            </Link>
            </button>
            <li>Product Price: {props.data.price} $</li>
            <li>Product Sale: {props.data.saleprice} $</li>
            {props.data.status?<button>Buy now</button>:<button onClick={handleFavorite}>Favourite</button>}
            <button>Edit</button>
            <button>Delete</button>
            <hr/>
          </ul>
        </>
    );
}
export default ListProductOwner;