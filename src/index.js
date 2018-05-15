import PreactRouter, { subscribers } from "preact-router";
import { Component } from "preact";

export { Link, route } from "preact-router";

export const ssr = (url, { children, nodeName }) =>
  new nodeName({ url, children });

class Router extends Component {
  constructor(props) {
    super(props);

    this.router = new PreactRouter(props);
    this.state = {
      route: undefined
    };

    this.runRouter = this.runRouter.bind(this);
    this.runRouterWithSetState = this.runRouterWithSetState.bind(this);

    if (props.url) {
      this.router.componentWillMount();
      return this.runRouter();
    }
  }

  runRouter() {
    const route = this.router.render(this.props, this.router.state);
    if (!route) {
      return Promise.resolve();
    }
    return Promise.resolve(route.nodeName).then(nodeName => ({
      ...route,
      nodeName
    }));
  }
  runRouterWithSetState() {
    return this.runRouter().then(route => this.setState({ route }));
  }

  componentDidMount() {
    subscribers.push(this.runRouterWithSetState);
    this.runRouterWithSetState();
  }

  componentDidUpdate(oldProps) {
    if (this.props.children !== oldProps.children) {
      this.runRouterWithSetState();
    }
  }

  componentWillMount() {
    this.router.componentWillMount();
  }
  componentWillUnmount() {
    subscribers.splice(subscribers.indexOf(this.runRouterWithSetState), 1);
    this.router.componentWillUnmount();
  }
  render() {
    return this.state.route;
  }
}

export default Router;
