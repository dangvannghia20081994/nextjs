import { NextRequest, NextResponse } from 'next/server'
export function middleware(req, res) {
  // Store the response so we can modify its headers
  const response = NextResponse.next()
  // Set custom header
  response.headers.set('x-modified-edge', 'true')
  // Return response
  // return response
  // const basicAuth = req.headers.get('authorization')
  // console.log(basicAuth)
  return response
  // if (basicAuth) {
  //   const auth = basicAuth.split(' ')[1]
  //   const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')
  //   if (user === '4dmin' && pwd === 'testpwd123') {
  //     return response
  //   }
  // }
  // return new Response('Auth required', {
  //   status: 401,
  //   headers: {
  //     'WWW-Authenticate': 'Basic realm="Secure Area"',
  //   },
  // })

  // const hostname = req.headers.get('host')
  // const { pathname } = req.nextUrl

  // if (hostname === 'beta.example.com') {
  //   return NextResponse.rewrite(`/beta${pathname}`)
  // }
}