import './Home.scss';
import { Link } from 'react-router-dom';
export default function Home() {
    return <div className="home">
        <Link to={`/vendor-list`}>لیست فروشگاه ها</Link>
    </div>
}