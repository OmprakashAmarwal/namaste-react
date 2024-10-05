import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count2: 5
        }
        console.log("Parent Class constructor Called");

    }
    componentDidMount(){
        console.log("Parent Class componentDidMount Called");
    }
    render() {
        console.log("Parent Class render Called");

        const { name, location } = this.props;
        const { count, count2 } = this.state;
        return <div className="user-card">
            <h1>Count {count} {count2}</h1>
            <button onClick={() => {
                // NEVER UPDSTE STATE VARIABLES DIRECTLY FROM THIS.STATE
                this.setState({
                    count: this.state.count + 1
                })
            }}>Increment Count </button>
            <h2>User Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>email Id : opamarwal7@gmail.com</h4>
            <UserClass2 name={"Omi"} location={"Bhilwara Rajasthan India (Class based component)"} />
            <UserClass2 name={"Amarwal"} location={"Bhilwara Rajasthan India (Class based component)"} />


        </div>
        
    }
}


class UserClass2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count2: 5
        }
        console.log(this.props.name+" constructor called");
    }
    componentDidMount(){
        console.log(this.props.name+" componentDidMount called");
    }
    render() {
        const { name, location } = this.props;
        const { count, count2 } = this.state;
        console.log(name+" Child render called");

        return <div className="user-card">
            <h1>Count {count} {count2}</h1>
            <button onClick={() => {
                // NEVER UPDSTE STATE VARIABLES DIRECTLY FROM THIS.STATE
                this.setState({
                    count: this.state.count + 1
                })
            }}>Increment Count </button>
            <h2>User Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>email Id : opamarwal7@gmail.com</h4>

        </div>
    }
}

export {UserClass, UserClass2}

