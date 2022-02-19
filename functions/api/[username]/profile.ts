export const onRequestGet = (context) => {
  return new Response(`@[username]/profile:\n${JSON.stringify(context, null, 2)}`)
}
