import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {logout} from "../../store/modules/authentication/actions";
import {useRouter} from "next/router";


function Logout() {
    let dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => {
        dispatch(logout)
        router.push('/')
    })
    return (
        <div>

        </div>
    );
}

export default Logout;
