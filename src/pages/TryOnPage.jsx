import React, { useEffect, useRef } from "react";

import { Row, Col } from "antd";
import { Header, Footer, Body, TabsSelect, PictureWall } from "../components";
import { IntializeThreejs, IntializeEngine } from "../_common/render";
import { useCapture } from "react-capture";
import { DetailModel } from "../components";
import { useDispatch, useSelector } from "react-redux";
const { snap } = useCapture();
export const TryOnPage = () => {
  const tryon = useRef(null);
  const virtual = useRef(null);
  const { model } = useSelector((state) => state.ModelReducer);
  const handleCapture = async () => {
    // const response = await axios.get("http://localhost:5000/Model/capture");
    // console.log(response.data);
    snap(virtual, { file: "screenshot.png" });
  };
  console.log(model);
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
            <div ref={virtual} className="try-on-zone">
              <div id="threejsContainer">
                <video ref={tryon} id="tryon-video"></video>
              </div>
            </div>
          </Col>
          <Col offset={1} span={3}>
            <div>
              <button onClick={handleCapture} className="primary btn">
                Take photo
              </button>
              {!!model.ModelName && (
                <DetailModel
                  name={model.ModelName}
                  descripte={model.ModelDescription}
                  category={model.ModelDescription}
                />
              )}
              {/* <PictureWall /> */}
            </div>
          </Col>
        </Row>
      </Body>
      <Footer />
    </>
  );
};
