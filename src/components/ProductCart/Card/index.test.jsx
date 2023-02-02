import { shallow, configure  } from "enzyme";
import CardProductCart from "./index";
import Adapter from 'enzyme-adapter-preact-pure';

configure({ adapter: new Adapter() });

test("card component", () => {
    
  const component = shallow(<CardProductCart
    // data={""}
    // onDecrementItem={() => {}}
    // onIncrementItem={() => {}}
    // theme={{
    //   color: { lighGray: "#E5E5E5", dark: "#000000", light: "#ffffff" },
    // }}
  />    
  );
  expect(component).toMatchSnapshot();
});


