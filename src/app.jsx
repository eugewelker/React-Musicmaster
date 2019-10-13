import React,{Component} from 'react'
import './app.css';
import {Button,FormControl,Form} from 'react-bootstrap';

class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-title">Music Master</div>
          <div class="row justify-content-center">
          <Form inline>
          <FormControl placeholder="search an artist..."/>
          <Button>Submit</Button>
          </Form>
          </div>
          <div className="Profile">
            <div>Artist Picture</div>
            <div>Artist Name</div>
          </div>
          <div className="Gallery">Gallery
          </div>
      </div>
    )
  }
}
export default App;
