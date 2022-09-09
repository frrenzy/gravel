const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: 'auto',
      filename: 'assets/js/[name].[contenthash:8].js',
      chunkFilename: 'assets/js/[id].[contenthash:8].js',
      clean: true,
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
      },
      extensions: ['.js', '.ts'],
    },
    entry: {
      index: 'src/index.pug',
    },
    plugins: [
      new PugPlugin({
        verbose: !isProd,
        pretty: !isProd,
        extractCss: {
          filename: 'assets/css/[name].[contenthash:8].css',
        },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: PugPlugin.loader,
          options: {
            embedFilters: {
              escape: true,
              code: {
                className: 'language-',
              },
              highlight: {
                verbose: true,
                use: 'prismjs',
              },
              markdown: {
                highlight: {
                  verbose: true,
                  use: 'prismjs',
                },
              },
            },
          },
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: '/node_modules/',
        },
        {
          test: /\.(c|sa|sc)ss$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                import: false,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg)$/i,
          type: 'asset',
          include: /assets\/images/,
          exclude: /favicon/,
          parser: {
            dataUrlCondition: {
              maxSize: 2 * 1024,
            },
          },
        },
        {
          test: /\.(png|svg)$/i,
          type: 'asset/inline',
          resourceQuery: /inline/,
        },
        {
          test: /\.(png|svg|jpe?g|webp|ico)$/i,
          type: 'asset/resource',
          resourceQuery: {
            not: [/inline/],
          },
          include: /src\/images/,
          generator: {
            filename: 'assets/img/[name].[hash:8][ext]',
          },
        },
        {
          test: /\.(woff(2)?|ttf|otf|eot|svg)$/,
          type: 'asset/resource',
          include: /vendor\/fonts|node_modules/,
          generator: {
            filename: 'assets/fonts/[name][ext][query]',
          },
        },
      ],
    },
    performance: {
      hints: 'warning',
      maxEntrypointSize: 15000 * 1024,
      maxAssetSize: 4000 * 1024,
    },
    stats: {
      colors: true,
      preset: 'minimal',
      loggingDebug: ['sass-loader'],
    },
    devServer: {
      static: {
        directory: path.join(process.cwd(), './dist'),
      },
      watchFiles: {
        paths: ['src/**/*.*'],
        options: {
          usePolling: true,
        },
      },
      open: true,
      compress: true,
    },
    watchOptions: {
      ignored: ['**/node_modules'],
    },
  }
};
