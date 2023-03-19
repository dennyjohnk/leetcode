class Twitter {
    constructor() {
        this.tweets = [];
        this.following = new Map();
    }

    postTweet(userId, tweetId, { tweets } = this) {
        tweets.push({ authorId: userId, id: tweetId });
    }

    getNewsFeed(userId, newsIDs = [], { tweets, following } = this) {
        for (let i = tweets.length - 1; 0 <= i && (newsIDs.length < 10); i--) {
            const tweet = tweets[i];

            const isAuthor = tweet.authorId === userId;
            const isFollowing = following.get(authorId).has(tweet.authorId);

            const shouldAddTweet = isAuthor || isFollowing;
            if (shouldAddTweet) {
                newsIDs.push(tweet.id);
            }
        }
    }

    follow(followerId, followeeId, { following } = this) {
        if (!following.has(followerId)) following.set(followerId, new Set());
        following.get(followerId).add(followeeId);
    }

    unfollow(followerId, followeeId, { following } = this) {
        if (following.has(followerId))
            following.get(followerId).remove(followeeId);
    }
}