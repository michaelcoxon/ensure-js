﻿/// <binding ProjectOpened='Run - Development, Run - Production' />
const path = require('path');
const webpack = require('webpack');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const bundleOutputDir = './dist';
const libDir = 'lib';
const srcDir = 'src';
const libraryName = 'ensure';

function DtsBundlePlugin() { }
DtsBundlePlugin.prototype.apply = function (compiler)
{
    /*
    compiler.plugin('done', function ()
    {
        var dts = require('dts-bundle');

        dts.bundle({
            name: libraryName,
            main: `dts/index.d.ts`,
            out: `.${bundleOutputDir}/index.d.ts`,
            outputAsModuleFolder: true // to use npm in-package typings
        });
    });
    */
};

module.exports = () =>
{
    const env = process.env.NODE_ENV.trim();
    const isDevBuild = !(env && env === 'production');

    return [{
        mode: isDevBuild ? 'development' : 'production',
        entry: { 'index': `./${libDir}/index.js` },
        resolve: { extensions: ['.js'] },
        devtool: 'source-map',
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: `[name].js`,
            publicPath: 'dist/',
            library: libraryName,
            libraryTarget: 'umd'
        },
        externals: [
            /^@michaelcoxon\/utilities.*$/
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: /lib/,
                }
            ]
        },
        plugins: [
            new CheckerPlugin(),

            ...(isDevBuild
                ?
                [
                    // Plugins that apply in development builds only
                    new webpack.SourceMapDevToolPlugin({
                        filename: '[file].map', // Remove this line if you prefer inline source maps
                        moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
                    })
                ]
                :
                [
                    // Plugins that apply in production builds only
                    new DtsBundlePlugin()
                    //new webpack.optimize.UglifyJsPlugin(),
                ])
        ]
    }];
};