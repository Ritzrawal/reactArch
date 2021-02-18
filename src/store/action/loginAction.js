import axios from 'axios';
import {LOGIN,SWITCH_ACTIVE,SWITCH_INACTIVE} from '../constant';

const baseUrl = 'https://www.test.com';

export const loginAction = () => async (dispatch) => {
    await axios
        .get(`${baseUrl}/api/app/login/all`)
        .then((res) => {
            dispatch({
                type: LOGIN,
                payload: res.data,
            });
        })
        .catch((err) => console.log('err' + err));
};
export const switchActive=() =>async(dispatch)=>{
    dispatch({
        type:SWITCH_ACTIVE
    })

}
export const switchInActive=() =>async(dispatch)=>{
    dispatch({
        type:SWITCH_INACTIVE
    })

}