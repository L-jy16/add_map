import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import 성신여자대학교 from '../../../assets/img/unlogo/성신여자대학교.png'


const PopupUnInfo = ({ activeUn, closePopup }) => {
    const [activeTaget, SetActiveTaget] = useState("");

    const TargetBtn = (targetUN) => {
        if (activeTaget === activeUn) {
            SetActiveTaget('');
            console.log(SetActiveTaget)
        } else {
            SetActiveTaget(targetUN)
            console.log(SetActiveTaget)

        }
    }

    const closePopupHandler = () => {
        closePopup();
    };
    return (
        <div className='UnInfo__popup'>
            <div className="uninfo__popup__wrap">
                <div className='close' onClick={closePopupHandler}>X</div>
                <div className="UnInfo__Wrap__popup">
                    <div className="UnDetaile__popup">
                        <div className="UnDetailInfo__popup">
                            <h2 className="UnName__popup">{activeUn}</h2>
                            <span className="UnAdress__popup">주소<p>서울특별시 강부구 도봉로 76가길 55</p></span>
                            <span className="UnSystem__popup">학제<p>4년제</p></span>
                            <span className="Unfound__popup">설립<p>사립대</p></span>
                            <span className="Uncampus__popup">캠퍼스<p>돈암수정, 미아운정그린</p></span>
                        </div>
                        <div className="UnDetailimg__popup">
                            <img src={성신여자대학교} alt="성신여자대학교" />
                        </div>
                    </div>
                    <div className="UnGoal__popup">
                        <div className="UnGoalmender__popup">
                            <h3>목표 대학 선택 회원수</h3>
                            <span>1259 <p>명</p></span>
                        </div>
                        <div className="department__popup">
                            <Link to="/department">학과정보 +</Link>
                            <button className={activeTaget === activeUn ? 'targetUN activeTaget' : 'targetUN'} onClick={() => TargetBtn(activeUn)}>목표대학 설정</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PopupUnInfo
