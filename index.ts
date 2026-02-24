import { AtpAgent } from "@atproto/api";

const agent = new AtpAgent({
    service: "https://bsky.social",
});

async function main() {
    await agent.login({
        identifier: process.env.BLUESKY_IDENTIFIER!,
        password: process.env.BLUESKY_PASSWORD!,
    });

    console.log("✅ Connected successfully!");
    console.log("Logged in as:", agent.session?.handle);

    async function getFeed() {
        const feed = await agent.getTimeline({ limit: 10 });

        console.log("\n📰 Your Feed:\n");

        for (const item of feed.data.feed) {
            const post = item.post;
            const author = post.author.handle;
            const record = post.record as { text?: string };
            const text = record.text ?? "No text content";
            const likeCount = post.likeCount ?? 0;
            const repostCount = post.repostCount ?? 0;

            console.log(`👤 ${author}`);
            console.log(`💬 ${text}`);
            console.log(`❤️  ${likeCount} likes  🔁 ${repostCount} reposts`);
            console.log("---");
        }
    }

    async function getProfile(handle: string) {
        const profile = await agent.getProfile({ actor: handle });

        console.log("\n👤 Profile:\n");
        console.log(`Handle: @${profile.data.handle}`);
        console.log(`Display Name: ${profile.data.displayName ?? "No display name"}`);
        console.log(`Bio: ${profile.data.description ?? "No bio"}`);
        console.log(`Followers: ${profile.data.followersCount ?? 0}`);
        console.log(`Following: ${profile.data.followsCount ?? 0}`);
        console.log(`Posts: ${profile.data.postsCount ?? 0}`);
    }

    async function createPost(text: string) {
        const result = await agent.post({
            text: text,
            createdAt: new Date().toISOString(),
        });

        console.log("\n✅ Post created successfully!");
        console.log(`Post URI: ${result.uri}`);
        console.log(`Post CID: ${result.cid}`);
    }

    async function followUser(handle: string) {
        const profile = await agent.getProfile({ actor: handle });
        await agent.follow(profile.data.did);

        console.log(`\n✅ Successfully followed @${handle}`);
    }

    async function unfollowUser(handle: string) {
        const profile = await agent.getProfile({ actor: handle });

        if (!profile.data.viewer?.following) {
            console.log(`\n⚠️ You are not following @${handle}`);
            return;
        }

        await agent.deleteFollow(profile.data.viewer.following);
        console.log(`\n✅ Successfully unfollowed @${handle}`);
    }

    await getFeed();
    await getProfile("jay.bsky.social");
    await followUser("hapnote.bsky.social");
    // await unfollowUser("hapnote.bsky.social");
/*
    await createPost("Teaching myself AT Protocol by building a small agent from scratch. Right now I'm posting this directly from my terminal — no app, no UI, just me and the code figuring things out.");
*/
}

main().catch(console.error);