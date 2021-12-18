import React, {Component} from 'react';
import Signup             from "../../components/auth/signup";

class SignupPage
    extends Component {
    render() {
        return (
            <div>
                <Signup/>
            </div>
        );
    }
}

SignupPage.getInitialProps = async (ctx) => {
    console.log(ctx)
    return {stars: 'json.stargazers_count'}
}

export default SignupPage;
