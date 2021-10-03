import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }

  

  addItems = (item, quantity) => {
    return () => {
      const result = this.state.items.findIndex((element, index, array) => {
        if(element.value === item){
          return true;
        } else {
          return false;
        }
      });

      if(result !== -1) {
        let newArray = [...this.state.items];
        newArray[result].qty += quantity;

        this.setState({items: newArray})

      } else {
        this.setState({
          items: [...this.state.items, {id: this.state.items.length + 1, value: item, qty: quantity}]})
      }

    }
  };


  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick = { this.addItems("Carrots", 10) } >Carrots</button>
      <button onClick = { this.addItems("Strawberries", 5) } >Strawberries</button>
      <button onClick = { this.addItems("Yogurt", 3) } >Yogurt</button>
      <button onClick = { this.addItems("Beer", 100) } >Beer</button>
    </div>
  }
}

export default App;