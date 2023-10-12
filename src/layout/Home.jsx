import { Link } from "react-router-dom";
// Props : 상위컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것.
import {nation, nations} from "../data/data";
const Home = () => {
    return(
        <div className="home">
            <h2>Header.jsx</h2>
            {/* <Prop name="name1" age="11"/> */}
            <Link to={
                {
                    pathname:"/param/10"
                }
            }>param전송 {'{path variable}'}
            </Link>
            <br/>
            <Link to={
                {
                    pathname: "/param",
                    search:"?q=aa&page=10"
                }
            }>param전송(query string)
            </Link>
            {nations.map(n => (
                    <Link to={{
                        pathname: `/param/${n.name}`,
                    }}>
                        {n.name}
                    </Link>
                ))}
        </div>
    )
}

export default Home;