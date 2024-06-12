import React, {useState, useRef, useEffect } from "react";
import { useDashboardContext } from "../../utils/contexts/dashboardContext";
import * as d3 from 'd3'; // Import everything from D3

export const WordCloud = () => {
  const svgRef = useRef(null);
  const {userData, setUserData} = useDashboardContext();

  console.log(userData)


  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg.append('circle')
      .attr('cx', 100) // Center X coordinate
      .attr('cy', userData)  // Center Y coordinate
      .attr('r', 40)   // Radius
      .attr('fill', 'blue');

  }, []);

  return (
    <div className="App">
      <svg ref={svgRef} width={200} height={100}>
      </svg>
    </div>
  );
};
