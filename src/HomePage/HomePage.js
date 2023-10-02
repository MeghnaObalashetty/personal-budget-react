import React, { useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import * as d3 from 'd3';
function HomePage() {
    useEffect(() => {
        // Define the initial data structure
        const dataSource = {
          datasets: [{
            data: [],
            backgroundColor: [
              '#ffcd56',
              '#ff6384',
              '#36a2eb',
              '#fd6b19',
              '#33FFFF',
              '#A033FF',
              '#33FF6F',
              '#FF5733',
            ],
          }],
          labels: [],
        };
          let myPieChart1;
          const createChart2 = () =>{
          const ctx = document.getElementById('myChart2').getContext('2d');
           if (myPieChart1) {
             myPieChart1.destroy();
          }
          myPieChart1 = new Chart(ctx, {
            type: 'pie',
            data: dataSource,
          });
        }
         const createD3js = () => {
        const chartWidth = 600;
        const chartHeight = 600;
        const chartMargin = 85;
        const chartRadius = Math.min(chartWidth, chartHeight) / 2 - chartMargin;
      
        const chartSvg = d3.select("#myChart1")
          .append("svg")
          .attr("width", chartWidth)
          .attr("height", chartHeight)
          .append("g")
          .attr("transform", `translate(${chartWidth / 2},${chartHeight / 2})`);
      
        const chartPie = d3.pie().sort(null).value((d) => d.data);
      
        const chartColor = d3.scaleOrdinal()
          .domain(dataSource.labels)
          .range(d3.schemeCategory10);
      
        const chartDataReady = chartPie(
          dataSource.datasets[0].data.map((data, index) => ({
            data,
            label: dataSource.labels[index],
          }))
        );
      
        const chartArc = d3.arc()
          .innerRadius(chartRadius * 0.5)
          .outerRadius(chartRadius * 0.8);
      
        const chartOuterArc = d3.arc()
          .innerRadius(chartRadius * 0.9)
          .outerRadius(chartRadius * 0.9);
      
        chartSvg
          .selectAll('chartPolylines')
          .data(chartDataReady)
          .join('polyline')
          .attr('stroke', 'black')
          .style('fill', 'none')
          .attr('stroke-width', 1)
          .attr('points', function (d) {
            const posA = chartArc.centroid(d);
            const posB = chartOuterArc.centroid(d);
            const posC = chartOuterArc.centroid(d);
            const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
            posC[0] = chartRadius * 0.95 * (midangle < Math.PI ? 1 : -1);
            return [posA, posB, posC].map(point => point.join(',')).join(' ');
          });
      
        chartSvg
          .selectAll('chartSlices')
          .data(chartDataReady)
          .join('path')
          .attr('d', (d) => chartArc(d))
          .attr('fill', (d) => String(chartColor(d.data.label)))
          .attr('stroke', 'white')
          .style('stroke-width', '2px')
          .style('opacity', 0.7);
      
        chartSvg
          .selectAll('chartLabels')
          .data(chartDataReady)
          .join('text')
          .text((d) => d.data.label)
          .attr('transform', function (d) {
            const pos = chartOuterArc.centroid(d);
            const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
            pos[0] = chartRadius * 0.99 * (midangle < Math.PI ? 1 : -1);
            return `translate(${pos})`;
          })
          .style('text-anchor', function (d) {
            const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
            return midangle < Math.PI ? 'start' : 'end';
          });
      }

        const getBudget2 = () => {
          axios.get('http://localhost:3002/budget')
            .then(function (res) {
              for (let i = 0; i < res.data.myBudgetnew.length; i++) {
                dataSource.datasets[0].data[i] = res.data.myBudgetnew[i].budget;
                dataSource.labels[i] = res.data.myBudgetnew[i].title;
              }
              createChart2();
              createD3js();
            })
            .catch(function (error) {
              console.error(error);
            });
        }
        getBudget2();
      }, []);   
      
    return (
        <main id="maincontent">
        <section className="container center">
            <article className="page-area">

            <div className="text-box">
                    <h1>Stay on track</h1>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down, you would get surprised! Proper budget management depends on real data... and this app will help you with that!
                    </p>
                </div>

                <div className="text-box">
                    <h1>Alerts</h1>
                    <p>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
                </div>

                <div className="text-box">
                    <h1>Results</h1>
                    <p>
                        People who stick to a financial plan, budgeting every expense, get out of debt faster! Also, they to live happier lives... since they expend without guilt or fear... because they know it is all good and accounted for.
                    </p>
                </div>

                <div className="text-box">
                    <h1>Free</h1>
                    <p>
                        This app is free!!! And you are the only one holding your data!
                    </p>
                </div>

                <div className="text-box">
                    <h1>Stay on track</h1>
                    <p>
                        Do you know where you are spending your money? If you really stop to track it down, you would get surprised! Proper budget management depends on real data... and this app will help you with that!
                    </p>
                </div>

                <div className="text-box">
                    <h1>Alerts</h1>
                    <p>
                        What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
                </div>

                <div className="text-box">
                    <h1>Results</h1>
                    <p>
                        People who stick to a financial plan, budgeting every expense, get out of debt faster! Also, they to live happier lives... since they expend without guilt or fear... because they know it is all good and accounted for

                    </p>
                </div>

                <div className="text-box">
                    <h1>My first chart using Json</h1>
                    <p>
                        <canvas id="myChart2" width="400" height="400"></canvas>
                    </p>
                </div>
                <div>
                    <h1>My Second chart using D3js</h1>
                    <div id="myChart1" width="600" height="600"></div>
                </div>
            </article>

        </section>
    </main>
    );
}

export default HomePage;