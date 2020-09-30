warning: LF will be replaced by CRLF in client-app/src/App.tsx.
The file will have its original line endings in your working directory.
[1mdiff --git a/client-app/src/App.tsx b/client-app/src/App.tsx[m
[1mindex 97b42c0..87d6f1e 100644[m
[1m--- a/client-app/src/App.tsx[m
[1m+++ b/client-app/src/App.tsx[m
[36m@@ -2,13 +2,32 @@[m [mimport React , {Component} from 'react';[m
 import logo from './logo.svg';[m
 import './App.css';[m
 [m
[31m-function App() {[m
[31m-  return ([m
[31m-     [m
[31m-    <div className="App">[m
[31m-    </div>[m
[31m-    [m
[31m-  );[m
[32m+[m[32mclass App extends Component {[m
[32m+[m
[32m+[m[32m  state = {[m
[32m+[m[32m    values: [][m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  componentDidMount(){[m
[32m+[m[32m    this.setState({[m
[32m+[m[32m      values : [{ id: 1, name: 'Value 101' }, { id: 2, name: 'Value 102' }][m
[32m+[m[32m    });[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  render(){[m
[32m+[m[32m    return ([m[41m    [m
[32m+[m[32m      <div className="App">[m
[32m+[m[32m        <header className='App-header'>[m
[32m+[m[32m          <img src={logo} className='App-logo' alt='logo' />[m
[32m+[m[32m          <ul>[m
[32m+[m[32m            {this.state.values.map((value: any) => ([m
[32m+[m[32m                <li>{value.name}</li>[m
[32m+[m[32m              ))}[m
[32m+[m[32m          </ul>[m
[32m+[m[32m        </header>[m
[32m+[m[32m      </div>[m
[32m+[m[32m    );[m
[32m+[m[32m  }[m
 }[m
 [m
 export default App;[m
