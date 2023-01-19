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
    <section className="fixed bottom-3 left-3 w-full">
      <div>
        <div data-aos="fade-up" className="border border-gray-900 flex w-1/2 flex-col items-start px-5 py-3 space-y-2 bg-gray-200 md:flex-row md:space-y-0 md:items-stretch md:space-x-2">
          <div className="flex items-center flex-grow text-gray-900">
            <p className="text-sm font-medium">
            We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
            </p>
          </div>
          <div className="flex items-center flex-nowrap">
            <button
              className="whitespace-nowrap uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 text-white bg-gray-900 border-gray-900 hover:bg-white hover:text-gray-900 disabled:hover:bg-gray-900 disabled:hover:text-white"
              onClick={onClick}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CookieConsent