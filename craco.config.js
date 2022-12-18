const CircularDependencyPlugin = require('circular-dependency-plugin');
const path = require('path');
// module.exports = {
//   webpack: {
//   },
// };
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/appTypes': path.resolve(__dirname, 'src/types'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
      '@/constants': path.resolve(__dirname, 'src/constants'),
    },
    plugins: [
      new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/,
        failOnError: true,
        allowAsyncCycles: false,
        cwd: process.cwd()
      })
    ]
  }
}