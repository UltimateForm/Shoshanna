<template>
  <div class="w-full max-h-screen h-screen overflow-hidden">
    <PostLadder :posts="posts" />
    <SidePanel :posts="posts" />
  </div>
</template>

<script>
import Vue from 'vue'
import { createClient } from '~/plugins/contentful'

const client = createClient()

export default Vue.extend({
  name: 'HomePage',
  transition: {
    name: 'home',
    duration: 500,
  },
  async asyncData(context) {
    const { env } = context
    try {
      const [entries, posts] = await Promise.all([
        client.getEntries({ 'sys.id': env.CTF_PERSON_ID }),
        client.getEntries({
          content_type: env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt',
        }),
      ])
      return {
        person: entries.items[0],
        posts: posts.items,
      }
    } catch (message) {
      return console.error(message)
    }
  },
})
</script>
