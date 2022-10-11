import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
import Divider from "../common/divider";

const ArrayComponent = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        console.log(index);
        const config = { ...child.props, title: index + 1 };
        return React.cloneElement(child, config);
    });
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Divider />
            <ArrayComponent>
                <Component />
                <Component />
                <Component />
            </ArrayComponent>
        </CollapseWrapper>
    );
};

const Component = ({ title }) => {
    return <div> Компонент Списка {title}</div>;
};
ChildrenExercise.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
Component.propTypes = {
    title: PropTypes.number
};
export default ChildrenExercise;
