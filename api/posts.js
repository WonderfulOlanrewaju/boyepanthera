import GhostContentAPI from "@tryghost/content-api";
import dotenv from 'dotenv';

dotenv.config()

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.url,
  key: process.env.key,
  version: process.env.version
});

export async function getPosts() {
    return await api.posts
      .browse({
        limit: "all"
      })
      .catch(err => {
        console.error(err);
      });
  }

export async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug
      })
      .catch(err => {
        console.error(err);
      });
  }