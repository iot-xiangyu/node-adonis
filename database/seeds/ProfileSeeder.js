'use strict'

/*
|--------------------------------------------------------------------------
| ProfileSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Profile = use('App/Models/Profile')

class ProfileSeeder {
  async run () {
    const profiles = [
      { github: 'iot-xiangyu', user_id: 1 },
      { github: 'xiangyu8080', user_id: 2 }
    ]

    await Profile.createMany(profiles)
  }
}

module.exports = ProfileSeeder
