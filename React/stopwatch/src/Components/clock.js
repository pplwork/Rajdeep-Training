import timeConvert from "./utilities/timeConvert"
import format from "./utilities/format"

function Clock({ time }) {
    let newTime = timeConvert(time)
    return (<span className="clock__span">
        <p className="clock__paragraph">{format(newTime.hr)}</p>:
        <p className="clock__paragraph">{format(newTime.min)}</p>:
        <p className="clock__paragraph">{format(newTime.sec)}</p>.
        <p className="clock__paragraph clock__paragraph--primary">{format(newTime.ms)}</p>
    </span>)
}

export default Clock