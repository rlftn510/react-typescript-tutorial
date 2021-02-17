"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("@testing-library/react");
const App_1 = require("./App");
test('renders learn react link', () => {
    react_1.render(React.createElement(App_1.default, null));
    const linkElement = react_1.screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
//# sourceMappingURL=App.test.js.map