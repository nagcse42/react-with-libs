import React from "react";
import CountUp, { useCountUp } from "react-countup";

function CountUpNums() {
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 10000,
    startOnMount: false
  });
  return (
    <div>
      <div>
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Resume</button>
        <button onClick={() => update(200)}>Update to 2000</button>
      </div>
      <h1>
        <CountUp end={200}></CountUp> +Yrs
        <br />
        <CountUp end={200} duration={10}></CountUp>
        <br />
        <CountUp end={1000} start={500} duration={5}></CountUp>
        <br />
        <CountUp end={1000} start={500} duration={2} prefix="$"></CountUp>
        <br />
        <CountUp end={1000} start={700} duration={3} suffix="USD"></CountUp>
      </h1>
    </div>
  );
}

export default CountUpNums;
