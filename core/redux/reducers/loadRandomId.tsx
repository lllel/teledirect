import constantsTypes from '../constants-types/constants-type';

export default function (state = '', action){
    const {type, loadRandomId} = action;

    switch (type) {
        case constantsTypes.loadRandomId:
            console.log(loadRandomId);
    }

    return state;
}
