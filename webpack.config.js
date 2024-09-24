import path from 'path';

export default {
  entry: './src/index.ts', // Seu arquivo de entrada
  output: {
    filename: 'index.js', // Renomeado para index.js
    path: path.resolve(process.cwd(), 'dist'),
    clean: true, // Limpa a pasta de saída antes de cada build
  },
  resolve: {
    extensions: ['.ts', '.js'], // Extensões que o Webpack deve resolver
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Regra para arquivos .ts
        use: 'ts-loader', // Usar o ts-loader para compilar TypeScript
        exclude: /node_modules/, // Ignorar a pasta node_modules
      },
    ],
  },
  mode: 'production', // Mude para 'production' para otimizações de produção
};
