import { useContext, useRef, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { ModalContext } from "../context/ModalContext";

const Modal = () => {
  const modalRef = useRef();
  const { movieDetails: data, closeModal } = useContext(ModalContext);

  useEffect(() => {
    const handleModalClose = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleModalClose);

    return () => document.addEventListener("mousedown", handleModalClose);
  });

  return (
    <div className="modal">
      <div ref={modalRef} className="modal__container">
        <span onClick={closeModal} className="close__modal">
          X
        </span>
        <div className="modal__card">
          <div className="modal__poster--container">
            <img src={data.poster} alt="Poster" className="modal__poster" />
          </div>
          <div className="modal__content">
            <div className="modal__title--wrapper">
              <p className="modal__rate">
                <span className="modal__rate--sizeup">
                  <AiFillStar className="ratings_icon fas fa-star" />{" "}
                  {data.rating}
                </span>{" "}
                / 10
              </p>
              <h1 className="modal__title">{data.title}</h1>
              <ul className="modal__list">
                {data.genres.map((genre) => {
                  return <li className="modal__item">{genre.name}</li>;
                })}
              </ul>
              <p className="modal__releaseDate">
                Release date: {data.releaseDate}
              </p>
              <p className="modal__runtime">Duration: {data.duration} min</p>
            </div>

            <div className="modal__synopsis--wrapper">
              <h3 className="modal__overview--heading">Synopsis</h3>
              <p className="modal__overview">{data.overview}</p>

              <a
                href={data.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="modal__button"
              >
                Homepage <HiArrowNarrowRight className="modal_button-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
