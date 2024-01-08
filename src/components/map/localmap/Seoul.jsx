import React, { useState } from 'react'

import SeoulDetail from './SeoulDetail';

const Seoul = () => {
    const [activeSeoul, SetActiveSeoul] = useState("");

    const handleSeoulClick = (tap) => {
        SetActiveSeoul(tap)
    }
    return (
        <div className='local__map__Wrap'>

            <div className="local__map 서울">
                <div className="seoul_loacl">
                    <ul>
                        {[
                            '서울 북쪽 지역',
                            '서울 남서 지역',
                            '서울 동남 지역',
                        ].map((tap) => (
                            <li
                                key={tap}
                                className={activeSeoul === tap ? 'activeSeoul' : ''}
                            >
                                <span onClick={() => handleSeoulClick(tap)}>
                                    {tap}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {activeSeoul === "" ? (
                    <div className="seoul_map"></div>
                ) : (<SeoulDetail seoul={activeSeoul} />)}
            </div>
        </div>
    )
}

export default Seoul
