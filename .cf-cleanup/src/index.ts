export default {
  fetch(): Response {
    return new Response('cleanup', { status: 410 })
  },
}
