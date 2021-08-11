// error axios
export const actionPending = (type:any) => ({
    type: type
});

export const actionFulfilled = (type:any, result:any) => ({
    type: type,
    payload: {
        ...result
    }
});

export const actionRejected = (type:any, error:any) => ({
    type: type,
    payload: {
        error
    }
});