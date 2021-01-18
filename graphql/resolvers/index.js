const postsResolvers = require('./Post')
const usersResolvers = require('./User')
const commentsResolvers = require('./comments')

module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentsResolvers.Mutation,
  },
}
