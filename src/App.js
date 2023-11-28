import React, {useEffect, useRef, useState} from 'react';
import useWebSocket from 'react-use-websocket';
import io from "socket.io-client";


import './App.css';
import * as PropTypes from "prop-types";
import Match from "../src/components/websocketHandler";

const ws = new WebSocket('wss://betlivedemo.oservices.me/ws');

function App() {
	//give an initial state so that the data won't be undefined at start
	const [bids, setBids] = useState([0]);

	const apiCall = {
		opt: "1",
		lang: 'en',
		ski: 1
	};

	ws.onopen = (event) => {
		ws.send(JSON.stringify(apiCall));
	};

	ws.onmessage = function (event) {
		const json = JSON.parse(event?.data);
		console.log(json.info)
		const info = JSON.parse(json?.info);
		console.log(info)
		try {
			console.log('setting bids')
			console.log(json)
			setBids(info);

		} catch (err) {
			console.log(err);
		}
	};
	//map the first 5 bids
	const firstBids = bids?.map((item) => {
		console.log(`bids name ${item}`)
		return (
			<div style={{background: 'red'}} key={item.mid}>
				<p> {item.mn}</p>
			</div>
		);
	});

	return <div>{firstBids}</div>;
}

export default  App;