import constantsTypes from '../constants-types/constants-type';

const defaultState = '';

export default function (state = defaultState, action){
    const {type, payload} = action;

    switch (type) {
        case constantsTypes.currentUser:
            return payload.user
    }

    return state;
}
