
import React, { useState } from 'react';
import {
  Image, Modal,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.css';
import heart from '../assets/images/heart.svg';
import dwnl from '../assets/images/download.svg';

const PhotoCards = ({
  photo, username, profileImage, description, imgDownload, altDescription, likes,
}) => {
  const [showModal, setModal] = useState(false);
  return (
    <>
      <div className="box">
        <img src={photo} key={photo} alt="collection" className="card-image" onClick={() => setModal(true)} onKeyPress={() => setModal(true)} />
      </div>
      <div id="modal-div">
        <Modal size="lg" show={showModal} onHide={() => setModal(false)}>
          <Modal.Header closeButton />
          <Modal.Body id="pic-info" className="modal-body">
            <div className="body-img">
              <Image src={photo} fluid className="container-img" />
            </div>
            <div className="body-info">
              <h2 className="title-photo">
                {altDescription}
                {' '}
              </h2>
              <p>{description}</p>

              <p className="modal-body">
                <img src={heart} key={heart} alt="heart icon" className="logo-heart" />
                {likes}

                <a href={imgDownload} title="descargar imagen">
                  <img alt="descargar" src={dwnl} className="logo-dwn" />
                </a>

              </p>
              <footer className="footer">


                Subido por
                {' '}
                <Image src={profileImage} fluid className="profile_image" />


                {username}
              </footer>
            </div>

          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
PhotoCards.propTypes = {
  photo: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  imgDownload: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default PhotoCards;
