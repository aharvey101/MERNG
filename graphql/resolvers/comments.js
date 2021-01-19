const { UserInputError } = require('apollo-server')
const checkAuth = require('../../util/checkAuth')
const Post = require('../../models/Post')

module.exports = {
  Mutation: {
    createComment: async (_, { postId, body }, context) => {
      const { username } = checkAuth(context)
      if (body.trim() === '') {
        throw new UserInputError('Empty comment', {
          errors: {
            body: 'Comment body must not be empty',
          },
        })
      }
      console.log(postId)
      const post = Post.findOne({ postId })
      console.log(post)

      if (!post.comments) {
        console.log(`post comments array empty ${post.comments}`)
        post.comments.push('1')
      }

      // if (post) {
      //   post.comments.unshift({
      //     body,
      //     username,
      //     createdAt: new Date().toISOString(),
      //   })
      //   await post.save()
      //   return post
      // } else throw new UserInputError('Post not found')
    },
  },
}
