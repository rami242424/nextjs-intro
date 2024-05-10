// 청사진처럼 제일 먼저 확인되는 컴포넌트이다.
// 기본형태
// export default function App({ Component, pageProps }){ // -> Component : 렌더링하길 원하는 페이지
//     return <Component {...pageProps} />
// }

import NavBar from "@/components/NavBar";
import "../styles/globals.css";

export default function App({Component, pageProps}){
    return(
        <div>
            <NavBar/>
            <Component {...pageProps} />
            <span>안녕</span>
            <style jsx global>{`
                a {
                    color: white;
                }
                a {
                    text-decoration: none;
                }
                .active {
                    color: tomato;
                }
            `}</style>
        </div>
    );
}