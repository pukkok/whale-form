import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeTabAtom, tabsAtom, urlAtom } from "../../recoils/surveyAtoms";
import classNames from "classnames";
import { useHref, useNavigate, useParams } from "react-router-dom";
import UserButton from "../../components/UserButton";
import { HeaderWrapper } from "./StyledMainPage";


function Header () {
    const url = useRecoilValue(urlAtom)
    const tabs = useRecoilValue(tabsAtom)
    const [activeTab, setActiveTab] = useRecoilState(activeTabAtom)
    const href = useHref()
    
    const [push, setPush] = useState()

    useEffect(() => {
        console.log(href)
        if(href.includes('/survey/create')){
            setPush(0)
        }else{
            setPush(100)
        }
    },[href])

    const navigate = useNavigate()

    return <HeaderWrapper>
        {tabs.length > 0 && 
        tabs.map(tab => {
            return <div 
            key={tab}
            onClick={()=> setActiveTab(tab)}
            className={classNames({active : activeTab === tab})}
            >{tab}</div>
        })}

        {/* <UserButton onClick={()=>navigate('/user/login')}/> */}

            {/* <button onClick={()=>navigate(`/survey/form/${url}`)}>미리보기</button>
            <button>임시저장</button> */}
  
        

        
        {/* <button onClick={()=>navigate('/user/login')}>로그인</button> */}
        
        
    </HeaderWrapper>
}

export default Header