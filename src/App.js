import React, {Component} from "react";
import { string } from 'prop-types';
import marked from 'marked';
import "./App.css";

export default class App extends Component {
  state = {text:"# Hola Campers"};

  static propTypes = {
    text: string
  };

  handleChange = (e) =>{
    this.setState({text: e.target.value})
  };

  createInerHtml = (text) =>{
    return {__html: marked(text, {sanitize: true})}
  };

  render() {
      const {text} = this.state;

      return (
      <div className="container">
        <div className="container text-center">
          <h1 className="titulo">Markdown Previewer FCC</h1>
        </div>
        <div className="row">
          <div className="col-md-6 titulo">
            <textarea type="text"
              className="form-control"
              value={text}
              onChange={this.handleChange}
              rows="20"
            />
          </div>
          <div className="col-md-6 titulo">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Markdown</h3>
              </div>
              <div className="panel-body" dangerouslySetInnerHTML={this.createInerHtml(text)}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

