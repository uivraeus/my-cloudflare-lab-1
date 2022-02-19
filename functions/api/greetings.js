export const onRequestGet = () => {
  return new Response("Greetings earthlings 👾")
}

export const onRequestPost = async ({ request }) => {
  const { name } = await request.json()
  const responseName = name ? name : "earthling"
  return new Response(`Greetings ${responseName}!`)
}
