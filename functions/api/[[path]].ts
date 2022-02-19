export const onRequestGet = (context) => {
  return new Response(`@[[path]]:\n${JSON.stringify(context, null, 2)}`)
}
