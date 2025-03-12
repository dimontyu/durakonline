'use strict'
const ws_controller = require('./ws-router/ws.ws');
const { parse } = require('url');


const Game2 = new Set();
const Game3 = new Set();
const Game4 = new Set();
exports.connect = function (ws, map, request) {
	const userId = request.session.userId;
	const { pathname } = parse(request.url);
	var Game;

	//console.log(pathname);
	switch (pathname) {
		case '/2':
			Game2.add(userId); Game = Game2;
			break;
		case '/3':
			Game3.add(userId); Game = Game3;
			break;
		case '/4':
			Game4.add(userId); Game = Game4;
			break;
		default:
			console.log(`Sorry, we are out of ${userId}.`);

	}


	map.set(userId, ws);

	ws.on('error', console.error);
	let c = 0;
	function S(message) {
		c += 1;
		ws_controller.message(ws, message, userId, map, Game, Number(pathname[1]));
		c < 3 ? ws.prependOnceListener('message', S) : null;
	}


	ws.prependOnceListener('message', S);

	ws.on('close', function () {
		map.delete(userId);
		switch (pathname) {
			case '/2':

				Game2.has(userId) ? Game2.delete(userId) : null;
				break;
			case '/3':
				Game3.has(userId) ? Game3.delete(userId) : null;
				break;
			case '/4':
				Game4.has(userId) ? Game4.delete(userId) : null;
				break;
			default:
				console.log(`Sorry, we are out of ${userId}.`);

		}



	});

};