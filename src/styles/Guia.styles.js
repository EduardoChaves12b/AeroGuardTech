import styled from 'styled-components';

export const Home = styled.div`

  background-color: #ffffff;
  border: 10px solid #1A2D7A;
  max-width: 100%;
  padding-bottom: 17.8rem;

  main {
    text-align: center;

    .titulo {
      color: #119DFC;
      font-size: 60px;
      margin-bottom: 100px;
      margin-top: 20px;
    }

    .sections {
      display: flex;
      justify-content: space-around;

      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        max-width: 300px;

        h3 {
          color: #119DFC;
          font-size: 24px;
          margin: 20px 0;
        }

        p {
          font-size: 18px;
          margin: 0;
          min-width: 200%;
        }

        .n1, .n3 {
            margin-top: 20px;
        }

        .numero1, .numero2, .numero3 {
            color: #FFF;
            font-size: 35px;
            font-weight: bold;
            margin-bottom: 20px;
            background-color: #005bb5;
            padding: 5px;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            border-radius: 20%;
            margin-top: 50px;
        }

        .numero1 {
            margin-top: 180px;
        }

        .numero2 {
          margin-top: 300px;
        }

        .numero3 {
            margin-top: 145px;
        }
      }
    }
  }

`

