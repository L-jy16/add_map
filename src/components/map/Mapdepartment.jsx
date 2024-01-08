import React, { useState } from 'react'
import MapdepartSide from './MapdepartSide';

import { PiMagnifyingGlassBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Mapdepartment = () => {
    const [depart, setDepart] = useState("법학과");
    console.log(setDepart)

    return (
        <div className='info__wrap'>
            <MapdepartSide />
            <div className="map__info">
                <div className="department__wrap">
                    <div className="depart__header">
                        <h3 className="depart__title">
                            전국 학과 정보
                        </h3>
                        <div className="depart__search">
                            <div className="search__img"><PiMagnifyingGlassBold /></div>
                            <label htmlFor="DepartSearchKeyword" className='blind'>학과 검색 영역</label>
                            <input type="search" name="DepartSearchKeyword" id="DepartSearchKeyword" placeholder="학과명 검색" required />
                        </div>
                    </div>
                    <div className='depart__wrap'>
                        <Link to={`/map/department/${depart}`} className='depart__type' onClick={() => setDepart('법학과')}>
                            <div className='depart__box__header'>
                                <h3 className="depart__name">
                                    법학과
                                </h3>
                                <span className='depart__percent'>
                                    취업률 <p>40%</p>
                                </span>
                            </div>
                            <div className="depart_main">
                                <div className="depart__salary">
                                    졸업 후 직장 임금 <span> 130만원 이상</span>
                                </div>
                                <div className="depart__jop">
                                    관련직업 <span>감정평가사, 노무사, 법률사무원</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/map/department/${depart}`} className='depart__type' onClick={() => setDepart('법학과2')}>
                            <div className='depart__box__header'>
                                <h3 className="depart__name">
                                    컴퓨터공학과
                                </h3>
                                <span className='depart__percent'>
                                    취업률 <p>40%</p>
                                </span>
                            </div>
                            <div className="depart_main">
                                <div className="depart__salary">
                                    졸업 후 직장 임금 <span> 130만원 이상</span>
                                </div>
                                <div className="depart__jop">
                                    관련직업 <span>감정평가사, 노무사, 법률사무원</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/map/department/${depart}`} className='depart__type' onClick={() => setDepart('법학과3')}>
                            <div className='depart__box__header'>
                                <h3 className="depart__name">
                                    간호학과
                                </h3>
                                <span className='depart__percent'>
                                    취업률 <p>40%</p>
                                </span>
                            </div>
                            <div className="depart_main">
                                <div className="depart__salary">
                                    졸업 후 직장 임금 <span> 130만원 이상</span>
                                </div>
                                <div className="depart__jop">
                                    관련직업 <span>감정평가사, 노무사, 법률사무원</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/map/department/${depart}`} className='depart__type' onClick={() => setDepart('법학과4')}>
                            <div className='depart__box__header'>
                                <h3 className="depart__name">
                                    경영학과
                                </h3>
                                <span className='depart__percent'>
                                    취업률 <p>40%</p>
                                </span>
                            </div>
                            <div className="depart_main">
                                <div className="depart__salary">
                                    졸업 후 직장 임금 <span> 130만원 이상</span>
                                </div>
                                <div className="depart__jop">
                                    관련직업 <span>감정평가사, 노무사, 법률사무원</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/map/department/${depart}`} className='depart__type' onClick={() => setDepart('법학과5')}>
                            <div className='depart__box__header'>
                                <h3 className="depart__name">
                                    경호학과
                                </h3>
                                <span className='depart__percent'>
                                    취업률 <p>40%</p>
                                </span>
                            </div>
                            <div className="depart_main">
                                <div className="depart__salary">
                                    졸업 후 직장 임금 <span> 130만원 이상</span>
                                </div>
                                <div className="depart__jop">
                                    관련직업 <span>감정평가사, 노무사, 법률사무원</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/map/department/${depart}`} className='depart__type' onClick={() => setDepart('법학과6')}>
                            <div className='depart__box__header'>
                                <h3 className="depart__name">
                                    호텔조리학과
                                </h3>
                                <span className='depart__percent'>
                                    취업률 <p>40%</p>
                                </span>
                            </div>
                            <div className="depart_main">
                                <div className="depart__salary">
                                    졸업 후 직장 임금 <span> 130만원 이상</span>
                                </div>
                                <div className="depart__jop">
                                    관련직업 <span>감정평가사, 노무사, 법률사무원</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/map/department/${depart}`} className='depart__type' onClick={() => setDepart('법학과7')}>
                            <div className='depart__box__header'>
                                <h3 className="depart__name">
                                    물리학과
                                </h3>
                                <span className='depart__percent'>
                                    취업률 <p>40%</p>
                                </span>
                            </div>
                            <div className="depart_main">
                                <div className="depart__salary">
                                    졸업 후 직장 임금 <span> 130만원 이상</span>
                                </div>
                                <div className="depart__jop">
                                    관련직업 <span>감정평가사, 노무사, 법률사무원</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/map/department/${depart}`} className='depart__type' onClick={() => setDepart('법학과8')}>
                            <div className='depart__box__header'>
                                <h3 className="depart__name">
                                    생명공학과
                                </h3>
                                <span className='depart__percent'>
                                    취업률 <p>40%</p>
                                </span>
                            </div>
                            <div className="depart_main">
                                <div className="depart__salary">
                                    졸업 후 직장 임금 <span> 130만원 이상</span>
                                </div>
                                <div className="depart__jop">
                                    관련직업 <span>감정평가사, 노무사, 법률사무원</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/map/department/${depart}`} className='depart__type' onClick={() => setDepart('법학과9')}>
                            <div className='depart__box__header'>
                                <h3 className="depart__name">
                                    섬유디자인학과
                                </h3>
                                <span className='depart__percent'>
                                    취업률 <p>40%</p>
                                </span>
                            </div>
                            <div className="depart_main">
                                <div className="depart__salary">
                                    졸업 후 직장 임금 <span> 130만원 이상</span>
                                </div>
                                <div className="depart__jop">
                                    관련직업 <span>감정평가사, 노무사, 법률사무원</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/map/department/${depart}`} className='depart__type' onClick={() => setDepart('법학과10')}>
                            <div className='depart__box__header'>
                                <h3 className="depart__name">
                                    미디어커뮤니케이션학과
                                    미디어커뮤니케이션학과
                                </h3>
                                <span className='depart__percent'>
                                    취업률 <p>40%</p>
                                </span>
                            </div>
                            <div className="depart_main">
                                <div className="depart__salary">
                                    졸업 후 직장 임금 <span> 130만원 이상</span>
                                </div>
                                <div className="depart__jop">
                                    관련직업 <span>감정평가사, 노무사, 법률사무원</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/map/department/${depart}`} className='depart__type' onClick={() => setDepart('법학과11')}>
                            <div className='depart__box__header'>
                                <h3 className="depart__name">
                                    글로벌 바이오메디컬 엔지니어링 학과
                                </h3>
                                <span className='depart__percent'>
                                    취업률 <p>40%</p>
                                </span>
                            </div>
                            <div className="depart_main">
                                <div className="depart__salary">
                                    졸업 후 직장 임금 <span> 130만원 이상</span>
                                </div>
                                <div className="depart__jop">
                                    관련직업 <span>감정평가사, 노무사, 법률사무원</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/map/department/${depart}`} className='depart__type' onClick={() => setDepart('법학과12')}>
                            <div className='depart__box__header'>
                                <h3 className="depart__name">
                                    법학과
                                </h3>
                                <span className='depart__percent'>
                                    취업률 <p>40%</p>
                                </span>
                            </div>
                            <div className="depart_main">
                                <div className="depart__salary">
                                    졸업 후 직장 임금 <span> 130만원 이상</span>
                                </div>
                                <div className="depart__jop">
                                    관련직업 <span>감정평가사, 노무사, 법률사무원</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={`/map/department/${depart}`} className='depart__type' onClick={() => setDepart('법학과13')}>
                            <div className='depart__box__header'>
                                <h3 className="depart__name">
                                    법학과
                                </h3>
                                <span className='depart__percent'>
                                    취업률 <p>40%</p>
                                </span>
                            </div>
                            <div className="depart_main">
                                <div className="depart__salary">
                                    졸업 후 직장 임금 <span> 130만원 이상</span>
                                </div>
                                <div className="depart__jop">
                                    관련직업 <span>감정평가사, 노무사, 법률사무원</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Mapdepartment
