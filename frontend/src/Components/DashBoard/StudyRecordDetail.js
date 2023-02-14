import { ResponsiveBar } from "@nivo/bar";

const StudyRecordDetail = ({ userTime }) => {
  return (
    <div style={{ width: "37vw", height: 300 }}>
      <ResponsiveBar
        data={userTime}
        keys={["studyTime"]}
        indexBy="day"
        layout="horizontal"
        margin={{ top: 0, right: 60, bottom: 50, left: 110 }}
        padding={0.6}
        valueScale={{ type: "linear" }}
        colors="#CABBE7"
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -60,
        }}
      />
    </div>
  );
};
export default StudyRecordDetail;
