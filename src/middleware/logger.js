

const logger = (store) => (next) => (action) => {
    console.group(action);
     console.log('The Action ', action.type);
     const returnValue = next(action);
   console.log('The new State ', store.getState());
    console.groupEnd();
    return returnValue;
}

export default logger;