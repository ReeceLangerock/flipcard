import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import { expect } from "chai";
import Card from "../components/Card";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
describe("Card component testing", function() {
  const wrapper = shallow(<Card />);
  it("renders a CardContainer", function() {
    const container = wrapper.find("CardContainer");
    expect(wrapper.find("CardContainer")).to.have.lengthOf(1);
    expect(container.text()).to.equal("Card");
  });
  it("includes a title", function() {});
  it("includes a body", function() {});
  it("has a front side", function() {});
  it("has a back side", function() {});
});
