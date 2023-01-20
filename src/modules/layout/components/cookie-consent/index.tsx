import Cookies from "js-cookie"
import { MouseEvent, useCallback, useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const USER_CONSENT_COOKIE_KEY = 'cookie_consent_is_true'
const USER_CONSENT_COOKIE_EXPIRE_DATE = 365

const CookieConsent = () => {
  
  const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true)

  useEffect(() => {
    AOS.init();
    const consentIsTrue = Cookies.get(USER_CONSENT_COOKIE_KEY) === 'true'
    setCookieConsentIsTrue(consentIsTrue)
  }, [])

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!cookieConsentIsTrue) {
      Cookies.set(USER_CONSENT_COOKIE_KEY, 'true', {
        expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
      })
      setCookieConsentIsTrue(true)
    }
  }

  if (cookieConsentIsTrue) {
    return null
  }

  return (
    <section className="fixed bottom-0 left-0 w-full">
      <div>
        <div data-aos="zoom-in" className="border border-gray-900 flex items-stretch m-3 lg:w-1/2 md:w-auto items-start px-5 py-3 space-y-2 bg-gray-200 flex-row space-y-0 items-stretch space-x-2">
          <div className="flex items-center flex-grow text-gray-900">
            <p className="text-sm font-medium text-center">
            We use cookies to enhance your browsing experience and analyze our traffic.
            </p>
          </div>
          <div className="flex items-center items-stretch justify-between">
            <button
              className="whitespace-nowrap uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 text-white bg-gray-900 border-gray-900 hover:bg-white hover:text-gray-900 disabled:hover:bg-gray-900 disabled:hover:text-white"
              onClick={onClick}
            >
              Accept Cookies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CookieConsent