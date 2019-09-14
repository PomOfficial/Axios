/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project sequelize-core
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

import {CreatePlugin} from "@pomegranate/plugin-tools";
import {AxiosCore} from "./Plugins/AxiosCore";
import {AxiosEndpoints} from "./Plugins/AxiosEndpoints";

export const Plugin = CreatePlugin('application')
.configuration({
  name: 'Axios'
})
.applicationPlugins([
  AxiosCore,
  AxiosEndpoints
])