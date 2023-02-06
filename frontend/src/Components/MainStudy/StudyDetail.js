import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import StudySwitchbar from "./StudySwitchbar";
import StudyStyle from "../../Style/MainStudy/StudyDetail.module.css";

const StudyDetail = () => {
  const studyId = useSelector((state) => state.userStudyInfo.studyId);
  const studyname = useSelector((state) => state.userStudyInfo.studyname);
  const dummyimg =
    "https://cdn.pixabay.com/photo/2013/10/27/17/14/snowfall-201496_960_720.jpg";
  const imgstyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${dummyimg})`,
  };
  //   const navigate = useNavigate();
  return (
    <>
      <div className={StudyStyle.StudyDetailContainer}>
        <div style={imgstyle}>
          <div className={StudyStyle.StudyDetailback}>
            <p className={StudyStyle.StudyDetailName}>{studyname}</p>
            <button className={StudyStyle.StudyBtn}>참여하기</button>
          </div>
        </div>
        <div className={StudyStyle.studySwitchbarContainer}>
          <StudySwitchbar id={studyId} />
          <hr className={StudyStyle.studyHr}></hr>
        </div>
        <div className={StudyStyle.studyDetailInside}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default StudyDetail;
