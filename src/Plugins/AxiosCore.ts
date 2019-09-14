/**
 * @file SequelizeCore
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project sequelize-core
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

import {CreatePlugin} from "@pomegranate/plugin-tools";
import Axios from 'axios'

export const AxiosCore = CreatePlugin('anything')
  .configuration({
    name: 'AxiosCore',
    injectableParam: 'Axios',
    provides: ['@pomofficial/Endpoints']
  })
  .hooks({
    load: () => {
      return Axios
    }
  })