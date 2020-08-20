const fs = require('fs');
const path = require('path');
const script = require('./script.js');
const webpack = require('webpack.js');

describe('Webpackjs', () => {
    it('should prompt the user with questions', () => {
        const callback = jest.fn();
        callScriptjs(callback); //do we have a function we can invoke script.js with?
        expect(callback).toHaveBeenCalledTimes(1)
    })
    it('should generate a webpack.config.js file', () => {
        expect(subject(/* look into how to test a new file creation? /*/).toBe('/Week6/create-fullstack-webpack-app/webpack.config.js')
    })
})