import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addProduct, fetchProduct } from "../store/productSlice";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  id: Yup.string().required()
});

const Home: NextPage = () => {
  const products = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
  const res = dispatch(fetchProduct());
          console.log("res", res);

  // ===================================
  const formik = useFormik({
    initialValues: {
      name: "",
      id: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ name, id }) => {
      // Make a request to your backend to store the data
      console.log({ name, id });
      const action = addProduct(values);
      console.log({ action });
      dispatch(action);
    },
  });

  // Destructure the formik object
  const { errors, touched, values, handleChange, handleSubmit } = formik;
   // ===================================
  return (
    <>
    <div>
      <div>
      <div>Home page</div>
      <hr/>
      <span>
        {/* {products.map(product => (
        <div>{product.name} and id: {product.id}</div>
        ))} */}
      </span>
      <ul>
        {products.products.map((el, i) => (
          <li key={i}>{JSON.stringify(el)}</li>
        ))}
      </ul>
      <hr/>
      <div>Form product</div>
        <form onSubmit={handleSubmit} method="POST">
          <div>
            <label htmlFor="name">Name Product</label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              id="name"
            />
            {errors.name && touched.name && <span>{errors.name}</span>}
          </div>

          <div>
            <label htmlFor="id">ID Product</label>
            <input
              type="text"
              name="id"
              value={values.id}
              onChange={handleChange}
              id="id"
            />
            {errors.id && touched.id && <span>{errors.id}</span>}
          </div>

          

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Home;
