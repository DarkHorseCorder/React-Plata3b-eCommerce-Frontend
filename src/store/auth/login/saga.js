import { takeEvery, put, call, takeLatest } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes";
import { loginSuccess, logoutUserSuccess, apiError } from "./actions";

//Include Both Helper File with needed methods
//import { getFirebaseBackend } from "../../../helpers/firebase_helper"
import { postJwtLogin } from "../../../utils/fakebackend_helper";

//const fireBaseBackend = getFirebaseBackend()

function* loginUser({ payload: { user, history } }) {
  try {
    console.log(process.env.REACT_APP_DEFAULTAUTH);
    /*if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      )
      yield put(loginSuccess(response))
    } else */
    if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      console.log("entra jwt");
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      });
      console.log(response);
      console.log("conecto 1");
      localStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    } /* else if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
      const response = yield call(postFakeLogin, {
        email: user.email,
        password: user.password,
      })
      localStorage.setItem("authUser", JSON.stringify(response))
      yield put(loginSuccess(response))
    }*/
    console.log("conecto 2");
    history.push("/admin-users");
    console.log("dashboard");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser");

    /*if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.logout)
      yield put(logoutUserSuccess(response))
    }*/
    history.push("/login");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  /* yield takeLatest(SOCIAL_LOGIN, socialLogin)*/
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
