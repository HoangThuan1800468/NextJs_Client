import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { fetchOneProduct, fetchUpdateInforProduct, fetchUpdateStatusProduct } from "../../store/Products/productThunk";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// =============================================
const schema = Yup.object().shape({
  productname: Yup.string(),
  price: Yup.number(),
  saleprice: Yup.number(),
  img:Yup.string(),
  tag_input:Yup.string(),
});
// =============================================
function ListProductOwner (props:any){
    const dispatch = useDispatch<AppDispatch>();
    const idProduct:any = props.data._id;
    const user:any = props.user;
    const accessToken:any = props.accesstoken;

    const [statusProduct,setstatusProduct]=useState({});
    const [showEditProduct,setshowEditProduct]=useState({});

    const [productName,setproductName] = useState({});
    const [productPrice,setproductPrice] = useState({});
    const [productSalePrice,setSalePrice] = useState({});
    const [productImage,setproductImage] = useState({});
    const [productTag,setproductTag] = useState(props.data.tag);
    let tagArray:any = productTag;
    useEffect(() => {;
      setstatusProduct(props.data.status);
      setshowEditProduct(false);

      setproductName(props.data.productname);
      setproductPrice(props.data.price);
      setSalePrice(props.data.saleprice);
      setSalePrice(props.data.saleprice);
      setproductTag(props.data.tag);
      setproductImage(props.data.image);
      
      tagArray = productTag;
    }, []);

    

    async function handleChangeStatusTrue(){
      const status:boolean = true;
      const res:any = await dispatch(fetchUpdateStatusProduct({idProduct,accessToken,status}));
      setstatusProduct(true);
    }
    async function handleChangeStatusFalse(){
      const status:boolean = false;
      const res:any = await dispatch(fetchUpdateStatusProduct({idProduct,accessToken,status}));
      setstatusProduct(false);
    }
    async function handleDeleteProduct(){
      window.alert([`DELETE`]);
    }
    function handleSetStateProduct(){
      dispatch(fetchOneProduct(idProduct))
    }
    function handleShowEditProduct(){
      setshowEditProduct(true);
    }
    function handleEndShowEditProduct(){
      setshowEditProduct(false);
    }
    // =============================================
  const formik = useFormik({
    initialValues: {
      productname: "",
      price:0,
      saleprice:0,
      img:"",
      tag_input:"",
    },
    validationSchema: schema,
    onSubmit: async ({ productname, price,saleprice,img,tag_input }) => {
      // 
      // handle if text fiel no data
      if(!productname){
        const a:any = productName;
        productname = a;
      }
      if(!img){
        const a:any = `C:\\fakeUrl\\${productImage}`;
        img = a;
      }
      if(!price){
        const a:any = productPrice;
        price = a;
      }
      if(!saleprice){
        const a:any = productSalePrice;
        saleprice = a;
      }
      // 
      // handle tag array
      let arrTag:any;
      const productTagArr = productTag;
      if(!tag_input){
        arrTag = productTag;
      }else{
        const tagArr:any = tag_input.split(",");
        arrTag = productTagArr.concat(tagArr);
      }
      const tag:[] = arrTag;
      //
      // handle string image 
      const imageArr:any = img.split("\\");
      const image:any = imageArr[2];
      // 
      // get accessToken
      const accessToken:any = localStorage.getItem("accesstoken");
      // 
      // handle put data
      try{
        const res:any = dispatch(fetchUpdateInforProduct({idProduct,accessToken,productname,image,price,saleprice,tag}));
        window.alert([`Success!`]);
        setproductName(productname);
        setproductPrice(price);
        setSalePrice(saleprice);
        setproductTag(tag);
        setproductImage(image);
      }catch{
        window.alert([`Faile!`]);
      }
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;
// =============================================
    return(
        <>
        <ul key={props.data._id} >
            <button onClick={handleSetStateProduct}>
              <Link href={`/user/${user}/productOwner/${props.data._id}`} >
                Product Name: {`${productName}`}
              </Link>
            </button>
            <li>Product Image: {`${productImage}`} $</li>
            <li>Product Price: {`${productPrice}`} $</li>
            <li>Product Sale: {`${productSalePrice}`} $</li>
            <li>Product Tag:
            <ul>
              {
                tagArray.map((tran:any)=>(
                  <li key={tran}>{tran}</li>
                ))
              }
              </ul>
            </li>

            {
              statusProduct?
              <button onClick={handleChangeStatusFalse}>Stop sale</button>
              :
              <button onClick={handleChangeStatusTrue}>Sale now</button>
            }
            {showEditProduct?
              <button onClick={handleEndShowEditProduct}>Cancel Edit</button>
              :
              <button onClick={handleShowEditProduct}>Edit</button>
            }
            {showEditProduct?
            <div>
              <form onSubmit={handleSubmit} method="POST">
                <div className="label_text">
                  <label htmlFor="productname">Product Name</label>
                  <input
                    type="text"
                    name="productname"
                    value={values.productname}
                    onChange={handleChange}
                    id="productname"
                    placeholder={`${productName}`}
                  />
                  {errors.productname && touched.productname && <span>{errors.productname}</span>}
                </div>

                <div className="label_text">
                  <label htmlFor="img">Image</label>
                  <input
                    type="file"
                    name="img"
                    value={values.img}
                    onChange={handleChange}
                    id="img"
                    placeholder={`${productImage}`}
                  />
                  {errors.img && touched.img && <span>{errors.img}</span>}
                </div>

                <div className="label_text">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    id="price"
                    placeholder={`${productPrice}`}
                  />
                  {errors.price && touched.price && <span>{errors.price}</span>}
                </div>

                <div className="label_text">
                  <label htmlFor="saleprice">Sale Price</label>
                  <input
                    type="number"
                    name="saleprice"
                    value={values.saleprice}
                    onChange={handleChange}
                    id="saleprice"
                    placeholder={`${productSalePrice}`}
                  />
                  {errors.saleprice && touched.saleprice && <span>{errors.saleprice}</span>}
                </div>
                <div className="label_text">
                  <label htmlFor="tag_input">Tag</label>
                  <input
                    type="text"
                    name="tag_input"
                    value={values.tag_input}
                    onChange={handleChange}
                    id="tag_input"
                    placeholder={`${productTag}`}
                  />
                  {errors.tag_input && touched.tag_input && <span>{errors.tag_input}</span>}
                </div>
                <button type="submit">Save</button>
              </form>
            </div>
            : ""}
            <button onClick={handleDeleteProduct}>Delete</button>
            <hr/>
          </ul>
        </>
    );
}
export default ListProductOwner;