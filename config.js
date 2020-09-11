module.exports = {
    mongoUri: process.env.MONGO_URI || 'mongodb+srv://dbUser:dbUser@cluster0.nr5pd.mongodb.net/test?retryWrites=true&w=majority',
    PORT: process.env.PORT || 2000
}
