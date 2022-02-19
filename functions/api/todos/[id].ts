export const onRequestGet = (context) => {
  return new Response(`@todos/[id]:\n${JSON.stringify(context, null, 2)}`)
}
