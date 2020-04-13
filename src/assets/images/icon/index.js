import Vue from 'vue';

import SvgIcon from '../../../../src/components/svg-icon';

Vue.component('svg-icon', SvgIcon);

const requireAll = requireContext => requireContext.keys().map(requireContext);
console.log(requireAll);
const req = require.context('./svg', false, /\.svg$/);
console.log(req);
requireAll(req);
