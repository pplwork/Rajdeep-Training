import Lap from "./lap";
import timeConvert from "../utilities/timeConvert";

function LapBlock(props) {
    return (
        <table className="lap__table">
            <thead className="lap__table--heading">
                <tr className="lap__table--row">
                    <th className="lap__table--head">Lap No.</th>
                    <th className="lap__table--head">Lap time</th>
                    <th className="lap__table--head">Lap difference</th>
                </tr>
            </thead>
            <tbody className="lap__table--body">
                {props.laps.map((lap, id) => <Lap key={`${id}`} count={id + 1} lastLap={props.lastLap} {...timeConvert(lap)} diff={id === 0 ? timeConvert(lap) : timeConvert(props.laps[id] - props.laps[id - 1])} />)}
            </tbody>
        </table>
    )
}

export default LapBlock