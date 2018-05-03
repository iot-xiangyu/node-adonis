'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const users = [
      { username: '张三', email: 'z3@qq.com', password: '11111' },
      { username: '李四', email: 'l4@qq.com', password: '11111' }
    ]

    await User.createMany(users)
  }
}

module.exports = UserSeeder
