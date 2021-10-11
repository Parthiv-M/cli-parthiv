#!/usr/bin/env node
'use strict';
const React = require('react');
const importJsx = require('import-jsx');
const { render } = require('ink');
const meow = require('meow');

const ui = importJsx('./ui');

const cli = meow(`
	Usage
	  $ cli-parthiv

	Options
		--gradient, -g  gradient-name which can be mind, fruit, morning or passion. The default gradient is cristal.

	Example
	  $ cli-parthiv --gradient=mind
`, 
{
	flags: {
		gradient: {
			type: "string",
			alias: "g"
		}
	}
});

render(React.createElement(ui, cli.flags));
