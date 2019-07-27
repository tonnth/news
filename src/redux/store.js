import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {createLogger} from 'redux-logger';
const customLogger = createLogger({
	colors: {
		title: (action) =>
		{
			if (action && action.type)
			{
				if (action.type.indexOf('FAIL') >= 0) return 'red';
				if (action.type.indexOf('SUCCESS') >= 0) return 'green';
				if (action.type.indexOf('UPDATE') >= 0) return 'orange';
				if (action.type.indexOf('GET') >= 0) return '#EBB72C';
				if (action.type.indexOf('CONNECT') >= 0) return '#972A93';
			}

			return 'blue';
		},
		prevState: function ()
		{
			return "#9E9E9E";
		},
		action: function ()
		{
			return "#03A9F4";
		},
		nextState: function ()
		{
			return "#4CAF50";
		},
		error: function ()
		{
			return "#F20404";
		},
	},
});
const middleware = applyMiddleware(thunk,customLogger);
//const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);
