import React from 'react'
import "./footer.css"
import { Button } from '@cred/neopop-web/lib/components';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="company__info">
            <h2 className="company__logo" >
              <svg width="333" height="189" viewBox="0 0 333 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M271.832 107.939V24.5118C271.832 22.9202 272.721 22.1244 274.054 22.1244H279.831C282.497 22.1244 282.497 23.716 282.497 24.5118C282.497 60.4552 282.053 105.392 282.053 107.939V127.834C282.053 128.497 282.319 129.823 283.386 129.823C288.57 129.956 299.205 130.141 300.272 129.823C301.338 129.505 301.605 128.364 301.605 127.834V107.939V107.403V24.5118C301.605 22.9202 302.493 22.1244 303.826 22.1244H309.603C312.269 22.1244 312.269 23.716 312.269 24.5118C312.269 60.4552 311.825 105.392 311.825 107.939V127.834C311.825 128.497 312.092 129.823 313.158 129.823H330.932C331.377 129.69 332.266 129.107 332.266 127.834V12.9728C332.266 3.10492 324.267 0.637955 321.157 0.637955H302.938C296.717 0.637955 294.495 4.61693 292.717 7.00431C290.496 4.61693 288.274 0.637955 282.053 0.637955H261.168C257.909 0.903221 251.392 3.74156 251.392 12.9728V127.834C251.392 128.497 251.658 129.823 252.725 129.823H270.499C270.944 129.69 271.832 129.107 271.832 127.834V107.939Z" fill="#F0E266" />
                <path d="M0 172.411V3.18901C0 0.00366288 1.70644 0.634482 2.64832 0.8C8.82774 1.88598 19.4783 7.1307 21.1866 17.9212V156.882C21.5397 159.43 23.0993 160.067 23.8349 160.067H29.5729C31.3385 160.067 32.0741 157.944 32.2213 156.882V17.9212C32.2213 14.2137 34.9803 4.68617 49.7351 0.790139C51.942 0.790142 51.942 1.98464 51.942 1.98464V172.401C51.942 182.355 44.1387 188.337 37.5179 188.337H14.5658C6.17942 187.143 0 177.985 0 172.411Z" fill="#F0E266" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M124.409 17.9872C124.556 12.204 128.834 0.637695 139.456 0.637695H160.699C165.272 0.900566 174.418 4.73848 174.418 17.9872V105.523C174.418 106.837 173.179 110.176 169.993 111.438C172.943 113.015 179.287 117.983 179.287 126.816C179.287 137.856 170.435 142.982 162.912 143.771H144.324C142.554 143.771 142.554 145.663 142.554 146.925C142.554 147.714 142.554 150.08 144.324 150.08C144.472 150.08 144.926 150.083 145.607 150.089C149.017 150.116 158.117 150.189 162.912 150.08C168.37 150.211 179.287 152.682 179.287 167.823C179.287 182.965 168.37 187.802 162.912 188.327H65.5479C65.5479 188.327 63.3351 188.485 63.3351 187.539C63.3351 186.356 66.8756 173.738 77.0545 172.555H154.946C156.273 172.555 157.158 172.476 157.158 169.006C157.158 165.852 156.273 165.852 154.946 165.852H144.324H134.145C126.179 165.063 120.868 157.411 120.868 146.925C120.868 136.279 127.064 129.576 135.915 129.181H154.946C156.273 129.181 157.158 128.156 157.158 125.633C157.158 123.109 156.273 122.478 154.946 122.478H140.341C135.473 122.084 128.126 117.668 125.294 111.043C124.586 108.52 124.409 106.312 124.409 105.523V17.9872ZM144.209 27.4699V97.1153C144.209 98.4419 144.652 99.334 146.422 99.334H151.733C151.818 99.334 151.911 99.337 152.01 99.3402C152.942 99.3705 154.388 99.4176 154.388 97.1153C154.388 96.5462 154.41 94.29 154.445 90.7859C154.564 78.6081 154.831 51.3585 154.831 27.4699C154.831 26.6739 154.831 25.082 152.175 25.082H146.422C145.094 25.082 144.209 25.878 144.209 27.4699Z" fill="#F0E266" />
                <path d="M251.414 145.533L251.417 156.234C251.417 157.154 251.315 159.869 253.139 159.292C258.155 158.476 260.726 153.177 260.536 151.139V149.961C260.536 147.107 262.816 147.572 263.956 147.572H268.922H274.622C277.357 147.572 278.041 149.95 278.041 151.139L278.041 159.292C278.041 162.961 275.758 163.467 274.618 163.467H257.113H255.403C254.073 163.467 251.414 164.18 251.414 167.034V184.771C251.604 185.96 253.009 188.338 257.113 188.338H287.727C288.639 187.93 288.867 187.318 288.867 186.809C287.955 181.509 282.408 178.825 279.748 178.656H262.243C260.875 178.656 260.533 177.976 260.533 177.636V173.56C260.533 172.745 261.673 172.541 262.243 172.541H279.748C285.22 172.541 286.971 166.766 287.161 164.388L287.161 146.043C287.161 140.336 282.218 138.399 279.748 138.399H259.963C253.123 138.399 251.414 143.155 251.414 145.533Z" fill="#F0E266" />
                <path d="M296.135 146.043L296.131 156.234C296.131 157.248 296.359 159.279 297.271 159.292C303.199 159.699 305.441 155.045 305.821 152.667C305.821 152.158 305.824 152.509 305.824 150.47C305.824 148.432 306.964 147.583 307.534 147.413H319.812C321.18 147.413 321.522 149.111 321.522 149.961C321.522 150.98 321.519 151.648 321.519 153.686C321.519 155.725 320.379 156.234 319.809 156.234H316.389C313.653 156.234 308.671 158.273 308.671 159.292V167.955C308.671 169.585 315.249 169.993 316.389 169.993H319.809C321.177 169.993 321.519 171.691 321.519 172.541V176.617C321.519 178.248 320.379 178.656 319.809 178.656H306.961C305.593 178.656 305.251 177.297 305.251 176.617V172.541C304.681 168.974 298.411 166.426 297.271 166.426C296.359 166.426 296.131 168.124 296.131 168.974V180.184C296.131 186.707 301.071 188.338 303.541 188.338H326.079C331.094 188.338 332.348 183.582 332.348 181.204V171.522C332.348 166.935 330.068 164.897 326.649 163.368C330.068 161.84 332.348 159.292 332.348 156.234V145.533C332.348 139.826 328.168 138.399 326.079 138.399H303.541C297.613 138.399 296.135 143.665 296.135 146.043Z" fill="#F0E266" />
                <path d="M251.414 145.533L251.417 156.234C251.417 157.154 251.315 159.869 253.139 159.292C258.155 158.476 260.726 153.177 260.536 151.139V149.961C260.536 147.107 262.816 147.572 263.956 147.572H268.922H274.622C277.357 147.572 278.041 149.95 278.041 151.139L278.041 159.292C278.041 162.961 275.758 163.467 274.618 163.467H257.113H255.403C254.073 163.467 251.414 164.18 251.414 167.034V184.771C251.604 185.96 253.009 188.338 257.113 188.338H287.727C288.639 187.93 288.867 187.318 288.867 186.809C287.955 181.509 282.408 178.825 279.748 178.656H262.243C260.875 178.656 260.533 177.976 260.533 177.636V173.56C260.533 172.745 261.673 172.541 262.243 172.541H279.748C285.22 172.541 286.971 166.766 287.161 164.388L287.161 146.043C287.161 140.336 282.218 138.399 279.748 138.399H259.963C253.123 138.399 251.414 143.155 251.414 145.533Z" stroke="#F0E266" stroke-width="0.667418" />
                <path d="M296.135 146.043L296.131 156.234C296.131 157.248 296.359 159.279 297.271 159.292C303.199 159.699 305.441 155.045 305.821 152.667C305.821 152.158 305.824 152.509 305.824 150.47C305.824 148.432 306.964 147.583 307.534 147.413H319.812C321.18 147.413 321.522 149.111 321.522 149.961C321.522 150.98 321.519 151.648 321.519 153.686C321.519 155.725 320.379 156.234 319.809 156.234H316.389C313.653 156.234 308.671 158.273 308.671 159.292V167.955C308.671 169.585 315.249 169.993 316.389 169.993H319.809C321.177 169.993 321.519 171.691 321.519 172.541V176.617C321.519 178.248 320.379 178.656 319.809 178.656H306.961C305.593 178.656 305.251 177.297 305.251 176.617V172.541C304.681 168.974 298.411 166.426 297.271 166.426C296.359 166.426 296.131 168.124 296.131 168.974V180.184C296.131 186.707 301.071 188.338 303.541 188.338H326.079C331.094 188.338 332.348 183.582 332.348 181.204V171.522C332.348 166.935 330.068 164.897 326.649 163.368C330.068 161.84 332.348 159.292 332.348 156.234V145.533C332.348 139.826 328.168 138.399 326.079 138.399H303.541C297.613 138.399 296.135 143.665 296.135 146.043Z" stroke="#F0E266" stroke-width="0.667418" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M190.401 40.2322C190.548 35.2104 194.806 25.1669 205.378 25.1669H226.522C231.074 25.3952 240.178 28.7278 240.178 40.2322V186.091C240.178 186.548 239.914 187.529 238.857 187.803C237.799 188.077 227.257 187.917 222.117 187.803C221.06 187.803 220.796 186.662 220.796 186.091V174.574C220.796 173.205 219.034 173.091 218.153 173.205H212.867C211.105 173.205 210.664 174.118 210.664 174.574V186.091C210.664 187.187 209.783 187.689 209.343 187.803H191.722C190.665 187.803 190.401 186.662 190.401 186.091V40.2322ZM210.31 50.5385V154.917C210.31 156.004 210.777 156.735 212.643 156.735H218.243C218.333 156.735 218.431 156.738 218.536 156.74C219.518 156.765 221.043 156.804 221.043 154.917C221.043 154.479 221.064 150.913 221.096 145.282C221.219 124.124 221.51 73.8024 221.51 50.5385C221.51 49.8864 221.51 48.582 218.71 48.582H212.643C211.243 48.582 210.31 49.2342 210.31 50.5385Z" fill="#F0E266" />
                <path d="M190.401 14.2268C193.512 2.72854 201.067 0.637955 205.956 0.637955H215.956H226.489C235.378 0.637955 240.178 12.1362 240.178 14.2268C240.178 15.8993 238.4 17.3627 237.512 17.3627H193.512C190.845 17.3627 190.401 15.2721 190.401 14.2268Z" fill="#F0E266" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M63.7142 4.33204V158.575V158.576C63.7144 160.569 63.7147 162.96 65.4826 163.02H93.3336C103.944 163.02 111.459 155.045 111.459 148.267V18.287C111.459 4.33204 99.5227 0.743628 93.3336 0.743628C91.06 0.743627 87.917 0.721711 84.4902 0.697816C77.7753 0.650991 69.9707 0.596568 65.4826 0.684565C64.1563 0.81747 63.7142 1.78028 63.7142 4.33204ZM92.8185 35.0776L84.5713 65.128L103.523 69.7338L92.8185 35.0776ZM81.2603 113.565L103.328 79.2787L89.9451 130.826L81.2603 113.565ZM82.2278 71.6756L81.2858 74.5256L80.5791 76.664L80.1122 74.4227C79.5448 71.6987 78.9891 69.0329 78.3222 65.8378C75.3358 72.7047 72.5698 79.0591 69.7374 85.5653L86.6212 95.157C85.1259 87.1628 83.7185 79.6419 82.2278 71.6756ZM84.837 69.2936L103.218 73.6678L89.6052 95.0377C88.9757 91.6395 88.3609 88.3196 87.7494 85.0167L87.6906 84.6996C86.7468 79.6026 85.8098 74.5421 84.837 69.2936ZM79.7648 110.2L86.4497 99.603L70.3647 90.5533C72.4095 94.8192 74.4541 99.0947 76.5462 103.47L76.6255 103.636L76.9942 104.407C77.9068 106.315 78.829 108.244 79.7648 110.2Z" fill="#F0E266" />
              </svg>
            </h2>
          </div>
          <div className="company__info_text">
            <p className="footer__title2">E-Cell,IIT Guwahati<br></br> Assam-7810389</p>
            <p className="company__description">
              edc@iitg.ac.in
            </p>
            <p className="company__description">
              +91 7637833974
            </p>
            <Button
            variant="primary"
            kind="elevated"
            size="big"
            colorMode="light"
             colorConfig={{backgroundColor:"#F0E266",borderColor:"black",edgeColors:{right:"#736B1F",bottom:"#736B1F"}}}
             spacingConfig={{height:"60px"}}
            onClick={() => {
                console.log("I'm clicked");
            }}
        >
            {/* {SVG CODE} */}
    </Button>

          </div>
          <div class="right_footer">
            <p class="dontmissmagic">Don't miss the Magic</p>

            <p href="" class="signup">Sign up to receive Event notification and Updates</p>
            
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
