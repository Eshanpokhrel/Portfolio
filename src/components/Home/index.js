import React, { useEffect, useState } from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

import Loader from 'react-loaders'

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['s', 'h', 'a', 'n', ',']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return () => setTimeout(() => {
      setLetterClass("text-animate-hover")
    },4000)
  },[])


  // useEffect(() => {
  //   let timeoutId = setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)

  //   return () => {
  //     clearTimeout(timeoutId)
  //   }
  // }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="myName" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={19}
            />
          </h1>
          <h2><b>Frontend Developer / ReactJs / NextJS / Javascript</b></h2>
          <Link to="/contact" className="flat-button">
            <b>CONTACT ME</b>
          </Link>
        </div>
        <div className="logo-container">
          {/* <img src={e} alt="e" /> */}
          {/* <svg width="196" height="261" viewBox="0 0 196 261" fill="none" >
            <path d="M140.389 132.97C132.156 131.982 123.758 131.323 115.195 130.994L112.725 131.982C111.078 131.982 109.267 131.653 107.291 130.994C105.315 130.335 103.504 130.006 101.857 130.006C99.5517 130.006 97.0817 130.171 94.447 130.5C91.8124 130.829 89.1777 130.994 86.543 130.994C83.579 130.994 80.4504 130.665 77.157 130.006C74.193 129.347 71.0644 128.195 67.771 126.548C69.747 133.135 71.0644 140.38 71.723 148.284C72.3817 155.859 73.5344 163.104 75.181 170.02C76.8277 176.936 79.4624 182.699 83.085 187.31C87.037 191.921 93.2944 194.226 101.857 194.226C113.054 194.226 120.958 190.274 125.569 182.37C130.18 174.137 132.814 164.751 133.473 154.212C137.754 154.871 142.53 155.365 147.799 155.694C153.068 156.023 158.008 156.188 162.619 156.188C167.559 156.188 171.84 156.188 175.463 156.188C179.415 156.188 182.214 156.188 183.861 156.188C186.825 156.188 188.966 155.529 190.283 154.212C190.283 159.152 190.283 164.586 190.283 170.514C190.612 176.113 190.777 181.711 190.777 187.31C190.777 195.873 190.118 204.271 188.801 212.504C187.813 220.408 185.343 226.665 181.391 231.276C177.768 235.228 173.158 239.015 167.559 242.638C161.96 245.931 155.538 249.06 148.293 252.024C141.048 254.659 133.308 256.635 125.075 257.952C117.171 259.599 109.267 260.422 101.363 260.422C84.2377 260.422 69.253 257.458 56.409 251.53C43.8944 245.602 33.3557 237.533 24.793 227.324C16.5597 217.115 10.3024 205.259 6.02102 191.756C2.06902 177.924 0.0930237 163.269 0.0930237 147.79V112.716C0.0930237 93.6147 2.06902 75.9953 6.02102 59.858C9.97302 43.7207 17.0537 30.712 27.263 20.832C29.5684 18.5267 33.191 16.2213 38.131 13.916C43.071 11.2813 48.8344 8.97599 55.421 7C62.337 5.02399 69.9117 3.54199 78.145 2.554C86.3784 1.23666 94.941 0.577994 103.833 0.577994C112.396 0.577994 120.794 1.56599 129.027 3.54199C137.59 5.18865 145.329 7.65865 152.245 10.952C159.49 13.916 165.583 17.5387 170.523 21.82C175.463 26.1013 178.756 30.712 180.403 35.652C182.05 39.2747 183.038 43.2267 183.367 47.508C184.026 51.7893 185.837 54.7533 188.801 56.4C190.118 63.9747 191.436 72.0433 192.753 80.606C194.4 89.1687 195.223 97.7313 195.223 106.294C195.223 114.857 194.564 121.279 193.247 125.56C189.624 129.183 185.343 131.488 180.403 132.476C175.463 133.464 169.864 133.958 163.607 133.958C156.362 133.958 148.622 133.629 140.389 132.97ZM64.807 119.632C66.4537 119.632 68.1004 118.15 69.747 115.186C71.3937 116.833 73.205 117.656 75.181 117.656C77.157 117.656 79.133 117.491 81.109 117.162C83.4144 116.503 85.8844 116.174 88.519 116.174C93.1297 116.174 97.5757 116.833 101.857 118.15C106.138 119.138 110.584 119.961 115.195 120.62C119.806 121.279 127.216 121.773 137.425 122.102C147.964 122.431 161.302 123.09 177.439 124.078C181.391 124.078 183.861 123.913 184.849 123.584C186.496 118.973 187.484 114.363 187.813 109.752C188.472 104.812 188.801 100.037 188.801 95.426C188.801 56.2353 176.451 30.3827 151.751 17.868C146.811 15.2333 139.566 13.422 130.015 12.434C120.464 11.1167 109.926 10.458 98.399 10.458C89.1777 10.458 78.9684 11.446 67.771 13.422C56.903 15.0687 46.529 19.35 36.649 26.266C27.0984 32.8527 19.0297 42.7327 12.443 55.906C5.85636 68.75 2.56302 86.3693 2.56302 108.764C2.56302 126.877 4.20969 144.003 7.50302 160.14C11.1257 176.277 16.0657 190.603 22.323 203.118C28.5804 215.633 35.8257 225.842 44.059 233.746C52.2924 241.321 61.1844 245.602 70.735 246.59C77.3217 247.249 83.4144 247.743 89.013 248.072C94.941 248.072 100.704 248.072 106.303 248.072C115.854 248.072 123.593 247.907 129.521 247.578C135.778 247.249 141.048 246.425 145.329 245.108C149.61 243.461 153.398 241.321 156.691 238.686C159.984 235.722 163.607 231.77 167.559 226.83C179.086 209.375 184.849 187.145 184.849 160.14C181.556 159.811 178.592 159.646 175.957 159.646C173.322 159.317 170.688 159.152 168.053 159.152H150.269C148.952 159.152 147.634 159.152 146.317 159.152C145.329 159.152 144.012 158.987 142.365 158.658C140.389 163.269 138.248 168.538 135.943 174.466C133.967 180.065 131.497 185.334 128.533 190.274C125.569 195.214 121.946 199.331 117.665 202.624C113.384 205.917 108.114 207.564 101.857 207.564C94.6117 207.564 88.1897 205.753 82.591 202.13C76.9924 198.178 72.217 193.238 68.265 187.31C64.6424 181.382 61.843 174.631 59.867 167.056C57.891 159.481 56.903 151.907 56.903 144.332C56.903 137.087 58.2204 128.689 60.855 119.138C61.5137 119.138 62.1724 119.303 62.831 119.632C63.4897 119.632 64.1484 119.632 64.807 119.632ZM136.437 96.414C136.437 95.7553 136.108 95.0967 135.449 94.438C133.144 95.7553 128.039 96.414 120.135 96.414C112.231 96.414 103.668 95.426 94.447 93.45C85.555 91.1447 78.3097 89.992 72.711 89.992C68.4297 89.992 65.9597 91.8033 65.301 95.426C64.313 94.1087 62.9957 92.956 61.349 91.968C60.0317 90.6507 59.373 88.6747 59.373 86.04C59.373 83.7347 59.5377 81.4293 59.867 79.124C60.5257 76.8187 60.855 74.5133 60.855 72.208C60.855 69.244 60.6904 67.5973 60.361 67.268C62.337 65.292 64.1484 62.9867 65.795 60.352L71.229 52.448C73.205 49.8133 75.3457 47.6727 77.651 46.026C79.9564 44.05 82.9204 43.062 86.543 43.062C89.8364 43.062 92.471 43.8853 94.447 45.532C96.423 46.8493 99.0577 47.508 102.351 47.508C103.668 47.508 104.821 47.508 105.809 47.508C107.126 47.1787 108.444 47.014 109.761 47.014C112.725 47.014 115.36 48.002 117.665 49.978C119.97 51.6247 122.44 52.448 125.075 52.448C126.392 52.448 127.216 52.2833 127.545 51.954C131.168 56.2353 134.79 61.0107 138.413 66.28C142.365 71.22 144.341 76.9833 144.341 83.57C144.341 85.2167 143.518 87.8513 141.871 91.474C140.224 95.0967 139.072 96.908 138.413 96.908C137.425 96.908 136.766 96.7433 136.437 96.414ZM70.735 77.148C71.723 79.124 72.217 81.4293 72.217 84.064C72.8757 83.7347 76.4984 83.57 83.085 83.57C90.001 83.57 96.0937 83.57 101.363 83.57C106.962 83.57 111.078 83.7347 113.713 84.064C114.042 83.7347 114.207 83.4053 114.207 83.076C113.878 83.076 113.713 82.9113 113.713 82.582V81.594C117.994 82.582 120.3 83.2407 120.629 83.57C120.629 82.2527 121.782 81.594 124.087 81.594C125.404 81.594 126.886 81.7587 128.533 82.088C130.509 82.088 132.32 82.088 133.967 82.088C133.967 73.5253 132.32 66.6093 129.027 61.34C125.734 56.0707 118.982 53.436 108.773 53.436C104.162 53.436 99.5517 53.93 94.941 54.918C90.3304 55.5767 86.049 56.7293 82.097 58.376C78.4744 59.6933 75.3457 61.5047 72.711 63.81C70.4057 65.786 69.253 68.0913 69.253 70.726C69.253 72.702 69.747 74.8427 70.735 77.148Z" fill="#FFFF00"/>
          </svg> */}
          <svg
            id="img"
            width="196"
            height="261"
            viewBox="0 0 196 261"
            fill="transparent"
          >
            <mask
              id="path-1-outside-1_13_2"
              maskUnits="userSpaceOnUse"
              x="0.0930176"
              y="0.577988"
              width="200"
              height="264"
              fill=""
            >
              <rect
                fill="white"
                x="0.0930176"
                y="0.577988"
                width="200"
                height="264"
              />
              <path d="M142.389 134.97C134.156 133.982 125.758 133.323 117.195 132.994L114.725 133.982C113.078 133.982 111.267 133.653 109.291 132.994C107.315 132.335 105.504 132.006 103.857 132.006C101.552 132.006 99.0817 132.171 96.447 132.5C93.8124 132.829 91.1777 132.994 88.543 132.994C85.579 132.994 82.4504 132.665 79.157 132.006C76.193 131.347 73.0644 130.195 69.771 128.548C71.747 135.135 73.0644 142.38 73.723 150.284C74.3817 157.859 75.5344 165.104 77.181 172.02C78.8277 178.936 81.4624 184.699 85.085 189.31C89.037 193.921 95.2944 196.226 103.857 196.226C115.054 196.226 122.958 192.274 127.569 184.37C132.18 176.137 134.814 166.751 135.473 156.212C139.754 156.871 144.53 157.365 149.799 157.694C155.068 158.023 160.008 158.188 164.619 158.188C169.559 158.188 173.84 158.188 177.463 158.188C181.415 158.188 184.214 158.188 185.861 158.188C188.825 158.188 190.966 157.529 192.283 156.212C192.283 161.152 192.283 166.586 192.283 172.514C192.612 178.113 192.777 183.711 192.777 189.31C192.777 197.873 192.118 206.271 190.801 214.504C189.813 222.408 187.343 228.665 183.391 233.276C179.768 237.228 175.158 241.015 169.559 244.638C163.96 247.931 157.538 251.06 150.293 254.024C143.048 256.659 135.308 258.635 127.075 259.952C119.171 261.599 111.267 262.422 103.363 262.422C86.2377 262.422 71.253 259.458 58.409 253.53C45.8944 247.602 35.3557 239.533 26.793 229.324C18.5597 219.115 12.3024 207.259 8.02103 193.756C4.06903 179.924 2.09302 165.269 2.09302 149.79V114.716C2.09302 95.6147 4.06903 77.9953 8.02103 61.858C11.973 45.7207 19.0537 32.712 29.263 22.832C31.5684 20.5267 35.191 18.2213 40.131 15.916C45.071 13.2813 50.8344 10.976 57.421 9C64.337 7.02399 71.9117 5.54199 80.145 4.554C88.3784 3.23666 96.941 2.57799 105.833 2.57799C114.396 2.57799 122.794 3.566 131.027 5.54199C139.59 7.18866 147.329 9.65866 154.245 12.952C161.49 15.916 167.583 19.5387 172.523 23.82C177.463 28.1013 180.756 32.712 182.403 37.652C184.05 41.2746 185.038 45.2267 185.367 49.508C186.026 53.7893 187.837 56.7533 190.801 58.4C192.118 65.9747 193.436 74.0433 194.753 82.606C196.4 91.1687 197.223 99.7313 197.223 108.294C197.223 116.857 196.564 123.279 195.247 127.56C191.624 131.183 187.343 133.488 182.403 134.476C177.463 135.464 171.864 135.958 165.607 135.958C158.362 135.958 150.622 135.629 142.389 134.97ZM66.807 121.632C68.4537 121.632 70.1004 120.15 71.747 117.186C73.3937 118.833 75.205 119.656 77.181 119.656C79.157 119.656 81.133 119.491 83.109 119.162C85.4144 118.503 87.8844 118.174 90.519 118.174C95.1297 118.174 99.5757 118.833 103.857 120.15C108.138 121.138 112.584 121.961 117.195 122.62C121.806 123.279 129.216 123.773 139.425 124.102C149.964 124.431 163.302 125.09 179.439 126.078C183.391 126.078 185.861 125.913 186.849 125.584C188.496 120.973 189.484 116.363 189.813 111.752C190.472 106.812 190.801 102.037 190.801 97.426C190.801 58.2353 178.451 32.3827 153.751 19.868C148.811 17.2333 141.566 15.422 132.015 14.434C122.464 13.1167 111.926 12.458 100.399 12.458C91.1777 12.458 80.9684 13.446 69.771 15.422C58.903 17.0687 48.529 21.35 38.649 28.266C29.0984 34.8527 21.0297 44.7326 14.443 57.906C7.85636 70.75 4.56302 88.3693 4.56302 110.764C4.56302 128.877 6.20969 146.003 9.50302 162.14C13.1257 178.277 18.0657 192.603 24.323 205.118C30.5804 217.633 37.8257 227.842 46.059 235.746C54.2924 243.321 63.1843 247.602 72.735 248.59C79.3217 249.249 85.4144 249.743 91.013 250.072C96.941 250.072 102.704 250.072 108.303 250.072C117.854 250.072 125.593 249.907 131.521 249.578C137.778 249.249 143.048 248.425 147.329 247.108C151.61 245.461 155.398 243.321 158.691 240.686C161.984 237.722 165.607 233.77 169.559 228.83C181.086 211.375 186.849 189.145 186.849 162.14C183.556 161.811 180.592 161.646 177.957 161.646C175.322 161.317 172.688 161.152 170.053 161.152H152.269C150.952 161.152 149.634 161.152 148.317 161.152C147.329 161.152 146.012 160.987 144.365 160.658C142.389 165.269 140.248 170.538 137.943 176.466C135.967 182.065 133.497 187.334 130.533 192.274C127.569 197.214 123.946 201.331 119.665 204.624C115.384 207.917 110.114 209.564 103.857 209.564C96.6117 209.564 90.1897 207.753 84.591 204.13C78.9924 200.178 74.217 195.238 70.265 189.31C66.6424 183.382 63.843 176.631 61.867 169.056C59.891 161.481 58.903 153.907 58.903 146.332C58.903 139.087 60.2203 130.689 62.855 121.138C63.5137 121.138 64.1724 121.303 64.831 121.632C65.4897 121.632 66.1484 121.632 66.807 121.632ZM138.437 98.414C138.437 97.7553 138.108 97.0967 137.449 96.438C135.144 97.7553 130.039 98.414 122.135 98.414C114.231 98.414 105.668 97.426 96.447 95.45C87.555 93.1446 80.3097 91.992 74.711 91.992C70.4297 91.992 67.9597 93.8033 67.301 97.426C66.313 96.1087 64.9957 94.956 63.349 93.968C62.0317 92.6507 61.373 90.6747 61.373 88.04C61.373 85.7347 61.5377 83.4293 61.867 81.124C62.5257 78.8187 62.855 76.5133 62.855 74.208C62.855 71.244 62.6904 69.5973 62.361 69.268C64.337 67.292 66.1483 64.9867 67.795 62.352L73.229 54.448C75.205 51.8133 77.3457 49.6726 79.651 48.026C81.9564 46.05 84.9204 45.062 88.543 45.062C91.8364 45.062 94.471 45.8853 96.447 47.532C98.423 48.8493 101.058 49.508 104.351 49.508C105.668 49.508 106.821 49.508 107.809 49.508C109.126 49.1787 110.444 49.014 111.761 49.014C114.725 49.014 117.36 50.002 119.665 51.978C121.97 53.6247 124.44 54.448 127.075 54.448C128.392 54.448 129.216 54.2833 129.545 53.954C133.168 58.2353 136.79 63.0107 140.413 68.28C144.365 73.22 146.341 78.9833 146.341 85.57C146.341 87.2167 145.518 89.8513 143.871 93.474C142.224 97.0967 141.072 98.908 140.413 98.908C139.425 98.908 138.766 98.7433 138.437 98.414ZM72.735 79.148C73.723 81.124 74.217 83.4293 74.217 86.064C74.8757 85.7347 78.4984 85.57 85.085 85.57C92.001 85.57 98.0937 85.57 103.363 85.57C108.962 85.57 113.078 85.7347 115.713 86.064C116.042 85.7347 116.207 85.4053 116.207 85.076C115.878 85.076 115.713 84.9113 115.713 84.582V83.594C119.994 84.582 122.3 85.2406 122.629 85.57C122.629 84.2527 123.782 83.594 126.087 83.594C127.404 83.594 128.886 83.7587 130.533 84.088C132.509 84.088 134.32 84.088 135.967 84.088C135.967 75.5253 134.32 68.6093 131.027 63.34C127.734 58.0707 120.982 55.436 110.773 55.436C106.162 55.436 101.552 55.93 96.941 56.918C92.3304 57.5767 88.049 58.7293 84.097 60.376C80.4744 61.6933 77.3457 63.5047 74.711 65.81C72.4057 67.786 71.253 70.0913 71.253 72.726C71.253 74.702 71.747 76.8426 72.735 79.148Z" />
            </mask>
            <path
              d="M142.389 134.97C134.156 133.982 125.758 133.323 117.195 132.994L114.725 133.982C113.078 133.982 111.267 133.653 109.291 132.994C107.315 132.335 105.504 132.006 103.857 132.006C101.552 132.006 99.0817 132.171 96.447 132.5C93.8124 132.829 91.1777 132.994 88.543 132.994C85.579 132.994 82.4504 132.665 79.157 132.006C76.193 131.347 73.0644 130.195 69.771 128.548C71.747 135.135 73.0644 142.38 73.723 150.284C74.3817 157.859 75.5344 165.104 77.181 172.02C78.8277 178.936 81.4624 184.699 85.085 189.31C89.037 193.921 95.2944 196.226 103.857 196.226C115.054 196.226 122.958 192.274 127.569 184.37C132.18 176.137 134.814 166.751 135.473 156.212C139.754 156.871 144.53 157.365 149.799 157.694C155.068 158.023 160.008 158.188 164.619 158.188C169.559 158.188 173.84 158.188 177.463 158.188C181.415 158.188 184.214 158.188 185.861 158.188C188.825 158.188 190.966 157.529 192.283 156.212C192.283 161.152 192.283 166.586 192.283 172.514C192.612 178.113 192.777 183.711 192.777 189.31C192.777 197.873 192.118 206.271 190.801 214.504C189.813 222.408 187.343 228.665 183.391 233.276C179.768 237.228 175.158 241.015 169.559 244.638C163.96 247.931 157.538 251.06 150.293 254.024C143.048 256.659 135.308 258.635 127.075 259.952C119.171 261.599 111.267 262.422 103.363 262.422C86.2377 262.422 71.253 259.458 58.409 253.53C45.8944 247.602 35.3557 239.533 26.793 229.324C18.5597 219.115 12.3024 207.259 8.02103 193.756C4.06903 179.924 2.09302 165.269 2.09302 149.79V114.716C2.09302 95.6147 4.06903 77.9953 8.02103 61.858C11.973 45.7207 19.0537 32.712 29.263 22.832C31.5684 20.5267 35.191 18.2213 40.131 15.916C45.071 13.2813 50.8344 10.976 57.421 9C64.337 7.02399 71.9117 5.54199 80.145 4.554C88.3784 3.23666 96.941 2.57799 105.833 2.57799C114.396 2.57799 122.794 3.566 131.027 5.54199C139.59 7.18866 147.329 9.65866 154.245 12.952C161.49 15.916 167.583 19.5387 172.523 23.82C177.463 28.1013 180.756 32.712 182.403 37.652C184.05 41.2746 185.038 45.2267 185.367 49.508C186.026 53.7893 187.837 56.7533 190.801 58.4C192.118 65.9747 193.436 74.0433 194.753 82.606C196.4 91.1687 197.223 99.7313 197.223 108.294C197.223 116.857 196.564 123.279 195.247 127.56C191.624 131.183 187.343 133.488 182.403 134.476C177.463 135.464 171.864 135.958 165.607 135.958C158.362 135.958 150.622 135.629 142.389 134.97ZM66.807 121.632C68.4537 121.632 70.1004 120.15 71.747 117.186C73.3937 118.833 75.205 119.656 77.181 119.656C79.157 119.656 81.133 119.491 83.109 119.162C85.4144 118.503 87.8844 118.174 90.519 118.174C95.1297 118.174 99.5757 118.833 103.857 120.15C108.138 121.138 112.584 121.961 117.195 122.62C121.806 123.279 129.216 123.773 139.425 124.102C149.964 124.431 163.302 125.09 179.439 126.078C183.391 126.078 185.861 125.913 186.849 125.584C188.496 120.973 189.484 116.363 189.813 111.752C190.472 106.812 190.801 102.037 190.801 97.426C190.801 58.2353 178.451 32.3827 153.751 19.868C148.811 17.2333 141.566 15.422 132.015 14.434C122.464 13.1167 111.926 12.458 100.399 12.458C91.1777 12.458 80.9684 13.446 69.771 15.422C58.903 17.0687 48.529 21.35 38.649 28.266C29.0984 34.8527 21.0297 44.7326 14.443 57.906C7.85636 70.75 4.56302 88.3693 4.56302 110.764C4.56302 128.877 6.20969 146.003 9.50302 162.14C13.1257 178.277 18.0657 192.603 24.323 205.118C30.5804 217.633 37.8257 227.842 46.059 235.746C54.2924 243.321 63.1843 247.602 72.735 248.59C79.3217 249.249 85.4144 249.743 91.013 250.072C96.941 250.072 102.704 250.072 108.303 250.072C117.854 250.072 125.593 249.907 131.521 249.578C137.778 249.249 143.048 248.425 147.329 247.108C151.61 245.461 155.398 243.321 158.691 240.686C161.984 237.722 165.607 233.77 169.559 228.83C181.086 211.375 186.849 189.145 186.849 162.14C183.556 161.811 180.592 161.646 177.957 161.646C175.322 161.317 172.688 161.152 170.053 161.152H152.269C150.952 161.152 149.634 161.152 148.317 161.152C147.329 161.152 146.012 160.987 144.365 160.658C142.389 165.269 140.248 170.538 137.943 176.466C135.967 182.065 133.497 187.334 130.533 192.274C127.569 197.214 123.946 201.331 119.665 204.624C115.384 207.917 110.114 209.564 103.857 209.564C96.6117 209.564 90.1897 207.753 84.591 204.13C78.9924 200.178 74.217 195.238 70.265 189.31C66.6424 183.382 63.843 176.631 61.867 169.056C59.891 161.481 58.903 153.907 58.903 146.332C58.903 139.087 60.2203 130.689 62.855 121.138C63.5137 121.138 64.1724 121.303 64.831 121.632C65.4897 121.632 66.1484 121.632 66.807 121.632ZM138.437 98.414C138.437 97.7553 138.108 97.0967 137.449 96.438C135.144 97.7553 130.039 98.414 122.135 98.414C114.231 98.414 105.668 97.426 96.447 95.45C87.555 93.1446 80.3097 91.992 74.711 91.992C70.4297 91.992 67.9597 93.8033 67.301 97.426C66.313 96.1087 64.9957 94.956 63.349 93.968C62.0317 92.6507 61.373 90.6747 61.373 88.04C61.373 85.7347 61.5377 83.4293 61.867 81.124C62.5257 78.8187 62.855 76.5133 62.855 74.208C62.855 71.244 62.6904 69.5973 62.361 69.268C64.337 67.292 66.1483 64.9867 67.795 62.352L73.229 54.448C75.205 51.8133 77.3457 49.6726 79.651 48.026C81.9564 46.05 84.9204 45.062 88.543 45.062C91.8364 45.062 94.471 45.8853 96.447 47.532C98.423 48.8493 101.058 49.508 104.351 49.508C105.668 49.508 106.821 49.508 107.809 49.508C109.126 49.1787 110.444 49.014 111.761 49.014C114.725 49.014 117.36 50.002 119.665 51.978C121.97 53.6247 124.44 54.448 127.075 54.448C128.392 54.448 129.216 54.2833 129.545 53.954C133.168 58.2353 136.79 63.0107 140.413 68.28C144.365 73.22 146.341 78.9833 146.341 85.57C146.341 87.2167 145.518 89.8513 143.871 93.474C142.224 97.0967 141.072 98.908 140.413 98.908C139.425 98.908 138.766 98.7433 138.437 98.414ZM72.735 79.148C73.723 81.124 74.217 83.4293 74.217 86.064C74.8757 85.7347 78.4984 85.57 85.085 85.57C92.001 85.57 98.0937 85.57 103.363 85.57C108.962 85.57 113.078 85.7347 115.713 86.064C116.042 85.7347 116.207 85.4053 116.207 85.076C115.878 85.076 115.713 84.9113 115.713 84.582V83.594C119.994 84.582 122.3 85.2406 122.629 85.57C122.629 84.2527 123.782 83.594 126.087 83.594C127.404 83.594 128.886 83.7587 130.533 84.088C132.509 84.088 134.32 84.088 135.967 84.088C135.967 75.5253 134.32 68.6093 131.027 63.34C127.734 58.0707 120.982 55.436 110.773 55.436C106.162 55.436 101.552 55.93 96.941 56.918C92.3304 57.5767 88.049 58.7293 84.097 60.376C80.4744 61.6933 77.3457 63.5047 74.711 65.81C72.4057 67.786 71.253 70.0913 71.253 72.726C71.253 74.702 71.747 76.8426 72.735 79.148Z"
              stroke="#FFFF00"
              stroke-width="4"
              mask="url(#path-1-outside-1_13_2)"
            />
          </svg>
          <h3>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                's',
                'h',
                'a',
                'n',
                ' ',
                'p',
                'o',
                'k',
                'h',
                'r',
                'e',
                'l',
              ]}
              idx={15}
            />
          </h3>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Home
