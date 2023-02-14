import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import RoungeStyle from "../../Style/StudyRounge/StudyRounge.module.css";

const RoungeList = (props) => {
  const filterSkill = useSelector((state) => state.selectStudy.skillList);
  const filterUser = useSelector((state) => state.selectStudy.studySelect);
  const userToken = useSelector((state) => state.token.accesstoken);
  const [firstcheck, setFirstCheck] = useState(true);
  const [data, setData] = useState([]);
  const [viewList, setViewList] = useState(4); //처음에 2개만 보여준다고 우선 가정.
  const [moreButton, setMoreButton] = useState(true); //더보기 버튼 보여줄 것인지 안보여줄 것인지 확인.
  let search = props.checkFilter;

  useEffect(() => {
    const skill = filterSkill.join(",");

    try {
      const response = axios
        .get(`/api/v1/studies`, {
          headers: { "X-AUTH-TOKEN": userToken },
          params: {
            category: skill,
            info: filterUser,
            //기수 지역 반
          },
        })
        .then(function (response) {
          setData(response.data.content);
          console.log(response.data.content);
        });
      setData(response.data); //데이터를 우선 전부 가져옵니다.;
    } catch (err) {
      console.log(err);
    }
  }, [search]); //상위에서 반응이 온다면?

  const dummystudy = [
    {
      title: "첫번째 스터디",
      category: ["python", "java"],
      description: "파이썬을 함께할 팀원을 모집합니다!",
      region: "대전",
      class: "1",
      generation: "9",
    },
    {
      title: "두번째 스터디",
      category: ["javascript", "java"],
      description: "자바스터디 함께할 팀원을 모집합니다!",
      region: "서울",
      class: "5",
      generation: "8",
    },
    {
      title: "세번째 스터디",
      category: ["python", "vue"],
      description: "프론트엔드 함께할 팀원을 모집합니다!",
      region: "구미",
      class: "3",
      generation: "9",
    },
    {
      title: "네번째 스터디",
      category: ["python", "vue"],
      description: "프론트엔드 함께할 팀원을 모집합니다!",
      region: "구미",
      class: "3",
      generation: "8",
    },
    {
      title: "다섯번째 스터디",
      category: ["python", "vue"],
      description: "프론트엔드 함께할 팀원을 모집합니다!",
      region: "구미",
      class: "3",
      generation: "9",
    },
    {
      title: "여섯번째 스터디",
      category: ["python", "vue"],
      description: "프론트엔드 함께할 팀원을 모집합니다!",
      region: "구미",
      class: "3",
      generation: "9",
    },
    {
      title: "일곱번째 스터디",
      category: ["python", "vue"],
      description: "프론트엔드 함께할 팀원을 모집합니다!",
      region: "구미",
      class: "3",
      generation: "9",
    },
    {
      title: "여덟번째 스터디",
      category: ["python", "vue"],
      description: "프론트엔드 함께할 팀원을 모집합니다!",
      region: "구미",
      class: "3",
      generation: "9",
    },
    {
      title: "아홉번째 스터디",
      category: ["python", "vue"],
      description: "프론트엔드 함께할 팀원을 모집합니다!",
      region: "구미",
      class: "3",
      generation: "9",
    },
    {
      title: "열번째 스터디",
      category: ["python", "vue"],
      description: "프론트엔드 함께할 팀원을 모집합니다!",
      region: "구미",
      class: "3",
      generation: "9",
    },
    {
      title: "열한번째 스터디",
      category: ["python", "vue"],
      description: "프론트엔드 함께할 팀원을 모집합니다!",
      region: "구미",
      class: "3",
      generation: "9",
    },
    {
      title: "열둘번째 스터디",
      category: ["python", "vue"],
      description: "프론트엔드 함께할 팀원을 모집합니다!",
      region: "구미",
      class: "3",
      generation: "9",
    },
    {
      title: "열세번째 스터디",
      category: ["python", "vue"],
      description: "프론트엔드 함께할 팀원을 모집합니다!",
      region: "구미",
      class: "3",
      generation: "9",
    },
    {
      title: "열네번째 스터디",
      category: ["python", "vue"],
      description: "프론트엔드 함께할 팀원을 모집합니다!",
      region: "구미",
      class: "3",
      generation: "9",
    },
    {
      title: "열다섯번째 스터디",
      category: ["python", "vue"],
      description: "프론트엔드 함께할 팀원을 모집합니다!",
      region: "구미",
      class: "3",
      generation: "9",
    },
  ];

  const moreStudyList = () => {
    setViewList(viewList + 4);
    console.log(data.length);
  };

  useEffect(() => {
    if (firstcheck) {
      setFirstCheck(false);
      return;
    }
    console.log(viewList);
    console.log(data);
    console.log(data.length);
    console.log(moreButton);
    if (viewList >= data.length) {
      setMoreButton(false);
    }
  }, [viewList]);

  return (
    <div className={RoungeStyle.RoungeListContainer}>
      <div className={RoungeStyle.Listcontainer}>
        {data
          ?.map((study, key) => (
            <div
              key={key}
              className={RoungeStyle.StudyListcard}
              onClick={() => props.idselect(study.id)}
            >
              <div className={RoungeStyle.StudyListcardheader}>
                <img
                  src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg"
                  alt="rover"
                />
              </div>
              <div className={RoungeStyle.StudyListCardbody}>
                <div className={RoungeStyle.Studytitle}>
                  <h2 className={RoungeStyle.StudytitleLeft}>{study.title}</h2>
                  <h4 className={RoungeStyle.StudytitleRight}>
                    최대인원 : {study.capacity}명
                  </h4>
                </div>
                <b className={RoungeStyle.usingSkill}>사용 기술</b>
                <div className={RoungeStyle.StudySkill}>
                  {study.category?.map((skill, num) => (
                    <span key={num} className={RoungeStyle.Studytag}>
                      {skill}
                    </span>
                  ))}
                </div>
                {/* <div>
                  {study.region} {study.class}반
                </div> */}
                {/* <h4>소개 글</h4> */}
                {/* <div>{study.description}</div> */}
              </div>
            </div>
          ))
          .slice(0, viewList)}
      </div>
      {moreButton && (
        <div className={RoungeStyle.buttonContainer}>
          <div className={RoungeStyle.buttonLine}>
            <button className={RoungeStyle.moreButton} onClick={moreStudyList}>
              더보기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoungeList;
