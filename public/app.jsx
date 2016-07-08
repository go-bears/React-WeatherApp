
// React.createClass only takes 1 argument, an options object
// the options object defines the behavior of the component
// this is the most common Reach method
var Greeter = React.createClass({

    // getDefaultProps sets a default value to the props called "name"
    getDefaultProps: function () {
        return {
            name: 'React'
        };
    },
    render: function() {
        var name = this.props.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message +'yay!'}</p>
            </div>

        );
    }

}); 

var firstname = "Melissa";

ReactDOM.render(
    // first argument is what to render
    // 'name' is a js prop (properties) set to "Melissa"
    <Greeter name={firstname} message='message from props!'/>,
    // second argument is where to render it, 
    // here in this case the div named 'app'
    document.getElementById('app')

    );