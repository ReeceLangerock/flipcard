import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import { expect } from "chai";
import App from "../App";
import Card from "./../components/Card";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
describe("App component testing", function() {
  const wrapper = shallow(<App />);
  const intro = wrapper.find("Intro");
  it("contains an intro", function() {
    expect(intro).to.have.lengthOf(1);
  });
  it("intro has h1 and correct text ", function() {
    expect(intro.find("h1")).to.have.lengthOf(1);
    expect(intro.find("h1").text()).to.equal("FlipCard");
  });
  it("contains one card container", function() {
    expect(wrapper.find("CardContainer")).to.have.lengthOf(1);
  });

  it("card container contains one or more cards", function() {
    const cardContainer = wrapper.find("CardContainer");
    expect(cardContainer.contains(<Card />)).to.equal(true);
  });
});
