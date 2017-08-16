import React, { Component } from "react";
import PropTypes from "prop-types";
import RepoGrid from "./RepoGrid";
import { fetchPopularRepos } from "../util/api";

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
        selectedLanguage: "All",
        repos: null
      };
    }
    //this.updateLanguage = this.updateLanguage.bind(this);
  }
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }
  updateLanguage = lang => {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
      };
    });
    fetchPopularRepos(this.state.selectedLanguage).then(repos => {
      this.setState(() => {
        return { repos: repos };
      });
    });
  };

  render() {
    return (
      <div>
        <SelectedLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos
          ? <p>...loading...</p>
          : <RepoGrid repos={this.state.repos} />}
      </div>
    );
  }
}

export default Popular;
