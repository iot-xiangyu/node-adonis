'use strict'

class PostController {
  index ({ view }) {

    const user = {
      name: 'xiangyu'
    }
    const deviceList = [
      { id: 1, name: 'tem-1', describe: '主卧温度' },
      { id: 2, name: 'tem-2', describe: '客厅温度' },
      { id: 3, name: 'tem-3', describe: '厨房温度' }
    ]
    return view.render('posts.index', { user, deviceList })
  }
}

module.exports = PostController
