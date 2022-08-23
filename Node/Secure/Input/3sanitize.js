import React from 'react';
var escape = require('html-escape');

var badData =String.raw=`
    <script>
    alert("I'm not sanitized!");
    </script>
`;
var goodData=escape(badData);
export default class App extends React.Component{
    render(){
        return (
            <div>
            <h1>Hello World</h1>
            <h2>Bad Data</h2>
            <div>{badData}</div>
            <h2>Clean Data</h2>
            <div>{goodData}</div>
            </div>
        );
    }
}
//-------
var shellescape=require('shell-escape')
var args=[
    'echo','hello',
    'how are you doing $USER',
    '"double"',"'single'"
];
var escaped = shellescape(args);
console.log(escaped);
//------
var escape = require("html-escape");
var xssAttempt = "Hello <script>while(1);</script> world!";
// Output safe html
console.log("<p>" + escape(xssAttempt) + "</p>");
// "<p>Hello &lt;script>while(1);&lt;/script> world!</p>"