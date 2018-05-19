import {Component} from 'preact';
import {route} from 'preact-router';

export class Redirect extends Component {
  componentWillMount() {
    route(this.props.to, true);
  }

  render() {
    return null;
  }
}