export async function loginUser(username: string, password: string) {
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
     
    }),
  })

  const data = await res.json()

  console.log('API RESPONSE:', data)

  if (!res.ok) {
    throw new Error(data.message || 'Invalid credentials')
  }

  return data
}