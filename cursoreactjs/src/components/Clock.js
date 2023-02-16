export default function Clock(fecha){
    return (
        <div>
            <h1>Será aproximadamente las {fecha.date.toLocaleTimeString()}</h1>
        </div>
    )
}