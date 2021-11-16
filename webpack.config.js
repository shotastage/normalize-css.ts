module.exports = {
    mode: 'production',
    entry: './src/normalize.tsx',
    output: {
        path: `${__dirname}/dist`,
        filename: "normalize.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts', '.tsx', '.js',
        ],
    },
};
