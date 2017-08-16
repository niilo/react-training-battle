import React, { Component } from "react";
import PropTypes from "prop-types";

function SelectedLanguage(props) {
  const languages = [
    "All",
    "JavaScript",
    "Ruby",
    "Java",
    "CSS",
    "Python",
    "Golang"
  ];
  return (
    <ul className="languages">
      {languages.map(language => {
        return (
          <li
            key={language}
            style={
              language === props.selectedLanguage ? { color: "#d0021b" } : null
            }
            onClick={e => props.onSelect(language)}
          >
            {language}
          </li>
        );
      })}
    </ul>
  );
}

SelectedLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

class Popular extends Component {
  constructor(props) {
    super(props);
    if ("lang" in props) {
      this.state = {
        selectedLanguage: props.lang
      };
    } else {
      this.state = {
        selectedLanguage: "All"
      };
    }
    //this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage = lang => {
    this.setState(() => {
      return {
        selectedLanguage: lang
      };
    });
  };
  render() {
    return (
      <div>
        <SelectedLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    );
  }
}

export default Popular;
