import { takeEvery, put } from 'redux-saga/effects';

// eslint-disable-next-line
function* workerSaga() {
    console.log('Hey from worker');
    console.log(put({ type: 'ACTION_FROM_WORKER' }));
    yield put({type: 'ACTION_FROM_WORKER'});
}

// watcher saga
function* rootSaga() {
    yield takeEvery('HELLO', workerSaga);
}


//watcher saga => actions => worker saga

export default rootSaga;
