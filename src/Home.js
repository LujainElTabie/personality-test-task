import React from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryPie,
} from "victory";
import { useSelector, useDispatch } from "react-redux";
import {
  selectExC,
  selectExtrovertAbove,
  selectInC,
  selectIntrovertAbove,
} from "./features/counter/counterSlice";

function Home() {
  const introvert = useSelector(selectInC);
  const extrovert = useSelector(selectExC);
  const introvertAbove = useSelector(selectIntrovertAbove);
  const extrovertAbove = useSelector(selectExtrovertAbove);
  const data = [
    { personality: 1, earnings: introvert },
    { personality: 2, earnings: extrovert },
  ];

  const sampleData = [
    { x: "Introverts scoring <50%", y: (introvertAbove / introvert) * 100 },
    {
      x: "Introverts scoring >50%",
      y: ((introvert - introvertAbove) / introvert) * 100,
    },
    { x: "Extroverts scoring <50%", y: (extrovertAbove / extrovert) * 100 },
    {
      x: "Extroverts scoring >50%",
      y: ((extrovert - extrovertAbove) / extrovert) * 100,
    },
  ];

  return (
    <div>
      <div className="container">
        <div
          className="greeting"
        >
          {" "}
          Hello!{" "}
        </div>
        <div
          className="greeting"
        >
          {" "}
          Welcome to the personality test{" "}
        </div>
        <div
          className="greeting"
        >
          {" "}
          where you can learn if you are an introvert or extrovert.{" "}
        </div>
      </div>
       <div style={{paddingTop:"15vh"}}>
       <h1 
        className="heading"
        >These are some statistics about people who have previously taken the test...</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"space-around" }}>
        <div className="charts">
          <VictoryChart
            // adding the material theme provided with Victory
            theme={VictoryTheme.material}
            domainPadding={50}
          >
            <VictoryAxis
              tickValues={[1, 2]}
              tickFormat={["Introvert", "Extrovert"]}
              style={{ fontSize: "8px" }}
            />
            <VictoryAxis dependentAxis tickFormat={(x) => x} />
            <VictoryBar data={data} x="personality" y="earnings" />
          </VictoryChart>
        </div>
        <div className="charts">
          <VictoryPie
            colorScale={["tomato", "#fec2b2", "gold", "#fefcb8", "navy"]}
            data={sampleData}
            labelPosition="centroid"
            labelRadius={50}
            labelPlacement="parallel"
          />
        </div>
      </div>
       </div>
      <div style={{ display: "flex", alignItems:"center", flexDirection:"column", margin:"25px" }}>
        <div  className="heading">...and now it's time for you to take it too!</div>
        <Link to="/test"><button className="btn btn-white btn-animate" >Start Test</button></Link>
      </div>
    </div>
  );
}

export default Home;
