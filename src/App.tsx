import { useState } from "react";
import { IconContext } from "react-icons";
import { CardGrid, AsideBar, Searchbar, Title } from "./features";
import { BsInfoCircle, BsGithub } from "react-icons/bs";
import { SlClose } from "react-icons/sl";
import styles from "./App.module.scss";

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <>
      <div className={styles.panel}>
        <Title />
        <AsideBar />
        <Searchbar />
        <CardGrid />
      </div>
      <div
        className={styles.info}
        onClick={() => setIsPopupVisible(!isPopupVisible)}
      >
        <IconContext.Provider value={{ size: "100%" }}>
          {isPopupVisible ? <SlClose /> : <BsInfoCircle />}
        </IconContext.Provider>
      </div>
      {isPopupVisible && (
        <div className={styles.popup}>
          <div className={styles.modal}>
            <div className={styles.content}>
              <IconContext.Provider value={{ size: "50px" }}>
                <a
                  href="https://github.com/GabrielCornejoB/web-dev-stuff"
                  target="_blank"
                >
                  <BsGithub />
                </a>
              </IconContext.Provider>
              <h3>
                Looking for tools and resources to help you with your web
                development projects?
              </h3>
              <div className={styles.text}>
                <p>
                  Look no further than <b>WebDevStuff!</b> Our site is filled
                  with a variety of free resources that can help make your
                  development process smoother and more efficient. From icons
                  and illustrations to libraries and templates, we've got you
                  covered.
                </p>
                <p>
                  Please note that while we strive to provide only free
                  resources, some may require attribution if used commercially.
                  It's always a good idea to double-check the licensing
                  requirements before using any resource from our site. We hope
                  you find our site useful and that it helps you in your web
                  development journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
