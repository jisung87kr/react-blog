import { startLoading, finishLoading, failureLoading } from "../module/loading";

export default function createRequestThunk(type, request){
    return params => async dispatch => {
        dispatch(startLoading(type));
        try {
            const response = await request(params);
            dispatch({
                type: type,
                payload: response.data.response,
            });
            dispatch(finishLoading(type));
        } catch (e) {
            console.error("Error response:");
            console.error(e.response);
            dispatch(failureLoading(type, e.response));
            // console.error(e.response.data);
            // console.error(e.response.status);
            // console.error(e.response.headers);
            return e;
        }
    }
}