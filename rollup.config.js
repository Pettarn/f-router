import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
    input: "./core/index.js",
    output: {
        file: './dist/FRouter.umd.js',
        name: 'FRouter',
        format: 'umd'
    },
    plugins: [
        babel({
            exclude: 'node_modules',
        }),
        commonjs()
    ]
}

