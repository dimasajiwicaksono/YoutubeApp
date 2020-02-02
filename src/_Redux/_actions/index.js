export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export function createRequestTypes(base) {
    if (base) {
        throw new Error ('cant create request type ' );
    }
    return [ REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
}

export function createAction(type, payload = {}) {
    return {
        type,
        ...payload,
    };
}