import React, { useState } from "react";
import * as d3 from "d3";
import AnimatedBar from "./AnimatedBarHooks";
import '../../css/ChartStyle.min.css';

const Chart = () => {
    const generateData = (value, length = 5) =>
        d3.range(length).map((item, index) => ({
            index: index,
            date: index,
            value: value === null || value === undefined ? Math.random() * 100 : value
        }));

    const [data, setData] = useState(generateData());
    const changeData = () => {
        setData(generateData());
    };
    return (
        <div className="chart">
            <span className="chart__label">D3 Bar Chart</span>
            <AnimatedBar
                className="chart__body"
                data={data}
                width={800}
                height={500}
                top={20}
                bottom={30}
                left={30}
                right={0}
            />
            <button className="chart__button" onClick={changeData}>Randomize</button>
        </div>
    );
}
export default Chart
