import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as url from "../url_helper";
import { jdel, jget, jpost, jput } from "../api_jmt";
import accessToken from "../jwt-token-access/accessToken";

//import { productsData, orders } from "../../common/data";

let users = [
  {
    uid: 1,
  },
];

const fakeBackend = () => {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axios);
  mock.onPost("/post-jwt-register").reply((config) => {
    const user = JSON.parse(config["data"]);
    users.push(user);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, user]);
      });
    });
  });

  mock.onPost("/post-jwt-login").reply((config) => {
    const user = JSON.parse(config["data"]);
    console.log("Entro al fakeBackend user");
    console.log(user);

    const data = {
      username: user.email,
      password: user.password,
    };

    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          const resp = null;
          (async () => {
            console.log("vamos hacer el post");
            let response = await jpost("/login_check", data);
            console.log("response " + response);
            const resp = Promise.resolve(response);
            console.log("respuesta del resp");
            console.log(resp);
            resp.then(function (v) {
              if (v.token != undefined) {
                const tokenObj = { accessToken: v.token }; // Token Obj
                const validUserObj = { ...data, ...tokenObj }; // validUser Obj

                resolve([200, validUserObj]);
              } else {
                reject([
                  400,
                  "Username and password are invalid. Please enter correct username and password",
                ]);
              }
            });
            //let token = await response.json();
            console.log("response");
          })();
        });
      } catch (ex) {
        console.log("error");
        reject([
          400,
          "Username and password are invalid. Please enter correct username and password",
        ]);
      }
    });
  });

  mock.onGet(url.GET_CATEGORIES).reply(() => {
    console.log("fackenbd eee get categories");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        (async () => {
          let response = jget("/categories", null);
          const resp = Promise.resolve(response);
          resp.then(function (v) {
            if (v != null || v != undefined) {
              console.log(v);
              // Passing fake JSON data as response
              resolve([200, v]);
            } else {
              reject([400, "Cannot get categories"]);
            }
          });
        })();
      });
    });
  });

  mock.onGet(url.GET_PRODUCTS).reply(() => {
    console.log("Obtener Productos");
    return new Promise((resolve, reject) => {
      console.log("Obtener los productos");
      try {
        let response = jget("/products");
        const resp = Promise.resolve(response);
        console.log("resp   --");
        console.log(resp);
        resp.then(function (v) {
          if (v != undefined) {
            setTimeout(() => {
              console.log("-------   products --------");
              console.log(v);
              resolve([200, v]);
            });
          } else {
            reject([400, "Error al añadir el producto "]);
          }
        });
      } catch (ex) {
        reject([400, "Error al eliminar el producto " + ex]);
      }
    });
  });


  mock.onGet(url.GET_PRODUCT).reply((config) => {
    console.log("Obtener Producto");
    const id = JSON.parse(config["id"]);
    return new Promise((resolve, reject) => {
      console.log("Obtener los productos");
      try {
        let response = jget("/product/" + id);
        const resp = Promise.resolve(response);
        console.log("resp   --");
        console.log(resp);
        resp.then(function (v) {
          if (v != undefined) {
            setTimeout(() => {
              console.log("-------   products --------");
              console.log(v);
              resolve([200, v]);
            });
          } else {
            reject([400, "Error al añadir el producto "]);
          }
        });
      } catch (ex) {
        reject([400, "Error al eliminar el producto " + ex]);
      }
    });
  });


  mock.onGet(url.GET_FAQS).reply(() => {
    console.log("fackenbd eee get faqs");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        (async () => {
          let response = jget("/faqs", null);
          const resp = Promise.resolve(response);
          resp.then(function (v) {
            if (v != null || v != undefined) {
              console.log(v);
              // Passing fake JSON data as response
              resolve([200, v]);
            } else {
              reject([400, "Cannot get faqs"]);
            }
          });
        })();
      });
    });
  });
};

export default fakeBackend;
