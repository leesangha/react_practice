import React, {useState, useCallback } from 'react';


function Research() {
    const [inputs, setInputs]=useState({
        search:'',
    });
    const onChange = useCallback( (e)=>{
        const {name, value} = e.target;
        setInputs(
            ...inputs,
            [name]:value,
        )
    },[inputs])
    return(
        <div>
            <ol>
                <li>싫어하는 음식이 있나요?</li>

                <li>못먹는 재료가 있나요?</li>
                <input name ="searching" placeholder="음식을 검색하세요" ></input>
            </ol>

        </div>
    )
    

}

export default Research;