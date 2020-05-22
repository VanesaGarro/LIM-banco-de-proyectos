import React, { useState } from 'react';
import {
  Image, Modal,
} from 'react-bootstrap';
import DownloadLink from 'react-download-link';
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.css';

const PhotoCards = ({
  photo, username, profile_image, description, imgDownload, alt_description, likes,
}) => {
  const [showModal, setModal] = useState(false);
  return (
    <>
      <div className="box">
        <img src={photo} key={photo} alt="collection" className="card-image" onClick={() => setModal(true)} />
      </div>
      <div id="modal-div">
        <Modal size="lg" show={showModal} onHide={() => setModal(false)}>
          <Modal.Header closeButton />
          <Modal.Body id="pic-info" className="modal-body">
            <div className="body-img">
              <Image src={photo} fluid className="container-img" />
            </div>
            <div className="body-info">
              <h4>
                {description}
                {' '}
              </h4>
              <h6>{alt_description}</h6>
              <p>
                Subido por
                {' '}

                <Image src={profile_image} fluid className="profile_image" />

                {username}
              </p>
              <p>
                {' '}
                likes:
                {likes}
              </p>
            </div>
            <DownloadLink
              label="Save"
              filename="imagen.JPEG"
              exportFile={() => imgDownload}
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export default PhotoCards;
