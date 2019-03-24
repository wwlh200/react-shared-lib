# react-shared-lib
The shared lib of react project

- [How to use in main-project](#how-to-use-in-main-project)

----
## How to use in main-project
### Introduce Local Lib
```
npm link ..\react-shared-lib\packages\functional-modules\
```
### Use Component
1. import one reducer (moduleReducer)
    ```javascript
   import { moduleReducer } from 'functional-modules';
    
    const rootReducers = combineReducers({
        moduleReducer,
    });
    ```
2. import component and handle click `Next` button;  
    ```javascript
   import { Module, saveModuleDatas } from 'functional-modules';
    // below is redux store in your project
   import store from './store';

   class App extends Component {
       handleClick = () => {
           store.dispatch(saveModuleDatas(
               ModuleDatas
           ));
       }
       render() {
           return (
               <div>
                    <Module />
                    <div style={ { margin: '20px' } }>
                        <button onClick={ this.handleClick } type="button" className="btn-secondary btn-action">
                            <span className="btn-label"> Next </span>
                        </button>
                    </div>
                </div>
           );
       }
   }
    ```

## Publish
Publishing to the internal Nexus repository is done via a Jenkins job:
...
