import User from "./User";
import {UserClass} from "./UserClass";
const About = () => {
    return (

        <div>
            <h1>About</h1>
            {/* <User name={"Omprakash Amarwal (functional component)"} location={"Bhilwara Rajasthan India (functional component)"} /> */}
            <UserClass name={"Omprakash Amarwal (class based component)"} location={"Bhilwara Rajasthan India (Class based component)"} />
        </div>

    )
}

export default About;