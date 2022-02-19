export const onRequestGet = (context) => {
  return new Response(`@todos/index:\n${JSON.stringify(context, null, 2)}`)
}
