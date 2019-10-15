const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1890ff',
      '@link-color': '#1890ff',
      '@success-color': '#52c41a',
      '@warning-color': '#faad14',
      '@error-color': '#f5222d',
      '@font-size-base': '16px',
      '@heading-color': '#1DA57A',
      '@text-color': '#333333',
      '@text-color-secondary': '#1DA57A',
      '@disabled-color': '#1DA57A',
      '@border-radius-base': '5px',
      '@border-color-base': '#1DA57A',
      '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)'
    }
  })
);
