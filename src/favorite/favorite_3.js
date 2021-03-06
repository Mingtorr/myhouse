import React, { useState, useEffect } from "react";
import "./favorite_3.css";

class Favorite_3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      click: 0,
      setopen1: false,
      setopen2: false,
      setopen3: false,
      setopen4: false,
      setopen5: false,
      setopen6: false,
      setopen7: false,
      dropindex: null,
      click1: 0,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if ((this.props !== prevProps && this.props !== undefined) || prevState.click1 !== this.state.click1) {
      console.log("asdasdasdasd");
      this.props.region_change(this.props.step);
      this.setState({
        value: this.props.select_gipho_data,
      });
    }
  }
  click_a = (name) => {
    //강제 트리거
    this.setState(
      {
        click: this.state.click + 1,
      },
      this.props.cancle_giphodata(name)
    );
  };

  select_click = (box) => {
    const data = {
      bigname: box.bigname,
      name: box.name,
    };
    this.setState(
      {
        click1: this.state.click1 + 1,
      },
      this.props.props_gipho_select(data)
    );
    console.log(data);
  };

  effect = (index) => {
    var st = document.getElementsByClassName("gipho_select_item");
    for (var i = 0; i < st.length; i++) {
      var section = st.item(i);
      section.style.backgroundColor = "#4760ce";
    }
    console.log(index + "번 에서" + this.state.dropindex + "에 드래그를 놓음");

    let arr = this.state.value;
    let tmp = arr[index];
    console.log(tmp);
    arr[index] = arr[this.state.dropindex];
    console.log(arr[index]);
    arr[this.state.dropindex] = tmp;
    console.log(arr);
    this.setState({
      value: arr,
    });
    console.log(this.state.value);
  };

  effect2 = (index) => {
    //console.log(index+"번을 드레그함");
  };
  effect3 = (index) => {
    this.setState({
      dropindex: index,
    });
    var st = document.getElementsByClassName("gipho_select_item");
    for (var i = 0; i < st.length; i++) {
      var section = st.item(i);
      if (i === this.state.dropindex) {
        section.style.backgroundColor = "#4056fc71";
      } else {
        section.style.backgroundColor = "#4760ce";
      }
    }
    //console.log(index+"번에 가져다 놓음");
  };
  openchange = (item) => {
    switch (item) {
      case 1:
        this.setState({
          setopen1: !this.state.setopen1,
        });
        break;
      case 2:
        this.setState({
          setopen2: !this.state.setopen2,
        });
        break;
      case 3:
        this.setState({
          setopen3: !this.state.setopen3,
        });
        break;
      case 4:
        this.setState({
          setopen4: !this.state.setopen4,
        });
        break;
      case 5:
        this.setState({
          setopen5: !this.state.setopen5,
        });
        break;

      case 6:
        this.setState({
          setopen6: !this.state.setopen6,
        });
        break;
      case 7:
        this.setState({
          setopen7: !this.state.setopen7,
        });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div className="Favorite_3_main">
        <div className="Favorite_3_main_div">
          <div className="favorite_title_div2">
            <button id="back_step" onClick={() => this.props.stepchange2(1)}></button>
            <p>3. 지표를 선택하세요.</p>
            <button
              id="cancle_step"
              onClick={() => {
                this.props.favorite_div_bool_change(false);
                this.props.cancle_select_gipho_data_change();
              }}
            ></button>
          </div>
          <div className="Favorite_3_main_div_scroll">
            <div className="favorite_item_div">
              <button id="favorite_item_div_button" onClick={() => this.openchange(1)}>
                1. 환경지표
              </button>
              <div className="favorite_enviroment_item_div" style={{ display: `${this.state.setopen1 === true ? "none" : "block"}` }}>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "환경", name: "대기오염도" });
                  }}
                >
                  대기오염도
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "환경", name: "녹지비율" });
                  }}
                >
                  녹지비율
                </button>
              </div>
            </div>
            <div className="favorite_item_div">
              <button id="favorite_item_div_button" onClick={() => this.openchange(2)}>
                2. 교육 지표
              </button>
              <div className="favorite_enviroment_item_div" style={{ display: `${this.state.setopen2 === true ? "none" : "block"}` }}>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "교육", name: "교원1인당학생수" });
                  }}
                >
                  교원 1인당 학생수
                </button>
              </div>
            </div>
            <div className="favorite_item_div">
              <button id="favorite_item_div_button" onClick={() => this.openchange(3)}>
                3. 복지 지표
              </button>
              <div className="favorite_enviroment_item_div" style={{ display: `${this.state.setopen3 === true ? "none" : "block"}` }}>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "복지", name: "유치원및보육시설" });
                  }}
                >
                  유치원 및 보육시설
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "복지", name: "노인복지시설" });
                  }}
                >
                  노인복지시설
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "복지", name: "사회복지시설" });
                  }}
                >
                  사회복지시설
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "복지", name: "문화시설수" });
                  }}
                >
                  문화시설 수
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "복지", name: "체육시설수" });
                  }}
                >
                  체육시설 수
                </button>
              </div>
            </div>
            <div className="favorite_item_div">
              <button id="favorite_item_div_button" onClick={() => this.openchange(4)}>
                4. 편의시설 지표
              </button>
              <div className="favorite_enviroment_item_div" style={{ display: `${this.state.setopen4 === true ? "none" : "block"}` }}>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "편의", name: "쇼핑시설밀집도" });
                  }}
                >
                  쇼핑시설 밀집도
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "편의", name: "외식시설밀집도" });
                  }}
                >
                  외식시설 밀집도
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "편의", name: "은행시설밀집도" });
                  }}
                >
                  은행시설 밀집도
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "편의", name: "우체국시설" });
                  }}
                >
                  우체국시설
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "편의", name: "대중교통이용률" });
                  }}
                >
                  대중교통 이용률
                </button>
              </div>
            </div>
            <div className="favorite_item_div">
              <button id="favorite_item_div_button" onClick={() => this.openchange(5)}>
                5. 안전시설 지표
              </button>
              <div className="favorite_enviroment_item_div" style={{ display: `${this.state.setopen5 === true ? "none" : "block"}` }}>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "안전", name: "화재안전" });
                  }}
                >
                  화재 안전
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "안전", name: "교통사고안전" });
                  }}
                >
                  교통사고 안전
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "안전", name: "범죄안전" });
                  }}
                >
                  범죄 안전
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "안전", name: "감염병안전" });
                  }}
                >
                  감염병 안전
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "안전", name: "자연재해안전" });
                  }}
                >
                  자연재해 안전
                </button>
              </div>
            </div>
            <div className="favorite_item_div">
              <button id="favorite_item_div_button" onClick={() => this.openchange(6)}>
                6. 주택 지표
              </button>
              <div className="favorite_enviroment_item_div" style={{ display: `${this.state.setopen6 === true ? "none" : "block"}` }}>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "주택", name: "다세대주택수" });
                  }}
                >
                  다세대 주택 수
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "주택", name: "단독주택수" });
                  }}
                >
                  단독주택 수
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "주택", name: "노후주택비율" });
                  }}
                >
                  노후주택 비율
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "주택", name: "지가지수" });
                  }}
                >
                  지가지수
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "주택", name: "총주택수" });
                  }}
                >
                  총 주택 수
                </button>
              </div>
            </div>
            <div className="favorite_item_div2">
              <button id="favorite_item_div_button" onClick={() => this.openchange(7)}>
                7. 지역인구 지표
              </button>
              <div className="favorite_enviroment_item_div" style={{ display: `${this.state.setopen7 === true ? "none" : "block"}` }}>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "지역인구", name: "청장년인구비율" });
                  }}
                >
                  청장년 인구비율
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "지역인구", name: "사업체종사자비율" });
                  }}
                >
                  사업체 종사자 비율
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "지역인구", name: "노령화지수" });
                  }}
                >
                  노령화지수
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "지역인구", name: "인구밀도" });
                  }}
                >
                  인구밀도
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "지역인구", name: "총인구" });
                  }}
                >
                  총인구
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "지역인구", name: "평균나이" });
                  }}
                >
                  평균나이
                </button>
                <button
                  onClick={() => {
                    this.select_click({ bigname: "지역인구", name: "평균가구원수" });
                  }}
                >
                  평균 가구원 수
                </button>
              </div>
            </div>
            <div className="gongbak"></div>
          </div>
        </div>
        <div className="gipho" key={this.props.select_gipho_data}>
          <div className="gipho_title">
            <p>* 선택하신 지표 순위</p>
          </div>
          <div className="gipho_main">
            {this.state.value.map((v, i, a) => {
              return (
                <div
                  key={i}
                  className="gipho_select_item"
                  draggable="true"
                  onDragOver={() => {
                    this.effect3(i);
                  }}
                  onDragStart={() => this.effect2(i)}
                  onDragEnd={() => this.effect(i)}
                >
                  <div className="gipho_select_item_rank">
                    <p>{i + 1} </p>
                  </div>
                  <div className="gipho_select_item_div_1">
                    <p>{v.name}</p>
                  </div>
                  <div className="gipho_select_item_div_2">
                    <button
                      id="gipho_cancle"
                      onClick={() => {
                        this.click_a(v.name);
                      }}
                    ></button>
                  </div>
                </div>
              );
            })}
            <div className="gonbak2"></div>
          </div>
          <button
            id="gipho_select_button"
            onClick={() => {
              this.props.result_change(this.props.step);
              this.setState({ value: [] });
            }}
          >
            선택 완료
          </button>
        </div>
      </div>
    );
  }
}

