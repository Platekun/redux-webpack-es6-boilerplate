// import React from 'react';
import ReactDOM from 'react-dom';
// import { JSDOM } from 'jsdom';

// const doc = new JSDOM('<!doctype html><html><body></body></html>');
// global.document = doc;
// global.window = doc.defaultView;

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;


