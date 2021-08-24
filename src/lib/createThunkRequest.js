import { startLoading, finishLoading } from "../module/loading";

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
            return e;
        }
    }
}