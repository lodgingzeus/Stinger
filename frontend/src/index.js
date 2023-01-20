import ReactDOM from 'react-dom/client'
import ParticlesBg from 'particles-bg'
import App from './App'
import './index.css'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <div>
            <ParticlesBg bg={true} type="circles"/>
            <App />
        </div>
    </Provider>
)