// import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddCircleIcon, SearchIcon } from "../../components/Icons";
import { randomUrl, urlAtom } from "../../recoils/surveyAtoms";
import { useSetRecoilState } from "recoil";

function SurveyManager () {
    const [surveyTitle, setSurveyTitle] = useState('')
    const naviate = useNavigate()
    const setUrl = useSetRecoilState(urlAtom)

    // const [light, setLight] = useState('green')

    useEffect(() => {
        let a = randomUrl()
        // console.log('url=', a)
    },[])

    const modalRef = useRef(null)

    const openModal = () => {
        modalRef.current.showModal()
    }
    const closeModal = () => {
        modalRef.current.close()
    }

    const goToCreate = () => {
        let url = randomUrl()
        setUrl(url)
        naviate(`/survey/create/${url}`)
    }
    const enterClick = (e) => {
        if(e.key === 'Enter') goToCreate()
    }
    
    const search = (e) =>{
        e.preventDefault()
        console.log('동작')
    }

    

    return (
        <section className="survey-manager">
            <h1>설문지 제작 사이트입니다.</h1>
            <div>
                <form>
                    <input placeholder="제목으로 찾기"/>
                    <button onClick={search}><SearchIcon/></button>
                </form>
            </div>
            <div>
                <div className="template-box">
                    <div className="rectangle">
                        <button className="icon-box" onClick={openModal}>
                            <AddCircleIcon/>
                        </button>
                    </div>
                    <div className="rectangle">
                        <div className="form-box" onClick={(e) => console.log('바깥 버튼')}>
                            <div className="form-status">
                                {/* <span className={classNames("light", light)}></span> */}
                                <button onClick={(e) => {
                                    e.stopPropagation()
                                    console.log('안쪽버튼')}}>
                                    <img src={`${origin}/icons/three-dot-icon-black.png`} alt=""/>
                                </button>
                            </div>
                            <h4>2024학년도 진로결정 및 취업지원을 위한 재학생 실태조사</h4>
                            <p>제출 0</p>
                        </div>
                    </div>
                    <button className="rectangle">템플릿 1번</button>
                    <button className="rectangle">템플릿 1번</button>
                    <button className="rectangle">템플릿 1번</button>
                    <button className="rectangle">템플릿 1번</button>
                </div>
                <dialog ref={modalRef} className="modal" onKeyDown={enterClick}>
                    <div>
                        <input placeholder="설문지 제목" 
                        onChange={(e)=>setSurveyTitle(e.target.value)}
                        value={surveyTitle}/>
                        <h4>사용 안내</h4>
                        <p>* 제목을 입력하지 않아도 문제가 발생하지 않습니다.</p>
                        <p>* 제목은 설문 제작자의 편한 관리를 위해 사용됩니다.</p>
                        <p>* 설문지 제목은 이후 상단 탭에서 변경이 가능합니다.</p>
                        <div className="btns">
                            <button onClick={goToCreate}>생성하기</button>
                            <button onClick={closeModal}>닫기</button>
                        </div>
                    </div>
                </dialog>
            </div>
        </section>
    )
}
export default SurveyManager





// 시작 전 // 노란 불, 중지 // 빨간 불, 종료, 진행 중 // 녹색불 , 작성 중 // 파란색

// 접속시 => 설문이 종료되었습니다.
// 시작 전 => 설문 시작일(0월 0일 09:00시) 부터 설문이 가능합니다.