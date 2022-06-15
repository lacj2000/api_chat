import Message from "../../../models/Message"

export default {
  Query: {
    messages: async () => await Message.find(),
    message: async (_, { id }) => await Message.findById(id),
  },
  Mutation: {
    createMessage: async (_,{ data }) => await Message.create(data),
    updateMessage: async (_,{ id, data }) => await Message.findOneAndUpdate(id, data, { new:true }),
    deleteMessage: async (_,{ id }) =>  !!(await Message.findOneAndDelete(id)),
  },
  // Subscription: {},
}