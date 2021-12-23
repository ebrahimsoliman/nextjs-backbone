import React, {Fragment} from 'react';
import Head              from "next/head";
import ScrollRender      from "../../../components/animations/scrollRender";

function ScrollEffect() {

    return (<Fragment>
            <Head>

                <title>Scroll Animate</title>
            </Head>
            <div>
                <ScrollRender/>
            </div>

        </Fragment>

    );
}

export default ScrollEffect;
