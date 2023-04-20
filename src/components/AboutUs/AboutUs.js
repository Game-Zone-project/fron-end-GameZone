
import './AboutUs.css'
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
export default function AboutUs(){
    return(
        <>
        <div id="secOne">
        <img src="https://th.bing.com/th/id/R.6930fda62256ff6de0e7677315fbff7c?rik=6jQCgktHzbIuvw&riu=http%3a%2f%2fwww.clicketcloud.com%2ffiles%2fowentis%2fcontenus%2fSite+en+ANGLAIS+-+Owentis%2fbannieres+des+pages+-+Anglais%2fwe+are+we.jpg&ehk=wFHrn7pRtTXihVrbp7f6%2fpJtoYRudtgmIfD54hY%2f1rY%3d&risl=&pid=ImgRaw&r=0" />
        </div>
        {/* <div id="secContainer">
            <section>
                <img src="https://th.bing.com/th/id/R.6df6cd98b7510525d5c2c50e9e528db2?rik=G3lD9h3yaMQrOQ&pid=ImgRaw&r=0"/>
                <h2>Walaa</h2>
                <p>Background</p>
                <p>Campus/Amman/Irbid</p>
            </section>

            <section>
                <img src="https://365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png"/>
                <h2>Mohammad</h2>
                <p>kground</p>
               Bac <p>Campus/Amman/Irbid</p>
                </section>

            <section>
                <img src="https://365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png"/>
                <h2>Husam</h2>
                <p>Background</p>
                <p>Campus/Amman/Irbid</p>
            </section>

            <section>
                <img src="https://365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png"/>
                <h2>Asem</h2>
                <p>Background</p>
                <p>Campus/Amman/Irbid</p>
                </section>

            <section>
                <img src="https://365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png"/>
                <h2>Sakher</h2>
                <p>Background</p>
                <p>Campus/Amman/Irbid</p>
            </section>
        </div> */}
          <Container>
      <Row>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            We are a team of experienced developers who specialize in building
            high-quality web applications. Our goal is to help businesses grow
            and succeed in the digital world.
          </p>
          <p>
            Our expertise includes front-end and back-end development, as well
            as database design and management. We use the latest technologies to
            create fast, responsive, and secure web applications that meet the
            unique needs of our clients.
          </p>
        </Col>
        <Col md={6}>
          <Row>
            <Col md={6}>
              <Image
                src="src/assets/walaa.jpg"
                alt="Participant 1"
                fluid
                rounded
              />
              <h3>Participant 1</h3>
              <p>Developer</p>
            </Col>
            <Col md={6}>
              <Image
                src="/participant2.jpg"
                alt="Participant 2"
                fluid
                rounded
              />
              <h3>Participant 2</h3>
              <p>Designer</p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Image
                src="/participant3.jpg"
                alt="Participant 3"
                fluid
                rounded
              />
              <h3>Participant 3</h3>
              <p>Project Manager</p>
            </Col>
            <Col md={6}>
              <Image
                src="/participant4.jpg"
                alt="Participant 4"
                fluid
                rounded
              />
              <h3>Participant 4</h3>
              <p>QA Engineer</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  
        </>
    );
}