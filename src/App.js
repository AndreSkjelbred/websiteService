import Home from "./routes/home/home.component";
import Contact from "./routes/contact/contact.component";
import HomeNorwegian from "./routes/homeNorwegian/homeNorwegian.component";
import ContactNorwegian from "./routes/contactNorwegian/contactNorwegian.component";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "./store/redux/language";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const allSections = document.querySelectorAll(".hide");
    [...allSections].map((section) =>
      [...section.children].map((child) => {
        if (child.classList.contains("left-hide")) {
          return child.classList.add("section--hidden-left");
        }

        if (child.classList.contains("right-hide")) {
          return child.classList.add("section--hidden-right");
        }

        if (child.classList.contains("top-hide")) {
          return child.classList.add("section--hidden-top");
        }

        if (child.classList.contains("bottom-hide")) {
          return child.classList.add("section--hidden-bottom");
        }
        return "";
      })
    );

    const revealSection = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      if (
        entry.target.classList.contains("services__grid") ||
        entry.target.classList.contains("portfolio__websites") ||
        entry.target.classList.contains("about")
      ) {
        [...entry.target.children].map((child) => {
          child.classList.remove("section--hidden-left");
          child.classList.remove("section--hidden-right");
          child.classList.remove("section--hidden-top");
          child.classList.remove("section--hidden-bottom");
        });
      }

      entry.target.classList.remove("section--hidden-left");
      entry.target.classList.remove("section--hidden-right");
      entry.target.classList.remove("section--hidden-top");
      entry.target.classList.remove("section--hidden-bottom");
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    allSections.forEach(function (section) {
      sectionObserver.observe(section);
      /*  section.classList.add("section--hidden"); */
    });
  }, []);

  const { lang } = useSelector((state) => state.language);

  useEffect(() => {
    // Determine user's language preference here and update the state with setLanguage
    const userLanguage = navigator.language.substring(0, 2);
    console.log(navigator.language);
    dispatch(changeLang(userLanguage === "nb" ? "no" : "en"));
  }, []);

  const HomeComponent = lang === "no" ? HomeNorwegian : Home;
  const ContactComponent = lang === "no" ? ContactNorwegian : Contact;

  return (
    <Routes>
      <Route path='/' element={<HomeComponent />} />
      <Route path='/contact' element={<ContactComponent />} />
    </Routes>
  );
}

export default App;
