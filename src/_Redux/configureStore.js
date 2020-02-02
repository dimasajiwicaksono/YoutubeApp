import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './_sagas';
import reducers from './_reducers';

export function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore ( reducers, composeEnhacers (
        applyMiddleware(sagaMiddleware)
    ));
    sagaMiddleware.run(rootSaga);
    return store;
}
