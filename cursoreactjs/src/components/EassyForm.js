import React from 'react';

export class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Por favor, cuentanos porqué amas tanto DEW.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      console.log('El text area ha cambiado a:'+this.state.value);
    }
  
    handleSubmit(event) {
      alert('La respuesta ha sido subida: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  