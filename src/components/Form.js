import React from 'react';

class Form extends React.Component {
    render() {
    return (
        <>
        <div className="row justify-content-center py-4">
        <div className="col-sm"></div>
        <div className="col-4 text-center">
        <h4 className="text-secondary">Enter your zipcode and 2 letter country to get the current weather.</h4>
        <form className="form-group" onSubmit={this.props.getWeather}>
            <input type="text" name="zip" placeholder="Zipcode" className="form-control mb-2" />
            <input type="text" name="country" placeholder="Country" className="form-control mb-3" />
            <button className="btn btn-info btn-lg">Get Ya Weather</button>
        </form>
        </div>
        <div className="col-sm"></div>
        </div>
        </>
    )
}
}
export default Form;