import { auth } from '@a/auth'

export default auth(req => {
  if (!req.auth) {
    const url = req.url.replace(req.nextUrl.pathname, '/')
    return Response.redirect(url)
  }
})

export const config = {
  matcher: ['/onboard/:path*']
}
