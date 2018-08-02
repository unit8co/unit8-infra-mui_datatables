import React from "react";
import { spy, stub } from "sinon";
import { mount, shallow } from "enzyme";
import { assert, expect, should } from "chai";
import BookmarkBorderIcon from "material-ui-icons/BookmarkBorder";
import MUIDataTableToolbarSelect from "../src/MUIDataTableToolbarSelect";

describe("<MUIDataTableSelectCell />", function() {
  before(() => {});

  it("should render table toolbar select", () => {
    const onRowsCopy = () => {};
    const mountWrapper = mount(<MUIDataTableToolbarSelect selectedRows={[1]} onRowsCopy={onRowsCopy} />);

    const actualResult = mountWrapper.find(BookmarkBorderIcon);
    assert.strictEqual(actualResult.length, 1);
  });
});
