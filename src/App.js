import './App.css';
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3'; // Import everything from D3


function App() {
  const svgRef = useRef(null);


  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg.append('circle')
      .attr('cx', 100) // Center X coordinate
      .attr('cy', 50)  // Center Y coordinate
      .attr('r', 40)   // Radius
      .attr('fill', 'blue');

  }, []);

  return (
    <div className="App">
      <svg ref={svgRef} width={200} height={100}>
      </svg>
    </div>
  );
}

export default App;
