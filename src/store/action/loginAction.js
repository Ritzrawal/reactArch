import axios from 'axios';
import {LOGIN} from '../constant';

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
