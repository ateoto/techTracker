module.exports={
        if process.env.NODE_ENV === "development" {
                'url' : 'mongodb://localhost/techTracker'
        } else {
                'url' : 'mongodb://db/techTracker'
        }
};