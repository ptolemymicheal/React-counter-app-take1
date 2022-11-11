
import './App.css';
import Counter from './counter';
import React from 'react';

class ErrorBoundary extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = { error: false, errorInfo: null };  
  }  
    
  componentDidCatch(error, errorInfo) {  
    
    this.setState({  
      error: error,  
      errorInfo: errorInfo  
    })  
  }  
    
  render() {  
    if (this.state.errorInfo) {  
      return (  
        <div>  
          <h1 oops-page><span>Oops </span>something went wrong.</h1>  
          <details>  
            {this.state.error && this.state.error.toString()}  
            <br />  
            {this.state.errorInfo.componentStack}  
          </details>  
        </div>  
      );  
    }  
    return this.props.children;  
  }    
}  
function App() {

  return (
    <div className="">
      <ErrorBoundary>
      <Counter />
      </ErrorBoundary>
    </div>
  );
}



export default App;
