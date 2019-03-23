require('raf/polyfill');
require('babel-polyfill');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
global.fetch = require('jest-fetch-mock');

Enzyme.configure({ adapter: new Adapter() });

