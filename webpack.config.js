const path = require('path');

module.exports = {
    mode: 'none',
    entry: './index.js', // Masukkan file JavaScript utama proyek Anda di sini
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' // Jika diperlukan, gunakan babel-loader untuk mengonversi kode JavaScript ES6+
                }
            }
        ]
    }
};
