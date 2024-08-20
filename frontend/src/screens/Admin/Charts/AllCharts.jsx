import React from 'react';
import DoughnutChart from './Doughnut';
import PieChart from './PieChart';
import BarChart from './BarChart';

function AllCharts() {
    return (
        <>
            <div className="h-screen overflow-y-auto">
                <div className="lg:flex justify-center items-center lg:items-center lg:space-y-4 lg:p-4">
                    <div className="flex flex-col items-center space-y-4 p-4 lg:flex-row lg:space-y-0">
                        <DoughnutChart />
                        <PieChart />
                    </div>
                </div>
                <div>
                    <BarChart/>
                </div>
            </div>

        </>
    );
}

export default AllCharts;
