// creates GreeterMessage component with React.createClass()
// GreeterMessage is a presentational component
// presentational components takes props and renders them to the screen
var GreeterMessage = React.createClass({
    render: function () {
      // GreeterMessage accesses two props that passed to it: name, message
      var name = this.props.name;
      var message = this.props.message;

      // renders these props to the screen
      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
      );
    }
});

// creates GreeterForm component 
// GreeterFrom is also a presentational component; 
// it takes the prop name and passes it to function
// GreeterForm doesn't care if it gets updated
var GreeterForm = React.createClass({

  // takes data from html <form>

  onFormSubmit: function (e) {
    e.preventDefault();

    // challenge: store changes in variable updates
    var updates = {};
    // name variable gets assigned from render function 
    // <input ref="name" />
    var name = this.refs.name.value;
    var message = this.refs.message.value;


    if (name.length > 0) {
      this.refs.name.value = '';
      // receives data from name from Greeter component from line 63
      // this.props.onNewName(name);

      // challenge: assign updates.name with name from form; 
      updates.name = name;
    }

    if (message.length > 0) {
        this.refs.message.value = '';
        updates.message = message;

    }

    // challenge: call update and pass in updates method
    // this passes updates object to Greeter component via onNewData attribute
      this.props.onNewData(updates);

  },
  // returns GreeterForm's HTML
  // form only takes the data in name and passes name to
  // to onFormSubmit function

  // challenge: add textarea & placeholder value, give textarea ref="message"
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
            <input type="text" ref="name" placeholder="enter name"/>
        </div>
        <div>
            <textarea rows="3" cols="20" ref="message" placeholder="enter message"></textarea>
        </div>
        <div>
            <button>Set Name</button>
        </div>
      </form>
    );
  }
});

// Greeter is a container component and maintains state for the application
var Greeter = React.createClass({
    // challenge for Greeter, 3 things to do
    // add message, getting default message from getDefaultProps
    //  handleNewName() pass in updates object to replace name
    // change message from props to state


  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name,
        // challenge: add message, getting default message from getDefaultProps
        message: this.props.message
    };
  },
  // handleNewData function looks for any change in the state of the variable name 
  // and if the variable name changes.
  // then the Greeter component re-renders the child components within Greeter
  
  // challenge: pass in updates object to replace name
  handleNewData: function (updates) {
    this.setState(updates);
  },
  // handleNewName: function (name) {
  //   this.setState({
  //     name: name
  //   });
  // },

  // render compiles an actual view
  render: function () {

    var name = this.state.name;
    // var message = this.props.message;

    // challenge: change message from props to state
    var message = this.state.message;

    // Greeter container component only renders child components
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

var firstName = 'Andrew';
// renders all the Greeter components to <div id="app"> on index.html
ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
