import { all } from 'redux-saga/effects'
import phones from './phones';

export default function* rootSaga() {
   yield all([
       phones()
   ]);
}