export const onRequestGet = (context) => {
  return new Response(`@greetings:\n${JSON.stringify(context, null, 2)}`)
}

export const onRequestPost = async (context) => {
  try {
    const { name } = await context.request.json()
    const responseName = name ? name : "earthling"
    return new Response(`Greetings ${responseName}!`)
  } catch (e) {
    const msg = e.message ? e.message : JSON.stringify(e)
    return new Response(`Error: ${msg}\nContext:\n${JSON.stringify(context, null, 2)}`)
  }
}
