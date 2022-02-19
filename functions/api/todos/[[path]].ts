export const onRequestGet = (context) => {
  return new Response(`@todos/[[path]]:\n${JSON.stringify(context, null, 2)}`)
}
