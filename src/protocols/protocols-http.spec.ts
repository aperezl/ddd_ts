import { InvalidArgument } from '../errors/invalid-argument'
import { UrlLogin } from './protocols-http'

describe('Protocols Http and Queries', () => {
  test('Url Login', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login')

    expect(parsedUrl.href).toBe('http://localhost:3000/login')
    expect(parsedUrl.port).toBe('3000')
  })

  test('Response Query for login', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')
    const expectedAuth = {
      user: 'user',
      password: 'password'
    }
    expect(parsedUrl.query).toEqual(expectedAuth)
  })

  test('Url USer', () => {
    const parseUrl = UrlLogin.parseUrl('http://localhost:3000/user')

    expect(parseUrl.href).toBe('http://localhost:3000/user')
    expect(parseUrl.port).toBe('3000')
  })

  test('Response Query for user', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/user?user=user&password=password&name=name&lastname=lastname')
    const expectedAuth = {
      user: 'user',
      password: 'password',
      name: 'name',
      lastname: 'lastname'
    }
    expect(parsedUrl.query).toEqual(expectedAuth)
  })

  test('Invalid Url', () => {
    function expectedError (): void {
      UrlLogin.parseUrl('')
    }
    expect(expectedError).toThrowError(new InvalidArgument('url'))
  })
})
