import axios from 'axios';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = `${process.env.API_URL}`;
axios.defaults.headers.common['Access-Control-Allow-Methods'] = "DELETE, POST, GET, PATCH";
axios.defaults.xsrfCookieName = "CSRF-TOKEN";
axios.defaults.xsrfHeaderName = "X-CSRF-Token";
axios.defaults.withCredentials = true;
const apipostProduct = async (props) => 
    await axios.post(`${process.env.API_URL}/products`, {product: props})
      .then((response) =>{
          return response.data
      })
      .catch((error) => {
        console.log(error);
      });
const apipatchProduct = async (props) =>
    await axios.patch(`${process.env.API_URL}/products/${props.id}`, {product: (({ id,product, ...o }) => o)(props)})
        .then((response) =>{
          return response.data
        })
      .catch(function (error) {
        console.log(error);
      });
const apideleteProduct = (props) => {
    axios.delete(`${process.env.API_URL}/products/${props.id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
const apigetProduct = async () =>
await axios.get(`${process.env.API_URL}/products`)
    .then(res => ({
        code: 200,
        data: res.data,
    }))
    .catch(() => ({
        code: 500,
        data: null,
        }),
    );

export {apipostProduct,apigetProduct,apipatchProduct,apideleteProduct};