<template>
  <!-- <div>
    <h1>{{ person.fields.name }}</h1>
    <ul>
      <li v-for="(post, key) in posts" :key="key">{{ post.fields.title }}</li>
    </ul>
  </div> -->
  <PostLadder :posts="posts"/>
</template>

<script lang="ts">
import Vue from 'vue'
import { createClient } from '~/plugins/contentful'

const client = createClient()

export default Vue.extend({
  name: 'Home',
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
