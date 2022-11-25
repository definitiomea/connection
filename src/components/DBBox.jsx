/* Ajax를 사용하여 localhost:8080에 접근하고 값을 가져오기
.. 비슷한 걸 개인 프로젝트 때 했는데? */

/* 추가 과제: Axios로 다뤄보기 */

import React, { useEffect, useState } from 'react';

const DBBox = () => {
    /* data와 setter */
    const [data, setData] = useState();

    async function fetchData() {
        const response = await fetch("/Test1123_hans/selectProduct.jsp?name=%EC%9E%90%EB%AA%BD");
        console.log(response);
        /* useEffect Hook에 async를 바로 붙이지 말고, 함수를 따로 정의할 것 */
        const fetchData = await response.json();
        console.log(fetchData);

        setData(fetchData);
    }

    /* 실행하자 마자 시작, 비동기로 작동 */
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>DBBox 컴포넌트</h1>
            {data ? <p>{data.name}</p> : ""}
            {data ? <p>{data.count}</p> : ""}
        </div>
    )
}

export default DBBox;