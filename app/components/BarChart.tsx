import * as d3 from 'd3'
import { BarChartProps } from '../constants/types/types';  

export const BarChart: React.FC<BarChartProps> = ({width, height, data}) => {
    const xScale = d3.scaleBand(["2018", "2019", "2020", "2021", "2022", "2023"], [0, width]);
    const yScale = d3.scaleLinear([0, 5000], [0, height])

    return (
        <div>

        </div>
    )

}