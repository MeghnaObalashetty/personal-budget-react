function HomePage() {
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
                    <button className="randomize">randomize</button>
                    <svg id="myChart1" width="600" height="400">  </svg>
                </div>
            </article>

        </section>
    </main>
    );
}

export default HomePage;