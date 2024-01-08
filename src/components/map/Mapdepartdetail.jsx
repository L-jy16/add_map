import React from 'react'
import MapdepartSide from './MapdepartSide';

import { PiMagnifyingGlassBold } from "react-icons/pi";

const Mapdepartdetail = () => {
    return (
        <div className='info__wrap'>
            <MapdepartSide />
            <div className="map__info">
                <div className="departDetail__wrap">
                    <div className="departdetail__header">
                        <h3 className="departdetail__title">
                            학과 세부 정보
                        </h3>
                        <div className="departdetail__search">
                            <div className="search__img"><PiMagnifyingGlassBold /></div>
                            <label htmlFor="DepartSearchKeyword" className='blind'>학과명 검색</label>
                            <input type="search" name="DepartSearchKeyword" id="DepartSearchKeyword" placeholder="학과명 검색" required />
                        </div>
                    </div>
                    <div className='departdetail__info'>
                        <div className="departdetail__title">
                            <h3 className="departdetail__name">
                                법학과
                            </h3>
                            <span className='departdetail__percent'>
                                취업률 <p>40%</p>
                            </span>
                        </div>
                        <div className="departdetail__pay">
                            <h4>졸업 후 직장임금</h4>
                            <span>
                                130만원 이상
                            </span>
                        </div>
                        <div className="departdetail__content">
                            <h4>학과 개요</h4>
                            <span>
                                법학과는 법에 대한 이해와 지식을 이론적ㆍ실제적으로 습득하도록 함으로써 올바른 법생활을 영위하고 국가와 사회에 기여할 수 있는 건전한 민주시민을 양성하기 위한 학과입니다.
                                '사회가 있는 곳에 법이 있다.' 라는 말이 있습니다. 이처럼 법은 사회의 질서를 유지시켜 주는 가장 중요한 규범입니다. 법학과는 법률에 대한 전문적인 연구와 교육을 제공합니다.
                                법학과는 사회 각 분야의 정의와 민주주의를 실현하기 위해 법률에 대한 전문적인 지식과 자질을 갖춘 유능한 법률 전문가를 양성하는 곳입니다.
                            </span>
                        </div>

                        <div className="departdetail__content">
                            <h4>관련 직업</h4>
                            <span>
                                감정평가사, 노무사, 법률사무원, 법률상담사, 법무사, 변리사, 변호사, 부동산중개인, 손해사정사
                            </span>
                        </div>

                        <div className="departdetail__content">
                            <h4>학과 특성</h4>
                            <span>
                                법학을 전공하려면 사회 문제에 대한 많은 관심이 필요합니다. 법학은 사회의 문제를 해결하기 위한 학문이기 때문에 다양한 사회 현상에 대한 깊은 이해가 중요합니다.
                                법학은 실생활에 적용되는 성격이 강하므로 논리적이고 분석적인 사고력, 공정한 판단력, 자신의 주장을 정확하고 소신 있게 표현하는 능력을 가진 학생에게 적합한 분야입니다.
                            </span>
                        </div>

                        <div className="departdetail__table">
                            <h4>개설 대학</h4>
                            <div className="depart__Un__Name">
                                <ul>
                                    <li><span>학교명</span>
                                        <ul>
                                            <li><span>서울대학교</span></li>
                                            <li><span>연세대학교</span></li>
                                            <li><span>고려대학교</span></li>
                                            <li><span>서강대학교</span></li>
                                            <li><span>성균관대학교</span></li>
                                            <li><span>이화여자대학교</span></li>
                                            <li><span>한양대학교</span></li>
                                            <li><span>경희대학교</span></li>
                                            <li><span>숙명여자대학교</span></li>
                                            <li><span>성신여자대학교</span></li>
                                        </ul>
                                    </li>
                                    <li><span>학과명</span>
                                        <ul>
                                            <li><span>법학과</span></li>
                                            <li><span>법윤리학과</span></li>
                                            <li><span>법학부</span></li>
                                            <li><span>법학과</span></li>
                                            <li><span>법학과</span></li>
                                            <li><span>법학부</span></li>
                                            <li><span>법학부</span></li>
                                            <li><span>법학과</span></li>
                                            <li><span>법학부</span></li>
                                            <li><span>법학부</span></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mapdepartdetail
