import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Name from '../assets/images/cllg-title.png';
const Landing = () => {
  return (
    <StyledWrapper>
      <nav>
        <Logo />,
        <div className='name'>
          <img src={Name} alt="name" />
        </div>
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            Sakec <span>Event</span> Tracker
          </h1>
          <p>
          Introducing the SAKEC Student Event Tracker App your ultimate companion for staying updated on all the exciting happenings at our campus!
          With the SAKEC Event Tracker App, you'll never miss out on any event that piques your interest. 
          </p>
          <Link to='/register' className='btn register-link'>
            Login / Student
          </Link>
          <Link to='/admin' className='btn login'>
            Login / Admin
          </Link>
          <Link to='/mentor' className='btn'>
            Login / Mentor
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 100;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .login{
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .name {
    flex-grow: 1;
    display: flex;
    text-align: center;
    justify-content: center;
  }
  
  .name img {
    max-width: 600px;
    height: auto;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
    .name {
      text-align: center;
    }
  }
`;

export default Landing;