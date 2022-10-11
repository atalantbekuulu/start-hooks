import React from "react";

import PropTypes from "prop-types";
import Subtitle from "../common/typografy/subtitle";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <Subtitle>
            {isAuth === "token" ? (
                <button onClick={onLogOut}> Выйти из системы </button>
            ) : (
                <button onClick={onLogin}> Войти </button>
            )}
        </Subtitle>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};
export default SimpleComponent;
