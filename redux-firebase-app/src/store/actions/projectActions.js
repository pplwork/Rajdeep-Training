export const CreateProject =(project) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({type: 'CREATE_PROJECT', project});
    }
};