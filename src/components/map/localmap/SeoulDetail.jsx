import React from 'react'

import SeoulN from './SeoulN';
import SeoulSE from './SeoulSE';
import SeoulSW from './SeoulSW';

const SeoulDetail = (props) => {
    const { seoul } = props;

    let seoulLocal;
    switch (seoul) {
        case '서울 북쪽 지역':
            seoulLocal = <SeoulN />;
            break;
        case '서울 동남 지역':
            seoulLocal = <SeoulSE />;
            break;
        case '서울 남서 지역':
            seoulLocal = <SeoulSW />;
            break;
        default:
            seoulLocal = null;
    }
    return (
        <>
            {seoulLocal}
        </>
    )
}

export default SeoulDetail
