/* Ajax를 사용하여 localhost:8080에 접근하고 값을 가져오기
.. 비슷한 걸 개인 프로젝트 때 했는데? */

/* 추가 과제: Axios로 다뤄보기 */

import React, { useEffect, useState, useRef } from 'react';

const DBBox = () => {
    /* data와 setter */
    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    const searchBar = useRef(null);

    async function fetchData() {
        const response = await fetch(`/Test1123_hans/selectProduct.jsp?name=${search}`);
        console.log(response);
        /* useEffect Hook에 async를 바로 붙이지 말고, 함수를 따로 정의할 것 */
        const fetchData = await response.json();
        console.log(fetchData);

        setData(fetchData);
    }

    const searchFunc = () => {
        setSearch(searchBar.current.value);
    }

    /* 실행하자 마자 시작, 비동기로 작동 */
    useEffect(() => {
        fetchData();
    }, [search]);

    return (
        <div>
            <h1>DBBox 컴포넌트</h1>
            <input type="text" name="" id="" ref={searchBar} />
            <button onClick={() => {searchFunc()}}>검색</button>
            <hr></hr>
            {data ? <p>{data.name}</p> : ""}
            {data ? <p>{data.count}</p> : ""}
        </div>
    )
}

export default DBBox;