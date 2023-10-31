import { call, put, takeLatest } from "redux-saga/effects";
import { setData } from "./actions"; // Import your Redux action
import { FETCH_DATA, FETCH_DATA_FAILURE } from "./actionTypes"; // Define action types

function fetchDataFromAPI() {
  return fetch(
    "https://gist.githubusercontent.com/anonymous/1295788c7bff052a1e8a/raw/6e109604c7a7f3efe77c8048bb2fe2f3e1cdcb7b/gistfile1.json"
  ).then((response) => response.json());
}

// Saga to handle data fetching
function* fetchDataSaga() {
  try {
    const data = yield call(fetchDataFromAPI); // Call the function to fetch data
    yield put(setData(data.Reggae)); // Dispatch a success action with the data
  } catch (error) {
    yield put(FETCH_DATA_FAILURE(error)); // Dispatch a failure action with the error
  }
}

// Watch for FETCH_DATA action and trigger the fetchDataSaga
export function* watchFetchData() {
  yield takeLatest(FETCH_DATA, fetchDataSaga);
}
