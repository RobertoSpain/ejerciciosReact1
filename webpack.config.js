const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Archivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    filename: 'bundle.js', // Nombre del archivo generado
    clean: true, // Limpia la carpeta 'dist' en cada compilación
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpila archivos JS y JSX
        exclude: /node_modules/, // Ignora node_modules
        use: {
          loader: 'babel-loader', // Usa Babel para transpilar
        },
      },
      {
        test: /\.css$/, // Para archivos CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Para imágenes
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolución de extensiones por defecto
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Archivo base para HTML
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000, // Puerto para el servidor de desarrollo
    open: true, // Abre automáticamente el navegador
  },
  mode: 'development', // Cambia a 'production' para optimizar
};
