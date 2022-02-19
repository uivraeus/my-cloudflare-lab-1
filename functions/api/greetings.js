export const onRequestGet = () => {
  return new Response("Greetings earthlings 👾")
}

export const onRequestPost = async ({ request }) => {
  try {
    const { name } = await request.json()
    const responseName = name ? name : "earthling"
    return new Response(`Greetings ${responseName}!`)
  } catch (e) {
    const msg = e.message ? e.message : JSON.stringify(e)
    return new Response(msg)
  }
}
