import vue from 'vue';

import SvgIcon from '@comp/svg-icon';

vue.component('svg-icon', SvgIcon);

const requireAll = requireContext => requireContext.keys().map(requireContext);
console.log(requireAll);
const req = require.context('./svg', false, /\.svg$/);
console.log(req);
requireAll(req);
