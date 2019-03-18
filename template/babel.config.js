module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                browsers: ['iOS > 7', 'Android > 4'],
            },
        }],
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
    ],
}
