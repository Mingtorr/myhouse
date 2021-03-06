import "./region_search.css"



function Region_search(props){
    return(
        <div className="region_search">
            <div className="search_bar">
                <div className="search_bar_input_div">
                    <a href="#"></a>
                    <input placeholder="지역명또는 도로명주소로 검색"/>
                    <button ></button>
                </div>
                <div className="search_bar_title">
                    <div className="search_bar_title_string">
                        <p>사림동 검사 결과</p>
                        <button className="search_bar_canclebutton" onClick={props.props_searchbar_false_change}></button>
                    </div>
                </div>
            </div>
            <div className="show_select_region_maindiv">
                   <div className="show_select_region_div_default">
                       <p>검색 목록</p>
                   </div>
                   <div className="show_select_region_div_show_region">
                       <ul>
                           <li>
                               경상남도 창원시 의창구 사림동
                           </li>
                           <li>
                               경상남도 통영시 사림구 동작동
                           </li>
                           <li>
                               전라남도 해림시 구사구 추림동
                           </li>
                           <li>
                               경상남도 창원시 의창구 사림동
                           </li>
                       </ul>
                   </div>
            </div>
        </div>
    )
}

export default Region_search