/* eslint-disable node/no-deprecated-api */
import { UrlWithParsedQuery, parse } from 'url'
import { InvalidArgument } from '../errors/invalid-argument'

export class UrlLogin {
  public static parseUrl (url: string): UrlWithParsedQuery {
    if (!url) throw new InvalidArgument('url')
    return parse(url, true)
  }
}
