
import { put, call, takeLatest } from 'redux-saga/effects';
import { Types } from '../actions';
import apiCall from '../api';

function* getPhones({payload}) {
    try {
        const results = yield call(apiCall, 'get', 'http://localhost:3000/phones')
        yield put({type: Types.SUCCESS_GET_PHONES, results})
    } catch (err) {

    } 
}

//Watcher
export default function* phones() {
    yield takeLatest(Types.START_GET_PHONES, getPhones);
}