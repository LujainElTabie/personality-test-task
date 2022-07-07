import React from 'react'
import {
    Link
  } from "react-router-dom";
import "./styles/home.css"
// import { VictoryBar,VictoryChart,VictoryTheme,VictoryAxis, VictoryPie } from 'victory';
import { useSelector, useDispatch } from "react-redux";
import { selectExC, selectExtrovertAbove, selectInC, selectIntrovertAbove } from './features/counter/counterSlice';



function Home() {
    const introvert = useSelector(selectInC);
    const extrovert = useSelector(selectExC);
    const introvertAbove = useSelector(selectIntrovertAbove);
    const extrovertAbove = useSelector(selectExtrovertAbove);
    
  return (
    <div>

    <div className='container'>
        <div style={{fontSize:"3vw", fontFamily:'cursive', textAlign:"center"}}> Hello! </div>
        <div style={{fontSize:"3vw", fontFamily:'cursive', textAlign:"center"}}> Welcome to the personality test </div>
        <div style={{fontSize:"3vw", fontFamily:'cursive', textAlign:"center"}}> where you can learn if you are an introvert or extrovert </div>
        
     
    </div>
    <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>

{/* <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={50}
      >
        <VictoryAxis
          tickValues={[1, 2]}
          tickFormat={["Introvert", "Extrovert"]}
          style={{fontSize:"8px"}}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (x )}
        />
        <VictoryBar
          data={data}
          x="personality"
          y="earnings"
        />
      </VictoryChart> */}
    </div>
    <div>
   <button to="/test">Start Test</button>
    </div>
    </div>
    
  )
}

export default Home