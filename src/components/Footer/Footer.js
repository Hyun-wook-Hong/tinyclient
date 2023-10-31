import './Footer.scss';

const Footer = () => {
    // 내거임 ㅋㅋ made by hhw5321@gmail.com
    const currYear = new Date().getFullYear();
    let yearElement = '';
    currYear === 2023 ? yearElement = '2023' : yearElement = '2023-' + currYear; 


    const content = `Copyrightⓒ ${yearElement} by hhw5321@gmail.com All rights reserved.`;
    return (
        <>
        <footer id="pcFooter">
            <p style={{ fontFamily: 'Noto Sans, sans-serif', fontSize: "12px", fontWeight: "bold" }}>{content}</p>
        </footer>
        </>
    );

};

export default Footer;