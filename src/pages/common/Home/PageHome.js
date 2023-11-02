import "./PageHome.scss";
//import "../../../components/Contents/CardUI/CardUIMain/CardUIMain";
import CardUIMain from "../../../components/Contents/CardUI/CardUIMain/CardUIMain";
//import CardUISub  from "../../../components/Contents/CardUI/CardUISub/CardUISub";
//import ImgSlide from "../../../components/Contents/ImgSlide/ImgSlide";
//import GridComponent from "../../../components/Grid/GridComponent";

const PageHome = () => {
    /*const imageList = [
        <img src="https://pixabay.com/ko/photos/%ED%95%A0%EB%A1%9C%EC%9C%88-%EB%8F%85%EC%9D%BC-%EC%85%B0%ED%8D%BC%EB%93%9C-%EB%92%A4%EB%9C%B0-%EA%B0%9C-7553022/" alt="이미지 1"/>,
        <img src="https://pixabay.com/ko/photos/%ED%95%A0%EB%A1%9C%EC%9C%88-%EB%8F%85%EC%9D%BC-%EC%85%B0%ED%8D%BC%EB%93%9C-%EB%92%A4%EB%9C%B0-%EA%B0%9C-7553022/" alt="이미지 2"/>,
        <img src="https://pixabay.com/ko/photos/%ED%95%A0%EB%A1%9C%EC%9C%88-%EB%8F%85%EC%9D%BC-%EC%85%B0%ED%8D%BC%EB%93%9C-%EB%92%A4%EB%9C%B0-%EA%B0%9C-7553022/" alt="이미지 3"/>
    ];*/

    return (
        <div id="pageHome">
            <div className="pageHome-contents">
                <CardUIMain 
                    image={<img src="happyhappyhappy.png" 
                                alt="alt 설명예시" 
                                />}
                    heading="해피 해피 해피"
                    description="디자인은 프론트개발자 마음임 토달지마셈 ㅎㅎ"
                />           
                <CardUIMain 
                    image={<img src="happyhappyhappy.png" 
                                alt="alt 설명예시" 
                                />}
                    heading="해피 해피 해피"
                    description="디자인은 프론트개발자 마음임 토달지마셈 ㅎㅎ"
                />
                <CardUIMain 
                    image={<img src="happyhappyhappy.png" 
                                alt="alt 설명예시" 
                                />}
                    heading="해피 해피 해피"
                    description="디자인은 프론트개발자 마음임 토달지마셈 ㅎㅎ"
                />  
                <CardUIMain 
                    image={<img src="happyhappyhappy.png" 
                                alt="alt 설명예시" 
                                />}
                    heading="해피 해피 해피"
                    description="디자인은 프론트개발자 마음임 토달지마셈 ㅎㅎ"
                />     
            </div>
            {/*<CardUISub
                subtitle="소제목 예시"/>*/}

            {/*<ImgSlide images={imageList}/>*/}

            {/*<div className="pageHome-contents">
                <ImgSlide images={imageList}/>
            </div>*/}

            {/*<div className="pageHome-contents">
                <GridComponent 
                 rowData={[{ number: 1, }, { number: 2 }, {number: 3}]}
                 columnDefs={[{ field: "number" }]} />
                </div>*/}
        </div>
    );
};


export default PageHome;