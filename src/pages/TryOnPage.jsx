import React, { useEffect, useRef } from "react";

import { Row, Col } from "antd";
import { Header, Footer, Body, TabsSelect, PictureWall } from "../components";
//import captureWebsite from 'capture-website';
import { IntializeThreejs, IntializeEngine } from "../_common/render";

export const TryOnPage = () => {
  const tryon = useRef(null);
  const handleCapture = async () => {
    //await captureWebsite.file('http://localhost:3000/ModelManagerPage', 'screenshot.png');
    alert("take photo");
  };

  useEffect(() => {
    init();
  }, []);
  async function init() {
    tryon.current.srcObject = null;
    await navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          facingMode: "user",
        },
      })
      .then((stream) => {
        tryon.current.srcObject = stream;
      });

    tryon.current.oncanplay = (e) => {
      tryon.current.play();
    };
    tryon.current.onloadeddata = (e) => {
      IntializeThreejs("MX-1");
      IntializeEngine();
    };
  }

  return (
    <>
      <Header />
      <Body>
        <Row className="container" justify="space-between">
          <Col span={8}>
            <TabsSelect managerMode={false} />
          </Col>
          <Col span={11}>
            <div className="try-on-zone">
              <div id="threejsContainer">
                <video ref={tryon} id="tryon-video"></video>
              </div>
            </div>
          </Col>
          <Col offset={1} span={3}>
            <div>
              {/* <DetailModel name="Glassed" descripte="Kinh cho nguoi mu" color="Blue"/> */}
              <button onClick={handleCapture} className="primary btn">
                Take photo
              </button>
              <PictureWall />
            </div>
          </Col>
        </Row>
      </Body>
      <Footer />
    </>
  );
};
