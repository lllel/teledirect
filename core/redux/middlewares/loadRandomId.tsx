export  default store => next => action => {
    if (!action.loadRandomId) {
        return next(action);
    }

    setTimeout(() => {
        return next({
            ...action,
            loadRandomId: (Math.random() + Date.now()).toString()
        });
    }, 2000);
}
