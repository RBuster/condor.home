<template>
  <div>
    <p>Placeholder for blog</p>

    <div v-for="(post, index) in blogPosts" :key="index">
      <NuxtLink :to="post.routeTo">
        {{ post.name }}
      </NuxtLink>
    </div>
  </div>
</template>
<script>
import * as BlogPosts from './posts.ts'
export default {
  name: 'Index',
  computed: {
    blogPosts () {
      return BlogPosts.default.map((post) => {
        return {
          routeTo: post.__file.replace('pages/', '').replace('.vue', ''),
          name: post.name || 'NO NAME'
        }
      })
    }
  },
  mounted () {
    console.log(BlogPosts)
  }
}
</script>
