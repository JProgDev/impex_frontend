import {usefulLinks} from "../../../constants/useful_links";
import {UsefulLink} from "../../../components";

const UsefulLinks = () => {
    return  (<div className={'mt-4'}>
        <h3 className="title text-uppercase">Foydali Linklar</h3>
        <div className="container">
            <div className="row">
                {usefulLinks.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <UsefulLink {...item}/>
                    </div>
                ))}
            </div>
        </div>
    </div>)
}

export default UsefulLinks;