import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'



class App extends Component {
  constructor(){
    super()
    this.state ={
      FirstName:"John",
      LastName:"Kennedy",
      display:true
    }
   this.DiplayEditInputs = this.DiplayEditInputs.bind(this)
  }


  DiplayEditInputs(event){
       this.setState({display:false})     
  }

  SaveInput =(event)=>{

    this.setState({ display:true})
  }

  CancelInput =()=>{

    this.setState({display:true})
  }



  render(){

    return (

      <div className="App">
         {this.state.display ?
         <div>
            <div> {this.state.FirstName}</div>
            <div>{this.state.LastName}</div>
            <button onClick = {this.DiplayEditInputs}>Edit</button>
         </div>:null }

         {this.state.display ? null:
         <div>
           <input id ="firstname"
           type = "text"
           name ="first name"
           placeholder ={this.state.FirstName}/>
           <br></br>
           <input id ="lastname"
            type = "text"
            name ="last name"
            placeholder ={this.state.LastName}/>
            <br></br>
            <button className = "btn" onClick ={this.SaveInput}>Save</button>
            <button className ="btn"  onClick ={this.CancelInput}>Cancel</button>

         </div> }
      <div id="toggleDiv">
          <h1>Home</h1>
          <ol>
             <li>File1</li>
             <li>File2</li>
             <li>File3</li>
          </ol>
          <button id="toggle">Toggle</button>

      </div>
           
      </div>
    );
  }
  
}

export default App;
