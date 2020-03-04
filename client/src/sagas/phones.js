
import { put, call, takeLatest } from 'redux-saga/effects';
import { Types } from '../actions';
import apiCall from '../api';

function* getPhones() {
    try {
        const results = yield call(apiCall, 'get', 'http://localhost:3000/phones')
        yield put({type: Types.SUCCESS_GET_PHONES, results})
    } catch (err) {
        yield put({
            type: Types.FAILED_GET_PHONES, 
            payload: 'Something went wrong'
        })
    } 
}

//Watcher
export default function* phones() {
    yield takeLatest(Types.START_GET_PHONES, getPhones);
}