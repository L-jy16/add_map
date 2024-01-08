import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import 성신여자대학교 from '../../../assets/img/unlogo/성신여자대학교.png'

const Jeollabuk = () => {
    const [activeUn, SetActiveUn] = useState("국립군산대");
    const [activeTaget, SetActiveTaget] = useState("");

    const handleClick = (UnName) => {
        SetActiveUn(UnName);
    };

    const TargetBtn = (targetUN) => {
        if (activeTaget === activeUn) {
            SetActiveTaget('');
            console.log(SetActiveTaget)
        } else {
            SetActiveTaget(targetUN)
            console.log(SetActiveTaget)

        }
    }
    return (
        <div className='local__map__Wrap'>
            <div className="local__map 전북">
                {[
                    '국립군산대',
                    '호원대',
                    '원광대',
                    '우석대',
                    '한일장신대',
                    '예수대',
                    '전북대',
                    '전주교대',
                    '전주대',
                    '예원예술대',
                ].map((UnName) => (



                    <span onClick={() => handleClick(UnName)}
                        key={UnName}
                        className={activeUn === UnName ? `UnPlace activeUn ${UnName}` : `UnPlace ${UnName}`}>
                        {UnName}
                    </span>

                ))}

            </div>
            <div className="UnInfo__Wrap">
                <div className="UnDetaile">
                    <div className="UnDetailInfo">
                        <h2 className="UnName">{activeUn}</h2>
                        <span className="UnAdress">주소<p>서울특별시 강부구 도봉로 76가길 55</p></span>
                        <span className="UnSystem">학제<p>4년제</p></span>
                        <span className="Unfound">설립<p>사립대</p></span>
                        <span className="Uncampus">캠퍼스<p>돈암수정, 미아운정그린</p></span>
                    </div>
                    <div className="UnDetailimg">
                        <img src={성신여자대학교} alt="성신여자대학교" />
                    </div>
                </div>
                <div className="UnGoal">
                    <div className="UnGoalmender">
                        <h3>목표 대학 선택 회원수</h3>
                        <span>1259 <p>명</p></span>
                    </div>
                    <div className="department">
                        <Link to="/department">학과정보 +</Link>
                        <button className={activeTaget === activeUn ? 'targetUN activeTaget' : 'targetUN'} onClick={() => TargetBtn(activeUn)}>목표대학 설정</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jeollabuk
