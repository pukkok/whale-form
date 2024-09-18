import React from "react";
import { Route, Routes } from "react-router-dom";
import SurveyCreater from "./ViewRoutes/SurveyCreater/SurveyCreater";
import SurveyMangager from "./ViewRoutes/SurveyManager/SurveyManager";
import SurveyForm from "./ViewRoutes/SurveyForm/SurveyForm";
import NotFoundPage from '../Pages/NotFoundPage';
import { ViewerWrapper } from "../Pages/MainStyles/_StyledMainPage";
import FAQViewer from "./ViewRoutes/FAQList/FAQViewer";

function ViewRouter () {

    return (
    <ViewerWrapper >
        <Routes>
            <Route path="/" element={<SurveyMangager/>}/>
            <Route path="survey">
                <Route path="create/*" element={<SurveyCreater/>}></Route>
                <Route path="form/*" element={<SurveyForm/>}/>
                <Route path="FAQ" element={<FAQViewer/>}/>
            </Route>
            <Route exact path='*' element={<NotFoundPage />}/>
        </Routes>
    </ViewerWrapper>
    )
}
export default ViewRouter