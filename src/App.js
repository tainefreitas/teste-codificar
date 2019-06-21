import React from 'react';
import Grid from '@material-ui/core/Grid';
import Axios from 'axios';

import './ListCards';
import './config';
import config from './config';
import ListCards from './ListCards';
import TopBar from './TopBar';

class App extends React.Component{

  constructor(){
    super();
    this.state={
      loading: true,
      budgets: []
    }
  }
  async componentDidMount(){
    const response =  await Axios.get(config.apiURL);
    setTimeout(() =>{
      this.setState({
        budgets: response.data,
        loading: false
      }); 
    }, 1000);
  }
 
  render (){
    return(
      <div className="App">
        <Grid container spacing={2}>
          <TopBar />
        
  

              {this.state.budgets.map((budgets, index)=>{
                return(<ListCards
                  budgets = {budgets}
                  key = {budgets.id} 
                  />
                  )}
                )}
        </Grid>
      </div>
    );
  }
}

export default App;
