import React, { PropTypes, Component } from 'react';

class ColumnEditor extends Component {
   constructor() {
      super();
      this.handeKeyDown = this.handeKeyDown.bind(this);
   }

   static propTypes = {
      name: PropTypes.string,
      handleChange: PropTypes.func.isRequired,
      commitValue: PropTypes.func.isRequired
   }

   componentDidMount() {
      this._input.focus();
      this._input.select();
   }

   handeKeyDown({ key }) {
      const { commitValue } = this.props;

      switch (key) {
         case 'Tab':
            commitValue();
            break;
      
         default:
            break;
      }
   }

   render() {
      const { name, handleChange, commitValue } = this.props;
      return (
         <input
            ref={ i => { this._input = i } }
            type="text"
            value={name}
            onChange={handleChange}
            onKeyDown={this.handeKeyDown}
            onBlur={commitValue} 
            className="react-grid-HeaderCell edit-input"
            />
      );
   }
}

export default ColumnEditor;