/*

function Favorite_3(props) {
  const [value, valuechange] = useState([]);
  const [click, clickchange] = useState(0);
  const [setopen1, openchange1] = useState(true);
  const [setopen2, openchange2] = useState(true);
  const [setopen3, openchange3] = useState(true);
  const [setopen4, openchange4] = useState(true);
  const [setopen5, openchange5] = useState(true);
  const [setopen6, openchange6] = useState(true);
  const [setopen7, openchange7] = useState(true);
  const [dropindex,dropindex_change] = useState(null);



  const click_a = (name) => {
    //강제 트리거
    clickchange(click + 1);
    props.cancle_giphodata(name);
  };
  useEffect(() => {
    console.log(props.step); // 선택 지역이름
    console.log(value);
    props.region_change(props.step);
    valuechange(props.select_gipho_data);
  }, [value,click, click_a]);

  useEffect(()=>{
    console.log('aaaa');
  },[value])


  const effect =(index)=>{
    var st = document.getElementsByClassName("gipho_select_item");
    for(var i = 0 ; i<st.length; i++){
      var section = st.item(i);
      section.style.backgroundColor = "#4056fc";
    }
    console.log(index+"번 에서"+dropindex+"에 드래그를 놓음");

    
    let arr=value;
    let tmp = arr[index];
    console.log(tmp);
    arr[index] = arr[dropindex];
    console.log(arr[index]);
    arr[dropindex] = tmp;
    console.log(arr);
    valuechange(arr);
    valuechange(arr);
    console.log(value);
    
  }
  const effect2 =(index)=>{
   
    //console.log(index+"번을 드레그함");
  }
  const effect3 =(index)=>{
    dropindex_change(index);
    var st = document.getElementsByClassName("gipho_select_item");
    for(var i = 0 ; i<st.length; i++){
      var section = st.item(i);
      if(i===dropindex){
        section.style.backgroundColor = "red";
      }else{
        section.style.backgroundColor = "#4056fc";
      }
    }
    //console.log(index+"번에 가져다 놓음");
  }
  const openchange = (item) => {
    switch (item) {
      case 1:
        openchange1(!setopen1);
        break;
      case 2:
        openchange2(!setopen2);
        break;
      case 3:
        openchange3(!setopen3);
        break;
      case 4:
        openchange4(!setopen4);
        break;
      case 5:
        openchange5(!setopen5);
        break;

      case 6:
        openchange6(!setopen6);
        break;
      case 7:
        openchange7(!setopen7);
        break;

      default:
        break;
    }
  };

  return (
    <div className="Favorite_3_main">
      <div className="Favorite_3_main_div">
        <div className="favorite_title_div2">
          <button id="back_step" onClick={()=>props.stepchange2(1)}></button>
          <p>3. 지표를 선택하세요.</p>
          <button id="cancle_step" onClick={()=>{props.favorite_div_bool_change(false); props.cancle_select_gipho_data_change();}}></button>
        </div>
        <div className="Favorite_3_main_div_scroll">
          <div className="favorite_item_div">
            <button id="favorite_item_div_button" onClick={() => openchange(1)}>
              1. 환경 지표
            </button>
            <div className="favorite_enviroment_item_div" style={{ display: `${setopen1 === true ? "none" : "block"}` }}>
              <button
                onClick={() => {
                  props.control_change({ bigname: "환경", name: "대기오염도" });
                }}
              >
                대기오염도
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "환경", name: "녹지비율" });
                }}
              >
                녹지비율
              </button>
            </div>
          </div>
          <div className="favorite_item_div">
            <button id="favorite_item_div_button" onClick={() => openchange(2)}>
              2. 교육 지표
            </button>
            <div className="favorite_enviroment_item_div" style={{ display: `${setopen2 === true ? "none" : "block"}` }}>
              <button
                onClick={() => {
                  props.control_change({ bigname: "교육", name: "교원1인당학생수" });
                }}
              >
                교원 1인당 학생수
              </button>
            </div>
          </div>
          <div className="favorite_item_div">
            <button id="favorite_item_div_button" onClick={() => openchange(3)}>
              3. 복지 지표
            </button>
            <div className="favorite_enviroment_item_div" style={{ display: `${setopen3 === true ? "none" : "block"}` }}>
              <button
                onClick={() => {
                  props.control_change({ bigname: "복지", name: "병원+약국 밀집도" });
                }}
              >
                병원+약국 밀집도
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "복지", name: "유치원및보육시설" });
                }}
              >
                유치원 및 보육시설
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "복지", name: "노인복지시설" });
                }}
              >
                노인복지시설
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "복지", name: "사회복지시설" });
                }}
              >
                사회복지시설
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "복지", name: "문화시설수" });
                }}
              >
                문화시설 수
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "복지", name: "체육시설수" });
                }}
              >
                체육시설 수
              </button>
            </div>
          </div>
          <div className="favorite_item_div">
            <button id="favorite_item_div_button" onClick={() => openchange(4)}>
              4. 편의시설 지표
            </button>
            <div className="favorite_enviroment_item_div" style={{ display: `${setopen4 === true ? "none" : "block"}` }}>
              <button
                onClick={() => {
                  props.control_change({ bigname: "편의", name: "쇼핑시설밀집도" });
                }}
              >
                쇼핑시설 밀집도
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "편의", name: "외식시설밀집도" });
                }}
              >
                외식시설 밀집도
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "편의", name: "은행시설밀집도" });
                }}
              >
                은행시설 밀집도
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "편의", name: "우체국시설" });
                }}
              >
                우체국시설
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "편의", name: "대중교통이용률" });
                }}
              >
                대중교통 이용률
              </button>
            </div>
          </div>
          <div className="favorite_item_div">
            <button id="favorite_item_div_button" onClick={() => openchange(5)}>
              5. 안전시설 지표
            </button>
            <div className="favorite_enviroment_item_div" style={{ display: `${setopen5 === true ? "none" : "block"}` }}>
              <button
                onClick={() => {
                  props.control_change({ bigname: "안전", name: "화재안전" });
                }}
              >
                화재 안전
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "안전", name: "교통사고안전" });
                }}
              >
                교통사고 안전
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "안전", name: "범죄안전" });
                }}
              >
                범죄 안전
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "안전", name: "감염병안전" });
                }}
              >
                감염병 안전
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "안전", name: "자연재해안전" });
                }}
              >
                자연재해 안전
              </button>
            </div>
          </div>
          <div className="favorite_item_div">
            <button id="favorite_item_div_button" onClick={() => openchange(6)}>
              6. 주택 지표
            </button>
            <div className="favorite_enviroment_item_div" style={{ display: `${setopen6 === true ? "none" : "block"}` }}>
              <button
                onClick={() => {
                  props.control_change({ bigname: "주택", name: "다세대주택수" });
                }}
              >
                다세대 주택 수
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "주택", name: "단독주택수" });
                }}
              >
                단독주택 수
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "주택", name: "노후주택비율" });
                }}
              >
                노후주택 비율
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "주택", name: "지가지수" });
                }}
              >
                지가지수
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "주택", name: "총주택수" });
                }}
              >
                총 주택 수
              </button>
            </div>
          </div>
          <div className="favorite_item_div2">
            <button id="favorite_item_div_button" onClick={() => openchange(7)}>
              7. 지역인구 지표
            </button>
            <div className="favorite_enviroment_item_div" style={{ display: `${setopen7 === true ? "none" : "block"}` }}>
              <button
                onClick={() => {
                  props.control_change({ bigname: "지역인구", name: "청장년인구비율" });
                }}
              >
                청장년 인구비율
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "지역인구", name: "사업체종사자비율" });
                }}
              >
                사업체 종사자 비율
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "지역인구", name: "노령화지수" });
                }}
              >
                노령화지수
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "지역인구", name: "인구밀도" });
                }}
              >
                인구밀도
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "지역인구", name: "총인구" });
                }}
              >
                총인구
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "지역인구", name: "평균나이" });
                }}
              >
                평균나이
              </button>
              <button
                onClick={() => {
                  props.control_change({ bigname: "지역인구", name: "평균가구원수" });
                }}
              >
                평균 가구원 수
              </button>
            </div>
          </div>
          <div className="gongbak"></div>
        </div>
      </div>
      <div className="gipho" key={props.select_gipho_data}>
        <div className="gipho_title">
          <p>* 선택하신 지표</p>
        </div>
        <div className="gipho_main"  >
          {value.map((v, i, a) => {
            return (
              <div key={i} className="gipho_select_item" draggable="true"  onDragOver={()=>{effect3(i)}} onDragStart={()=>effect2(i)} onDragEnd={()=>effect(i)}>
                <p>{v.name}</p>
                <p id="gipho_select_item_p">{v.range * 50}%</p>
                <button
                  id="gipho_cancle"
                  onClick={() => {
                    click_a(v.name);
                  }}
                ></button>
              </div>
            );
          })}
          <div className="gonbak2"></div>
        </div>
        <button id="gipho_select_button" onClick={() => {props.result_change(props.step); valuechange([]);}}>
          선택 완료
        </button>
      </div>
    </div>
  );
}

{props.select_gipho_data2.map((v,i,a)=>{
                return(
                    <div key={i} className="gipho_select_item">
                        <p>{v.name}</p>
                        <p id="gipho_select_item_p">선호도 {v.range}</p>
                    </div>
                )
            })} */
export default Favorite_3;
