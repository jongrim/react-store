import React, { Component } from 'react';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
    this.handleTabActivate = this.handleTabActivate.bind(this);
  }

  handleTabActivate(i) {
    this.setState({
      activeIndex: i
    });
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      if (child.type === TabPanels) {
        return React.cloneElement(child, {
          activeIndex: this.state.activeIndex
        });
      } else if (child.type === TabList) {
        return React.cloneElement(child, {
          activeIndex: this.state.activeIndex,
          onActivateTab: this.handleTabActivate
        });
      } else {
        return child;
      }
    });
    return <div>{children}</div>;
  }
}

class TabList extends Component {
  render() {
    const { activeIndex } = this.props;
    const children = React.Children.map(this.props.children, (child, i) => {
      return React.cloneElement(child, {
        isActive: i === activeIndex,
        onActivate: () => {
          this.props.onActivateTab(i);
        }
      });
    });
    return <div>{children}</div>;
  }
}

class Tab extends Component {
  render() {
    const { isDisabled, isActive } = this.props;
    return (
      <div onClick={isDisabled ? null : this.props.onActivate}>
        {this.props.children}
      </div>
    );
  }
}

class TabPanels extends Component {
  render() {
    const { activeIndex } = this.props;
    return <div>{this.props.children[activeIndex]}</div>;
  }
}

class TabPanel extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export { Tabs, TabList, Tab, TabPanels, TabPanel };
