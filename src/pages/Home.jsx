import Image1 from "../assets/Cover.png";
import {useNavigate} from 'react-router-dom';
export default function Home() {

  const navigate = useNavigate();

  return (
    <div>
      <header className="header">
        <div className="header__links">
          <div>Explore</div>
          <div>about us</div>
        </div>

        <form className="header__form">
          <svg
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 13.2C7 10.2177 9.41765 7.80005 12.4 7.80005C15.3823 7.80005 17.8 10.2177 17.8 13.2C17.8 14.6498 17.2287 15.966 16.299 16.9361C16.2692 16.9597 16.2404 16.9853 16.2129 17.0129C16.1853 17.0404 16.1597 17.0692 16.1361 17.099C15.166 18.0287 13.8497 18.6 12.4 18.6C9.41765 18.6 7 16.1824 7 13.2ZM16.8778 19.092C15.6346 20.0382 14.0829 20.6 12.4 20.6C8.31308 20.6 5 17.2869 5 13.2C5 9.11314 8.31308 5.80005 12.4 5.80005C16.4869 5.80005 19.8 9.11314 19.8 13.2C19.8 14.8829 19.2382 16.4346 18.292 17.6778L21.1071 20.4929C21.4976 20.8834 21.4976 21.5166 21.1071 21.9071C20.7166 22.2976 20.0834 22.2976 19.6929 21.9071L16.8778 19.092Z"
              fill="white"
            />
          </svg>

          <input type="text" placeholder="" />
          <button className="header__form__button">Search</button>
        </form>

        <div className="header__actions">
          <svg
            className="header__actions__mode"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_196_709)">
              <path
                d="M8 0C8.36819 0 8.66667 0.298477 8.66667 0.666667V2C8.66667 2.36819 8.36819 2.66667 8 2.66667C7.63181 2.66667 7.33333 2.36819 7.33333 2V0.666667C7.33333 0.298477 7.63181 0 8 0Z"
                fill="#0A0A0D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8ZM8 5.33333C6.52724 5.33333 5.33333 6.52724 5.33333 8C5.33333 9.47276 6.52724 10.6667 8 10.6667C9.47276 10.6667 10.6667 9.47276 10.6667 8C10.6667 6.52724 9.47276 5.33333 8 5.33333Z"
                fill="#0A0A0D"
              />
              <path
                d="M8.66667 14C8.66667 13.6318 8.36819 13.3333 8 13.3333C7.63181 13.3333 7.33333 13.6318 7.33333 14V15.3333C7.33333 15.7015 7.63181 16 8 16C8.36819 16 8.66667 15.7015 8.66667 15.3333V14Z"
                fill="#0A0A0D"
              />
              <path
                d="M2.34193 2.34193C2.60228 2.08158 3.02439 2.08158 3.28474 2.34193L4.23141 3.2886C4.49176 3.54895 4.49176 3.97106 4.23141 4.23141C3.97106 4.49176 3.54895 4.49176 3.2886 4.23141L2.34193 3.28474C2.08158 3.02439 2.08158 2.60228 2.34193 2.34193Z"
                fill="#0A0A0D"
              />
              <path
                d="M12.7114 11.7686C12.4511 11.5082 12.0289 11.5082 11.7686 11.7686C11.5082 12.0289 11.5082 12.451 11.7686 12.7114L12.7153 13.6581C12.9756 13.9184 13.3977 13.9184 13.6581 13.6581C13.9184 13.3977 13.9184 12.9756 13.6581 12.7153L12.7114 11.7686Z"
                fill="#0A0A0D"
              />
              <path
                d="M0 8C0 7.63181 0.298477 7.33333 0.666667 7.33333H2C2.36819 7.33333 2.66667 7.63181 2.66667 8C2.66667 8.36819 2.36819 8.66667 2 8.66667H0.666667C0.298477 8.66667 0 8.36819 0 8Z"
                fill="#0A0A0D"
              />
              <path
                d="M14 7.33333C13.6318 7.33333 13.3333 7.63181 13.3333 8C13.3333 8.36819 13.6318 8.66667 14 8.66667H15.3333C15.7015 8.66667 16 8.36819 16 8C16 7.63181 15.7015 7.33333 15.3333 7.33333H14Z"
                fill="#0A0A0D"
              />
              <path
                d="M4.23141 11.7686C4.49176 12.0289 4.49176 12.451 4.23141 12.7114L3.28474 13.6581C3.02439 13.9184 2.60228 13.9184 2.34193 13.6581C2.08158 13.3977 2.08158 12.9756 2.34193 12.7153L3.2886 11.7686C3.54895 11.5082 3.97106 11.5082 4.23141 11.7686Z"
                fill="#0A0A0D"
              />
              <path
                d="M13.6581 3.28474C13.9184 3.02439 13.9184 2.60228 13.6581 2.34193C13.3977 2.08158 12.9756 2.08158 12.7153 2.34193L11.7686 3.2886C11.5082 3.54895 11.5082 3.97106 11.7686 4.23141C12.0289 4.49176 12.4511 4.49176 12.7114 4.23141L13.6581 3.28474Z"
                fill="#0A0A0D"
              />
            </g>
            <defs>
              <clipPath id="clip0_196_709">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <button className="header__actions__join"
          onClick={() => navigate('/register')}
          >Join</button>
          <button className="header__actions__login"
          onClick={() => navigate('/login')}
          >Login</button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="5" y="5" width="14" height="2" rx="1" fill="#0A0A0D" />
            <rect x="5" y="11" width="14" height="2" rx="1" fill="#0A0A0D" />
            <rect x="5" y="17" width="14" height="2" rx="1" fill="#0A0A0D" />
          </svg>
        </div>
      </header>

      <main className="home">
        <div className="home__hero">
          <h1 className="home__hero__title">
            Trade and Collab with colleagues and Clients on <span>Galadio</span>
          </h1>
          <h2 className="home__hero__subtitle">
            A collection of dynamic ARTWORKS ranging from hand-drawn art,
            digital art, Sculptures and photography. Totally driven by community
            and living on the Ethereum blockchain. On a mission to build the
            group of Galadians with unique identity.
          </h2>
          <img src={Image1} className="home__hero__img" />
        </div>
      </main>
    </div>
  );
}
