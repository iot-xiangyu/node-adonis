'use strict'

const Database = use('Database')
const Post = use('App/Models/Post')

class PostController {
  async index ({ view }) {
    const posts = await Post.all()
    return view.render('post.index', { posts: posts.toJSON() })
  }

  async create ({ view }) {
    return view.render('post.create')
  }

  async store ({ request, response }) {
    const newPost = request.only(['title', 'content'])
    // const postID = await Database.insert(newPost).into('posts')
    // console.log('postID:', postID)
    // return response.redirect(`/posts/${ postID[0] }`)
    const post = await Post.create(newPost)
    return response.redirect(`/posts/${ post.id }`)
  }

  async show ({ view, params }) {
    // const post = await Database.from('posts').where('id', params.id).first()
    const post = await Post.find(params.id)
    return view.render('post.show', { post: post.toJSON() })
  }

  async edit ({ view, params }) {
    // const post = await Database.from('posts').where('id', params.id).first()
    const post = await Post.findOrFail(params.id)
    return view.render('post.edit', { post: post.toJSON() })
  }

  async update ({ request, params }) {
    const updatedPost = request.only(['title', 'content'])
    // await Database.table('posts').where('id',params.id).update(updatedPost)
    const post = await Post.findOrFail(params.id)
    post.merge(updatedPost)
    post.save()
  }

  async destroy ({ request, params }) {
    // await Database.table('posts').where('id', params.id).delete()
    const post = await Post.findOrFail(params.id)
    post.delete()
    return 'success'
  }
}

module.exports = PostController
