import "./PageContact.scss";
import CardUIProfile from "../../../components/Contents/CardUI/CardUIProfile/CardUIProfile";
//import CardUIProfile from "../../../components/Contents/CardUI/CardUIProfile/CardUIProfile";

const PageContact = () => {
    return (
        <div id="pageContact">
            {/*<p>연락처⚡</p>*/}
            <CardUIProfile
                name="해피캣 매니저"
                jobTitle="IT운영팀 / MES 개발 및 운영"
                jobDesc="해피캣 매니저는 삼양식품 IT/PI부문의 IT운영팀 MES 시스템 개발 및 운영 업무를 담당하고 있습니다. 부문의 희망이자 빛이자 마스코트이자 어쩌고저쩌고입니다.해피캣 매니저는 삼양식품 IT/PI부문의 IT운영팀 MES 시스템 개발 및 운영 업무를 담당하고 있습니다. 부문의 희망이자 빛이자 마스코트이자 어쩌고저쩌고입니다."
                img={<img src="happyhappyhappy.png" alt="desc" />}
            />
            <CardUIProfile
                name="해피캣 매니저"
                jobTitle="IT운영팀 / MES 개발 및 운영"
                jobDesc="해피캣 매니저는 삼양식품 IT/PI부문의 IT운영팀 MES 시스템 개발 및 운영 업무를 담당하고 있습니다. 부문의 희망이자 빛이자 마스코트이자 어쩌고저쩌고입니다.해피캣 매니저는 삼양식품 IT/PI부문의 IT운영팀 MES 시스템 개발 및 운영 업무를 담당하고 있습니다. 부문의 희망이자 빛이자 마스코트이자 어쩌고저쩌고입니다."
                img={<img src="happyhappyhappy.png" alt="desc" />}
            />
        </div>
    );
};


export default PageContact;