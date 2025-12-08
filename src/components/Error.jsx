import { Link } from "react-router-dom"
import "../css/Error.css"
export default function Error () {
    return (
        <>
            <div className="error-page">
                <h1>404</h1>
                <p>page not found</p>
                <Link to='/'>Back Home</Link>
            </div>
            
        </>
    )
}