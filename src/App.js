import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Calculator />
  );
}

class ButtonEle extends React.Component {
  handleClick = event => {
    this.props.buttonPressed(event.target.innerText);
  }

  render(){
    let {value} = this.props;

    return(
      <button className={this.props.className} style={this.props.style} onClick={this.handleClick}>{value}</button>
    );
  }
}

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text : "0",
      num_1 : null,
      num_2 : null,
      op : null
    }
  }

  buttonPress = (value) => {
    let {text, op, num_1, num_2} = this.state;
    let result;
    let operators = ['+','-','*','/']

    if(!value){
      return;
    }

    if(value == "clear"){
      result = "0";
      this.setState({text : result});
      return;
    }

    if(value == "a^2"){
      result = parseFloat(text) * parseFloat(text);
      this.setState({text : result});
      return;
    }

    if(operators.indexOf(value)>=0){
      let temp = text;
      this.setState({num_1 : temp, text : '', op:value});
    }
    else if(value == "="){
        if(op == '+'){
          result = parseFloat(num_1)+parseFloat(text);
        }

        if(op == '-'){
          result = parseFloat(num_1)-parseFloat(text);
        }

        if(op == '*'){
          result = parseFloat(num_1)*parseFloat(text);
        }

        if(op == '/'){
          result = parseFloat(num_1)/parseFloat(text);
        }

        this.setState({text : result});
    }else{
      if(text == "0"){
        text = "";
      }

      result = text + value;
      this.setState({text : result});
    }

  }

  render(){
    return (
      <div className="container ContainerStyle">
        <div className="row">
          <input className="col-lg-12 ButtonCommonStyle" value={this.state.text} style={{backgroundColor : "black"}}></input>
        </div>

        <div className="row">
          <ButtonEle className="col-lg-9 ButtonCommonStyle" value="clear" buttonPressed ={this.buttonPress} style={{backgroundColor : "black"}}></ButtonEle>
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="/" buttonPressed ={this.buttonPress} style={{backgroundColor : "orange"}}></ButtonEle>        
        </div>

        <div className="row">
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="1" buttonPressed ={this.buttonPress}/>
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="2" buttonPressed ={this.buttonPress} />     
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="3" buttonPressed ={this.buttonPress} />
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="+" buttonPressed ={this.buttonPress} style={{backgroundColor : "orange"}}/>     
        </div>

        <div className="row">
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="4" buttonPressed ={this.buttonPress}/>
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="5" buttonPressed ={this.buttonPress} />     
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="6" buttonPressed ={this.buttonPress} />
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="-" buttonPressed ={this.buttonPress} style={{backgroundColor : "orange"}}/>     
        </div>

        <div className="row">
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="7" buttonPressed ={this.buttonPress}/>
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="8" buttonPressed ={this.buttonPress} />     
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="9" buttonPressed ={this.buttonPress} />
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="*" buttonPressed ={this.buttonPress} style={{backgroundColor : "orange"}}/>     
        </div>

        <div className="row">
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="." buttonPressed ={this.buttonPress}/>
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="0" buttonPressed ={this.buttonPress} />     
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="a^2" buttonPressed ={this.buttonPress} />
          <ButtonEle className="col-lg-3 ButtonCommonStyle" value="=" buttonPressed ={this.buttonPress} style={{backgroundColor : "orange"}}/>     
        </div>


      </div>
    );
  }
}

export default App;
